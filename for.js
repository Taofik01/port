import { particleCursor} from
'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

const pc = particleCursor({
    el: document.getElementById('app'),
    gpgpusize: 512,
    colors:[0x00ff00, 0x0000ff],
    color: 0xff0000,
    coordscale: 0.5,
    noiseIntensity: 0.001,
    noiseTimeCoef: 0.00001,
    pointSize: 5,
    pointDecay: 0.0025,
    sleepradiusX: 250,
    sleepradiusY: 250,
    sleepTimeCoefX: 0.001,
    sleepTimeCoefy: 0.002
})

document.body.addEventListener('click', () => {
    pc.uniforms.uColor.value.set(Math.random() * 0xffffff)
    pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2
    pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001
    pc.uniforms.uPointSize.value = 1 + Math.random() * 10
  })
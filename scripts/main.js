//document.querySelector('h2').textContent = 'An image showing an instance of Julia-Sets.';
alert(message = 'Welcome! Click on the Image to cycle between images.');

let a = 0;
let total = 4;
let images = [
    "julia_set2_res1000_hot.png",
    "julia_set7_res1000_viridis.png",
    "mandelbrot_res5000_magma.png",
    "radialSineWaveSurface.png"
]

document.getElementById("juliaImage").addEventListener("click", () => {
    a += 1;
    if(a === total) a = 0;
    document.getElementById('juliaImage').setAttribute('src', 'images/'+images[a]);
});
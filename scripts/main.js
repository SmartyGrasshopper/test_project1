//document.querySelector('h2').textContent = 'An image showing an instance of Julia-Sets.';
//let name = prompt("What is your name?"); // just checking prompt function

let a = localStorage.getItem('imageNum');
if (!a) a = 0;   // if a is not stored earlier
else a = parseInt(a);

let total = 4;
let images = [
    "julia_set2_res1000_hot.png",
    "julia_set7_res1000_viridis.png",
    "mandelbrot_res5000_magma.png",
    "radialSineWaveSurface.png"
]

document.getElementById('juliaImage').setAttribute('src', 'images/' + images[a]);  //setting the image to last one being viewed
document.getElementById('imageLink').setAttribute('href', 'images/' + images[a]);


document.getElementById("juliaImage").addEventListener("click", () => {
    a += 1;
    if (a === total) a = 0;
    document.getElementById('juliaImage').setAttribute('src', 'images/' + images[a]);
    document.getElementById('imageLink').setAttribute('href', 'images/' + images[a]);
    localStorage.setItem('imageNum', a);
});

alert(message = 'Welcome! Click on the image to cycle between images.');
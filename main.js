// Gte elements from the DOM
const light= document.querySelector('.light');
const grid=document.querySelector('.hex-grid');
const container=document.querySelector('.container');

// Add mousemove event on the container
container.addEventListener('mousemove', moveLight);

// Create the function
function moveLight(e){
    // Get value by which the page has been scrolled
    const scrollY=document.documentElement.scrollTop;

    // Position the light on its X axis
    light.style.left=`${e.clientX}px`;
    // Position the light on its Y axis
    light.style.top=`${e.clientY+scrollY}px`;
}
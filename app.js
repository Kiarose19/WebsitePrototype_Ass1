// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides fade");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}

let dataArtBtn = document.querySelector("#dataArtBtn");
dataArtBtn.addEventListener("click", () => GoToDataArtPage());

function GoToDataArtPage(){
    window.location.replace("https://kiarose19.github.io/WebsitePrototype_Ass1/data-art.html");
}

let dataVisBtn = document.querySelector("#dataVisBtn");
dataVisBtn.addEventListener("click", () => GoToDataVisPage());

function GoToDataVisPage(){
    window.location.replace("https://kiarose19.github.io/WebsitePrototype_Ass1/data-visualisations.html");
}

let designBtn = document.querySelector("#designBtn");
designBtn.addEventListener("click", () => GoToDesignPage());

function GoToDesignPage(){
    window.location.replace("https://kiarose19.github.io/WebsitePrototype_Ass1/design.html");
}

let blogsBtn = document.querySelector("#blogsBtn");
blogsBtn.addEventListener("click", () => GoToBlogsPage());

function GoToBlogsPage(){
    window.location.replace("https://kiarose19.github.io/WebsitePrototype_Ass1/blogs.html");
}

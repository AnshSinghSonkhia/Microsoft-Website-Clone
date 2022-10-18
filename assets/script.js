const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".features");

var clicks = 0;
    

hamburger.addEventListener("click", () => {
    clicks += 1;
    console.log(clicks);

    //check if the number is even
    if(clicks % 2 == 0) {
        console.log("The number is even.");
        navMenu.classList.add("-translate-x-96");
        navMenu.classList.remove("w-full");
    }

    // if the number is odd
    else {
        console.log("The number is odd.");
        navMenu.classList.remove("-translate-x-96");
        navMenu.classList.add("w-full");
    }


    // navMenu.classList.toggle("-translate-x-96");
    // console.log('Hey there clicker!');
    
})






// Get the button
let mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
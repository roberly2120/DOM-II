import './less/index.less'

// Your code goes here!

const busImg = document.querySelector(".intro img");

const busChange = function () {
    busImg.src = "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg";
    
}
const busChangeBack = function () {
    busImg.src = "http://localhost:9000/img/fun-bus.jpg"
}
busImg.addEventListener('mouseenter', busChange);
busImg.addEventListener('mouseleave', busChangeBack);



const headerFunBus = document.querySelector(".main-navigation .logo-heading");


function keyAction (event) {
    // console.log(event.key);
 
    if(event.key === "b") {
        headerFunBus.style.color = "blue";
    }
    if(event.key === "g") {
        headerFunBus.style.color = "green";
    }
    if(event.key === "y") {
        headerFunBus.style.color = "yellow";
    }
    if(event.key === "o") {
        headerFunBus.style.color = "orange";
    }
    if(event.key === ".") {
        headerFunBus.style.color = "black";
    }
    if(event.key === "q") {
        swell(navHome);
    }
    if(event.key === "w") {
        swell(navAbout);
    }
    if(event.key === "e") {
        swell(navBlog);
    }
    if(event.key === "r") {
        swell(navContact);
    }
}
document.addEventListener("keydown", keyAction);

function busSizeUp () {
    // console.log('click');
    headerFunBus.style.fontSize = '5rem';
}
function busSizeDown () {
    // console.log('bye bye');
    headerFunBus.style.fontSize = '4rem';
}
headerFunBus.addEventListener('click', busSizeUp);
headerFunBus.addEventListener('mouseleave', busSizeDown);


const letsGoText1 = document.querySelector(".content-section .text-content p");
const letsGoText2 = document.querySelector(".content-section .text-content p:nth-of-type(2)");



letsGoText1.addEventListener('wheel', (event) => {
    letsGoText1.style.color = 'red';
});
letsGoText2.addEventListener('wheel', (event) => {
    letsGoText2.style.color = 'blue'
})
letsGoText1.addEventListener('click', (event) => {
    letsGoText1.style.color = 'black';
});
letsGoText2.addEventListener('click', (event) => {
    letsGoText2.style.color = 'black'
})

const navHome = document.querySelector("header .container nav a:nth-of-type(1)");
const navAbout = document.querySelector("header .container nav a:nth-of-type(2)");
const navBlog = document.querySelector("header .container nav a:nth-of-type(3)");
const navContact = document.querySelector("header .container nav a:nth-of-type(4)");


function swell (element) {
     
    let i = 1;  
    let j = setInterval(function(){
       i++;
       element.style.fontSize = `${i * 0.016}rem`;
       if (i == 100)  {
       clearInterval(j);
    }
    }, 15)
          
    }

function reverseSwell (element) {

    let i = 600;  
    let j = setInterval(function(){
       i--;
       element.style.fontSize = `${i * 0.01}rem`;
       if (i == 400)  {
       clearInterval(j);
    }
    }, 8)
    
}

document.addEventListener('load', reverseSwell(headerFunBus));


    
window.addEventListener('resize', (Event) => {
    navHome.style.color = 'red';
    navAbout.style.color = 'blue';
    navBlog.style.color = 'orange';
    navContact.style.color = 'purple';
});


const destinationImgSection = document.querySelector('.content-destination');
const destinationImg = document.querySelector(".content-destination img");

destinationImgSection.addEventListener('dblclick', (event) => {
    if(destinationImg.src == "http://localhost:9000/img/destination.jpg") {
        destinationImg.src = "";
    }
    else if (destinationImg.src != "http://localhost:9000/img/destination.jpg") {
        destinationImg.src = "http://localhost:9000/img/destination.jpg"
    }
})

const letsGoTitle = document.querySelector(".content-section h2");


document.addEventListener('scroll', keepGoing);

navHome.addEventListener('click', wrongSite);

function wrongSite (event) {
    event.preventDefault();
    navHome.href = "https://google.com/"
    navHome.textContent = "goTo google?";
    
}

function keepGoing () {
    letsGoTitle.textContent = 'Keep On Scrolling!'
    letsGoTitle.style.fontSize = '5rem';
}

document.addEventListener('wheel', randomColor)

function randomColor () {
    const random = Math.floor(Math.random()*16777215).toString(16);
    letsGoTitle.style.color = `#${random}`;
  }


  
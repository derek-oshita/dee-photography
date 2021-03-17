// ELEMENT VARIABLES
const home = document.getElementById('home'); 
const about = document.getElementById('about'); 
const dynamicSection = document.getElementById('dynamic-section'); 

// LINK VARIABLES
const homeLink = document.getElementById('home-link'); 
const aboutLink = document.getElementById('about-link'); 

// FUNCTIONS
const navigate = (element) => {
    element.style.visibility = 'visible'
}


// EVENT LISTENERS
// homeLink.addEventListener('click', navigate(home))

// aboutLink.addEventListener('click', function() {
//     home.style.visibility = 'hidden'; 
//     navigate(about)
// })

aboutLink.addEventListener('click', function() {
    document.getElementById('dynamic-section').innerHTML = about; 
})



/* 
DEV NOTES: 
Hard coding isn't dry but it works. 

the only issue is that the home element still takes up sapce. 

 document.getElementById("demo").innerHTML = res;
*/
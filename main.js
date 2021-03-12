// ELEMENT VARIABLES
const home = document.getElementById('home'); 
const about = document.getElementById('about'); 

// LINK VARIABLES
const homeLink = document.getElementById('home-link')
const aboutLink = document.getElementById('about-link')

// FUNCTIONS
const navigate = (element) => {
    element.style.visibility = 'visible'
}


// EVENT LISTENERS
// homeLink.addEventListener('click', navigate(home))
aboutLink.addEventListener('click', function() {
    home.style.visibility = 'hidden'
    navigate(about)
})


/* 
DEV NOTES: 
Hard coding isn't dry but it works. 

the only issue is that the home element still takes up sapce. 


*/
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
    navigate(about)
})
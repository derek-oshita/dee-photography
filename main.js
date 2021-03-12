// ELEMENT VARIABLES
const home = document.getElementById('home'); 
const about = document.getElementById('about');


// LINK VARIABLES
const homeLink = document.getElementById('home-link')


const navigate = () => {
    alert('clicked!')
}

homeLink.addEventListener('click', navigate)
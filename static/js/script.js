const projButton = document.getElementById('proj');
const certButton = document.getElementById('cert');
const langButton = document.getElementById('lang');
const carousel = document.getElementById('carousel');
const projDiv = document.getElementById('projects');
const certsDiv = document.getElementById('certifications');
const langsDiv = document.getElementById('languages');

function setCarouselState(state) {
        carousel.classList.remove('left', 'center', 'right');
        carousel.classList.add(state);
}

function setProjVisibility(show) {
        if (show) {
                projDiv.classList.add('show');
                projDiv.classList.remove('hidden');
        } else {
                projDiv.classList.add('hidden');
                projDiv.classList.remove('show');
        }
}

function setCertsVisibility(show) {
        if (show) {
                certsDiv.classList.add('show');
                certsDiv.classList.remove('hidden');
        } else {
                certsDiv.classList.add('hidden');
                certsDiv.classList.remove('show');
        }
}

function setLangsVisibility(show) {
        if (show) {
                langsDiv.classList.add('show');
                langsDiv.classList.remove('hidden');
        } else {
                langsDiv.classList.add('hidden');
                langsDiv.classList.remove('show');
        }
}

projButton.addEventListener('click', () => {
        console.log('proj');
        setCarouselState('left');
        setProjVisibility(true);
        setCertsVisibility(false);
        setLangsVisibility(false);
});
langButton.addEventListener('click', () => {
        console.log('lang');
        setCarouselState('right');
        setProjVisibility(false);
        setCertsVisibility(false);
        setLangsVisibility(true);
});
certButton.addEventListener('click', () => {
        console.log('cert');
        setCarouselState('left');
        setProjVisibility(false);
        setCertsVisibility(true);
        setLangsVisibility(false);
});





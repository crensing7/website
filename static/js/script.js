const projButton = document.getElementById('proj');
const certButton = document.getElementById('cert');
const langButton = document.getElementById('lang');
const carousel = document.getElementById('carousel');
const certsDiv = document.getElementById('certifications');
const langsDiv = document.getElementById('languages');

function setCarouselState(state) {
        carousel.classList.remove('showProj', 'showCert', 'showLang');
        carousel.classList.add(state);
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
        setCarouselState('showProj');
        setCertsVisibility(false);
        setLangsVisibility(false);
});
langButton.addEventListener('click', () => {
        console.log('lang');
        setCarouselState('showLang');
        setCertsVisibility(false);
        setLangsVisibility(true);
});
certButton.addEventListener('click', () => {
        console.log('cert');
        setCarouselState('showCert');
        setCertsVisibility(true);
        setLangsVisibility(false);
});





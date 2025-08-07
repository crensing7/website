const projButton = document.getElementById('proj');
const certButton = document.getElementById('cert');
const langButton = document.getElementById('lang');
const carousel = document.getElementById('carousel');
const projDiv = document.getElementById('projects');
const certDiv = document.getElementById('certifications');
const langDiv = document.getElementById('languages');
const github = document.getElementById('github');
const credly = document.getElementById('credly');

function setCarouselState(state) {
        return new Promise(resolve => {
                currentState = carousel.className;
                if (currentState == 'left' && state == 'left') {
                        carousel.classList.remove('left');
                        carousel.classList.add('right');

                        setTimeout(() => {
                                carousel.classList.remove('right');
                                carousel.classList.add('left');

                                resolve();
                        }, 300);
                } else {
                        carousel.classList.remove('left', 'center', 'right');
                        carousel.classList.add(state);

                        resolve();
                }
        });
}

function setProjVisibility(show) {
        if (show) {
                projDiv.classList.add('show');
                projDiv.classList.remove('hidden');
                projButton.parentElement.classList.remove('idle');
                projButton.parentElement.classList.add('highlight');
                github.classList.remove('idle');
                github.classList.add('highlight');
        } else {
                projDiv.classList.add('hidden');
                projDiv.classList.remove('show');
                projButton.parentElement.classList.remove('highlight');
                projButton.parentElement.classList.add('idle');
                github.classList.remove('highlight');
                github.classList.add('idle');
        }
}

function setCertsVisibility(show) {
        if (show) {
                certDiv.classList.add('show');
                certDiv.classList.remove('hidden');
                certButton.parentElement.classList.remove('idle');
                certButton.parentElement.classList.add('highlight');
                credly.classList.remove('idle');
                credly.classList.add('highlight');
        } else {
                certDiv.classList.add('hidden');
                certDiv.classList.remove('show');
                certButton.parentElement.classList.remove('highlight');
                certButton.parentElement.classList.add('idle');
                credly.classList.remove('highlight');
                credly.classList.add('idle');
        }
}

function setLangsVisibility(show) {
        if (show) {
                langDiv.classList.add('show');
                langDiv.classList.remove('hidden');
                langButton.parentElement.classList.remove('idle');
                langButton.parentElement.classList.add('highlight');
        } else {
                langDiv.classList.add('hidden');
                langDiv.classList.remove('show');
                langButton.parentElement.classList.remove('highlight');
                langButton.parentElement.classList.add('idle');
        }
}

projButton.addEventListener('click', async () => {
        setCertsVisibility(false);
        setLangsVisibility(false);
        setProjVisibility(false);
        await setCarouselState('left');
        setProjVisibility(true);
});

langButton.addEventListener('click', () => {
        setCarouselState('right');
        setProjVisibility(false);
        setCertsVisibility(false);
        setLangsVisibility(true);
});

certButton.addEventListener('click', async () => {
        setProjVisibility(false);
        setLangsVisibility(false);
        setCertsVisibility(false);
        await setCarouselState('left');
        setCertsVisibility(true);
});

carousel.addEventListener('click', () => {
        setCarouselState('center');
        setProjVisibility(false);
        setCertsVisibility(false);
        setLangsVisibility(false);
});







const navbarIcon = document.querySelector('.navbar-icon');
const DynamicIslandContainer = document.querySelector('.dynamic-island-container');
const Menu = gsap.timeline();
Menu.pause();
let MenuOpen = false;
let ShrinkTriggered = false;

Menu.to('.link-item', {
    opacity: 0,
    duration: 0.2,
    stagger: -0.1
});
Menu.to('.link-item', {
    scale: 0,
    height: 0,
    duration: 0
});
Menu.to('.links-container', {
    maxWidth: '0%',
    padding: 0,
    gap: 0,
    duration: 1
});
Menu.to('.dynamic-island-container', {
    width: 200,
    height: 40,
    duration: 0.5,
}, '-=1');
Menu.to('.navbar-icon', {
    scale: 0.6,
    duration: 0.5
}, '-=1');

function updateNavbarIcon(isShrunk) {
    const icon = navbarIcon.querySelector('i');
    if (isShrunk) {
        navbarIcon.classList.add('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        navbarIcon.classList.remove('active');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
}

function onScrollShrink() {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight * 0.1; // Use the viewport height directly for accuracy

    if (scrollPosition >= viewportHeight && !ShrinkTriggered) {
        Menu.play();
        updateNavbarIcon(true);
        ShrinkTriggered = true;
    } else if (scrollPosition < viewportHeight && ShrinkTriggered) {
        Menu.reverse();
        updateNavbarIcon(false);
        ShrinkTriggered = false;
    }
}

window.addEventListener('scroll', onScrollShrink);

navbarIcon.addEventListener('click', () => {
    if (!MenuOpen) {
        Menu.timeScale(1).play();
        updateNavbarIcon(false); // Fix icon toggle logic here
    } else {
        Menu.timeScale(1).reverse();
        updateNavbarIcon(true); // Fix icon toggle logic here
    }
    MenuOpen = !MenuOpen;
});

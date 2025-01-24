import gsap from 'gsap';
import './style.css';

export default function DynamicIslandNavbar(options = {}) {
    const navbarIcon = document.querySelector('.navbar-icon');
    const dynamicIslandContainer = document.querySelector('.dynamic-island-container');
    const menu = gsap.timeline({ paused: true });
    let isMenuOpen = false;
    let isShrunk = false;

    const defaultSettings = {
        shrinkTrigger: 0.1,
    };
    const settings = { ...defaultSettings, ...options };

    menu
        .to('.link-item', { opacity: 0, scale: 0, height: 0, duration: 0.2, stagger: -0.1 })
        .to('.links-container', { maxWidth: '0%', padding: 0, gap: 0, duration: 1 })
        .to(dynamicIslandContainer, { width: 200, height: 40, duration: 0.5 }, '-=1')
        .to(navbarIcon, { scale: 0.6, duration: 0.5 }, '-=1');

    const updateNavbarIcon = (isShrunk) => {
        const icon = navbarIcon.querySelector('i');
        icon.className = isShrunk ? 'fa fa-bars' : 'fa fa-times';
    };

    const onScrollShrink = () => {
        const shouldShrink = window.scrollY > window.innerHeight * settings.shrinkTrigger;
        if (shouldShrink !== isShrunk) {
            isShrunk = shouldShrink;
            menu.timeScale(shouldShrink ? 1 : -1).play();
            updateNavbarIcon(shouldShrink);
        }
    };

    navbarIcon.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        menu.timeScale(isMenuOpen ? 1 : -1).play();
        updateNavbarIcon(!isMenuOpen);
    });

    window.addEventListener('scroll', onScrollShrink);
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

// Initialize AOS (Animate on Scroll)
AOS.init();

// Register GSAP plugins
gsap.registerPlugin(Observer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Set up the carousel animation
const images = document.querySelectorAll('.carousel-image');
const radius = 542;
const progress = {
  value: 0
};
const carousel = document.querySelector('.carousel');

Observer.create({
  target: carousel,
  type: "wheel,pointer",
  onPress: (self) => {
    carousel.style.cursor = 'grabbing';
  },
  onRelease: (self) => {
    carousel.style.cursor = 'grab';
  },
  onChange: (self) => {
    gsap.killTweensOf(progress);
    const p = self.event.type === 'wheel' ? self.deltaY * -0.0005 : self.deltaX * 0.09;
    gsap.to(progress, {
      duration: 1,
      ease: 'power4.out',
      value: `+=${p}`
    });
  }
});

const animate = () => {
  images.forEach((image, index) => {
    const theta = index / images.length - progress.value;
    const x = -Math.sin(theta * Math.PI * 2) * radius;
    const y = Math.cos(theta * Math.PI * 2) * radius;
    image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta}deg)`;
    const c = Math.floor(index / images.length * 360);
    image.style.background = `hsla(${c}, 90%, 50%, .5)`;
  });
};

gsap.ticker.add(animate);

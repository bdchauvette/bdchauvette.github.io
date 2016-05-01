'use strict';

import Propeller from './propeller';
import smoothScroll from './smoothscroll';
import isInViewport from './is-in-viewport';

/**
 * Move the background image of the logo whenever the mouse moves
 */
const logoBackground = document.querySelector('.logo__background');
const propeller = new Propeller(logoBackground, {
  angle: Math.floor(Math.random() * 360),
  inertia: .95,
  onDragStart: () => document.body.classList.add('js-grabbing'),
  onDragStop: () => document.body.classList.remove('js-grabbing'),
});

/**
 * Smoothly scroll to the targeted element whenever a scroll arrow is pressed
 */
document.addEventListener('click', (e) => {
  const clickTarget = e.target;

  if (clickTarget.classList.contains('scroll-arrow')) {
    e.preventDefault();

    const scrollTarget = document.querySelector(clickTarget.hash);
    smoothScroll(scrollTarget);
    window.history.replaceState(null, window.title, clickTarget.hash)
  }
});

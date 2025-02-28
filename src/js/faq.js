import Accordion from 'accordion-js';

const list = document.querySelector('.faq-list');

new Accordion(list, {
  duration: 400,
  showMultiple: true,
  openOnInit: [],
  elementClass: 'faq-container',
  triggerClass: 'faq-btn',
  panelClass: 'faq-container-text',
  activeClass: 'is-active',
  beforeOpen: currentElement => {
    currentElement.querySelector('.faq-container-text').style.visibility =
      'visible';
  },
  beforeClose: currentElement => {
    currentElement.querySelector('.faq-container-text').style.visibility =
      'hidden';
  },
});

const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

// eslint-disable-next-line no-use-before-define
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}

ob.observe(terms.lastElementChild);

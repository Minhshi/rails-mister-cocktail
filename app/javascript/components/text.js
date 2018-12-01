import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#typed', {
    strings: ["Behind dozens of classic cocktails"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };

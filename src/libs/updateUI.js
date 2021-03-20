module.exports = {
  setHTML(selector, html) {
    document.querySelector(selector).innerHTML = html;
  },
  setText(selector, text) {
    document.querySelector(selector).innerText = text;
  },
  setImage(selector, imgSrc) {
    document.querySelector(selector).src = imgSrc;
  },
};

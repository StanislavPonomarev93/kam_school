import "./index.css";
import * as form from './form';
import * as addEventListeners from './addEventListeners';
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);


const toggleVideo = () => {
  document.getElementsByTagName("iframe").forEach((i) => {
    i.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  })
}

// const imageReplacement = () => {
//   document.querySelector('.title__image').src = './images/1_2.gif';
// }

window.onload = function () {
  document.querySelector('.spiner-container').style.display = 'none';
  // setTimeout(imageReplacement, 3000);
};


export { toggleVideo }
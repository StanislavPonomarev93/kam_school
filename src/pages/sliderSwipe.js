import { objData } from './data';

const skills = document.querySelector('.skills');
const skillsContainer = skills.querySelector('.skills__container');
const skillsTrack = skillsContainer.querySelector('.slider-track');

const skillsTechnologies = document.querySelector('.skills-technologies');
const technologiesContainer = skillsTechnologies.querySelector('.skills-technologies__slider');
const technologiesTrack = technologiesContainer.querySelector('.slider-track');
const softSkills = document.querySelector('.soft-skills');
const softSkillsSlider = softSkills.querySelector('.soft-skills__slider');
const softSkillsTrack = softSkillsSlider.querySelector('.slider-track');

const popup = document.querySelector('.popup');

const trfRegExp = /([-0-9.]+(?=px))/;

let nameLang = '';
let arg = 0;
let arg2 = 0;
let posX1 = 0;
let posX2 = 0;
let action = {};

skillsTrack.style.transform = 'translate(0px)';
technologiesTrack.style.transform = 'translate(0px)';
softSkillsTrack.style.transform = 'translate(0px)';

const getEvent = () => {
  return (event.type.search('touch') !== -1) ? event.touches[0] : event;
}

const swipeStart = (slider, sliderList, sliderTrack, sliderRight, sliderLeft, slide, sliderInput) => {
  let evt = getEvent();
  posX1 = evt.clientX;
  arg = evt.clientX;
  action['act'] = () => swipeAction(slider, sliderList, sliderTrack, sliderRight, sliderLeft, sliderInput);
  action['end'] = () => swipeEnd(slider, sliderTrack, slide);
  document.addEventListener('touchmove', action['act']);
  document.addEventListener('mousemove', action['act']);
  document.addEventListener('touchend', action['end']);
  document.addEventListener('mouseup', action['end']);
  slide.style.cursor = 'grabbing';
}

const swipeAction = (slider, sliderList, sliderTrack, sliderRight, sliderLeft, sliderInput) => {
  let evt = getEvent();
  let transform = +sliderTrack.style.transform.match(trfRegExp)[0];
  let slidersV = (sliderTrack.offsetWidth - slider.offsetWidth) * -1;
  posX2 = posX1 - evt.clientX;
  posX1 = evt.clientX;
  arg2 = evt.clientX;
  sliderInput.value = `${(transform - posX2) * 100 / slidersV}`;
  if (transform >= 0) {
    sliderRight.classList.remove('color-right');
  } else if (transform <= slidersV) {
    sliderLeft.classList.remove('color-left');
  } else {
    sliderLeft.classList.add('color-left');
    sliderRight.classList.add('color-right');
  }
  sliderTrack.style.transform = `translate(${transform - posX2}px)`;
}



const swipeEnd = (slider, sliderTrack, slide) => {
  if (arg === arg2 || arg2 === 0) {
    slide.onclick = function () {
      slide.getAttribute('name') ? nameLang = slide.getAttribute('name') : nameLang = 'не выбран';
      popup.querySelector('.popup__text').innerHTML = objData[slide.getAttribute('name')].text;
      if (objData[slide.getAttribute('name')].link.length < 20) {
        popup.querySelector('.popup__test-image').src = objData[slide.getAttribute('name')].link;
        popup.querySelector('.popup__test-image').classList.remove('popup__display');
        popup.querySelector('.popup__container-two__video').classList.add('popup__display');
      } else if (objData[slide.getAttribute('name')].link.length > 20) {
        popup.querySelector('.popup__container-two__video').src = objData[slide.getAttribute('name')].link;
        popup.querySelector('.popup__container-two__video').classList.remove('popup__display');
        popup.querySelector('.popup__test-image').classList.add('popup__display');
      }
      popup.classList.remove('popup__display');
      arg = 0;
      arg2 = 0;
    }
  }
  let transform = +sliderTrack.style.transform.match(trfRegExp)[0];
  let slidersV = (sliderTrack.offsetWidth - slider.offsetWidth) * -1;
  if (transform >= 0) {
    sliderTrack.style.transform = `translate(${0}px)`;
  } else if (transform <= slidersV) {
    sliderTrack.style.transform = `translate(${slidersV}px)`;
  }
  if (typeof action['act'] === 'function' && typeof action['end'] === 'function') {
    document.removeEventListener('touchmove', action['act']);
    document.removeEventListener('mousemove', action['act']);
    document.removeEventListener('touchend', action['end']);
    document.removeEventListener('mouseup', action['end']);
  }
  arg = 0;
  arg2 = 0;
  slide.style.cursor = 'zoom-in';
}

export { swipeStart, nameLang }

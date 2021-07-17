import { disableScroll, enableScroll } from './scroll';
import { swipeWheel } from './sliderWheel';
import { swipeStart, nameLang } from './sliderSwipe';
import { swipeinput, swipeinputTeam } from './sliderInput';
import { toggleVideo } from './index';


const team = document.querySelector('.team');
const teamContainerList = team.querySelector('.team__container-list');
const teamSlider = teamContainerList.querySelector('.slider');
const teamTrack = teamContainerList.querySelector('.slider-track');
const teamContainerListInput = team.querySelector('.team__container-list-input');

const skills = document.querySelector('.skills');
const skillsContainer = skills.querySelector('.skills__container');
const skillsSlider = skillsContainer.querySelector('.slider');
const skillsList = skillsContainer.querySelector('.slider-list');
const skillsTrack = skillsContainer.querySelector('.slider-track');
const skillsSlides = skillsTrack.querySelectorAll('.slide');
const skillsSliderLeft = skillsContainer.querySelector('.slider-left');
const skillsSliderRight = skillsContainer.querySelector('.slider-right');
const skillsTechnologiesInput = skills.querySelector('.skills__technologies-input');

const skillsTechnologies = document.querySelector('.skills-technologies');
const technologiesContainer = skillsTechnologies.querySelector('.skills-technologies__slider');
const technologiesSlider = technologiesContainer.querySelector('.slider');
const technologiesList = technologiesContainer.querySelector('.slider-list');
const technologiesTrack = technologiesContainer.querySelector('.slider-track');
const skillsTechnologiesSlides = technologiesTrack.querySelectorAll('.slide');
const skillsTechnologiesSliderLeft = technologiesContainer.querySelector('.slider-left');
const skillsTechnologiesSliderRight = technologiesContainer.querySelector('.slider-right');
const skillsTechnologiesContainerInput = skillsTechnologies.querySelector('.skills-technologies__container-input');


const softSkills = document.querySelector('.soft-skills');
const softSkillsSlider = softSkills.querySelector('.soft-skills__slider');
const softSlider = softSkillsSlider.querySelector('.slider');
const softSkillsList = softSkillsSlider.querySelector('.slider-list');
const softSkillsTrack = softSkillsSlider.querySelector('.slider-track');
const softSkillsSlides = softSkillsTrack.querySelectorAll('.slide');
const softSkillsSliderLeft = softSkillsSlider.querySelector('.slider-left');
const softSkillsSliderRight = softSkillsSlider.querySelector('.slider-right');
const softSkillsContainerInput = softSkills.querySelector('.soft-skills__container-input');


const header = document.querySelector('.header');
const headerMenu = header.querySelector('.header__menu');
const navMobil = document.querySelector('.navMobil');

const popups = document.querySelectorAll('.popup');
const popupSkills = document.querySelector('.popup_skills');
const popupVideo = document.querySelector('.popup_video');
const popupCloseImage = document.querySelectorAll('.popup_close-image');
const popupButton = popupSkills.querySelector('.popup__button');

const aboutMeImagePlay = document.querySelector('.about-me__image-play');

let nameStatus = '';

skillsSlides.forEach((i) => {
  i.addEventListener('touchstart', () => swipeStart(
    skillsSlider,
    skillsList,
    skillsTrack,
    skillsSliderRight,
    skillsSliderLeft,
    i,
    skillsTechnologiesInput
  ));
  i.addEventListener('mousedown', () => swipeStart(
    skillsSlider,
    skillsList,
    skillsTrack,
    skillsSliderRight,
    skillsSliderLeft,
    i,
    skillsTechnologiesInput
  ));
});
skillsTechnologiesSlides.forEach((i) => {
  i.addEventListener('touchstart', () => swipeStart(
    technologiesSlider,
    technologiesList,
    technologiesTrack,
    skillsTechnologiesSliderRight,
    skillsTechnologiesSliderLeft,
    i,
    skillsTechnologiesContainerInput
  ));
  i.addEventListener('mousedown', () => swipeStart(
    technologiesSlider,
    technologiesList,
    technologiesTrack,
    skillsTechnologiesSliderRight,
    skillsTechnologiesSliderLeft,
    i,
    skillsTechnologiesContainerInput
  ));
})

softSkillsSlides.forEach((i) => {
  i.addEventListener('touchstart', () => swipeStart(
    softSlider,
    softSkillsList,
    softSkillsTrack,
    softSkillsSliderRight,
    softSkillsSliderLeft,
    i,
    softSkillsContainerInput
  ));
  i.addEventListener('mousedown', () => swipeStart(
    softSlider,
    softSkillsList,
    softSkillsTrack,
    softSkillsSliderRight,
    softSkillsSliderLeft,
    i,
    softSkillsContainerInput
  ));
})

headerMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('header__menu-close');
  navMobil.classList.toggle('navMobil-display');
});

navMobil.addEventListener('click', () => {
  headerMenu.classList.remove('header__menu-close');
  navMobil.classList.remove('navMobil-display');
});

aboutMeImagePlay.addEventListener('click', () => {
  popupVideo.classList.remove('popup__display');
});

popupCloseImage.forEach(i => {
  i.addEventListener('click', () => {
    toggleVideo();
    nameStatus = 'не выбран';
    popups.forEach((p) => {
      p.classList.add('popup__display');
    });
  })
});

popups.forEach(i => {
  i.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
      toggleVideo();
      nameStatus = 'не выбран';
      i.classList.add('popup__display');
    }
  })
});

popupButton.addEventListener('click', () => {
  toggleVideo();
  nameStatus = nameLang;
  popups.forEach(i => {
    i.classList.add('popup__display');
  })
});

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    toggleVideo();
    nameStatus = 'не выбран';
    popups.forEach(i => {
      i.classList.add('popup__display');
    })
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    headerMenu.classList.remove('header__menu-close');
    navMobil.classList.remove('navMobil-display');
  }
}, false);

if (window.innerWidth > 1023) {
  headerMenu.classList.remove('header__menu-close');
  navMobil.classList.remove('navMobil-display');
  skillsContainer.addEventListener('wheel', () => swipeWheel(
    skillsSlider,
    skillsTrack,
    skillsSliderRight,
    skillsSliderLeft,
    skillsTechnologiesInput
  ));
  technologiesContainer.addEventListener('wheel', () => swipeWheel(
    technologiesSlider,
    technologiesTrack,
    skillsTechnologiesSliderRight,
    skillsTechnologiesSliderLeft,
    skillsTechnologiesContainerInput
  ));
  softSkillsSlider.addEventListener('wheel', () => swipeWheel(
    softSlider,
    softSkillsTrack,
    softSkillsSliderRight,
    softSkillsSliderLeft,
    softSkillsContainerInput
  ));
}

skillsTechnologiesInput.addEventListener('input', () => swipeinput(
  skillsSlider,
  skillsTrack,
  skillsSliderLeft,
  skillsSliderRight,
  skillsTechnologiesInput
));

skillsTechnologiesContainerInput.addEventListener('input', () => swipeinput(
  technologiesSlider,
  technologiesTrack,
  skillsTechnologiesSliderLeft,
  skillsTechnologiesSliderRight,
  skillsTechnologiesContainerInput
));

softSkillsContainerInput.addEventListener('input', () => swipeinput(
  softSlider,
  softSkillsTrack,
  softSkillsSliderLeft,
  softSkillsSliderRight,
  softSkillsContainerInput
));

teamContainerListInput.addEventListener('input', () => swipeinputTeam(
  teamSlider,
  teamTrack,
  teamContainerListInput
));

skillsContainer.addEventListener('mouseover', () => disableScroll());
skillsContainer.addEventListener('mouseout', () => enableScroll());
technologiesContainer.addEventListener('mouseover', () => disableScroll());
technologiesContainer.addEventListener('mouseout', () => enableScroll());
softSkillsSlider.addEventListener('mouseover', () => disableScroll());
softSkillsSlider.addEventListener('mouseout', () => enableScroll());

export { nameStatus };
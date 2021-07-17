// import { visible } from './stringVisible';
// const title = document.querySelector('.title');
// const titleString = title.querySelector('.container-string');
const aboutMe = document.querySelector('.about-me');
const aboutMeImageContainerAvtor = aboutMe.querySelector('.about-me__image-container-avtor');
const aboutMeText = aboutMe.querySelector('.about-me__text');
const aboutMeImage = aboutMe.querySelector('.about-me__image');
// const aboutMeString = aboutMe.querySelector('.container-string');
const team = document.querySelector('.team');
const teamTitle = team.querySelector('.team__title');
const teamContainerList = team.querySelector('.team__container-list');
const teamImage = team.querySelector('.team__image');
// const teamString = team.querySelector('.container-string');
const skills = document.querySelector('.skills');
const skillsTitleContainer = skills.querySelector('.skills__title-container');
const skillsTechnologies = skills.querySelector('.skills__technologies');
const skills_technologies = document.querySelector('.skills-technologies');
const skillsTechnologiesTitleContainer = skills_technologies.querySelector('.skills-technologies__title-container');
const skillsTechnologiesContainer = skills_technologies.querySelector('.skills-technologies__container');

const softSkills = document.querySelector('.soft-skills');
const softSkillsTitle = softSkills.querySelector('.soft-skills__title');
const softSkillsSubtitle = softSkills.querySelector('.soft-skills__subtitle');
const softSkillsContainer = softSkills.querySelector('.soft-skills__container');
const softSkillsContainerSecond = softSkills.querySelector('.soft-skills__container-second');
// const softSkillsString = softSkills.querySelector('.container-string');
const header = document.querySelector('.header');
const headerMenu = header.querySelector('.header__menu');
const headerNavLink = header.querySelectorAll('.header__anchor');
const navMobil = document.querySelector('.navMobil');
const program = document.querySelector('.program');
const programContainerOne = program.querySelector('.program__container-one');
const programContainerThree = program.querySelector('.program__container-three');
const programContainerFour = program.querySelector('.program__container-four');

// const programString = program.querySelector('.container-string');
const form = document.querySelector('.form');
const formContainerOne = form.querySelector('.form__form-container-one');
const formContainer = form.querySelector('.form__form-container');
// const formString = form.querySelector('.container-string');

// const addEventListenerWheel = {};
// let wheelBoolean = true;
const arrAboutMe = [aboutMeText, aboutMeImageContainerAvtor, aboutMeImage];
const arrTeam = [teamTitle, teamContainerList, teamImage];
const arrSkills = [skillsTitleContainer, skillsTechnologies];
const arrSkills_technologies = [skillsTechnologiesTitleContainer, skillsTechnologiesContainer];
const arrSoftSkills = [softSkillsTitle, softSkillsSubtitle, softSkillsContainer, softSkillsContainerSecond];
const arrProgram = [programContainerOne, programContainerThree, programContainerFour];
const arrForm = [formContainerOne, formContainer];

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  // if (arg) {
  //   document.removeEventListener('wheel', addEventListenerWheel['wheel']);
  // }
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  // document.addEventListener('wheel', addEventListenerWheel['wheel']);
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// let elTrue = true;
// function printText(el) {
//   el.style.color = '#fff';
//   let letterTimeout = 5;
//   let text = el.innerHTML;
//   let i = 1;
//   function print__fn() {
//     if (i <= text.length) {
//       el.innerHTML = text.substr(0, i);
//       setTimeout(print__fn, letterTimeout);
//     }
//     i++;
//   }
//   print__fn();
// };



const visibleBlock = (element, arr) => {
  if (element.getBoundingClientRect().top < document.documentElement.clientHeight - 100) {
    arr.forEach(i => {
      i.style.opacity = '1';
      i.style.transition = '2s';
    })
  }
}

// const visibleTextAutor = (element) => {
//   if (element.getBoundingClientRect().top < document.documentElement.clientHeight - 100 && elTrue) {
//     printText(aboutMeText);
//     elTrue = false;
//   }
// }


window.addEventListener('scroll', () => {
  const anchorRemove = (i) => i.classList.remove('header__anchor-color');
  const anchorAdd = (i) => i.classList.add('header__anchor-color');
  visibleBlock(aboutMe, arrAboutMe);
  visibleBlock(team, arrTeam);
  visibleBlock(skills, arrSkills);
  visibleBlock(skills_technologies, arrSkills_technologies);
  visibleBlock(softSkills, arrSoftSkills);
  visibleBlock(program, arrProgram);
  visibleBlock(form, arrForm);
  if (aboutMe.getBoundingClientRect().top < 100) {
    headerNavLink.forEach((i, index) => (index === 0) ? anchorAdd(i) : anchorRemove(i));
  }
  if (team.getBoundingClientRect().top < 100) {
    headerNavLink.forEach((i, index) => (index === 1) ? anchorAdd(i) : anchorRemove(i));
  }
  if (skills.getBoundingClientRect().top < 100) {
    headerNavLink.forEach((i, index) => (index === 2) ? anchorAdd(i) : anchorRemove(i));
  }
  if (program.getBoundingClientRect().top < 100) {
    headerNavLink.forEach((i, index) => (index === 3) ? anchorAdd(i) : anchorRemove(i));
  }
  if (form.getBoundingClientRect().top < 300) {
    headerNavLink.forEach((i) => anchorRemove(i));
  }
  if (aboutMe.getBoundingClientRect().top > 100) {
    headerNavLink.forEach((i) => anchorRemove(i));
  }
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = ((winScroll / height) * 100) + '%';
  header.style.setProperty('--sq-color', scrolled);
  headerMenu.classList.remove('header__menu-close');
  navMobil.classList.remove('navMobil-display');
});

// const windowScrollTo = (el) => {
//   window.scroll({
//     top: el.getBoundingClientRect().top + window.pageYOffset,
//     behavior: "smooth"
//   });
//   setTimeout(() => wheelBoolean = true);
// }
// const funSetTimeout = (el) => {
//   wheelBoolean = false;
//   setTimeout(() => {
//     windowScrollTo(el);
//   });
// }

// addEventListenerWheel['wheel'] = () => {
//   disableScroll();
//   const wew = window.event.wheelDeltaY;
//   if (wew < -20 && wew > -30 || wew > 20 && wew < 30 || wew === 120 || wew === -120) {
//     if (wheelBoolean) {
//       if (title.getBoundingClientRect().top <= 0 && aboutMe.getBoundingClientRect().top > 0) {
//         wew < 0 ? funSetTimeout(aboutMe) : funSetTimeout(title);
//         return;
//       }
//       if (aboutMe.getBoundingClientRect().top <= 0 && team.getBoundingClientRect().top > 0) {
//         wew < 0 ? funSetTimeout(team) : funSetTimeout(title);
//         return;
//       }
//       if (team.getBoundingClientRect().top <= 0 && skills.getBoundingClientRect().top > 0) {
//         wew < 0 ? funSetTimeout(skills) : funSetTimeout(aboutMe);
//         return;
//       }
//       if (skills.getBoundingClientRect().top <= 0 && softSkills.getBoundingClientRect().top > 0) {
//         wew < 0 ? funSetTimeout(softSkills) : funSetTimeout(team);
//         return;
//       }
//       if (softSkills.getBoundingClientRect().top <= 0 && program.getBoundingClientRect().top > 0) {
//         wew < 0 ? funSetTimeout(program) : funSetTimeout(skills);
//         return;
//       }
//       if (program.getBoundingClientRect().top <= 0 && form.getBoundingClientRect().top > 0) {
//         wew < 0 ? funSetTimeout(form) : funSetTimeout(softSkills);
//         return;
//       }
//       if (form.getBoundingClientRect().top < 100) {
//         wew < 0 ? funSetTimeout(form) : funSetTimeout(program);
//         return;
//       }
//     }
//   }
// }
// document.addEventListener('wheel', addEventListenerWheel['wheel']);

export { disableScroll, enableScroll }
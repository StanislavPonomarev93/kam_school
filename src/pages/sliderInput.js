const swipeinput = (slider, sliderTrack, sliderLeft, sliderRight, skillsInput) => {
  let slidersV = (sliderTrack.offsetWidth - slider.offsetWidth) * -1;
  let sum = Math.floor(skillsInput.value * (slidersV / 100));
  if (skillsInput.value === '0') {
    sliderRight.classList.remove('color-right');
    sliderTrack.style.transform = `translate(${0}px)`;
    return;
  } else if (sum === slidersV) {
    sliderLeft.classList.remove('color-left');
    sliderTrack.style.transform = `translate(${slidersV}px)`;
    return;
  }
  sliderLeft.classList.add('color-left');
  sliderRight.classList.add('color-right');
  sliderTrack.style.transform = `translate(${sum}px)`;
}

const swipeinputTeam = (slider, sliderTrack, skillsInput) => {
  let slidersV = (sliderTrack.offsetWidth - slider.offsetWidth) * -1;
  let sum = skillsInput.value * (slidersV / 100);
  sliderTrack.style.transform = `translate(${sum}px)`;
}

export { swipeinput, swipeinputTeam }
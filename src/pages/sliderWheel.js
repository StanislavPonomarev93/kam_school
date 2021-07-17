let x = 0;

const swipeWheel = (slider, sliderTrack, sliderRight, sliderLeft, sliderInput) => {
  let slidersV = (sliderTrack.offsetWidth - slider.offsetWidth) * -1;
  if (x > 0) {
    x = 0;
  }

  if (x < slidersV) {
    x = slidersV;
  }
  x = x + window.event.deltaY * -1;
  sliderInput.value = `${(x * 100 / slidersV)}`;
  if (x > -2) {
    sliderRight.classList.remove('color-right');
    sliderTrack.style.transform = `translate(${0}px)`;
    return;
  } else if ((x - 2) < slidersV) {
    sliderLeft.classList.remove('color-left');
    sliderTrack.style.transform = `translate(${slidersV}px)`;
    return;
  }
  sliderLeft.classList.add('color-left');
  sliderRight.classList.add('color-right');
  sliderTrack.style.transform = `translate(${x}px)`;
}

export { swipeWheel };
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.composition').forEach((elm) => {
    elm.addEventListener('click', rotatePhotos);
  });
});

const rotatePhotos = () => {
  const p1 = document.querySelector('.composition__photo--p1');
  const p2 = document.querySelector('.composition__photo--p2');
  const p3 = document.querySelector('.composition__photo--p3');

  p1.classList.add('composition__photo--p2');
  p1.classList.remove('composition__photo--p1');
  p2.classList.add('composition__photo--p3');
  p2.classList.remove('composition__photo--p2');
  p3.classList.add('composition__photo--p1');
  p3.classList.remove('composition__photo--p3');
};

/*const staff_flex = document.querySelectorAll('.staff_flex');

function isInViewport(element) {
const rect = element.getBoundingClientRect();
return (
  rect.left >= 0 &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

function toggleSections() {
sections.forEach((staff_flex) => {
  if (isInViewport(staff_flex)) {
    section.classList.add('active');
  } else {
    section.classList.remove('active');
  }
});
}

document.addEventListener('DOMContentLoaded', toggleSections);
document.addEventListener('scroll', toggleSections);*/

window.addEventListener('scroll', function () {
  var staffSection = document.querySelector('.staff_container');

  // staffセクションが画面上部に来たら横スクロールクラスを追加
  if (staffSection.getBoundingClientRect().top === 0) {
    staffSection.classList.add('scrolling');
  } else {
    staffSection.classList.remove('scrolling');
  }
});


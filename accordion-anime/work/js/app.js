const parentTitle = document.querySelectorAll('.list-tit');

for (let i = 0; i < parentTitle.length; i++) {
  parentTitle[i].addEventListener('click', function () {
    let moveClass = this.nextElementSibling;
    if (moveClass.classList.contains('active')) {

      moveClass.classList.remove('active');
    } else {
      moveClass.classList.add('active');
      moveClass.style.height = 'auto';

    }
  });
}
const parentTitle = document.querySelectorAll('.list-tit');

for (let i = 0; i < parentTitle.length; i++) {
  parentTitle[i].addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.classList.contains('active')){
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
}
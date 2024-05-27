const listItems = document.querySelectorAll('.list-item');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

const contentImages = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('li');


listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();

        item.classList.add('active');
        contentImages[idx].classList.add('show');
    });
})

const hideAllContents = () => {
    contentImages.forEach((content) => content.classList.remove('show'))
}

const hideAllItems = () => {
    listItems.forEach((item) => item.classList.remove('active'))
}
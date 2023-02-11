const form = document.querySelector('form');
const none = document.querySelector('.none');
form.onsubmit = e => {
    e.preventDefault()
    none.style.display = 'contents'
}
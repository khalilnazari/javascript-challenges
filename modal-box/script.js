document.querySelector('#modal_show_btn').addEventListener('click', () => {
    document.querySelector('#modal_wrapper').classList.add('show')
})

document.querySelector('#modal_close_btn').addEventListener('click', () => {
    document.querySelector('#modal_wrapper').classList.remove('show')
})

document.querySelector('#submit_btn').addEventListener('click', () => {
    document.querySelector('#modal_wrapper').classList.remove('show')
})
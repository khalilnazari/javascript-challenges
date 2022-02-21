document.querySelector('#left_sidebar_toggle_btn').addEventListener('click', () => {
    document.querySelector('#left_sidebar').classList.toggle('show-ls')
})
document.querySelector('#navbar-close').addEventListener('click', () => {
    document.querySelector('#left_sidebar').classList.remove('show-ls')
})

// right sidebar
document.querySelector('#right_sidebar_toggle_btn').addEventListener('click', () => {
    document.querySelector('#right_sidebar').classList.toggle('show-rs')
})
document.querySelector('#right_sidebar_close_btn').addEventListener('click', () => {
    document.querySelector('#right_sidebar').classList.remove('show-rs')
})


// top mega nav
document.querySelector('#top_mega_nav_close_btn').addEventListener('click', () => {
    document.querySelector('#top_mega_nav').classList.remove('show')
})
document.querySelector('#top_mega_nav_show_btn').addEventListener('click', () => {
    document.querySelector('#top_mega_nav').classList.add('show')
})


// right mega nave
document.querySelector('#right_mega_nav_close_btn').addEventListener('click', () => {
    document.querySelector('#right_mega_nav').classList.remove('show')
})
document.querySelector('#right_mega_nav_show_btn').addEventListener('click', () => {
    document.querySelector('#right_mega_nav').classList.add('show')
})
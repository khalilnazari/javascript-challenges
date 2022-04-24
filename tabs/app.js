// selections
const about = document.querySelector('.about')
const btns = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', e => {
    const id = e.target.dataset.id; 

    if (id) {
        // hide all tabs first
        btns.forEach(btn => {
            btn.classList.remove('active')
        })
        // activate the clicked tab
        e.target.classList.add('active')

        // hide articles
        articles.forEach(article => {
            article.classList.remove('active')
        })

        // get the target article & and active class
        const activeArticle = document.getElementById(id)
        activeArticle.classList.add('active')
    }
})
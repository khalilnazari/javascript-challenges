const btns = document.querySelectorAll('.toggle-btn');
const questions = document.querySelectorAll('.question');

// travers up parent.
Array.from(btns).forEach(btn => {
    btn.addEventListener('click', (e) => {

        // question
        // const question = e.currentTarget.parentElement.parentElement; 
        // OR 
        const question = btn.parentElement.parentElement; 
        
        // show or hide the answer of questino you click
        question.classList.toggle('show-answer');  

        // hide the answer of other questions
        questions.forEach(item => {
            if(item !== question) {
                item.classList.remove('show-answer')
            }
        })               
    }) 
}); 



/* Selecting the questions */
/*
questions.forEach((question) => {
    let btn = question.querySelector('.toggle-btn')


    btn.addEventListener('click', (e) => {
        // hide the rest question's answer
        questions.forEach(item => {
            if(item !== question) {
                item.classList.remove('show-answer'); 
            }
        })

        // show or hide answer section
        question.classList.toggle('show-answer')
    }) 
})
*/
let btnQuestion = window.document.querySelectorAll('.question__button');
let divAnswer = window.document.querySelectorAll('.div-question__answer');
let titleQuestion = window.document.querySelectorAll('.question__title');

for(let i = 0; i < btnQuestion.length; i++){
    btnQuestion[i].addEventListener('click', () => {
        divAnswer[i].classList.toggle('div-question__answer--show');
        btnQuestion[i].classList.toggle('question__button--rotate');
        titleQuestion[i].classList.toggle('question__title--modified');
    });
}
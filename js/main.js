let buttons = document.querySelectorAll('.slideButton');
window.addEventListener('DOMContentLoaded', (event) => {


   for (var i = 0; i < buttons.length; i++) {

      buttons[i].addEventListener("click", function (event) {

         let answer = this.parentElement.parentElement.lastElementChild.firstElementChild;

         let answers = document.querySelectorAll('.faqAnswer');
         answers.forEach(e => {
            e.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.innerText = '+'
            e.parentElement.style.maxHeight = '0';
            e.parentElement.parentElement.firstElementChild.style.borderRadius = '8px';
         });
         this.firstElementChild.innerHTML = '-';
         this.parentElement.style.borderRadius = '8px 8px 0 0'
         answer.parentElement.style.maxHeight = "200px";

      });
   };

});
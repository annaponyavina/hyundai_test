window.addEventListener('DOMContentLoaded', () => {

    const sendForm = () => {
        const requestForm = document.querySelector('.request-form');

const emailReg = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;



        requestForm.addEventListener('input', (event) => {
            let target = event.target;

            if (target.getAttribute('type') === 'text') {
                target.value = target.value.replace(/[^a-z]/g, '');
            } 
            if (target.getAttribute('type') === 'tel') {
                target.value = target.value.replace(/[^\d]/g, '');
            }
            if (target.getAttribute('type') === 'email') {
                if(!emailReg.test(target.value)) {
                    console.log('опачки');
                }
            }

            

        });


    };
    sendForm();

});
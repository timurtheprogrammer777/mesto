// export class FormValidator {
//     constructor(config) {
//         this_.config = config;
//     }

//     const enableValidation = (config) => {
//         const forms = document.querySelectorAll(formSelector);
//         forms.forEach(form => {
//             const inputs = Array.from(form.querySelectorAll(inputSelector));
//             const button = form.querySelector(submitButtonSelector);
//             inputs.forEach(input => {
//                 input.addEventListener('input', (evt) => handleFormInput(evt, form, invalidInputClass, button, inactiveButtonClass, inputs));
//             });
//             disableButton(button, inactiveButtonClass);
//             form.addEventListener('reset', () => {
//                 disableButton(button, inactiveButtonClass);
//             });
//         });
//     }


// }

const enableValidation = ({formSelector, inputSelector, submitButtonSelector}) => {
   const forms = document.querySelectorAll(formSelector);
   forms.forEach(form => {
      const inputs = Array.from(form.querySelectorAll(inputSelector));
      const button = form.querySelector(submitButtonSelector);
      inputs.forEach(input => {
         input.addEventListener('input', (evt) => handleFormInput(evt, form));
      });
      form.addEventListener('submit', handleFormSubmit);
   });
}

const handleFormSubmit = (evt, form) => {
   evt.preventDefault();
}
 
const handleFormInput = (evt) => {
   const input = evt.target;
   if(input.validity.valid) {
      hideError(input, form);
   } else {
      showError(input, form);
   }
}

const showError = (input, form ) => {
   const errorElement = form.querySelector(`.popup__input-error${input.name}`);
   console.log(errorElement);
}
 
const hideError = (input, form) => {
   const errorElement = form.querySelector(`.popup__input-error${input.name}`);
   console.log(errorElement);
}

 enableValidation  ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: '.popup__input-error',
  errorClass: '.popup__input-error_active'
});
    

// const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
//    const forms = document.querySelectorAll(formSelector);
//    forms.forEach(form => {
//        const inputs = Array.from(form.querySelectorAll(inputSelector));
//        const button = form.querySelector(submitButtonSelector);
//        form.addEventListener('submit', aws);
//        inputs.forEach(input => {
//            input.addEventListener('input', () => {
//             console.log(inputSelector)
//          });
//       });
//    });
// }
    
 

// function enableValidation({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass,}) {
//    const forms = document.querySelectorAll(formSelector);
//    forms.forEach(form => {
//        const inputs = Array.from(form.querySelectorAll(inputSelector));
//        const button = form.querySelector(submitButtonSelector);
//        form.addEventListener('submit', aws);
//        inputs.forEach(input => {
//            input.addEventListener('input', () => {
//             checkInputValidity(inputSelector)
//            });
//        });
//    });
// }



function aws() {
   console.log('123')
}


// function checkFieldValidity(inputSelector) {
//    if(!inputSelector.validity.valid) {
//    //  showError(inputErrorClass);
//    console.log('1')
//   } else {
//    console.log('2')

//    //  hideError(inputErrorClass);
//   }
// }

// const checkInputValidity = () => {
//   if(!inputSelector.validity.valid) {
//     console.log('1')
//   } else {
//     console.log('2')
//   }
// };


// // const ErrorSpan = document.querySelector(inputErrorClass);

// function showError(inputErrorClass) {
//    inputErrorClass.classList.add(errorClass);
// }
// function HideError(inputErrorClass) {
//    inputErrorClass.classList.remove(errorClass);
// }






// const forms = document.querySelectorAll('.popup__form');
// forms.forEach(form => {
//    const formPlaceFields = Array.from(form.querySelectorAll('.popup__input'));
//    formPlaceFields.forEach(el => {
//       el.addEventListener('input', function (e) {
//          console.log(e.target.validity);
//       });
//    });

// });


// const checkInputValidity = () => {
//   if(!Input.validity.valid) {
//     showError(formInput);
//   } else {
//     hideError(formInput);
//   }
// };






//



// const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass,}) => {
//     const forms = document.querySelectorAll(formSelector);
//     forms.forEach(form => {
//         const inputs = Array.from(form.querySelectorAll(inputSelector));
//         const button = form .querySelector(submitButtonSelector);
//         form.addEventListener('submit', aws);
//         inputs.forEach(input => {
//             input.addEventListener('input', (e) => aws(e, form, inputErrorClass, button, inactiveButtonClass, inputs));
//         });
//     });
// }

// const handleFormInput = (e, form, inputErrorClass, button, inactiveButtonClass, inputs) => {
//     const input = evt.target;
//     console.log(e.target);
//     // const formError = form.querySelector(`${elementField.name} + popup__input-error `)
//     checkInputValidity(input. formError, inputErrorClass);
//     const buttonState = hasInvalidInput(inputs);
//     toggleButtonState(button, inactiveButtonClass, buttonState);
// }

// сверху код из пачки

// const forms = Array.from(document.querySelectorAll(formSelector));


// // const formPlaceProfile = document.forms.form;
// // const formPlaceAdd = document.forms.form-add;

// // const forms = document.querySelectorAll('.popup__form');
// const forms = Array.from(document.querySelectorAll('.popup__form'));
// forms.forEach(form => {
//   const formPlaceFields = Array.from(form.querySelectorAll('.popup__input'));
//   formPlaceFields.forEach(elementField => {
//     const elementError = forms.querySelector(`${elementField.name} + popup__input-error `);
//   });
// });



// // const formPlaceFields = Array.from(forms.querySelectorAll('.popup__input'));

// сверху я писал

//  enableValidation = ({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: '.popup__input_type_error',
//   errorClass: '.popup__input-error_active'
// });
    




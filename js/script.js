import validateCPF from "./validate-cpf.js";
import legalAge from "./validate-age.js";
const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
    field.addEventListener('blur', () => checkField(field));
})

function checkField(field) {
    if (field.name == 'cpf' && field.value.length >= 11) {
        validateCPF(field);
    }

    if (field.name == 'aniversario' && field.value != '') {
        legalAge(field);
    }
}
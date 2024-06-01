export default function legalAge(field) {
    const dateOfBirth = new Date(field.value);
    
    if(!validateAge(dateOfBirth)) {
        field.setCustomValidity('O usuário não é maior de idade.');
    }
}

function validateAge(dateOfBirth) {
    const currentDate = new Date();
    const legalAgeDate = new Date(dateOfBirth.getUTCFullYear() + 18, dateOfBirth.getUTCMonth(), dateOfBirth.getUTCDate());

    return currentDate >= legalAgeDate;
}
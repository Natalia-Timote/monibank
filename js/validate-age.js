export default function legalAge(field) {
    const dateOfBirth = new Date(field.value);
    validateAge(dateOfBirth);

    console.log(validateAge(dateOfBirth))
}

function validateAge(dateOfBirth) {
    const currentDate = new Date();
    const legalAgeDate = new Date(dateOfBirth.getUTCFullYear() + 18, dateOfBirth.getUTCMonth(), dateOfBirth.getUTCDate());

    return currentDate >= legalAgeDate;
}
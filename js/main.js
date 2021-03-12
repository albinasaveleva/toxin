$(document).ready(function() {

    $('.input-field_date-of-birth').mask('00.00.0000');

    const entranceButton = document.querySelector('#entrance');
    const entranceCard = document.querySelector('.card-wrapper_entrance');
    const registrationButton = document.querySelector('#registration');
    const registrationCard = document.querySelector('.card-wrapper_registration');
    const cardRegistrationButton = document.querySelector('#cardRegistration');
    const cardEntranceButton = document.querySelector('#cardEntrance');

    
    entranceButton.addEventListener('click', function() {
        entranceCard.classList.toggle('card-wrapper_entrance_hidden');
    });
    entranceCard.addEventListener('click', function() {
        if (event.target.classList.contains('card-wrapper_entrance')) {
            entranceCard.classList.toggle('card-wrapper_entrance_hidden');
        }
    });

    registrationButton.addEventListener('click', function() {
        registrationCard.classList.toggle('card-wrapper_registration_hidden');
    });
    registrationCard.addEventListener('click', function() {
        if (event.target.classList.contains('card-wrapper_registration')) {
            registrationCard.classList.toggle('card-wrapper_registration_hidden');
        }
    });

    cardRegistrationButton.addEventListener('click', function() {
        entranceCard.classList.toggle('card-wrapper_entrance_hidden');
        registrationCard.classList.toggle('card-wrapper_registration_hidden');
    })
    cardEntranceButton.addEventListener('click', function() {
        entranceCard.classList.toggle('card-wrapper_entrance_hidden');
        registrationCard.classList.toggle('card-wrapper_registration_hidden');
    })
});
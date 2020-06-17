document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.dot-button')
    .addEventListener('click',function(){
        var reservationForm = document.querySelector('.flyout-reservation-form')
        reservationForm.className +=' active';
    });

});
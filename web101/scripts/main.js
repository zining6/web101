document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.dot-button')
        .addEventListener('click',function(){
            var reservationForm = 
                document.querySelector('.flyout-reservation-form')
        reservationForm.className +=' active';
        });

    document.querySelector('.close-button').addEventListener(click,function(){
            document.querySelector('.flyout-reservation-form'.className = 'flyout-reservation-form'});

        



    document.querySelector('.submit-reservation')
    .addEventListener('click',function(){
        const headCount = document.querySelector('#headCountSelector').value;
        const day = document.querySelector('#daySelectot').value;
        const time = document.querySelector('#timeSelectot').value;
        const email = document.querySelector('#emailSelectot').value;
        const reservationPayload = {
            headCountValue:headCount,
            dayValue:headCount,
            dayValue: time,
            emailValue:email
        };

        fetch('https://reqres.in/api/create',{
            method: 'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(reservationPayload)
        })
          .then(function(response){
              console.log(response);

          });

    });

        




});

//window.onload = function() {

    const submitBtn = document.getElementById('submit');
    const firstLayer = document.getElementById('1stlayer');
    const fName = document.getElementById('fname');
    const lName = document.getElementById('lname');
    const posInput = document.getElementById('position');
    const tlf = document.getElementById('number');
    const mail = document.getElementById('mail');
    const inputs = Array.from(document.getElementsByClassName('input'));
    const secondLayer = document.getElementById('secondlayer');
    const buttonsElement = document.getElementById('buttons');
    const restartBtn = document.getElementById('restart-btn');
    
    inputs.forEach(input => {
        input.addEventListener('keyup', () => {
            if(inputs.every(input =>
             input.value.length > 0)) {
        submitBtn.classList.remove('hide');
        } else {
         submitBtn.classList.add('hide');
        }
     })
    });
     submitBtn.addEventListener('click', () => {
         firstLayer.classList.add('hide');
         customize()
     })
        function customize(){
            secondLayer.classList.remove('hide');
            secondLayer.innerText = `First Name: ${fName.value}
                                     Last Name: ${lName.value}
                                     Position: ${position.value}
                                     Telephone: ${number.value}
                                     Mail: ${mail.value}`
        secondLayer.classList.add('border');
        buttonsElement.classList.remove('hide');
        restartBtn.addEventListener('click', () => {
            restartApp();
        })
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', buttonChanged)
        })
        function buttonChanged(e) {
         secondLayer.style.setProperty(
             `background-color`,
             e.target.value
         )
        }
        }
        function restartApp(){
            secondLayer.classList.add('hide');
            firstLayer.classList.remove('hide');
            buttonsElement.classList.add('hide');
            inputs.forEach(input => {
                input.value="";
            submitBtn.classList.add('hide');
            })
            
        }
  
//}



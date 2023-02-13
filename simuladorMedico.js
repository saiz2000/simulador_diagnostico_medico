
//                                                         SIMULADOR INTERACTIVO DIAGNOSTICO ENFERMEDADES RESPIRATORIAS                                                              //




let userName = prompt('please enter your name')
alert('Hi ' + userName)
alert(userName + ' please be advised, this is a program to help detect and treat your respiratory disease, but it is not as effective as a doctor')
alert('please choose from the following options')


let rhinitis = false
function possibilites1() {
    let rhinitisSymptoms = prompt('1:Runny nose, 2:Sneezing, 3:Nasal congestion, 4:Itching in the nose, 5:Watery eyes, 6:Itching in the eyes, 7:none of the above')
    return rhinitisSymptoms
}

possibilites = possibilites1()



if (possibilites === '1' || possibilites === '2' || possibilites === '3' || possibilites === '4' || possibilites === '5' || possibilites === '6') {
    rhinitis = true
} else if (possibilites === '7') {
    alert('okay, in this case we would strongly recommend you to reach out to a doctor for further assistance')
} else {
    alert('esta opcion es invalida')
}

let diagnostic
let payment
let bank
let attempts = 0
let interest

while (rhinitis === true) {
    alert("chances are hight that you've got rhinitis")
    diagnostic = prompt("do you wish to get you're whole diagnostic? 1:yes,  2:no")
    attempts++

    if (diagnostic === "1") {
        payment = prompt('in order to get your diagnostic, please press "1" to continue with payment')
        if (payment === "1") {
            bank = prompt('select payment method: 1:bancolombia   2:nequi   3:paypal')
            if (bank === '1' || bank === '2' || bank === '3') {
                interest = prompt('do you wish to include our service fee so we can continue investing in growing? 1:yes, 2:no')
                if (interest === "1") {
                    interest = prompt('which fee would you like to include? 1:low,  2:normal,  3:high')
                    switch (interest) {
                        case '1':
                            fee = 1.15
                            console.log('interest 15%')
                            break
                        case '2':
                            fee = 1.25
                            console.log('interest 25%')
                            break
                        case '3':
                            fee = 1.37
                            console.log('interest 37%')
                            break
                        default:
                            alert('invalid option')
                    }
                    if (fee) {
                        alert('you have to pay: ' + 10 * fee + " COP")
                        payment = prompt ('1: make payment,  2: decline')
                        if (payment === '1') {
                            alert ('here is your diagnostic:  Maintain nasal hygiene: Wash your nose with saline solution to help remove congestion and mucus.  Avoid allergies: Try to avoid dust, tobacco smoke, and other environmental irritants that can worsen symptoms.  Use decongestants: You can use nasal decongestants or pills to relieve nasal congestion.  Moisturize the air: Use a humidifier to keep the air moist in your home and prevent nasal dryness.  It is important to remember that these are only symptom treatments and that an accurate diagnosis and an individualized treatment plan are necessary for effective treatment. Therefore, it is recommended to see a doctor if you have persistent symptoms of rhinitis.')
                            break
                        } else if (payment === '2') {
                            alert ('good bye')
                            break
                        } else if (attempts >= 3){
                            alert('too many incorrect choices, the program will now terminate.')
                            break
                        } else {
                            alert('incorrect choice, please try again')
                        }
                    }
                } else if (interest === '2') {
                    alert('okay, you have to pay: ' + 10  + " COP")
                    payment = prompt ('1: make payment,  2: decline')
                        if (payment === '1') {
                            alert ('here is your diagnostic:  Maintain nasal hygiene: Wash your nose with saline solution to help remove congestion and mucus.  Avoid allergies: Try to avoid dust, tobacco smoke, and other environmental irritants that can worsen symptoms.  Use decongestants: You can use nasal decongestants or pills to relieve nasal congestion.  Moisturize the air: Use a humidifier to keep the air moist in your home and prevent nasal dryness.  It is important to remember that these are only symptom treatments and that an accurate diagnosis and an individualized treatment plan are necessary for effective treatment. Therefore, it is recommended to see a doctor if you have persistent symptoms of rhinitis.')
                            break
                        } else if (payment === '2') {
                            alert ('good bye')
                            break
                        } else if (attempts >= 3){
                            alert('too many incorrect choices, the program will now terminate.')
                            break
                        } else {
                            alert('incorrect choice, please try again')
                            break
                        }
                }
            } else if (attempts >= 3) {
                alert("Too many incorrect choices, the program will now terminate.")
                break
            } else {
                alert('incorrect choice, please try again')
            }
        } else if (attempts >= 3){
            alert('too many incorrect choices, the program will now terminate.')
            break
        } 
    } else if (diagnostic === '2') {
        alert('okay, in this case we would strongly recommend you to reach out to a doctor for further assistance')
        break
    } else if (attempts >= 3){
        alert('too many incorrect choices, the program will now terminate.')
        break
    } else {
        alert('incorrect choice, please try again')
    }
}    
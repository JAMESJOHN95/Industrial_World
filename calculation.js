const calculation = (e,lengthId, weightId, totalId) => {
    e.preventDefault()
    const lengthValue = parseFloat(document.getElementById(lengthId).value);
    const weightValue = parseFloat(document.getElementById(weightId).value);

    if (!isNaN(lengthValue) && lengthValue >= 0 ) {
        document.getElementById(totalId).value = lengthValue * weightValue;
    } else {
        alert("Please enter valid values for length and weight.");
    }
    };

// //////////////////////////////////////////////////////////////////////////

// contact

const register = ()=>{
    var nameinput = document.getElementById('nameinput')
    var Phoneinput = document.getElementById('Phoneinput')
    var Emailinput = document.getElementById('Emailinput')


    if(nameinput.value === "" || Phoneinput.value=== "" || Emailinput.value === ""){
    alert("Please fill the form completlt !!!!!")
    }
    else if(Phoneinput.value.length !== 10){
        alert("Enter a valid mobile number")
    }
    else if (!isValidEmail(Emailinput.value)){
        alert("Enter A Valid Email")
    }
    else{
        alert("REGISTRATION SUCCESFULL")
        window.location.replace ("index.html")    }
   
}
function isValidEmail(email) {
    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
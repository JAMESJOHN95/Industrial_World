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

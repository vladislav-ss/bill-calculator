function getBill() {

    let tip = document.getElementById("tip").value;
    const tipDisplayPercentage = document.getElementById("tip-percentage");

    let people = document.getElementById("people").value;
    const peopleDisplay = document.getElementById("numpop");

    let bill = document.getElementById("bill-value").value;
    const tipTotal = document.getElementById("tip-total");

    const tipPerson = document.getElementById("total-tip");
    const totalPerson = document.getElementById("total");


    tipDisplayPercentage.textContent = tip + "%";
    peopleDisplay.textContent = people;
    tipTotal.textContent = (bill * tip / 100).toFixed(2) + "€";

    tipPerson.textContent = (bill * tip / 100 / people).toFixed(2) + "€";
    totalPerson.textContent = ((bill / people) + (bill * tip / 100 / people)).toFixed(2) + "€";



    setTimeout(getBill, 50)
}

setTimeout(getBill, 50);
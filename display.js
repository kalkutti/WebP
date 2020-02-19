document.getElementById('myP').innerHTML="Gratuity Calculator";

let person = {
    firstName: 'Kalindu',
    lastName: 'Sembakutti',
    age: 29
};
var myalertfun = (message) => alert(message);
var total = (billAmount, serviceRating, groupSize) => {
    totalBeforeRounding = (billAmount * serviceRating) / groupSize;
    return Math.round(totalBeforeRounding * 100) / 100;
};

function calculateTip(name, lastname){
    var billAmountBeforeTip = document.getElementById("billing").value;
    var serviceScore = document.getElementById("rating").value;
    var sizeOfTable = document.getElementById("headCount").value;

    if (billAmountBeforeTip === '' || serviceScore == 0){
        myalertfun('Please enter values');
        return;
    }

    if (sizeOfTable === '' || sizeOfTable <= 1){
        sizeOfTable = 1;
        document.getElementById('thank').style.display = "block";
        document.getElementById('thankG').style.display = "none";
    } else {
        document.getElementById('thank').style.display = "none";
        document.getElementById('thankG').style.display = "block";
    }

    document.getElementById('myG').innerHTML = total(billAmountBeforeTip, serviceScore, sizeOfTable);
}

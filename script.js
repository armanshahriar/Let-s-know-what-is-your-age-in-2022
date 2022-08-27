function ageInDays() {
    var birthday = document.getElementById('input').value;
    var birth = 2022 - birthday;
    if (birth < 0) {
        alert("It's not valid")
    } else {
        var day = birth * 365;
        document.getElementById('result').innerHTML = day;
    }

}

function reset() {
    document.getElementById('input').value = "  ";
    document.getElementById("result").innerHTML = 0;
}
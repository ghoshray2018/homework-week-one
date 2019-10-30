document.getElementById("click").onclick = function() {

    var birthYear = prompt("Enter your birth year");
    birthYear = parseInt(birthYear);

    var futureYear = prompt("Enter a year far into the future!");
    futureYear = parseInt(futureYear);

    document.getElementById("answer").innerHTML = "You will be " +(futureYear-birthYear) + " years old in " +futureYear + "!";

}

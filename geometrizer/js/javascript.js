document.getElementById("click").onclick = function() {

    var r = prompt("Enter the radius in cm");
    var C = 2 * r * Math.PI;
    C = C.toFixed(2);
    document.getElementById("text").innerHTML = "The circumference of the circle is " +C + " cm.";

}

document.getElementById("click-area").onclick = function() {

    var r = prompt("Enter the radius in cm");
    var area = r * r * Math.PI;
    area = area.toFixed(2);
    document.getElementById("text").innerHTML = "The area of the circle is " +area + " cm squared.";
}


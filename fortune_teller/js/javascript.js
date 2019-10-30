

    document.getElementById("click").onclick = function () {

       var children = prompt("What's your lucky number?");

       var partner = prompt("Who is your fave celeb?");

       var vacation = prompt("What is your favorite vacation spot?");

       var job = prompt("What is your dream job?");

       document.getElementById("fortune").innerHTML = "You will have "+children + " children, " + "you will marry " +partner + " in " +vacation+ ", and you will work as a " +job +  ".";
        
    }



    


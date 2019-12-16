//javascript code
var tekst;
    for (var i = 1; i <= 50; i += 1) {

        tekst += i + "<br>";

        if (i == 19) {
            tekst += "Dit zijn mooie getallen";
        }
        else if(i==40){
            tekst += "Dit zijn mooie getallen";
        }
    }

    document.getElementById("uitkomst").innerHTML = tekst;
//javascript code
var tekst;
    for (var i = 0; i <= 1000; i += 10) {
        console.log(i)

        tekst += i + "<br>";

        if (i == 19) {
            tekst += "";
        }
        else if(i==40){
            tekst += "";
        }
    }

    document.getElementById("uitkomst").innerHTML = tekst;
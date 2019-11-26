functioncheck(){
var saldo = document.getElementById("saldo").value;
 
if(saldo==500){
        document.getElementById("tekst").innerHTML ="uw salaris is gestort!"
}elseif(saldo>500){
            document.getElementById("tekst").innerHTML ="uw salaris met uw bonus is gestort!"
 
}else{
        document.getElementById("tekst").innerHTML ="Er is geen geld gestort!";

}
 
}


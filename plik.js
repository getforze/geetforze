
function ruletka()
{
	var pusty=document.getElementById("pusty");
	var ruletka=document.getElementById("ruletka");
	var crash=document.getElementById("crash");
	pusty.style.display="none";
	crash.style.display="none";
	ruletka.style.display="inline";
}
function crash()
{
	var pusty=document.getElementById("pusty");
	var ruletka=document.getElementById("ruletka");
	var crash=document.getElementById("crash");
	pusty.style.display="none";
	ruletka.style.display="none";
	crash.style.display="inline";
	
	
}
function f()
{
	var min=parseInt(0);
	var max=parseInt(36);
	var wynik;
	wynik=parseInt((Math.floor( Math.random() * ( max - min + 1 ) + min )));
	wynik=2;
	wynik.value="cz";
	if (wynik==1||wynik==2)
	alert(wynik.value);
}
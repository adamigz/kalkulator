function pisz(arg){
    var liczba=arg;
    document.getElementById('pole').insertAdjacentHTML("beforeend", liczba);
    document.getElementById('f').value="";
    document.getElementById('f').focus();
    
}
function licz(){
    var dzialanie=document.getElementById('pole').textContent;
    var wynik=eval(dzialanie);
    if(wynik!=undefined){
    document.getElementById('pole').innerHTML=wynik;
    }
    document.getElementById('f').focus();
}
function usun(){
    document.getElementById('pole').innerHTML="";
    document.getElementById('f').focus();
    document.getElementById('f').value="";
}
function klaw(){
    var f=document.getElementById('f');
    var znak=document.getElementById('f').value;
    var numer=znak.charCodeAt();
    var test;
    window.addEventListener("keyup", function(event){
        if (event.keyCode==8) {
            test=1;
            usun();
        }else if (event.keyCode==13) {
            test=1;
            licz();
        }
    });
    if (numer==48||numer==49||numer==50||numer==51||numer==52||numer==53||numer==54||numer==55||numer==56||numer==57||numer==42||numer==43||numer==45||numer==47) {
    switch (numer) {
        case 48:
            pisz('0');
            f.value="";
        break;
        case 49:
            pisz('1');
            f.value="";
        break;
        case 50:
            pisz('2');
            f.value="";
        break;
        case 51:
            pisz('3');
            f.value="";
        break;
        case 52:
            pisz('4'); 
            f.value="";
        break;
        case 53:
            pisz('5'); 
            f.value="";
        break;
        case 54:
            pisz('6');
            f.value="";
        break;
        case 55:
            pisz('7');
            f.value="";
        break;
        case 56:
            pisz('8');
            f.value="";
        break;
        case 57:
            pisz('9');
            f.value="";
        break;
        case 42:
            pisz('*');
            f.value="";
        break;
        case 43:
            pisz('+');
            f.value="";
        break;
        case 45:
            pisz('-');
            f.value="";
        break;
        case 47:
            pisz('/');
            f.value="";
        break;
        default:
        break;
    }
    }else if(test==1){
    }else{
        f.value="";
        document.getElementById('f').focus();
    }

}

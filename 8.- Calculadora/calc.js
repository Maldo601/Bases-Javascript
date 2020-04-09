
// C A L C U L A D O R A        J A V A    S C R I P T 

// Joan Marc Maldonado.

// ESTRUCTURA: 

//     1.- Variables Globals
//     2.- Funció Inicial onLoad 
//      2.1- Funcions escoltadores d'events
//      2.2- Funcions escoltadores d'events operacionals
//      2.3- Accions


                            // VARIABLES        GLOBALS //
//En Primer lloc li declararem tres variables globals fora de les funcions, ja que en tenim 4
//Ens serviràn per no escriure-ho cada vegada. De moment entendrem que operador A i B seràn 
//els nombres que introduirem a operar, mentre que operació, operarà. Ho veurem mes en clar 
//a les funcions que li introduirem comentat. També podem dir que es el primer que tenim clar, 
// que necessitem que A i B es resolguen mitjançant una operació.   
var operandA;
var operandB;
var operacio;


// Ara crearem la funció d'inicialització, que serà per a enrutar el valor de les variables
// al HTML, per a que cada resultat, acció, event i valor, s'apliqui a cada botó que hem
// creat. Probablement es pugui optimitzar aquest codi, amb alguna cadena o cosa aixi, pero
// encara no he arribat a tant. 
// Per tant, sabem que necessitem tots els botons d'operació, els números, el borrat i el resultat,
// creats, referenciats i assignats a les nostres variables. 

function init(){
    //variables de tots els botons de la calculadora
    var resultat = document.getElementById('resultat');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacio = document.getElementById('multiplicacio');
    var divisio = document.getElementById('divisio');
    var igual = document.getElementById('igual');
    var un = document.getElementById('un');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatre = document.getElementById('cuatre');
    var cinc = document.getElementById('cinc');
    var sis = document.getElementById('sis');
    var set = document.getElementById('set');
    var vuit = document.getElementById('vuit');
    var nou = document.getElementById('nou');
    var zero = document.getElementById('zero');
}  

// Ara una vegada tenint les "rutes als llocs" el que necessitem es que 
// una vegada apretem, s'executi una funció concreta, d'un conjunt on n'hi ha
// una per botó i que estant a l'escolta (amb el parametre (e)) del clic per executar-se. 
// La comunicació seria: 

//           " Arranco la funció init desde el body onLoad del HTML i assigno les variables a les rutes.
//             si clico al botó 1, s'executarà la subfunció corresponent a ell que està a l'escolta i
//             interpretarà que la variable "resultat" que ha de mostrar a la pantalla de la calculadora,
//             te que ser la variable resultat mostrada al contenedor de text, que en aquest cas li indicarem
//             especificament, que aquest resultat si es clica a 1, és 1, pero si es clica varies vegades, podem afegir 1's,
//             incrementant a 11, 111, 1111, 11111....     "

//             Potser ens costa entendre perque després del = no podem posar directament el valor 1 tot i anar igual
//             si faig 10 + 10, pero si tu no li sumes el seu mateix valor d'aquesta forma, si intentes posar el 
//             númer 11111111111 o un 1 repetit, veuràs que no l'afegeix. Perque li estas dient que si unicament l'igual
//             és 1, allí només cap un 1, que es el que hi ha, no sap si ha d'afegir al costat del primer resultat mostrat, 
//             un altre resultat mostrat, on el valor sigui 1.

// Aquestes funcions són "Switchejables", podem executarles encadenades. Es a dir, puc executar 1, despres executar suma
// despres executar 1 i despres executar igual. 
un.onclick = function(e){
    resultat.textContent = resultat.textContent  + "1";
}
dos.onclick = function(e){
    resultat.textContent = resultat.textContent  + "2";
}
tres.onclick = function(e){
    resultat.textContent = resultat.textContent  + "3";
}
cuatre.onclick = function(e){
    resultat.textContent = resultat.textContent  + "4";
}
cinc.onclick = function(e){
    resultat.textContent = resultat.textContent  + "5";
}
sis.onclick = function(e){
    resultat.textContent = resultat.textContent  + "6";
}
set.onclick = function(e){
    resultat.textContent = resultat.textContent  + "7";
}
vuit.onclick = function(e){
    resultat.textContent = resultat.textContent  + "8";
}
nou.onclick = function(e){
    resultat.textContent = resultat.textContent  + "9";
}
zero.onclick = function(e){
    resultat.textContent = resultat.textContent  + "0";
}

// Accions d'Operació, Neteja i Resolució.

// De moment encara no hem sortit dels events, no obstant aquí veurem que per exemple, quan cliquem al botó "reset"
// es crida a que el valor sigue nul. No hi ha res a la funció i es reinicialitza la funció superior a la que escolta
// la funcióque escolta. Un reset. No tornara cap valor per pantalla ja que no te cap valor assignat. Això passarà si apretem
// "C" a la calculadora. Quan va a la funció de resetejar, com no te operandos, directament mostra el text content buit. 

// Seguint amb la mateixa línea, aqui ja veiem que quan apretem al botó assignat a la suma, aquest ha d'agafar el primer operador,
// el primer nombre que hem posat i que ha de printar per pantalla el seu contingut i, que ha d'operar amb una suma, especificat el 
// seu procediment a la funció de "resoldre". Farem que quan despres del numero i d'apretar la suma, que faci desapareixer el número que 
// hem posat, per a que al mateix lloc després pugui mostrar l'altre. El llimpiar es declara a la funció de "llimpiar, on aquesta printa
// al lloc l'especificat dintre les comilles, es a dir, no res.

// Aqui podem veure que quan apretem al "=", l'operador B, que és l'actualment mostrat per pantalla, és resoldrà
// amb l'operador A que ja estava guardat preparat per a les següents instruccions. Això ho farà per el "resoldre"
// que apuntarà a la seva funció pertinent on estàn les instruccions d'operació entre "A" operador "B" = n
reset.onclick = function(e){
    resetejar();
}
suma.onclick = function(e){
    operandA = resultat.textContent;
    operacio = "+";
    llimpiar();
}
resta.onclick = function(e){
    operandA = resultat.textContent;
    operacio = "-";
    llimpiar();
}
multiplicacio.onclick = function(e){
    operandA = resultat.textContent;
    operacio = "*";
    llimpiar();
}
divisio.onclick = function(e){
    operandA = resultat.textContent;
    operacio = "/";
    llimpiar();
}
igual.onclick = function(e){
    operandB = resultat.textContent;
    resol();
}

// Aquesta funció que utilitzem a les funcions que escolten, el que fan es que si es torna a clicar al simbol que fa operar
// desapareix de la pantalla. No reseteja. 
function llimpiar(){
    resultat.textContent = "";
  }
  // Aquesta funció reseteja i llimpia els operands guardats i posa el seu valor a 0. Suma els dos valors i si es 0
  // torna espai buit. 
  function resetejar(){
    resultat.textContent = "";
    operandA = 0;
    operandB = 0;
    operacio = "";
  }  


// Aquest és el tros de codi que finalment opera. 
// Tenim una funció que té declarada dintre d'ella una variable, "res". només per a ella. 
// El seu valor es "0". 

            // Switch: Switch és una declaració que evalua una expresió, en aquest cas, "operacio". Veurem que la tenim a la
            //         funció de resetejar. La evalua amb el contingut i el tipus de "case". "Operacio" esta dintre de les subfuncions
            //         que escolten i dintre de cada una d'elles, tenen el botó al que carreguen desde la funció de load. 
            // Case:   El case ens encasella les que haguem posat i indica als operands com operen "+ - * /" Trencarem la operacio una vegada hagi acabat.
                    
// En cas que nosaltres li tornessim a donar a l'igual, el que faria, com no es compleix res i no pot fer switch a cap case, simplement retorna 
// al apretar igual, . Ho podem comprovar a la calculadora fent-ho. 

// Val a dir que per a aquest últim punt m'he ajudat de models de StackOverflow i l'he adaptat al meu cas. 


function resol(){
    var res = 0;
    switch(operacio){
      case "+":
        res = parseFloat(operandA) + parseFloat(operandB);
        break;
      case "-":
          res = parseFloat(operandA) - parseFloat(operandB);
          break;
      case "*":
        res = parseFloat(operandA) * parseFloat(operandB);
        break;
      case "/":
        res = parseFloat(operandA) / parseFloat(operandB);
        break;
    }
    resetejar();
    resultat.textContent = res;
}


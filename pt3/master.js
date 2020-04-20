// Declararem dos variables. Una per al counter i l'altra amb el valor del resultat del math floor i el math random. 
// 
var numeroAdivinar=Math.floor((Math.random()*10)+1);
var contadorRespuestas=0;

function adivinar()
{
    // Crearem una variable que obtindrà el seu valor d'on apunta el ByID, que serà 
    // el primer input referenciat al html i on posarem nosaltres el número d'intents. 
    // En aquest cas he deixat que es puguin posar els que es desitgin. 
    var numeroRespuestas=document.getElementById("numeroRespuestas").value;
    // Li crearem la primera condició. Pensarem lògicament en tot el que no sap la màquina 
    // i tindrem en compte que aquesta ha de saber si té que tenir habilitat o deshabilitat 
    // els seus "inputs" on donem intents i juguem a posar números. 

    // El procés lògic serà: 
    //                       - He d'estar activat per poder permetre a l'usuari introduir un nombre
    //                       - L'usuari no em podrà hackejar introduint intents després de donar a START.
    //                       - Em bloquejo. L'input 2 per jugar estava desactivat. L'activo. Porto l'usuari allí.
    //                       - Una vegada l'introduixe i doni start permetré que introduixque més valors.
    //                       - Quan arribi l'usuari als intents especificats, em bloqujaré tornant al meu estat natural de disabled. 


    // Necessitem que al començar estigui activat, pero de forma natural, desactivat.
    if(document.getElementById("numeroRespuestas").disabled==false){

        // Si el de dalt es correcte, succeirà que "isNumber" demana un valor numeric al input 1. 
        // El compararà mitjançant un comparador boleà AND && amb el valor 0 que tenia per defecte.
        // SI AQUEST ES MAJOR QUE "0"  ( x > 0 ), es a dir, el numero d'intents, succeirà el següent: 

        if(isNumber(numeroRespuestas) && numeroRespuestas>0){
            
            document.getElementById("numeroRespuestas").disabled=true; // Desactiva que pugi introduir mes intents. El seu estat natural, serà VERITAT. 
            document.getElementById("numero").disabled=false;          // Activa l'input 2. Que està desactivat naturalment, ara ÉS FALS. 
            document.getElementById("numero").focus();                 // Deixa a l'usuari posar i introduir valors al input 2 activat. 

        // Aqui ha passat que la primera condició, ja no concorda amb l'IF "pare". Pero ja tenim el focus posat al segon input. Al no complirse 
        // passarà a executar el següent else. Que serà el que operarà amb els valors recollits anteriorment i mostrarà els resultats. 
        }
    }
    
    else{
        // Crearem una variable que obtindrà el valor de "respostes" i les posarà al html. 
        var respuestas=document.getElementById("respuestas").innerHTML;
        // Começarem creant la primera condició després de que s'executi la condició else anterior. 
        // Si el contador de respostes és mes petit que el numero de respostes, s'executarà una segona 
        // condició, com abans. 
        if(contadorRespuestas<numeroRespuestas)
        {
            // Declararem una variable per agafar el valor introduit per l'usuari.
            // Es a dir, la variable número fa referencia a un valor introduit i referenciat al html per l'usuari. 
            var numero=document.getElementById("numero").value;
            // Aqui generem la condicií dintre de la condició primaria. Li diem que numero ha de ser un número. 
            // Aqiest ha de ser comparat amb una porta AND com abans. Si es compleix la condició de la porta, en la 
            // qual el número introduit per nosaltres, es mes gran que zero, ha de comparar aquest valor obtingut 
            // amb 100, ja que es el màxim que li hem introduit. Si es més petit que aquest, es sumarà 1 punt al contador
            // de respostes. 
            if(isNumber(numero) && numero>0 && numero<100)
            {
                // El contador augmentarà a 1 
                contadorRespuestas+=1;

                if(numero>numeroAdivinar)
                {
                   
                    respuestas+="<br>"+numero+" - El número que busques és inferior";
                    document.getElementById("numero").focus();
                }else if(numero<numeroAdivinar){
                   
                    respuestas+="<br>"+numero+" - El número que busques és superior";
                    document.getElementById("numero").focus();
                }else{
                 
                    respuestas+="<br><span class='acertado'>"+numero+" - HAS ENCERTAT!!</span>";

                    fin()
                }
               
                document.getElementById("numero").value="";
            }else{
                respuestas+="<br><span class='error'>"+numero+" - Té que ser un valor comprès entre l'1 i el 10 !</span>";
            }
        }else{
            respuestas+="<br><span class='fin'>NO HAS PERDUT!! El número era el "+numeroAdivinar+"</span>";

            fin()
        }

        // ponemos nuevamente todas las respuestas
        document.getElementById("respuestas").innerHTML=respuestas;
    }

    // devolvemos false para que el formulario no envie los valores
    return false;
}

// Funcion que se ejecuta al finalizar el juego
// ya sea por haber descubierto el numero o por finalizar el numero de
// intentos
function fin()
{
    // deshabilitamos el casilla de entrar el numero, y el
    // boton de enviar
    document.getElementById("numero").disabled=true;
    document.getElementById("btnEnviar").disabled=true;
}

// Simple función para validar un numero
function isNumber(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}

location.reload()
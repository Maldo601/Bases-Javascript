                                            /* A J A X */


/* Primer ens encarregarem de tirar el log de consola per que ens verifiqui que tot es correcte
   amb el missatge que li donessim */

   console.log('correcte');

/* Si obrim ara la consola WEB després de guardar, veurem que si està ven vinculat
   al html, ens hauria de sortir el missatge de correcte per consola.
    
   Es pot trobar la imatge de verificació obrint index.html per navegador, he penjat alli la img */


/* Ara el que farem serà crear un selector al botó del index.html i que aquest detecté un event que passarà.
   L'event que passarà serà que quan ocurrixque el click, s'executarà una funció que crearem nosaltres amb el 
   nom que volguem. Jo li he posat portaDades. Després la declararem.   */

    document.querySelector('#boton').addEventListener('click', portaDades);

    function portaDades(){

/* Crearem un console log per a que ens avise cuan entre a la funció, nomes per verificar
   ara mateix si va correctament i proseguir. Despues les podem comentar totes */

        console.log('dintre de la funció');                   

/* Crearem una constant xhttp que faci una petició per HTTP, ja que anem per navegador per buscar
   les dades. Quan programem requerim indicarli absolutament tot el que te que fer. Desde l'acció 
   més minima. Veurem els Open i Send, que el que fara el primer es enviar un GET per poder accedir
   al fitxer .json i fer lectura de les seves dades.  */

        const xhttp = new XMLHttpRequest();

        xhttp.open('GET', 'datos.json', true);

        xhttp.send();

/* Una vegada fet l'anterior, la ultima serà indicarli que quan xhttp llegeixqui un canvi d'estat,
   es a dir, suposo que el retorn validat de la petició GET, executi la seguent funció: */

        xhttp.onreadystatechange = function(){

/* Aixo es un comparador AND. Retorna el valor si es requereix el que demana. No entenc massa be com
   va i perque està aqui, pero se que va amb let a datos.json i ho compara amb el JSON.parse. */

            if(this.readyState == 3 && this.status == 200){

                console.log(this.responseText); 
/* Aquest es l'array d'objectes del json. L'ultim console log es per mostrarlos per consola. */
                let datos = JSON.parse(this.responseText);
                console.log(datos);
// Ara li passarem amb un for els diferents items dels datos.json i ho vinculem al ID de resposta
// que hem establert al formulari del html. Ho farem mitjançant el querySelector i li passarem el ID de nou.

                for(let item of datos){
                    let res = document.querySelector('#res');
                    //Aquest res.innerHTML es per ferli un cleaning i que les respostes
                    //deixin de propagarse cap avall a l'infinit. Es com un STOP cuan acaba de 
                    //passarles. Comença en valor 0 per cada resposta que porte.
                    res.innerHTML = '';
                    //Ara crearem cicles, on primer printara el nom i despres el cognom. Cuidado en 
                    //les comilles Per fer este tipo de lectura usarem +=.
                for(let item of datos){
                    res.innerHTML += `
                    <tr>
                    <td>${item.Nom}</td>
                    <td>${item.Cognom}</td>
                    </tr>
                    `
                    
                };
                }
            }
        }
    }
   
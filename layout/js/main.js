/**
 *  Manejos de flujo
 */

// let num = 1;

 // switch (num) {
 //
 //  case 1:
 //     console.log(1);
 //  break;
 //
 //  case 2:
 //   console.log(2);
 //  break;
 //
 //  case 3:
 //    console.log(3);
 //  break;
 //
 //  default:
 //    console.log(num);
 //  break;
 // }
 //

/**
 *  el if else en termino de rendimiento es mucho mejor que el switch
 */

// if(num == 1) console.log(num);
//
// else if (num == 2) console.log(num);
//
// else if (num == 3) console.log(num);
//
// else console.log(num);

/*
  nota: el if else, do while, for while y switch

    TODOS ELLOS SON SENTENCIAS de control de flujo osea controlan el flujo el programa
 */




 /*
  Ahora vamos a ver setencia de control de errores
 */



try{
  // en try no contepla los errore de syxtanci
  throw {
    error: "nombreDelError",
    info: "informacion de Error"
  };
} catch(error) {
  console.log(typeof error);
  console.log(error);
  // esto de aqui es un catch incodicional
} finally {
  console.log('siempre me ejecuto :D');
  //tiene prioridad ante todo
}

// un catch condiciona => es di hay un if else nada mas



const sendButton = document.getElementById('enviar-nota');

const divResultado = document.getElementById('resultado');
const divMesage = document.getElementById('mesage');
const divBtn = document.getElementById('btnModel');
const divModal = document.querySelector('.modal');

let resultado,mensaje;

sendButton.addEventListener('click', () => {
  try{
    let element = document.getElementById('nota-alumno');
    let preResultado = parseInt(element.value);
    if(isNaN(preResultado)){
      throw "gracioso000";
    }
    resultado = verificarMesaje(8,6,preResultado);
    mensaje = verificarAprobacion(preResultado);
  } catch(error) {
    resultado = "¿Sos Gracisito?";
    mensaje = "hast intentado hacker el sitio we3b"
  }
  divModal.style.display = "block";
  abrirModel(resultado, mensaje)
});

divBtn.addEventListener('click', () => {
  divModal.style.display = "none";
});



const abrirModel = (res, msg) => {
  divResultado.innerHTML = res;
  divMesage.innerHTML = msg;
}




const verificarAprobacion = (pre) => {
  let resultado;
  switch (pre){
    case 1: resultado = "que bruto eres como una piedra"
    break;
    case 2: resultado = "malisimo para mi materia "
    break;
    case 3: resultado = "malo en mi materia"
    break;
    case 4: resultado = "te falta mucho"
    break;
    case 5: resultado = "regular tirando para abajo"
    break;
    case 6: resultado = "regular"
    break;
    case 7: resultado = "bueno paro falta para mejorar"
    break;
    case 8: resultado = "Muy bien!"
    break;
    case 9: resultado = "Excelente!"
    break;
    case 10: resultado = "tu Coño de tu madre eres un pinche genio, insuperable"
    break;
    default: resultado = null
    break;
  }
  return resultado;
}


const verificarMesaje = (nota1, nota2, resultadoPrevio) => {
  let promedio = (nota1 + nota2 + resultadoPrevio) / 3;
  if(promedio >= 7) {
    return '<span style="color:green;">has aprovado</span>';
  }
  return '<span style="color:red;">has reprovado</span>';
}

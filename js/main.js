function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

// Busca a lista de teclas
const listaTeclas = document.querySelectorAll('.tecla');
const inputTel = document.querySelector('input[type=tel]');

for  (let x =0; x <= listaTeclas.length; x++){
    
    const tecla = listaTeclas[x];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log(instrumento);
    console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    
    let contador = 0;

    function incrementarContador(){
        contador++;
        console.log('Contador: ' + contador)
    }

    const botao = document.querySelector('.tecla_pom')
    botao.onclick = incrementarContador()

    console.log(botao);    
};

/*s
while(
    listaTeclas[0].onclick = tocaSom;

);

document.querySelector(listaTeclas[x]).play();
    document.querySelector(listaTeclas.id).play();
    listaTeclas[0].onclick = tocaSom;
*/
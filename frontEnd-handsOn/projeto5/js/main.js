function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

   if(elemento != null && elemento.localName === 'audio'){
       elemento.play();
   }else{
    console.log('Não encontrado Elemento/Seletor')
   }
};

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
    
    tecla.onkeydown = function (evento){
        console.log(evento);
        if(evento.code === 'Enter' || evento.code == 'Space'){
            tecla.classList.add('ativa');
        };
    };
    
    tecla.onkeyup = function (evento){
        if(evento.code === 'Enter' || evento.code == 'Space'){
        tecla.classList.remove('ativa');
        };
    };
};

   
   
 
function contar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passos = document.getElementById('passos');
    var f = Number (fim.value);
    var p = Number (passos.value);
    var i = Number(inicio.value);
    var tela = document.getElementById('mostrar');
    tela.innerHTML = 'numeros encontrados são ';
    var quantNum = 0;
    if(f < i){
        var c = f
        for(f;f< i;i-= p){
            tela.innerHTML += `${i} , `;
            quantNum++
            }
            tela.innerHTML += `possuindo ${quantNum} numeros entre ${inicio.value} e ${fim.value} indo de ${passos.value} em ${passos.value}`
    }
   else if(f == 0 )
   {
   tela.innerHTML = 'Não foi possivel encontar nenhum numero'
    alert('final inválido')
   }else if( p<= 0 || p == 0){
    tela.innerHTML = 'Não foi possivel encontar nenhum numero'
    alert('não possui passos suficientes')
   }else 
   {
        for(i;i< f;i+= p){
            tela.innerHTML += `${i} , `;
            quantNum++
            }
            tela.innerHTML += `possuindo ${quantNum} numeros entre ${inicio.value} e ${fim.value} indo de ${passos.value} em ${passos.value}`
    }
}
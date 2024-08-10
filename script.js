//Contador de turnos
let turn = 0
//Posiciones de la tabla
const table = []
const markedTable = []
//Bucle que mantiene el juego iniciado
let started = true
//Obtenemos la marca de las casillas para cambiar su estado
const mark = document.getElementById('mark')
//**************************************************/
function btnClicked(e, i) {
    //Verifica si el juego ya se ha detenido
    if (!started || table[i]){return}
    //Aumentamos cada turno para saber quien esta jugando
    turn++
    //Obtenemos el objeto del boton
    const btn = e.target
    //Actualiza el estado de la tabla 
    table[i] = turn % 2 ? 'O' : 'X'
    const svgO = `<svg class="mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`
    const svgX = `<svg class="mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="white" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>`
    btn.innerHTML = turn % 2 ? svgO : svgX
    endGame(turn,table,i)
}
function endGame(turn, table, i) {
    const resultTitle = document.getElementById('result-title');
    
    if (WinGame()) {
        resultTitle.innerText = `Ha ganado ${table[i]}`;
        resultTitle.classList.remove('hidden'); //Muestra el contenedor
        resultTitle.classList.add('animate'); //Aplica la animación
        started = false; // Detiene el juego
    } else if (turn >= 9) {
        resultTitle.innerText = `Empate`;
        resultTitle.classList.remove('hidden'); //Muestra el contenedor
        resultTitle.classList.add('animate'); //Aplica la animación
        started = false; //Detiene el juego
    }
}
//Funcion general que comprobara si el juego ha terminado o no
function WinGame(){
    if(table[0] == table[1] && table[0] == table[2] && table[0]){
        return true
    }else if(table[3] == table[4] && table[3] == table[5] && table[3]){
        return true
    }else if(table[6] == table[7] && table[6] == table[8] && table[6]){
        return true
    }else if(table[0] == table[3] && table[0] == table[6] && table[0]){
        return true
    }else if(table[1] == table[4] && table[1] == table[7] && table[1]){
        return true
    }else if(table[2] == table[5] && table[2] == table[8] && table[2]){
        return true
    }else if(table[0] == table[4] && table[0] == table[8] && table[0]){
        return true
    }else if(table[2] == table[4] && table[2] == table[6] && table[2]){
        return true
    }
    return false
}
//Obtenemos el contenido de cada boton para modificarlos
//Pd:Se deben iterar dichos botones
document.querySelectorAll('#btn')
    .forEach((e, i) => e.addEventListener('click',(e) => btnClicked(e, i)))
// Función para reiniciar el juego
function resetGame() {
    turn = 0;
    table.fill(null);
    started = true;
    const resultTitle = document.getElementById('result-title');
    resultTitle.innerText = '';
    resultTitle.classList.add('hidden'); //Oculta el contenedor
    resultTitle.classList.remove('animate'); //Remueve la animación
    document.querySelectorAll('#btn').forEach(btn => btn.innerHTML = '');
}
let contadorOp =0;

function log(mensaje, tipo = 'normal'){
    const logElement = document.getElementById('log');
    const timeStamp= new Date () .toLocaleTimeString();
    const entry = document.createElement ('div');
    entry.className =`log-entry ${tipo}`;
    entry.textContent = `[${timeStamp}] ${mensaje}`;
    logElement.appendChild(entry);
    logElement.scrollTop = logElement.scrollHeight;
}

function prepararCapuchino() {
    const operacionId = ++contadorOp;
    log(`[Op ${operacionId}] Iniciando orden de Capuchino`, 'start');
    setTimeout(() =>{
        log(`  Capuchino en marcha...`, 'process');
    }, 2000);
    setTimeout(() =>{
        log(` ¡Orden de Capuchino Lista!`, 'complete');
    }, 4000);
}

function prepararMoka(){
    const operacionId =++contadorOp;
    log(` [Op ${operacionId}] Iniciando orden de Moka`);
    log(`Moka en marcha...`);
    setTimeout(() =>{
        log(`¡Orden de Moka Lista!`)

    }, 1000);
    
}

function prepararAmericano(){
    const operacionId=++contadorOp;
    log (`[Op ${operacionId}] Iniciando orden de Americano`);
    setTimeout(() =>{
        log(`Americano en marcha...`)
    }, 3000);
    setTimeout(()=>{
        log(`¡Orden de Americano Lista!`)
    }, 6000);


}

function prepararLatte(){
    const operacionId=++contadorOp;
    log(`Op [${operacionId}] Iniciando orden de Latte`);
    setTimeout(()=>{
        log(`Latte en marcha...`)
    },2000);
    setTimeout(()=>{
        log(`¡Orden de Latte Lista!`)
    },5000);

}

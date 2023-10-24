AOS.init();

const dataDoEvento = new Date ("Dec 12, 2023 19:00:00",);
const timeStampDoEvent = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvent - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);


//     const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24)); //conta referente aos minutos, horas e dias (na ordem) retorna
//     const horasAteOEvento = (distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60); //vai retornoar o resto da divisão. cálculo dos dias
//     const minutosAteOEvento = (diasAteOEvento % (1000 * 60 * 60)) / (1000 * 60)
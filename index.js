import { onEvent, startServer } from 'soquetic';
import { SerialPort } from 'serialport';

const port = new SerialPort({
    path: 'COM5', 
    baudRate: 115200,
});

onEvent('mandarDatos', (data)=>{
    let datos = data;
    port.write(`${datos}\n`, (err) => {console.log(`Enviando mensaje: ${datos}`)});
})

startServer();
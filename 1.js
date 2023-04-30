
const tempC = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
alert(`Температура в градусах Цельсия ${tempC.toFixed(2)} Температура в градусах Фаренгейта ${toF(tempC)}. `);

function toF(c) {
    return (9/5*c + 32).toFixed(2);    
 }
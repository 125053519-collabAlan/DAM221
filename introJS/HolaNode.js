
console.log("--- HOLA MUNDO NODE ---");
let edad1=20;
let edad2=7;
console.log("Edad promedio: " );
console.log((edad1 + edad2)/2);





console.log(" --- Medir Pasos --- ");

console.time("miProceso")
for(i=0;i < 1000000000; i++){}
console.timeEnd("miProceso")
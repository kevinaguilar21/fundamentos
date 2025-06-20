console.log("for");
let marcas_celulares = ['aple' , 'samsung' , 'xiamo' , 'zte' , 'nokia'];


console.warn("--for tradicional--");
for  (let i=0; i < marcas_celulares.length; i++){
    console.log(marcas_celulares[i]);
   
}

console.warn("--for in--");

    for(let i of marcas_celulares) {
       console.log(marcas_celulares);
       
 }   
    
console.warn("--for of--");

    for(let marcas_celulares of marcas_celulares) {
       console.log(marcas_celulares);
       
 }   
    
 //foreach 
 console.warn("--forEach--");
 marcas_celulares.forEach(function(marcas_celulares, index){
console.log(`${index} - ${marcas_celulares}`);
 });

 console.warn("--forEach simple--")
  marcas_celulares.forEach(()=> {
   console.log("Hola Mundo");
  });
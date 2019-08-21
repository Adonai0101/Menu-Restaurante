const boton = document.querySelector('.boton');
console.log(boton);
boton.addEventListener('click',function(){
    
    document.getElementById('cont-Menu').classList.toggle('activar')
});

document.addEventListener('click',function(){
    console.log("A nu maa si funciona");
})
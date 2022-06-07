let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("hizo click");
    let nombre=document.getElementById("nombre").value;
    console.log(nombre);
    let apellido=document.getElementById("apellido").value;
    console.log(apellido);
    let acudiente=document.getElementById("acudiente").value;
    console.log(acudiente);
    let edad=document.getElementById("edad").value;
    console.log(edad);
    let sexo=document.getElementById("sexo").value;
    console.log(sexo);
    let fecha=document.getElementById("fecha").value;
    console.log(fecha)
    let direccion=document.getElementById("direccion").value;
    console.log(direccion)
    let barrio=document.getElementById("barrio").value;
    console.log(barrio)
    let estrato=document.getElementById("estrato").value;
    console.log(estrato)
}

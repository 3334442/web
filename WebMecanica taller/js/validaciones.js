//Validando la contraseña
function validar() {
    var resp;
    resp=validarContraseña();
    if (resp==false) {
        return false;
    }
    return true;
}
function validarContraseña(){
    let password=document.getElementById("u.contrasena").value;
    let password2=document.getElementById("u.contrasena2").value;
    if (password==password2) {
        return true;
    } else {
        alert('La Contraseñas Incorrectas, Verifique que su datos esten en Orden!!');
        return false;
    }    
}

//Validando el Rut del Usuario
function validarRut() {
    var largoRut=document.getElementById("inpRut").value.trim().length;
    console.log('Largo Rut:'+largoRut);
    if (largoRut==0 || largoRut>10 || largoRut<10) {
        alert('El Rut es Incorrecto, Revise por Favor su Rut Adjuntado!!');

    }
    var rut=document.getElementById("inpRut").value;
    var num=3;var suma=0;
    for (let index = 0; index < 8; index++) {
        var caracter= rut.slice(index,index+1);
        console.log(caracter+ " x "+num);
        num=num-1;
        if (num==1) {
            num=7;
        }
        suma=suma+(num*caracter);
    }
    console.log('Total:'+suma);
}

//Validando Impresion de pagina Boton
function impresion() {
    print()
}

//Validando alenta de envia de Datos
function jj() {
    alert("Su mensaje para contactarnos a sido adjuntado 'Pronto entraremos en contacto con usted!!'")
}


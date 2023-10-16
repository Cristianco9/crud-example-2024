function validateData() {

    var userId = document.getElementById("userName").value;
    var userPassword = document.getElementById("password").value;
    
    if (userId === "" || userPassword === "") {
        alert("Por favor llene los datos");
        return false;
    } else {
        alert("Datos enviados");
        return true;
    }
}
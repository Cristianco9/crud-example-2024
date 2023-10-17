function validateData() {

    var userId = document.getElementById("userName").value;
    var userPassword = document.getElementById("password").value;
    
    if (userId === "" || userPassword === "") {
        alert("Por favor llene los datos");
        return false;
    } else if (userId === "root" || userPassword === "root"){
        window.location.href = "../../inputData/inputData.html"
        return false;
    } else {
        alert("Datos incorrectos");
        return false;
    }
}
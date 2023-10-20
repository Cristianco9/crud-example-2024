function captureData() {

    var cardNumber =  document.getElementById("number").value;
    var cardName =  document.getElementById("name").value;
    var cardDate =  document.getElementById("date").value;
    var cardCode =  document.getElementById("code").value;
    var cardId =  document.getElementById("id").value;

    if (cardNumber == "" && cardName == "" && cardDate == "" && cardCode == "" && cardId == "") {
        alert("Por favor ingrese Todos los datos de su tarjeta");
    } else {

        const userCard = {
            number : cardNumber,
            name : cardName,
            date : cardDate,
            code : cardCode,
            id : cardId
        };
        console.log(userCard);
    };
    alert("Tarjeta guardada");
};
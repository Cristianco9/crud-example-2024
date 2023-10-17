document.addEventListener("DOMContentLoaded", function () {

    const userData = document.getElementById("form");

    userData.addEventListener("submit", function(event) {
        event.preventDefault();

        const numberCard = document.getElementById("number").value;
        const ownerName = document.getElementById("name").value;
        const cardDate= document.getElementById("date").value;
        const cardCode = document.getElementById("code").value;
        const ownerId = document.getElementById("id").value;
        
        if ( !numberCard || !ownerName || !cardDate || !cardCode || !ownerId ) {
            alert("Por favor llene los datos");
        } else {
            const cardData = {
                number:numberCard,
                name: ownerName,
                date: cardDate,
                code: cardCode,
                id: ownerId
            };

            console.log(cardData);
            alert("Datos guardados");
        }
    });
});
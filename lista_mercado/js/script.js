const cardContent = window.document.getElementsByClassName("card-content")[0];

console.log(cardContent);

function appendComponent(){
    var li = window.document.createElement("li");
    // !constrói
    li.setAttribute("id", 1);
    li.setAttribute("class", "card-content-item");

    // !constrói itemdel
    var btnClose = window.document.createElement("div");
    btnClose.setAttribute("class", "item-del");

    // !constróis span
    var spanClose = window.document.createElement("span");
    spanClose.setAttribute("class", "material-symbols-outlined");
    spanClose.innerHTML = "close";

    li.appendChild(btnClose);

    btnClose.appendChild(spanClose);

    cardContent.appendChild(li);
    //li.appendChild
}

appendComponent();
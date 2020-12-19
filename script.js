const input = document.querySelector(".add");
const btnSubmit = document.getElementsByTagName("button")[0];
const list = document.querySelector(".list");

function keyDownOnInput(e) {
    if (e.key == "Enter") {
        clickTheButton();
        input.value = "";
    }
}

function clickTheButton() {
    if (input.value == "") return;
    getElement();
}


function getElement() {
    let text = input.value;

    const li = document.createElement("li");
    const del = document.createElement("button");
    const edit = document.createElement("button");

    del.textContent = "Delete";
    edit.textContent = "Edit";
    del.setAttribute("class", "del");
    edit.setAttribute("class", "edit");

    li.innerHTML = `<span>${text}</span>`;
    li.appendChild(del);
    li.appendChild(edit);

    list.appendChild(li);
    input.value = "";
}

function delElement(e) {
    let confirmation = confirm(`${e.target.parentElement.firstElementChild.textContent} Yakin mau dihapus?`);
    if (confirmation == false) { return; }
    let li = e.target.parentElement;
    e.target.parentElement.parentElement.removeChild(li);
}

function editElement(e) {
    let textBaru = prompt(`${e.target.parentElement.firstElementChild.textContent} Mau diubah?`);
    if (textBaru == null) { return; }
    e.target.parentElement.firstElementChild.textContent = textBaru;
}

document.addEventListener("click", function (e) {
    if (e.target.className == "del") {
        delElement(e);
    }

    if (e.target.className == "edit") {
        editElement(e)
    }
});


btnSubmit.addEventListener("click", clickTheButton);
input.addEventListener("keydown", keyDownOnInput);
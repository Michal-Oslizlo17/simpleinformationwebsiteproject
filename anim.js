const text = "Powtórzenie danych - Projekt HTML";
let index = 0;

const typeWriter = () => {
    if (index < text.length) {
        document.getElementById("header-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(erase, 1000);
    }
};

const erase = () => {
    if (index > 0) {
        document.getElementById("header-text").innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(erase, 100);
    } else {
        setTimeout(typeWriter, 1000);
    }
};

typeWriter();

document.querySelectorAll("input[type='text']").forEach(input => {
    input.addEventListener("focus", function () {
        this.style.color = "red";
    });
    input.addEventListener("blur", function () {
        this.style.color = "black";
    });
});
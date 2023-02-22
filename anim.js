const text = "Powtórzenie danych - Projekt HTML <-----> Ta strona zawiera powtórzenie o podstawowych językach programowania stron internetowych, takich jak HTML, CSS, PHP i JavaScript, a także opcji multimedialnych. Znajdziesz tu opisy składni i zasad działania tych języków oraz przykłady kodów, które pomogą Ci zrozumieć jak działa tworzenie stron internetowych. Dodatkowo, strona przedstawi Ci różne opcje multimedialne, takie jak zdjęcia, filmy, dźwięki czy animacje, oraz jak je stosować na stronie internetowej. To idealne miejsce dla początkujących, którzy chcą pogłębić swoją wiedzę na temat tworzenia stron internetowych.";
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
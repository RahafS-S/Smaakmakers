// Klik op "Schrijf je in" bij een workshop: kies die workshop in het formulier

function formatPrijs(prijs) {
    return `€ ${prijs.toFixed(2).replace(".", ",")}`;
}

console.log(formatPrijs(45));    // € 45,00
console.log(formatPrijs(39.5));  // € 39,50
function KiesWorkshop(workshopId,workshopTitle,workshopDate,workshopPrijs) {
document.querySelector("#workshop").value = workshopId;
    document.querySelector("#gekozen").textContent = `Je keuze :  ${workshopTitle}  op   ${workshopDate} .De prijs is ${formatPrijs(workshopPrijs)};`
};
const knoppen = document.querySelectorAll(".card a");
knoppen[0].addEventListener("click", function () {
    KiesWorkshop(1, "Verse pasta maken", "zaterdag 5 december", 45);
});

knoppen[1].addEventListener("click", function () {
    KiesWorkshop(2, "Sushi voor beginners", "zaterdag 12 december", 55);
});
knoppen[2].addEventListener("click", function () {
    KiesWorkshop(3, "Brood bakken", "zaterdag 19 december", 39.5);
});
knoppen[3].addEventListener("click", function () {
    KiesWorkshop(4, "Vegetarisch kerstdiner", "zondag 20 december", 65);
});
knoppen[4].addEventListener("click", function () {
    KiesWorkshop(5, "Thaise curry's", "zaterdag 9 januari", 49);
});
knoppen[5].addEventListener("click", function () {
    KiesWorkshop(6, "Taarten en gebak", "zaterdag 16 januari", 42.5);
});

function berekenTotaal(prijs, aantal) {
    let totaal = prijs * aantal;
    return formatPrijs(totaal);
}

// Zet de prijs in het verborgen veld zodra er een workshop gekozen is

document.querySelector("#workshop").addEventListener("change", function () {
    let keuze = document.querySelector("#workshop").value;

    if (keuze == "1") {
        document.querySelector("#prijs").value = 45;
    } else if (keuze == "2") {
        document.querySelector("#prijs").value = 55;
    } else if (keuze == "3") {
        document.querySelector("#prijs").value = 39.5;
    } else if (keuze == "4") {
        document.querySelector("#prijs").value = 65;
    } else if (keuze == "5") {
        document.querySelector("#prijs").value = 49;
    } else if (keuze == "6") {
        document.querySelector("#prijs").value = 42.5;
    }
});

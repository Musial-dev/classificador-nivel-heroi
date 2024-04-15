window.addEventListener("DOMContentLoaded", (event) => {
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            let nomePersonagem = document.getElementById("nomePersonagem").value;
            let xpHeroi = document.getElementById("xpHeroi").value;
            let nivel;

            switch (xpHeroi) {
                case (xpHeroi <= 1000):
                    nivel = "Ferro";
                    break;
                case (xpHeroi > 1000 && xpHeroi <= 2000):
                    nivel = "Bronze";
                    break;
                case (xpHeroi > 2000 && xpHeroi <= 5000):
                    nivel = "Prata";
                    break;
                case (xpHeroi > 5000 && xpHeroi <= 7000):
                    nivel = "Ouro";
                    break;
                case (xpHeroi > 7000 && xpHeroi <= 8000):
                    nivel = "Platina";
                    break;
                case (xpHeroi > 8000 && xpHeroi <= 9000):
                    nivel = "Ascendente";
                    break;
                case (xpHeroi > 9000 && xpHeroi <= 10000):
                    nivel = "Imortal";
                    break;
                case (xpHeroi >= 10001):
                    nivel = "Radiante";
                    break;
                default:
                    nivel = "Ferro";
                    break;
            }
            alert(`O Herói de nome ${nomePersonagem} está no nível ${nivel}`)
        })
    }
});
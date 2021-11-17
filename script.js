
// creation d'une variable qui selectionne tout les boutons
let buttons = document.querySelectorAll("button");

// creation de la boucle avec les conditions
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let joueur = buttons[i].innerHTML;
        let robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";
// creation des conditions
        if (joueur === robot) {//si le robot choisi pareil que le joueur donc egalité
            resultat = "Egalité 🤝🏻"
        } else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")) {
            resultat = "You Win 🏆"; 
            //si le joueur choisi les trois posibilitées gagnante par rapport au robot, donc je gagne
        } else {
            resultat = "You Lose ☠️ ";
        }
        console.log(buttons[i].innerHTML)

        
        document.querySelector(".resultat").innerHTML = `
  Joueur : ${joueur} </br>
  Robot : ${robot}</br>
  ${resultat}`

    });
};
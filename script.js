
// creation d'une variable qui selectionne tout les boutons
let buttons = document.querySelectorAll("button");
let sonV = document.getElementById("sound1")
let sonD = document.getElementById("sound2")
let sonE  = document.getElementById("sound3")
// creation de la boucle avec les conditions
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let joueur = buttons[i].innerHTML;
        let robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";
// creation des conditions
        if (joueur === robot) {//si le robot choisi pareil que le joueur donc egalité
            resultat = `<div id="resultat" class="resultat p-5 border border-dark text-center" >
            <img class="gif" src="img/egalite.gif" alt="égalité"></div>`;
            sonE.play()
        } else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")) {
            resultat = `<div id="resultat" class="resultat p-5 border border-dark text-center" ><source src="audio/ff7mp3.mp3" type="victoire"></audio>
            <img class="gif" src="img/baby-yes.gif" alt="gagné"></div>`; 
        // sonV.play()
            //si le joueur choisi les trois posibilitées gagnante par rapport au robot, donc je gagne
        } 
        else {
            resultat = ` <div id="resultat" class="resultat p-5 border border-dark text-center" >
            <img class="gif" src="img/lose.gif" alt="perdu">
                </div>`;
                sonD.play()
        }
        console.log(buttons[i].innerHTML)

        
        document.querySelector(".resultat").innerHTML = `
  Joueur : ${joueur} </br>
  Robot : ${robot}</br>
  ${resultat}`

    });
};
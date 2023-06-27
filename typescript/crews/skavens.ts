import Crew from "../crew"

export const Skavens : Crew = {
    name: "Skavens",
    special: "Sournois: vous pouvez retourner un dé obtenu lors d'une attaque en surnombre",
    profiles: [
        {
            name: "Rats minuscules ",
            size: 0,
            special: "Agile : + 5cm de mouvement"
        },
        {
            name: "Tromblon",
            size: 1,
            special: "+ 1 aux dégâts et Tromblon(2) "
        },
        {
            name: "Lancier",
            size: 1,
            special: "Si un 4 sur le lancer, peut repousser de 5cm à l'opposé"
        },
        {
            name: "Epée",
            size: 1,
            special: "Agile : + 5cm de mouvement"
        },
        {
            name: "Masse",
            size: 2,
            special: " + 1 aux dégâts"
        },
        {
            name: "Magicien",
            size: 2,
            special: "Magicien, +1D au combat"
        },
        {
            name: "Rat ogre",
            size: 3,
            special: "+ 1 aux dégâts, +1D au combat"
        },
       
    ]
}
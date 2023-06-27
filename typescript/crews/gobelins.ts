import Crew from "../crew"

export const Gobelins : Crew = {
    name: "Gobelins",
    special: "Armure: Pour chaque touche adverse, le joueur peut relancer un dé.",
    profiles: [
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
            name: "Masse & Hache à 2 mains",
            size: 1,
            special: " + 1 aux dégâts"
        },
        {
            name: "Magicien",
            size: 1,
            special: "Magicien, +1D au combat"
        },
        {
            name: "Troll",
            size: 3,
            special: "+ 1 aux dégâts, force l'adversaire de relancer 1 dé réussi "
        },
       
    ]
}
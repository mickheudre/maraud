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
        
    ],
    grimoire: {
        name: "Toximancie",
        spells: [
            {
                name: "Nuage Toxique",
                when: "Phase de plan après initiative",
                duration: "1 tour",
                range: "15cm",
                effect: "Placer un socle de 25mm à portée. Toutes figurines (à part les petits rats) à 5cm du socle ont une Taille -1 pour le mouvement et le combat"
            },
            {
                name: "Nuage Sombre",
                when: "Action de décor",
                duration: "1 tour",
                range: "15cm",
                effect: "lacer un socle de 25mm à portée. Aucune figurine à 5cm du socle n'a de ligne de vue. Les skavens gagnent automatiquement la capacité Sournois sans avoir besoin du surnombre sur les figurines à 5cm du socle."
            },
            {
                name: "Nuage Frénétique",
                when: "Début de phase de combat ",
                duration: "1 tour",
                range: "15cm",
                effect: "Placer un socle de 25mm à portée. Toutes figurines à 5cm du socle ont +1D pour le combat."
            }
            
        ]
    }
}
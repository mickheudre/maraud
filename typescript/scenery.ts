export interface Scenery {
    name: String,
    enabledInMelee: Boolean, 
    blockRunning: Boolean,
    bonusPlan: Boolean,
    effect?: String
}

export  const sceneries : Array<Scenery> = [
    {
        name: "Forets",
        enabledInMelee: true,
        blockRunning: true,
        bonusPlan: false,
        effect: "Se Cacher: la figurine gagne la possibilité de faire relancer 1 dé à un adversaire qui l'attaque avec une action de décor et/ou de corps à corps. En contrepartie, son adversaire peut lui faire relancer un dé."
    },
    {
        name: "Ruines",
        enabledInMelee: false,
        blockRunning: true,
        bonusPlan: false,
        effect: "Lancer de Pierre (Taille +1)"
    },
    {
        name: "Champ",
        enabledInMelee: true,
        blockRunning: true,
        bonusPlan: true,
        
    },
    {
        name: "Haies",
        enabledInMelee: true,
        blockRunning: false,
        bonusPlan: false,
        effect: "Passer: se retrouve de l'autre coté du décor, au plus proche de son point de départ."
    },
    {
        name: "Échelles",
        enabledInMelee: false,
        blockRunning: false,
        bonusPlan: false,
        effect: "Monter/Décendre: La figurine est placé en haut/en bas de l'échelle (si la place est libre)"
    }
]
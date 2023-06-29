import Spell from "./spell";

export default interface Grimoire {
    name: string,
    spells: Array<Spell>
}
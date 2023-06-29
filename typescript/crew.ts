import Grimoire from "./grimoire";
import Profile from "./profile";

export default interface Crew {
    name: string,
    special: string,
    profiles: Array<Profile>,
    grimoire: Grimoire
}
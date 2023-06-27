import Profile from "./profile";

export default interface Crew {
    name: string,
    special: string,
    profiles: Array<Profile>
}
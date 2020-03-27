import { Spell, Focus, Power, Class, Background, Talent, Armor, Grenade, Weapon, Gear } from "./item";

export interface FAGEActorData extends ActorData {
    abilities: {
        acc: Ability;
        com: Ability;
        con: Ability;
        dex: Ability;
        fig: Ability;
        int: Ability;
        per: Ability;
        str: Ability;
        wil: Ability;
    }
}

interface Ability {
    value: number;
    advancements: number;
    isPrimary: boolean;
    label: string;
    focuses: Focus[];
}

export interface FAGEActorData extends BaseEntityData, Spell, Power, Class, Background, Talent, Armor, Grenade, Weapon, Focus, Gear {

}

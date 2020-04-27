import { Spell, Focus, Power, Class, Background, Talent, Armor, Grenade, Weapon, Gear, Currency, FAGEItemData } from "./item";

export interface CommonTemplate {
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
    };

    hp: PointValue;
    mp: PointValue;
    spellpower: number;
    speed: {
        ground: number;
        fly: number;
        units: string;
    };
    defense: number;
    armor: {
        type: string;
        value: number;
        penalty: number;
    };
    biography: string;
    race: string;
    weaponGroups: [];
    talents: [];
    specializations: [];
}

export interface FAGECharacterTemplate {
    background: string;
    socialClass: string;
    class: string;
    level: number;
    xp: PointValue;
    currency: Currency;
}

export interface FAGEAdversaryTemplate {
    favoredStunts: String[];
    threat: string;
}

export interface FAGEActorInnerData extends ActorInnerData, CommonTemplate, FAGECharacterTemplate, FAGEAdversaryTemplate {
    
}

export interface FAGEActorData extends ActorData {
    data: FAGEActorInnerData;
    items: FAGEItemData[];
}

interface Ability {
    value: number;
    advancements: number;
    isPrimary: boolean;
    label: string;
    focuses: Focus[];
}

interface PointValue {
    value: number;
    max: number;
    label: string;
}

// export interface FAGEActorData extends BaseEntityData, Spell, Power, Class, Background, Talent, Armor, Grenade, Weapon, Focus, Gear {

// }

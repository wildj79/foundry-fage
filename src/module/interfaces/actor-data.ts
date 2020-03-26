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

interface Focus {
    bonus: number;
    ability: string;
    label: string;
}

export interface ICost {
    cost: {
        gp: number;
        sp: number;
        cp: number;
    }
}

export interface IDamaging {
    damage: {
        formula: string;
        isPenetrating: boolean;
    }
}

export interface IMagical {
    isMagical: boolean;
    rarity: string;
    category: string;
}

export interface IDescribable {
    description: string;
}

export interface ITypeable {
    type: string;
}

export interface Gear extends ICost, IDescribable, ITypeable, IMagical { }

export interface Focus extends IDescribable {
    bonus: number;
    ability: string;
}

export interface Weapon extends ICost, IDamaging, IDescribable, ITypeable, IMagical {
    group: string;
    strength?: number;
    ability: string;
    range: {
        short: number;
        long: number;
    }
    reload: string;
}

export interface Grenade extends ICost, IDamaging, IDescribable, IMagical {
    makeCost: {
        gp: number;
        sp: number;
        cp: number;
    }
    radius: number;
}

export interface Armor extends ICost, IDescribable, ITypeable, IMagical {
    rating: number;
    penalty: number;
    bonus: number;
}

export interface Talent extends IDescribable, ITypeable {
    degree: string;
    classes: string[];
    requirements: string,
    benefits: string[]
}

export interface Background extends IDescribable {
    socialClass: string;
}

export interface Class extends IDescribable {
    primaryAbilities: string[];
    secondaryAbilities: string[];
    health: string;
    weaponGroups: string[];
}

export interface Power extends IDescribable {
    class: string;
    level: number;
}

export interface Spell extends IDamaging, IDescribable, ITypeable {
    requirements: string;
    mpCost: {
        isVariable: boolean;
        min: number;
        max: number;
    }
    time: string;
    tn: number;
    test: string;
    duration: string;
    area: {
        length: number;
        width: number;
        radius: number;
        distance: number;
    }
}

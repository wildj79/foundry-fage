import { FAGEActorData } from "../interfaces/actor-data";

export class FAGEItem extends Item {
    data: FAGEActorData;
    
    get hasAttack(): boolean {
        return true;
    }

    get hasDamage(): boolean {
        return true;
    }

    prepareData() {
        super.prepareData();

        return null;
    }
}
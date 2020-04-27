import { FAGEActorInnerData } from "../interfaces/actor-data";
import { FAGEItemData } from "../interfaces/item";

export class FAGEItem extends Item {
    data: FAGEItemData;
    
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
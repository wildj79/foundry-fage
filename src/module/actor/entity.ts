import { FAGEItem } from "../item/item.js";
import { FAGEActorData } from "../interfaces/actor-data.js";
import { Focus } from "../interfaces/item.js";

export class FAGEActor extends Actor {
    items: Collection<FAGEItem>;

    prepareData(): void {
        super.prepareData();

        const actorData = this.data as FAGEActorData;
        const data = actorData.data;
        
        const shield = actorData.items.find(i => {
            return i.type === "armor" && 
                   i.data.type === "shield" && 
                   i.data.equipped;
        });

        const race = actorData.items.find(i => {
            return i.type === 'race'
        });
        
        const shieldBonus = shield ? shield.data.bonus : 0;
        data.defense = 10 + data.abilities.dex.value + shieldBonus;
        data.race = race ? race.name : "";
        data.speed.ground = race ? race.data.baseSpeed + data.abilities.dex.value : 10 + data.abilities.dex.value;
    }
}
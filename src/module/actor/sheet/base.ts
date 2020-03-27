import { FAGECharacterSheetData } from "../../interfaces/sheet-data.js";
import { FAGEItem } from "../../item/item.js";
import { Focus } from "../../interfaces/item.js";

export class FAGEActorSheet extends ActorSheet {
    getData(): FAGECharacterSheetData {
        const data = super.getData() as FAGECharacterSheetData;
        const isOwner = this.entity.owner;

        data.cssClass = isOwner ? "editable": "locked";
        data.config = CONFIG.FAGE;

        const focuses = data.actor.items.reduce((prev: FAGEItem[], curr: FAGEItem): FAGEItem[] => {
            if (curr.type === "focus") prev.push(curr);

            return prev;
        }, [])

        for (let [a, abl] of Object.entries(data.data.abilities)) {
            abl.label = CONFIG.FAGE.abilities[a];

            for (let focus of focuses) {
                if (focus.data && focus.data.ability === a)
                    abl.focuses ? abl.focuses.push(focus.data) : abl.focuses = [focus.data];
            }
        }

        console.log(data);

        return data;
    }
}
import { FAGECharacterSheetData } from "../../interfaces/sheet-data.js";

export class FAGEActorSheet extends ActorSheet {
    getData(): FAGECharacterSheetData {
        const data = super.getData() as FAGECharacterSheetData;
        const isOwner = this.entity.owner;

        data.cssClass = isOwner ? "editable": "locked";
        data.config = CONFIG.FAGE;

        for (let [a, abl] of Object.entries(data.data.abilities)) {
            abl.label = CONFIG.FAGE.abilities[a];
        }

        console.log(data);

        return data;
    }
}
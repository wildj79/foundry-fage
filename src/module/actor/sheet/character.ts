import { FAGEActorSheet } from "./base.js";
import { FAGECharacterSheetData } from "../../interfaces/sheet-data.js";

export class FAGECharacterSheet extends FAGEActorSheet {
    static get defaultOptions() {
        const options = super.defaultOptions;

        return mergeObject(options, {
            classes: ["fage", "sheet", "actor", "character"]
        });
    }

    get template(): string {
        const path = "systems/fage/templates/actor";

        if (!game.user.isGM && this.actor.limited) return `${path}/limited-sheet.html`;

        return `${path}/character-sheet.html`;
    }

    getData(): FAGECharacterSheetData {
        const data = super.getData() as FAGECharacterSheetData;

        return data;
    }
}
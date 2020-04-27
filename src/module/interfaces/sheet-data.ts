import { FAGEActorInnerData, FAGEActorData } from "./actor-data.js";
import { FAGEActor } from "../actor/entity.js";

export interface FAGEActorSheetData extends ActorSheetData {
    config: object;
    data: FAGEActorInnerData;
    actor: FAGEActorData;
}

export interface FAGECharacterSheetData extends FAGEActorSheetData {

}

export interface FAGEAdversarySheetData extends FAGEActorSheetData {

}

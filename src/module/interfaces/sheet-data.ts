import { FAGEActorData } from "./actor-data";

export interface FAGEActorSheetData extends ActorSheetData {
    config: object;
    data: FAGEActorData
}

export interface FAGECharacterSheetData extends FAGEActorSheetData {

}

export interface FAGEAdversarySheetData extends FAGEActorSheetData {

}

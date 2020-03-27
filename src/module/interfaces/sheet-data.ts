import { FAGEActorData } from "./actor-data";
import { FAGEActor } from "../actor/entity";

export interface FAGEActorSheetData extends ActorSheetData {
    config: object;
    data: FAGEActorData;
    actor: FAGEActor;
}

export interface FAGECharacterSheetData extends FAGEActorSheetData {

}

export interface FAGEAdversarySheetData extends FAGEActorSheetData {

}

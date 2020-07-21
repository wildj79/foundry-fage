/// <reference types="jquery"/>
/// <reference types="socket.io"/>
/// <reference types="tinymce"/>

import "./constants";

// Apps

import "./apps/app";
import "./apps/baseentitysheet";
import "./apps/form";
import "./apps/i18n";
import "./apps/templates";

import "./apps/forms/actor";
import "./apps/forms/forms";
import "./apps/forms/item";
import "./apps/forms/permission";
import "./apps/forms/roll-table-config";
import "./apps/forms/scene";

import "./apps/hud/chatbubble";
import "./apps/hud/container";
import "./apps/hud/controls";
import "./apps/hud/hud";
import "./apps/hud/menu";
import "./apps/hud/navigation";
import "./apps/hud/pause";
import "./apps/hud/players";

import "./apps/journal/journal-sheet";
import "./apps/journal/note-config";

import "./apps/placeables/placeables-config";
import "./apps/placeables/placeables-hud";

import "./apps/sidebar/apps/clientsettings";
import "./apps/sidebar/apps/rolltabledirectory";
import "./apps/sidebar/apps/actordirectory";
import "./apps/sidebar/apps/combattracker";

import "./apps/sidebar/sidebar";
import "./apps/sidebar/sidebartab";
import "./apps/sidebar/sidebardirectory";

// Core

import "./core/audio";
import "./core/config";
import "./core/dicepool";
import "./core/die";
import "./core/fonts";
import "./core/hooks";
import "./core/keyboard";
import "./core/roll";
import "./core/settings";
import "./core/socket";
import "./core/sorting";
import "./core/texteditor";
import "./core/video";

// Framework

import "./framework/collection";
import "./framework/compendium";
import "./framework/entity";

import "./framework/entities/actor";
import "./framework/entities/chatmessage";
import "./framework/entities/combat";
import "./framework/entities/folder";
import "./framework/entities/item";
import "./framework/entities/journal";
import "./framework/entities/macro";
import "./framework/entities/playlist";
import "./framework/entities/rolltable";
import "./framework/entities/scene";
import "./framework/entities/user";

// PIXI

import "./pixi/canvaslayer";
import "./pixi/mouseinteractionmanager";
import "./pixi/placeableobject";
import "./pixi/measuredtemplate";
import "./pixi/placeableslayer";

import "./pixi/helpers/controlicon";
import "./pixi/helpers/ray";
import "./pixi/helpers/ruler";

import "./pixi/placeables/token";
import "./pixi/placeables/note";
import "./pixi/placeables/tile";

// UI

import "./ui/context";
import "./ui/dialog";
import "./ui/dragdrop";
import "./ui/filepicker";
import "./ui/notifications";
import "./ui/tabs";

//-- --//

import "./game";
import "./handlebars";
import "./pixi";
import "./prototypes";
import "./utils";

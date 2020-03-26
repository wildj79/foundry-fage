/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your system, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your system
 */

// Import TypeScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import { FAGE } from './module/config.js';
import { FAGEActor } from './module/actor/entity.js';
import { FAGEAdversarySheet } from './module/actor/sheet/adversary.js';
import { FAGECharacterSheet } from './module/actor/sheet/character.js';

/* ------------------------------------ */
/* Initialize system					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('FAGE | Initializing Fantasy AGE');
	console.log(`__________________________________________________________
 _____           _                       _    ____ _____
|  ___|_ _ _ __ | |_ __ _ ___ _   _     / \\  / ___| ____|
| |_ / _\` | '_ \\| __/ _\` / __| | | |   / _ \\| |  _|  _|
|  _| (_| | | | | || (_| \\__ \\ |_| |  / ___ \\ |_| | |___
|_|  \\__,_|_| |_|\\__\\__,_|___/\\__, | /_/   \\_\\____|_____|
                               |___/
==========================================================`);

	// Assign custom classes and constants here

	CONFIG.FAGE = FAGE;
	CONFIG.Actor.entityClass = FAGEActor;
	
	// Register custom system settings
	registerSettings();
	
	// Preload Handlebars templates
	await preloadTemplates();

	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("fage", FAGECharacterSheet, { types: ["character"], makeDefault: true });
	Actors.registerSheet("fage", FAGEAdversarySheet, { types: ["adversary"], makeDefault: true });

	// Register custom sheets (if any)
});

/* ------------------------------------ */
/* Setup system							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
	const toLocalize = [
		"abilities"
	];

	for (let o of toLocalize) {
		CONFIG.FAGE[o] = Object.entries(CONFIG.FAGE[o]).reduce((obj: [string, string], e: [string, string]): object => {
			obj[e[0]] = game.i18n.localize(e[1]);

			return obj;
		}, {});
	}
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	// Do anything once the system is ready
});

// Add any additional hooks if necessary

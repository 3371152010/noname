import { Game as game } from '../../../game.js';
import { status as _status } from '../../../status.js';
import { UI as ui } from '../../../ui.js';
export const CANVAS = {
	name: "特效置顶",
	init: false,
	onclick(bool) {
		game.saveConfig("coin_canvas_playpackconfig", bool);
		if (bool) {
			ui.window.classList.add("canvas_top");
		}
		else {
			ui.window.classList.remove("canvas_top");
		}
	}
};

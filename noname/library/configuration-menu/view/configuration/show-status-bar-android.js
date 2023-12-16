import { Game as game } from '../../../../game.js';
import { Library as lib } from '../../../../library.js';
import { status as _status } from '../../../../status.js';
export const SHOW_STATUS_BAR_ANDROID = {
	name: "显示状态栏",
	init: false,
	unfrequent: true,
	onclick(bool) {
		game.saveConfig("show_statusbar", bool);
		if (window.StatusBar && lib.device == "android") {
			if (bool) {
				window.StatusBar.overlaysWebView(false);
				window.StatusBar.backgroundColorByName("black");
				window.StatusBar.show();
			}
			else {
				window.StatusBar.hide();
			}
		}
	}
};

/**
 * Routes
 * =====================
 * All app routes
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import Game from "@app/pages/index/index.svelte";

export default {
	"/": Game,
	"*": Game,
};

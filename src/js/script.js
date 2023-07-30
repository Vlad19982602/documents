import scrolling from './modules/pageup.js';
import popuped from './modules/popup.js';

window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	popuped();
});
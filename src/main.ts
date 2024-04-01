// Import our custom CSS
import './scss/styles.scss';
import '@popperjs/core';
// Import all of Bootstrap's JS
// @ts-ignore
// noinspection ES6UnusedImports
import * as bootstrap from 'bootstrap';

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? 'dark' : 'light';

    // this gotta be an html element - if not, we have bigger problems
    const html = document.querySelector('html') as HTMLHtmlElement;
    html.dataset.bsTheme = newColorScheme;
});
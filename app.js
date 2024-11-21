'use strict';

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // Prevent the browser from restoring scroll position
}
window.onload = function() {
    window.scrollTo(0, 0); // Ensure it scrolls to the top
};

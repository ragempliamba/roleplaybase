
// REQUIRES

require('./systems/index.js');

// CODE

mp.keys.bind(0xC0, false, () => {
    let cursor = !mp.gui.cursor.visible;
    mp.gui.cursor.show(cursor, cursor);
});

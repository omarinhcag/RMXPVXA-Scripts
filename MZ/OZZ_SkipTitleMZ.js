/*:
 * @plugindesc Skips the title screen.
 * @author Orochii Zouveleki
 * @target MZ
 * 
 * @help Skips the title screen. Wow.
 * 
 * @command callLoad
 * @text Call Load Menu
 * @desc Opens the load screen.
 */

(()=>{
    var __filename = document.currentScript.src;
    var path = require('path');
    const PLUGIN_NAME = path.basename(__filename, path.extname(__filename));

    PluginManager.registerCommand(PLUGIN_NAME, "callLoad", args => {
        SceneManager.push(Scene_Load);
    });

    DataManager.isTitleSkip = function() {
        return true;
    };
})();

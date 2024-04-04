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
 * 
 * @command saveExists
 * @text Get Save Exists
 * @desc Check if any savefile exists and store the result as a switch.
 * @arg switchId
 * @type switch
 * @text Switch ID
 * @desc True if a savefile exists, false otherwise.
 */

(()=>{
    var __filename = document.currentScript.src;
    var path = require('path');
    const PLUGIN_NAME = path.basename(__filename, path.extname(__filename));

    PluginManager.registerCommand(PLUGIN_NAME, "callLoad", args => {
        SceneManager.push(Scene_Load);
    });
    PluginManager.registerCommand(PLUGIN_NAME, "saveExists", args => {
        let v = DataManager.isAnySavefileExists();
        let sId = Number(args.switchId);
        $gameSwitches.setValue(sId, v);
    });

    DataManager.isTitleSkip = function() {
        return true;
    };
})();

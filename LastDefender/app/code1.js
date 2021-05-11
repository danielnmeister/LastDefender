gdjs.MenuCode = {};
gdjs.MenuCode.GDResumeVictoryObjects1= [];
gdjs.MenuCode.GDResumeVictoryObjects2= [];
gdjs.MenuCode.GDResumeVictoryObjects3= [];
gdjs.MenuCode.GDResumeObjects1= [];
gdjs.MenuCode.GDResumeObjects2= [];
gdjs.MenuCode.GDResumeObjects3= [];
gdjs.MenuCode.GDVictoryObjects1= [];
gdjs.MenuCode.GDVictoryObjects2= [];
gdjs.MenuCode.GDVictoryObjects3= [];
gdjs.MenuCode.GDGameOverObjects1= [];
gdjs.MenuCode.GDGameOverObjects2= [];
gdjs.MenuCode.GDGameOverObjects3= [];
gdjs.MenuCode.GDMenuObjects1= [];
gdjs.MenuCode.GDMenuObjects2= [];
gdjs.MenuCode.GDMenuObjects3= [];
gdjs.MenuCode.GDQuitObjects1= [];
gdjs.MenuCode.GDQuitObjects2= [];
gdjs.MenuCode.GDQuitObjects3= [];
gdjs.MenuCode.GDPlayerObjects1= [];
gdjs.MenuCode.GDPlayerObjects2= [];
gdjs.MenuCode.GDPlayerObjects3= [];
gdjs.MenuCode.GDBulletObjects1= [];
gdjs.MenuCode.GDBulletObjects2= [];
gdjs.MenuCode.GDBulletObjects3= [];
gdjs.MenuCode.GDBackObjects1= [];
gdjs.MenuCode.GDBackObjects2= [];
gdjs.MenuCode.GDBackObjects3= [];
gdjs.MenuCode.GDEnemiesKilledValueObjects1= [];
gdjs.MenuCode.GDEnemiesKilledValueObjects2= [];
gdjs.MenuCode.GDEnemiesKilledValueObjects3= [];
gdjs.MenuCode.GDTimePlayedValueObjects1= [];
gdjs.MenuCode.GDTimePlayedValueObjects2= [];
gdjs.MenuCode.GDTimePlayedValueObjects3= [];
gdjs.MenuCode.GDPlayerScoreValueObjects1= [];
gdjs.MenuCode.GDPlayerScoreValueObjects2= [];
gdjs.MenuCode.GDPlayerScoreValueObjects3= [];
gdjs.MenuCode.GDPlayerScoreTextObjects1= [];
gdjs.MenuCode.GDPlayerScoreTextObjects2= [];
gdjs.MenuCode.GDPlayerScoreTextObjects3= [];
gdjs.MenuCode.GDTimePlayedTextObjects1= [];
gdjs.MenuCode.GDTimePlayedTextObjects2= [];
gdjs.MenuCode.GDTimePlayedTextObjects3= [];
gdjs.MenuCode.GDEnemiesKilledTextObjects1= [];
gdjs.MenuCode.GDEnemiesKilledTextObjects2= [];
gdjs.MenuCode.GDEnemiesKilledTextObjects3= [];
gdjs.MenuCode.GDMenuTitleObjects1= [];
gdjs.MenuCode.GDMenuTitleObjects2= [];
gdjs.MenuCode.GDMenuTitleObjects3= [];
gdjs.MenuCode.GDSettingsObjects1= [];
gdjs.MenuCode.GDSettingsObjects2= [];
gdjs.MenuCode.GDSettingsObjects3= [];
gdjs.MenuCode.GDEndlessModeObjects1= [];
gdjs.MenuCode.GDEndlessModeObjects2= [];
gdjs.MenuCode.GDEndlessModeObjects3= [];
gdjs.MenuCode.GDStoryModeObjects1= [];
gdjs.MenuCode.GDStoryModeObjects2= [];
gdjs.MenuCode.GDStoryModeObjects3= [];
gdjs.MenuCode.GDControlsObjects1= [];
gdjs.MenuCode.GDControlsObjects2= [];
gdjs.MenuCode.GDControlsObjects3= [];
gdjs.MenuCode.GDQuitObjects1= [];
gdjs.MenuCode.GDQuitObjects2= [];
gdjs.MenuCode.GDQuitObjects3= [];
gdjs.MenuCode.GDBackgroundImageObjects1= [];
gdjs.MenuCode.GDBackgroundImageObjects2= [];
gdjs.MenuCode.GDBackgroundImageObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDControlsObjects2Objects = Hashtable.newFrom({"Controls": gdjs.MenuCode.GDControlsObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEndlessModeObjects2Objects = Hashtable.newFrom({"EndlessMode": gdjs.MenuCode.GDEndlessModeObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStoryModeObjects2Objects = Hashtable.newFrom({"StoryMode": gdjs.MenuCode.GDStoryModeObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSettingsObjects2Objects = Hashtable.newFrom({"Settings": gdjs.MenuCode.GDSettingsObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.MenuCode.GDQuitObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Controls"), gdjs.MenuCode.GDControlsObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDControlsObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Controls");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EndlessMode"), gdjs.MenuCode.GDEndlessModeObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEndlessModeObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "EndlessMode");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StoryMode"), gdjs.MenuCode.GDStoryModeObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStoryModeObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "StoryMode");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MenuCode.GDSettingsObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSettingsObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MenuCode.GDQuitObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BackgroundImage"), gdjs.MenuCode.GDBackgroundImageObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDBackgroundImageObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBackgroundImageObjects1[i].setXOffset(gdjs.MenuCode.GDBackgroundImageObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 3);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDResumeVictoryObjects1.length = 0;
gdjs.MenuCode.GDResumeVictoryObjects2.length = 0;
gdjs.MenuCode.GDResumeVictoryObjects3.length = 0;
gdjs.MenuCode.GDResumeObjects1.length = 0;
gdjs.MenuCode.GDResumeObjects2.length = 0;
gdjs.MenuCode.GDResumeObjects3.length = 0;
gdjs.MenuCode.GDVictoryObjects1.length = 0;
gdjs.MenuCode.GDVictoryObjects2.length = 0;
gdjs.MenuCode.GDVictoryObjects3.length = 0;
gdjs.MenuCode.GDGameOverObjects1.length = 0;
gdjs.MenuCode.GDGameOverObjects2.length = 0;
gdjs.MenuCode.GDGameOverObjects3.length = 0;
gdjs.MenuCode.GDMenuObjects1.length = 0;
gdjs.MenuCode.GDMenuObjects2.length = 0;
gdjs.MenuCode.GDMenuObjects3.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects3.length = 0;
gdjs.MenuCode.GDPlayerObjects1.length = 0;
gdjs.MenuCode.GDPlayerObjects2.length = 0;
gdjs.MenuCode.GDPlayerObjects3.length = 0;
gdjs.MenuCode.GDBulletObjects1.length = 0;
gdjs.MenuCode.GDBulletObjects2.length = 0;
gdjs.MenuCode.GDBulletObjects3.length = 0;
gdjs.MenuCode.GDBackObjects1.length = 0;
gdjs.MenuCode.GDBackObjects2.length = 0;
gdjs.MenuCode.GDBackObjects3.length = 0;
gdjs.MenuCode.GDEnemiesKilledValueObjects1.length = 0;
gdjs.MenuCode.GDEnemiesKilledValueObjects2.length = 0;
gdjs.MenuCode.GDEnemiesKilledValueObjects3.length = 0;
gdjs.MenuCode.GDTimePlayedValueObjects1.length = 0;
gdjs.MenuCode.GDTimePlayedValueObjects2.length = 0;
gdjs.MenuCode.GDTimePlayedValueObjects3.length = 0;
gdjs.MenuCode.GDPlayerScoreValueObjects1.length = 0;
gdjs.MenuCode.GDPlayerScoreValueObjects2.length = 0;
gdjs.MenuCode.GDPlayerScoreValueObjects3.length = 0;
gdjs.MenuCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.MenuCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.MenuCode.GDPlayerScoreTextObjects3.length = 0;
gdjs.MenuCode.GDTimePlayedTextObjects1.length = 0;
gdjs.MenuCode.GDTimePlayedTextObjects2.length = 0;
gdjs.MenuCode.GDTimePlayedTextObjects3.length = 0;
gdjs.MenuCode.GDEnemiesKilledTextObjects1.length = 0;
gdjs.MenuCode.GDEnemiesKilledTextObjects2.length = 0;
gdjs.MenuCode.GDEnemiesKilledTextObjects3.length = 0;
gdjs.MenuCode.GDMenuTitleObjects1.length = 0;
gdjs.MenuCode.GDMenuTitleObjects2.length = 0;
gdjs.MenuCode.GDMenuTitleObjects3.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects3.length = 0;
gdjs.MenuCode.GDEndlessModeObjects1.length = 0;
gdjs.MenuCode.GDEndlessModeObjects2.length = 0;
gdjs.MenuCode.GDEndlessModeObjects3.length = 0;
gdjs.MenuCode.GDStoryModeObjects1.length = 0;
gdjs.MenuCode.GDStoryModeObjects2.length = 0;
gdjs.MenuCode.GDStoryModeObjects3.length = 0;
gdjs.MenuCode.GDControlsObjects1.length = 0;
gdjs.MenuCode.GDControlsObjects2.length = 0;
gdjs.MenuCode.GDControlsObjects3.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects3.length = 0;
gdjs.MenuCode.GDBackgroundImageObjects1.length = 0;
gdjs.MenuCode.GDBackgroundImageObjects2.length = 0;
gdjs.MenuCode.GDBackgroundImageObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;

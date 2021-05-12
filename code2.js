gdjs.StoryModeCode = {};
gdjs.StoryModeCode.GDResumeVictoryObjects1= [];
gdjs.StoryModeCode.GDResumeVictoryObjects2= [];
gdjs.StoryModeCode.GDResumeVictoryObjects3= [];
gdjs.StoryModeCode.GDResumeObjects1= [];
gdjs.StoryModeCode.GDResumeObjects2= [];
gdjs.StoryModeCode.GDResumeObjects3= [];
gdjs.StoryModeCode.GDVictoryObjects1= [];
gdjs.StoryModeCode.GDVictoryObjects2= [];
gdjs.StoryModeCode.GDVictoryObjects3= [];
gdjs.StoryModeCode.GDGameOverObjects1= [];
gdjs.StoryModeCode.GDGameOverObjects2= [];
gdjs.StoryModeCode.GDGameOverObjects3= [];
gdjs.StoryModeCode.GDMenuObjects1= [];
gdjs.StoryModeCode.GDMenuObjects2= [];
gdjs.StoryModeCode.GDMenuObjects3= [];
gdjs.StoryModeCode.GDQuitObjects1= [];
gdjs.StoryModeCode.GDQuitObjects2= [];
gdjs.StoryModeCode.GDQuitObjects3= [];
gdjs.StoryModeCode.GDPlayerObjects1= [];
gdjs.StoryModeCode.GDPlayerObjects2= [];
gdjs.StoryModeCode.GDPlayerObjects3= [];
gdjs.StoryModeCode.GDBulletObjects1= [];
gdjs.StoryModeCode.GDBulletObjects2= [];
gdjs.StoryModeCode.GDBulletObjects3= [];
gdjs.StoryModeCode.GDBackObjects1= [];
gdjs.StoryModeCode.GDBackObjects2= [];
gdjs.StoryModeCode.GDBackObjects3= [];
gdjs.StoryModeCode.GDEnemiesKilledValueObjects1= [];
gdjs.StoryModeCode.GDEnemiesKilledValueObjects2= [];
gdjs.StoryModeCode.GDEnemiesKilledValueObjects3= [];
gdjs.StoryModeCode.GDTimePlayedValueObjects1= [];
gdjs.StoryModeCode.GDTimePlayedValueObjects2= [];
gdjs.StoryModeCode.GDTimePlayedValueObjects3= [];
gdjs.StoryModeCode.GDPlayerScoreValueObjects1= [];
gdjs.StoryModeCode.GDPlayerScoreValueObjects2= [];
gdjs.StoryModeCode.GDPlayerScoreValueObjects3= [];
gdjs.StoryModeCode.GDPlayerScoreTextObjects1= [];
gdjs.StoryModeCode.GDPlayerScoreTextObjects2= [];
gdjs.StoryModeCode.GDPlayerScoreTextObjects3= [];
gdjs.StoryModeCode.GDTimePlayedTextObjects1= [];
gdjs.StoryModeCode.GDTimePlayedTextObjects2= [];
gdjs.StoryModeCode.GDTimePlayedTextObjects3= [];
gdjs.StoryModeCode.GDEnemiesKilledTextObjects1= [];
gdjs.StoryModeCode.GDEnemiesKilledTextObjects2= [];
gdjs.StoryModeCode.GDEnemiesKilledTextObjects3= [];
gdjs.StoryModeCode.GDStoryModeTitleObjects1= [];
gdjs.StoryModeCode.GDStoryModeTitleObjects2= [];
gdjs.StoryModeCode.GDStoryModeTitleObjects3= [];
gdjs.StoryModeCode.GDEnemiesScreenObjects1= [];
gdjs.StoryModeCode.GDEnemiesScreenObjects2= [];
gdjs.StoryModeCode.GDEnemiesScreenObjects3= [];
gdjs.StoryModeCode.GDStartButtonObjects1= [];
gdjs.StoryModeCode.GDStartButtonObjects2= [];
gdjs.StoryModeCode.GDStartButtonObjects3= [];
gdjs.StoryModeCode.GDDescriptionTextObjects1= [];
gdjs.StoryModeCode.GDDescriptionTextObjects2= [];
gdjs.StoryModeCode.GDDescriptionTextObjects3= [];
gdjs.StoryModeCode.GDQuitObjects1= [];
gdjs.StoryModeCode.GDQuitObjects2= [];
gdjs.StoryModeCode.GDQuitObjects3= [];
gdjs.StoryModeCode.GDBackgroundImageObjects1= [];
gdjs.StoryModeCode.GDBackgroundImageObjects2= [];
gdjs.StoryModeCode.GDBackgroundImageObjects3= [];

gdjs.StoryModeCode.conditionTrue_0 = {val:false};
gdjs.StoryModeCode.condition0IsTrue_0 = {val:false};
gdjs.StoryModeCode.condition1IsTrue_0 = {val:false};
gdjs.StoryModeCode.condition2IsTrue_0 = {val:false};


gdjs.StoryModeCode.mapOfGDgdjs_46StoryModeCode_46GDBackObjects2Objects = Hashtable.newFrom({"Back": gdjs.StoryModeCode.GDBackObjects2});gdjs.StoryModeCode.mapOfGDgdjs_46StoryModeCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.StoryModeCode.GDStartButtonObjects2});gdjs.StoryModeCode.mapOfGDgdjs_46StoryModeCode_46GDEnemiesScreenObjects2Objects = Hashtable.newFrom({"EnemiesScreen": gdjs.StoryModeCode.GDEnemiesScreenObjects2});gdjs.StoryModeCode.mapOfGDgdjs_46StoryModeCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.StoryModeCode.GDQuitObjects1});gdjs.StoryModeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.StoryModeCode.GDBackObjects2);

gdjs.StoryModeCode.condition0IsTrue_0.val = false;
gdjs.StoryModeCode.condition1IsTrue_0.val = false;
{
gdjs.StoryModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StoryModeCode.condition0IsTrue_0.val ) {
{
gdjs.StoryModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StoryModeCode.mapOfGDgdjs_46StoryModeCode_46GDBackObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.StoryModeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StoryModeCode.GDStartButtonObjects2);

gdjs.StoryModeCode.condition0IsTrue_0.val = false;
gdjs.StoryModeCode.condition1IsTrue_0.val = false;
{
gdjs.StoryModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StoryModeCode.condition0IsTrue_0.val ) {
{
gdjs.StoryModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StoryModeCode.mapOfGDgdjs_46StoryModeCode_46GDStartButtonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.StoryModeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StoryModeGame", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemiesScreen"), gdjs.StoryModeCode.GDEnemiesScreenObjects2);

gdjs.StoryModeCode.condition0IsTrue_0.val = false;
gdjs.StoryModeCode.condition1IsTrue_0.val = false;
{
gdjs.StoryModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StoryModeCode.condition0IsTrue_0.val ) {
{
gdjs.StoryModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StoryModeCode.mapOfGDgdjs_46StoryModeCode_46GDEnemiesScreenObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.StoryModeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Enemies");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.StoryModeCode.GDQuitObjects1);

gdjs.StoryModeCode.condition0IsTrue_0.val = false;
gdjs.StoryModeCode.condition1IsTrue_0.val = false;
{
gdjs.StoryModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StoryModeCode.condition0IsTrue_0.val ) {
{
gdjs.StoryModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StoryModeCode.mapOfGDgdjs_46StoryModeCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.StoryModeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.StoryModeCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BackgroundImage"), gdjs.StoryModeCode.GDBackgroundImageObjects1);
{for(var i = 0, len = gdjs.StoryModeCode.GDBackgroundImageObjects1.length ;i < len;++i) {
    gdjs.StoryModeCode.GDBackgroundImageObjects1[i].setXOffset(gdjs.StoryModeCode.GDBackgroundImageObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.StoryModeCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StoryModeCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.StoryModeCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.StoryModeCode.GDStartButtonObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.StoryModeCode.eventsList0(runtimeScene);
}


{


gdjs.StoryModeCode.eventsList1(runtimeScene);
}


};

gdjs.StoryModeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StoryModeCode.GDResumeVictoryObjects1.length = 0;
gdjs.StoryModeCode.GDResumeVictoryObjects2.length = 0;
gdjs.StoryModeCode.GDResumeVictoryObjects3.length = 0;
gdjs.StoryModeCode.GDResumeObjects1.length = 0;
gdjs.StoryModeCode.GDResumeObjects2.length = 0;
gdjs.StoryModeCode.GDResumeObjects3.length = 0;
gdjs.StoryModeCode.GDVictoryObjects1.length = 0;
gdjs.StoryModeCode.GDVictoryObjects2.length = 0;
gdjs.StoryModeCode.GDVictoryObjects3.length = 0;
gdjs.StoryModeCode.GDGameOverObjects1.length = 0;
gdjs.StoryModeCode.GDGameOverObjects2.length = 0;
gdjs.StoryModeCode.GDGameOverObjects3.length = 0;
gdjs.StoryModeCode.GDMenuObjects1.length = 0;
gdjs.StoryModeCode.GDMenuObjects2.length = 0;
gdjs.StoryModeCode.GDMenuObjects3.length = 0;
gdjs.StoryModeCode.GDQuitObjects1.length = 0;
gdjs.StoryModeCode.GDQuitObjects2.length = 0;
gdjs.StoryModeCode.GDQuitObjects3.length = 0;
gdjs.StoryModeCode.GDPlayerObjects1.length = 0;
gdjs.StoryModeCode.GDPlayerObjects2.length = 0;
gdjs.StoryModeCode.GDPlayerObjects3.length = 0;
gdjs.StoryModeCode.GDBulletObjects1.length = 0;
gdjs.StoryModeCode.GDBulletObjects2.length = 0;
gdjs.StoryModeCode.GDBulletObjects3.length = 0;
gdjs.StoryModeCode.GDBackObjects1.length = 0;
gdjs.StoryModeCode.GDBackObjects2.length = 0;
gdjs.StoryModeCode.GDBackObjects3.length = 0;
gdjs.StoryModeCode.GDEnemiesKilledValueObjects1.length = 0;
gdjs.StoryModeCode.GDEnemiesKilledValueObjects2.length = 0;
gdjs.StoryModeCode.GDEnemiesKilledValueObjects3.length = 0;
gdjs.StoryModeCode.GDTimePlayedValueObjects1.length = 0;
gdjs.StoryModeCode.GDTimePlayedValueObjects2.length = 0;
gdjs.StoryModeCode.GDTimePlayedValueObjects3.length = 0;
gdjs.StoryModeCode.GDPlayerScoreValueObjects1.length = 0;
gdjs.StoryModeCode.GDPlayerScoreValueObjects2.length = 0;
gdjs.StoryModeCode.GDPlayerScoreValueObjects3.length = 0;
gdjs.StoryModeCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.StoryModeCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.StoryModeCode.GDPlayerScoreTextObjects3.length = 0;
gdjs.StoryModeCode.GDTimePlayedTextObjects1.length = 0;
gdjs.StoryModeCode.GDTimePlayedTextObjects2.length = 0;
gdjs.StoryModeCode.GDTimePlayedTextObjects3.length = 0;
gdjs.StoryModeCode.GDEnemiesKilledTextObjects1.length = 0;
gdjs.StoryModeCode.GDEnemiesKilledTextObjects2.length = 0;
gdjs.StoryModeCode.GDEnemiesKilledTextObjects3.length = 0;
gdjs.StoryModeCode.GDStoryModeTitleObjects1.length = 0;
gdjs.StoryModeCode.GDStoryModeTitleObjects2.length = 0;
gdjs.StoryModeCode.GDStoryModeTitleObjects3.length = 0;
gdjs.StoryModeCode.GDEnemiesScreenObjects1.length = 0;
gdjs.StoryModeCode.GDEnemiesScreenObjects2.length = 0;
gdjs.StoryModeCode.GDEnemiesScreenObjects3.length = 0;
gdjs.StoryModeCode.GDStartButtonObjects1.length = 0;
gdjs.StoryModeCode.GDStartButtonObjects2.length = 0;
gdjs.StoryModeCode.GDStartButtonObjects3.length = 0;
gdjs.StoryModeCode.GDDescriptionTextObjects1.length = 0;
gdjs.StoryModeCode.GDDescriptionTextObjects2.length = 0;
gdjs.StoryModeCode.GDDescriptionTextObjects3.length = 0;
gdjs.StoryModeCode.GDQuitObjects1.length = 0;
gdjs.StoryModeCode.GDQuitObjects2.length = 0;
gdjs.StoryModeCode.GDQuitObjects3.length = 0;
gdjs.StoryModeCode.GDBackgroundImageObjects1.length = 0;
gdjs.StoryModeCode.GDBackgroundImageObjects2.length = 0;
gdjs.StoryModeCode.GDBackgroundImageObjects3.length = 0;

gdjs.StoryModeCode.eventsList2(runtimeScene);
return;

}

gdjs['StoryModeCode'] = gdjs.StoryModeCode;

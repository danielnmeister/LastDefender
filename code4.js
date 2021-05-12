gdjs.EndlessModeCode = {};
gdjs.EndlessModeCode.GDResumeVictoryObjects1= [];
gdjs.EndlessModeCode.GDResumeVictoryObjects2= [];
gdjs.EndlessModeCode.GDResumeVictoryObjects3= [];
gdjs.EndlessModeCode.GDResumeObjects1= [];
gdjs.EndlessModeCode.GDResumeObjects2= [];
gdjs.EndlessModeCode.GDResumeObjects3= [];
gdjs.EndlessModeCode.GDVictoryObjects1= [];
gdjs.EndlessModeCode.GDVictoryObjects2= [];
gdjs.EndlessModeCode.GDVictoryObjects3= [];
gdjs.EndlessModeCode.GDGameOverObjects1= [];
gdjs.EndlessModeCode.GDGameOverObjects2= [];
gdjs.EndlessModeCode.GDGameOverObjects3= [];
gdjs.EndlessModeCode.GDMenuObjects1= [];
gdjs.EndlessModeCode.GDMenuObjects2= [];
gdjs.EndlessModeCode.GDMenuObjects3= [];
gdjs.EndlessModeCode.GDQuitObjects1= [];
gdjs.EndlessModeCode.GDQuitObjects2= [];
gdjs.EndlessModeCode.GDQuitObjects3= [];
gdjs.EndlessModeCode.GDPlayerObjects1= [];
gdjs.EndlessModeCode.GDPlayerObjects2= [];
gdjs.EndlessModeCode.GDPlayerObjects3= [];
gdjs.EndlessModeCode.GDBulletObjects1= [];
gdjs.EndlessModeCode.GDBulletObjects2= [];
gdjs.EndlessModeCode.GDBulletObjects3= [];
gdjs.EndlessModeCode.GDBackObjects1= [];
gdjs.EndlessModeCode.GDBackObjects2= [];
gdjs.EndlessModeCode.GDBackObjects3= [];
gdjs.EndlessModeCode.GDEnemiesKilledValueObjects1= [];
gdjs.EndlessModeCode.GDEnemiesKilledValueObjects2= [];
gdjs.EndlessModeCode.GDEnemiesKilledValueObjects3= [];
gdjs.EndlessModeCode.GDTimePlayedValueObjects1= [];
gdjs.EndlessModeCode.GDTimePlayedValueObjects2= [];
gdjs.EndlessModeCode.GDTimePlayedValueObjects3= [];
gdjs.EndlessModeCode.GDPlayerScoreValueObjects1= [];
gdjs.EndlessModeCode.GDPlayerScoreValueObjects2= [];
gdjs.EndlessModeCode.GDPlayerScoreValueObjects3= [];
gdjs.EndlessModeCode.GDPlayerScoreTextObjects1= [];
gdjs.EndlessModeCode.GDPlayerScoreTextObjects2= [];
gdjs.EndlessModeCode.GDPlayerScoreTextObjects3= [];
gdjs.EndlessModeCode.GDTimePlayedTextObjects1= [];
gdjs.EndlessModeCode.GDTimePlayedTextObjects2= [];
gdjs.EndlessModeCode.GDTimePlayedTextObjects3= [];
gdjs.EndlessModeCode.GDEnemiesKilledTextObjects1= [];
gdjs.EndlessModeCode.GDEnemiesKilledTextObjects2= [];
gdjs.EndlessModeCode.GDEnemiesKilledTextObjects3= [];
gdjs.EndlessModeCode.GDEndlessModeTitleObjects1= [];
gdjs.EndlessModeCode.GDEndlessModeTitleObjects2= [];
gdjs.EndlessModeCode.GDEndlessModeTitleObjects3= [];
gdjs.EndlessModeCode.GDViewEnemiesTextObjects1= [];
gdjs.EndlessModeCode.GDViewEnemiesTextObjects2= [];
gdjs.EndlessModeCode.GDViewEnemiesTextObjects3= [];
gdjs.EndlessModeCode.GDStartButtonObjects1= [];
gdjs.EndlessModeCode.GDStartButtonObjects2= [];
gdjs.EndlessModeCode.GDStartButtonObjects3= [];
gdjs.EndlessModeCode.GDDescriptionTextObjects1= [];
gdjs.EndlessModeCode.GDDescriptionTextObjects2= [];
gdjs.EndlessModeCode.GDDescriptionTextObjects3= [];
gdjs.EndlessModeCode.GDQuitObjects1= [];
gdjs.EndlessModeCode.GDQuitObjects2= [];
gdjs.EndlessModeCode.GDQuitObjects3= [];
gdjs.EndlessModeCode.GDBackgroundImageObjects1= [];
gdjs.EndlessModeCode.GDBackgroundImageObjects2= [];
gdjs.EndlessModeCode.GDBackgroundImageObjects3= [];
gdjs.EndlessModeCode.GDNewObjectObjects1= [];
gdjs.EndlessModeCode.GDNewObjectObjects2= [];
gdjs.EndlessModeCode.GDNewObjectObjects3= [];

gdjs.EndlessModeCode.conditionTrue_0 = {val:false};
gdjs.EndlessModeCode.condition0IsTrue_0 = {val:false};
gdjs.EndlessModeCode.condition1IsTrue_0 = {val:false};
gdjs.EndlessModeCode.condition2IsTrue_0 = {val:false};


gdjs.EndlessModeCode.mapOfGDgdjs_46EndlessModeCode_46GDBackObjects2Objects = Hashtable.newFrom({"Back": gdjs.EndlessModeCode.GDBackObjects2});gdjs.EndlessModeCode.mapOfGDgdjs_46EndlessModeCode_46GDViewEnemiesTextObjects2Objects = Hashtable.newFrom({"ViewEnemiesText": gdjs.EndlessModeCode.GDViewEnemiesTextObjects2});gdjs.EndlessModeCode.mapOfGDgdjs_46EndlessModeCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.EndlessModeCode.GDStartButtonObjects2});gdjs.EndlessModeCode.mapOfGDgdjs_46EndlessModeCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.EndlessModeCode.GDQuitObjects1});gdjs.EndlessModeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.EndlessModeCode.GDBackObjects2);

gdjs.EndlessModeCode.condition0IsTrue_0.val = false;
gdjs.EndlessModeCode.condition1IsTrue_0.val = false;
{
gdjs.EndlessModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.EndlessModeCode.condition0IsTrue_0.val ) {
{
gdjs.EndlessModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndlessModeCode.mapOfGDgdjs_46EndlessModeCode_46GDBackObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.EndlessModeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ViewEnemiesText"), gdjs.EndlessModeCode.GDViewEnemiesTextObjects2);

gdjs.EndlessModeCode.condition0IsTrue_0.val = false;
gdjs.EndlessModeCode.condition1IsTrue_0.val = false;
{
gdjs.EndlessModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.EndlessModeCode.condition0IsTrue_0.val ) {
{
gdjs.EndlessModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndlessModeCode.mapOfGDgdjs_46EndlessModeCode_46GDViewEnemiesTextObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.EndlessModeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Enemies");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.EndlessModeCode.GDStartButtonObjects2);

gdjs.EndlessModeCode.condition0IsTrue_0.val = false;
gdjs.EndlessModeCode.condition1IsTrue_0.val = false;
{
gdjs.EndlessModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.EndlessModeCode.condition0IsTrue_0.val ) {
{
gdjs.EndlessModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndlessModeCode.mapOfGDgdjs_46EndlessModeCode_46GDStartButtonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.EndlessModeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndlessModeGame", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.EndlessModeCode.GDQuitObjects1);

gdjs.EndlessModeCode.condition0IsTrue_0.val = false;
gdjs.EndlessModeCode.condition1IsTrue_0.val = false;
{
gdjs.EndlessModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.EndlessModeCode.condition0IsTrue_0.val ) {
{
gdjs.EndlessModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndlessModeCode.mapOfGDgdjs_46EndlessModeCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.EndlessModeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.EndlessModeCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BackgroundImage"), gdjs.EndlessModeCode.GDBackgroundImageObjects1);
{for(var i = 0, len = gdjs.EndlessModeCode.GDBackgroundImageObjects1.length ;i < len;++i) {
    gdjs.EndlessModeCode.GDBackgroundImageObjects1[i].setXOffset(gdjs.EndlessModeCode.GDBackgroundImageObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.EndlessModeCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.EndlessModeCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.EndlessModeCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.EndlessModeCode.GDStartButtonObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.EndlessModeCode.eventsList0(runtimeScene);
}


{


gdjs.EndlessModeCode.eventsList1(runtimeScene);
}


};

gdjs.EndlessModeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndlessModeCode.GDResumeVictoryObjects1.length = 0;
gdjs.EndlessModeCode.GDResumeVictoryObjects2.length = 0;
gdjs.EndlessModeCode.GDResumeVictoryObjects3.length = 0;
gdjs.EndlessModeCode.GDResumeObjects1.length = 0;
gdjs.EndlessModeCode.GDResumeObjects2.length = 0;
gdjs.EndlessModeCode.GDResumeObjects3.length = 0;
gdjs.EndlessModeCode.GDVictoryObjects1.length = 0;
gdjs.EndlessModeCode.GDVictoryObjects2.length = 0;
gdjs.EndlessModeCode.GDVictoryObjects3.length = 0;
gdjs.EndlessModeCode.GDGameOverObjects1.length = 0;
gdjs.EndlessModeCode.GDGameOverObjects2.length = 0;
gdjs.EndlessModeCode.GDGameOverObjects3.length = 0;
gdjs.EndlessModeCode.GDMenuObjects1.length = 0;
gdjs.EndlessModeCode.GDMenuObjects2.length = 0;
gdjs.EndlessModeCode.GDMenuObjects3.length = 0;
gdjs.EndlessModeCode.GDQuitObjects1.length = 0;
gdjs.EndlessModeCode.GDQuitObjects2.length = 0;
gdjs.EndlessModeCode.GDQuitObjects3.length = 0;
gdjs.EndlessModeCode.GDPlayerObjects1.length = 0;
gdjs.EndlessModeCode.GDPlayerObjects2.length = 0;
gdjs.EndlessModeCode.GDPlayerObjects3.length = 0;
gdjs.EndlessModeCode.GDBulletObjects1.length = 0;
gdjs.EndlessModeCode.GDBulletObjects2.length = 0;
gdjs.EndlessModeCode.GDBulletObjects3.length = 0;
gdjs.EndlessModeCode.GDBackObjects1.length = 0;
gdjs.EndlessModeCode.GDBackObjects2.length = 0;
gdjs.EndlessModeCode.GDBackObjects3.length = 0;
gdjs.EndlessModeCode.GDEnemiesKilledValueObjects1.length = 0;
gdjs.EndlessModeCode.GDEnemiesKilledValueObjects2.length = 0;
gdjs.EndlessModeCode.GDEnemiesKilledValueObjects3.length = 0;
gdjs.EndlessModeCode.GDTimePlayedValueObjects1.length = 0;
gdjs.EndlessModeCode.GDTimePlayedValueObjects2.length = 0;
gdjs.EndlessModeCode.GDTimePlayedValueObjects3.length = 0;
gdjs.EndlessModeCode.GDPlayerScoreValueObjects1.length = 0;
gdjs.EndlessModeCode.GDPlayerScoreValueObjects2.length = 0;
gdjs.EndlessModeCode.GDPlayerScoreValueObjects3.length = 0;
gdjs.EndlessModeCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.EndlessModeCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.EndlessModeCode.GDPlayerScoreTextObjects3.length = 0;
gdjs.EndlessModeCode.GDTimePlayedTextObjects1.length = 0;
gdjs.EndlessModeCode.GDTimePlayedTextObjects2.length = 0;
gdjs.EndlessModeCode.GDTimePlayedTextObjects3.length = 0;
gdjs.EndlessModeCode.GDEnemiesKilledTextObjects1.length = 0;
gdjs.EndlessModeCode.GDEnemiesKilledTextObjects2.length = 0;
gdjs.EndlessModeCode.GDEnemiesKilledTextObjects3.length = 0;
gdjs.EndlessModeCode.GDEndlessModeTitleObjects1.length = 0;
gdjs.EndlessModeCode.GDEndlessModeTitleObjects2.length = 0;
gdjs.EndlessModeCode.GDEndlessModeTitleObjects3.length = 0;
gdjs.EndlessModeCode.GDViewEnemiesTextObjects1.length = 0;
gdjs.EndlessModeCode.GDViewEnemiesTextObjects2.length = 0;
gdjs.EndlessModeCode.GDViewEnemiesTextObjects3.length = 0;
gdjs.EndlessModeCode.GDStartButtonObjects1.length = 0;
gdjs.EndlessModeCode.GDStartButtonObjects2.length = 0;
gdjs.EndlessModeCode.GDStartButtonObjects3.length = 0;
gdjs.EndlessModeCode.GDDescriptionTextObjects1.length = 0;
gdjs.EndlessModeCode.GDDescriptionTextObjects2.length = 0;
gdjs.EndlessModeCode.GDDescriptionTextObjects3.length = 0;
gdjs.EndlessModeCode.GDQuitObjects1.length = 0;
gdjs.EndlessModeCode.GDQuitObjects2.length = 0;
gdjs.EndlessModeCode.GDQuitObjects3.length = 0;
gdjs.EndlessModeCode.GDBackgroundImageObjects1.length = 0;
gdjs.EndlessModeCode.GDBackgroundImageObjects2.length = 0;
gdjs.EndlessModeCode.GDBackgroundImageObjects3.length = 0;
gdjs.EndlessModeCode.GDNewObjectObjects1.length = 0;
gdjs.EndlessModeCode.GDNewObjectObjects2.length = 0;
gdjs.EndlessModeCode.GDNewObjectObjects3.length = 0;

gdjs.EndlessModeCode.eventsList2(runtimeScene);
return;

}

gdjs['EndlessModeCode'] = gdjs.EndlessModeCode;

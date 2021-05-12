gdjs.PauseCode = {};
gdjs.PauseCode.GDResumeVictoryObjects1= [];
gdjs.PauseCode.GDResumeVictoryObjects2= [];
gdjs.PauseCode.GDResumeVictoryObjects3= [];
gdjs.PauseCode.GDResumeObjects1= [];
gdjs.PauseCode.GDResumeObjects2= [];
gdjs.PauseCode.GDResumeObjects3= [];
gdjs.PauseCode.GDVictoryObjects1= [];
gdjs.PauseCode.GDVictoryObjects2= [];
gdjs.PauseCode.GDVictoryObjects3= [];
gdjs.PauseCode.GDGameOverObjects1= [];
gdjs.PauseCode.GDGameOverObjects2= [];
gdjs.PauseCode.GDGameOverObjects3= [];
gdjs.PauseCode.GDMenuObjects1= [];
gdjs.PauseCode.GDMenuObjects2= [];
gdjs.PauseCode.GDMenuObjects3= [];
gdjs.PauseCode.GDQuitObjects1= [];
gdjs.PauseCode.GDQuitObjects2= [];
gdjs.PauseCode.GDQuitObjects3= [];
gdjs.PauseCode.GDPlayerObjects1= [];
gdjs.PauseCode.GDPlayerObjects2= [];
gdjs.PauseCode.GDPlayerObjects3= [];
gdjs.PauseCode.GDBulletObjects1= [];
gdjs.PauseCode.GDBulletObjects2= [];
gdjs.PauseCode.GDBulletObjects3= [];
gdjs.PauseCode.GDBackObjects1= [];
gdjs.PauseCode.GDBackObjects2= [];
gdjs.PauseCode.GDBackObjects3= [];
gdjs.PauseCode.GDEnemiesKilledValueObjects1= [];
gdjs.PauseCode.GDEnemiesKilledValueObjects2= [];
gdjs.PauseCode.GDEnemiesKilledValueObjects3= [];
gdjs.PauseCode.GDTimePlayedValueObjects1= [];
gdjs.PauseCode.GDTimePlayedValueObjects2= [];
gdjs.PauseCode.GDTimePlayedValueObjects3= [];
gdjs.PauseCode.GDPlayerScoreValueObjects1= [];
gdjs.PauseCode.GDPlayerScoreValueObjects2= [];
gdjs.PauseCode.GDPlayerScoreValueObjects3= [];
gdjs.PauseCode.GDPlayerScoreTextObjects1= [];
gdjs.PauseCode.GDPlayerScoreTextObjects2= [];
gdjs.PauseCode.GDPlayerScoreTextObjects3= [];
gdjs.PauseCode.GDTimePlayedTextObjects1= [];
gdjs.PauseCode.GDTimePlayedTextObjects2= [];
gdjs.PauseCode.GDTimePlayedTextObjects3= [];
gdjs.PauseCode.GDEnemiesKilledTextObjects1= [];
gdjs.PauseCode.GDEnemiesKilledTextObjects2= [];
gdjs.PauseCode.GDEnemiesKilledTextObjects3= [];
gdjs.PauseCode.GDPauseObjects1= [];
gdjs.PauseCode.GDPauseObjects2= [];
gdjs.PauseCode.GDPauseObjects3= [];
gdjs.PauseCode.GDResumeObjects1= [];
gdjs.PauseCode.GDResumeObjects2= [];
gdjs.PauseCode.GDResumeObjects3= [];
gdjs.PauseCode.GDSoundSettingsObjects1= [];
gdjs.PauseCode.GDSoundSettingsObjects2= [];
gdjs.PauseCode.GDSoundSettingsObjects3= [];
gdjs.PauseCode.GDQuitObjects1= [];
gdjs.PauseCode.GDQuitObjects2= [];
gdjs.PauseCode.GDQuitObjects3= [];
gdjs.PauseCode.GDBackgroundImageObjects1= [];
gdjs.PauseCode.GDBackgroundImageObjects2= [];
gdjs.PauseCode.GDBackgroundImageObjects3= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};
gdjs.PauseCode.condition2IsTrue_0 = {val:false};
gdjs.PauseCode.conditionTrue_1 = {val:false};
gdjs.PauseCode.condition0IsTrue_1 = {val:false};
gdjs.PauseCode.condition1IsTrue_1 = {val:false};
gdjs.PauseCode.condition2IsTrue_1 = {val:false};


gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.PauseCode.GDPlayerObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDResumeObjects2Objects = Hashtable.newFrom({"Resume": gdjs.PauseCode.GDResumeObjects2});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.PauseCode.GDQuitObjects2});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDSoundSettingsObjects2Objects = Hashtable.newFrom({"SoundSettings": gdjs.PauseCode.GDSoundSettingsObjects2});gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.PauseCode.GDResumeObjects2);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDResumeObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.PauseCode.GDQuitObjects2);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDQuitObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundSettings"), gdjs.PauseCode.GDSoundSettingsObjects2);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDSoundSettingsObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
{gdjs.PauseCode.conditionTrue_1 = gdjs.PauseCode.condition1IsTrue_0;
gdjs.PauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17659292);
}
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 0);
}}

}


};gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.PauseCode.GDBulletObjects1});gdjs.PauseCode.eventsList1 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "Counter");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Counter");
}}

}


};gdjs.PauseCode.eventsList2 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "ThreeShotTimer");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PauseCode.GDPlayerObjects1);
gdjs.PauseCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDBulletObjects1Objects, (( gdjs.PauseCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PauseCode.GDPlayerObjects1[0].getPointX("firePoint")), (( gdjs.PauseCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PauseCode.GDPlayerObjects1[0].getPointY("firePoint")), "");
}{for(var i = 0, len = gdjs.PauseCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDBulletObjects1[i].addPolarForce(0, 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ThreeShotTimer");
}
{ //Subevents
gdjs.PauseCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.PauseCode.eventsList3 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "FireRate");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.PauseCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BackgroundImage"), gdjs.PauseCode.GDBackgroundImageObjects1);
{for(var i = 0, len = gdjs.PauseCode.GDBackgroundImageObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDBackgroundImageObjects1[i].setXOffset(gdjs.PauseCode.GDBackgroundImageObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.PauseCode.eventsList5 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
gdjs.PauseCode.GDPlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDPlayerObjects1Objects, 392, 272, "");
}{for(var i = 0, len = gdjs.PauseCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDPlayerObjects1[i].rotateTowardAngle(91, 0, runtimeScene);
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 0);
}}

}


{


gdjs.PauseCode.eventsList0(runtimeScene);
}


{


gdjs.PauseCode.eventsList3(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.PauseCode.GDResumeObjects1);
{for(var i = 0, len = gdjs.PauseCode.GDResumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDResumeObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.PauseCode.eventsList4(runtimeScene);
}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDResumeVictoryObjects1.length = 0;
gdjs.PauseCode.GDResumeVictoryObjects2.length = 0;
gdjs.PauseCode.GDResumeVictoryObjects3.length = 0;
gdjs.PauseCode.GDResumeObjects1.length = 0;
gdjs.PauseCode.GDResumeObjects2.length = 0;
gdjs.PauseCode.GDResumeObjects3.length = 0;
gdjs.PauseCode.GDVictoryObjects1.length = 0;
gdjs.PauseCode.GDVictoryObjects2.length = 0;
gdjs.PauseCode.GDVictoryObjects3.length = 0;
gdjs.PauseCode.GDGameOverObjects1.length = 0;
gdjs.PauseCode.GDGameOverObjects2.length = 0;
gdjs.PauseCode.GDGameOverObjects3.length = 0;
gdjs.PauseCode.GDMenuObjects1.length = 0;
gdjs.PauseCode.GDMenuObjects2.length = 0;
gdjs.PauseCode.GDMenuObjects3.length = 0;
gdjs.PauseCode.GDQuitObjects1.length = 0;
gdjs.PauseCode.GDQuitObjects2.length = 0;
gdjs.PauseCode.GDQuitObjects3.length = 0;
gdjs.PauseCode.GDPlayerObjects1.length = 0;
gdjs.PauseCode.GDPlayerObjects2.length = 0;
gdjs.PauseCode.GDPlayerObjects3.length = 0;
gdjs.PauseCode.GDBulletObjects1.length = 0;
gdjs.PauseCode.GDBulletObjects2.length = 0;
gdjs.PauseCode.GDBulletObjects3.length = 0;
gdjs.PauseCode.GDBackObjects1.length = 0;
gdjs.PauseCode.GDBackObjects2.length = 0;
gdjs.PauseCode.GDBackObjects3.length = 0;
gdjs.PauseCode.GDEnemiesKilledValueObjects1.length = 0;
gdjs.PauseCode.GDEnemiesKilledValueObjects2.length = 0;
gdjs.PauseCode.GDEnemiesKilledValueObjects3.length = 0;
gdjs.PauseCode.GDTimePlayedValueObjects1.length = 0;
gdjs.PauseCode.GDTimePlayedValueObjects2.length = 0;
gdjs.PauseCode.GDTimePlayedValueObjects3.length = 0;
gdjs.PauseCode.GDPlayerScoreValueObjects1.length = 0;
gdjs.PauseCode.GDPlayerScoreValueObjects2.length = 0;
gdjs.PauseCode.GDPlayerScoreValueObjects3.length = 0;
gdjs.PauseCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.PauseCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.PauseCode.GDPlayerScoreTextObjects3.length = 0;
gdjs.PauseCode.GDTimePlayedTextObjects1.length = 0;
gdjs.PauseCode.GDTimePlayedTextObjects2.length = 0;
gdjs.PauseCode.GDTimePlayedTextObjects3.length = 0;
gdjs.PauseCode.GDEnemiesKilledTextObjects1.length = 0;
gdjs.PauseCode.GDEnemiesKilledTextObjects2.length = 0;
gdjs.PauseCode.GDEnemiesKilledTextObjects3.length = 0;
gdjs.PauseCode.GDPauseObjects1.length = 0;
gdjs.PauseCode.GDPauseObjects2.length = 0;
gdjs.PauseCode.GDPauseObjects3.length = 0;
gdjs.PauseCode.GDResumeObjects1.length = 0;
gdjs.PauseCode.GDResumeObjects2.length = 0;
gdjs.PauseCode.GDResumeObjects3.length = 0;
gdjs.PauseCode.GDSoundSettingsObjects1.length = 0;
gdjs.PauseCode.GDSoundSettingsObjects2.length = 0;
gdjs.PauseCode.GDSoundSettingsObjects3.length = 0;
gdjs.PauseCode.GDQuitObjects1.length = 0;
gdjs.PauseCode.GDQuitObjects2.length = 0;
gdjs.PauseCode.GDQuitObjects3.length = 0;
gdjs.PauseCode.GDBackgroundImageObjects1.length = 0;
gdjs.PauseCode.GDBackgroundImageObjects2.length = 0;
gdjs.PauseCode.GDBackgroundImageObjects3.length = 0;

gdjs.PauseCode.eventsList5(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;

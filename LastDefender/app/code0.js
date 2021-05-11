gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.GDResumeVictoryObjects1= [];
gdjs.TitleScreenCode.GDResumeVictoryObjects2= [];
gdjs.TitleScreenCode.GDResumeObjects1= [];
gdjs.TitleScreenCode.GDResumeObjects2= [];
gdjs.TitleScreenCode.GDVictoryObjects1= [];
gdjs.TitleScreenCode.GDVictoryObjects2= [];
gdjs.TitleScreenCode.GDGameOverObjects1= [];
gdjs.TitleScreenCode.GDGameOverObjects2= [];
gdjs.TitleScreenCode.GDMenuObjects1= [];
gdjs.TitleScreenCode.GDMenuObjects2= [];
gdjs.TitleScreenCode.GDQuitObjects1= [];
gdjs.TitleScreenCode.GDQuitObjects2= [];
gdjs.TitleScreenCode.GDPlayerObjects1= [];
gdjs.TitleScreenCode.GDPlayerObjects2= [];
gdjs.TitleScreenCode.GDBulletObjects1= [];
gdjs.TitleScreenCode.GDBulletObjects2= [];
gdjs.TitleScreenCode.GDBackObjects1= [];
gdjs.TitleScreenCode.GDBackObjects2= [];
gdjs.TitleScreenCode.GDEnemiesKilledValueObjects1= [];
gdjs.TitleScreenCode.GDEnemiesKilledValueObjects2= [];
gdjs.TitleScreenCode.GDTimePlayedValueObjects1= [];
gdjs.TitleScreenCode.GDTimePlayedValueObjects2= [];
gdjs.TitleScreenCode.GDPlayerScoreValueObjects1= [];
gdjs.TitleScreenCode.GDPlayerScoreValueObjects2= [];
gdjs.TitleScreenCode.GDPlayerScoreTextObjects1= [];
gdjs.TitleScreenCode.GDPlayerScoreTextObjects2= [];
gdjs.TitleScreenCode.GDTimePlayedTextObjects1= [];
gdjs.TitleScreenCode.GDTimePlayedTextObjects2= [];
gdjs.TitleScreenCode.GDEnemiesKilledTextObjects1= [];
gdjs.TitleScreenCode.GDEnemiesKilledTextObjects2= [];
gdjs.TitleScreenCode.GDTitleObjects1= [];
gdjs.TitleScreenCode.GDTitleObjects2= [];
gdjs.TitleScreenCode.GDStartButtonObjects1= [];
gdjs.TitleScreenCode.GDStartButtonObjects2= [];
gdjs.TitleScreenCode.GDBackgroundImageObjects1= [];
gdjs.TitleScreenCode.GDBackgroundImageObjects2= [];

gdjs.TitleScreenCode.conditionTrue_0 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_0 = {val:false};


gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TitleScreenCode.GDPlayerObjects1});gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.TitleScreenCode.GDBulletObjects1});gdjs.TitleScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "Counter");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Counter");
}}

}


};gdjs.TitleScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "ThreeShotTimer");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TitleScreenCode.GDPlayerObjects1);
gdjs.TitleScreenCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDBulletObjects1Objects, (( gdjs.TitleScreenCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlayerObjects1[0].getPointX("firePoint")), (( gdjs.TitleScreenCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlayerObjects1[0].getPointY("firePoint")), "");
}{for(var i = 0, len = gdjs.TitleScreenCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDBulletObjects1[i].addPolarForce(0, 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ThreeShotTimer");
}
{ //Subevents
gdjs.TitleScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.TitleScreenCode.eventsList3 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "FireRate");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TitleScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.TitleScreenCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BackgroundImage"), gdjs.TitleScreenCode.GDBackgroundImageObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDBackgroundImageObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDBackgroundImageObjects1[i].setXOffset(gdjs.TitleScreenCode.GDBackgroundImageObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.TitleScreenCode.eventsList5 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDPlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDPlayerObjects1Objects, 392, 272, "");
}{for(var i = 0, len = gdjs.TitleScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDPlayerObjects1[i].rotateTowardAngle(91, 0, runtimeScene);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Light-Years_V001_Looping.mp3", 1, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
}}

}


{


gdjs.TitleScreenCode.eventsList0(runtimeScene);
}


{


gdjs.TitleScreenCode.eventsList3(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.TitleScreenCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.TitleScreenCode.eventsList4(runtimeScene);
}


};

gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDResumeVictoryObjects1.length = 0;
gdjs.TitleScreenCode.GDResumeVictoryObjects2.length = 0;
gdjs.TitleScreenCode.GDResumeObjects1.length = 0;
gdjs.TitleScreenCode.GDResumeObjects2.length = 0;
gdjs.TitleScreenCode.GDVictoryObjects1.length = 0;
gdjs.TitleScreenCode.GDVictoryObjects2.length = 0;
gdjs.TitleScreenCode.GDGameOverObjects1.length = 0;
gdjs.TitleScreenCode.GDGameOverObjects2.length = 0;
gdjs.TitleScreenCode.GDMenuObjects1.length = 0;
gdjs.TitleScreenCode.GDMenuObjects2.length = 0;
gdjs.TitleScreenCode.GDQuitObjects1.length = 0;
gdjs.TitleScreenCode.GDQuitObjects2.length = 0;
gdjs.TitleScreenCode.GDPlayerObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayerObjects2.length = 0;
gdjs.TitleScreenCode.GDBulletObjects1.length = 0;
gdjs.TitleScreenCode.GDBulletObjects2.length = 0;
gdjs.TitleScreenCode.GDBackObjects1.length = 0;
gdjs.TitleScreenCode.GDBackObjects2.length = 0;
gdjs.TitleScreenCode.GDEnemiesKilledValueObjects1.length = 0;
gdjs.TitleScreenCode.GDEnemiesKilledValueObjects2.length = 0;
gdjs.TitleScreenCode.GDTimePlayedValueObjects1.length = 0;
gdjs.TitleScreenCode.GDTimePlayedValueObjects2.length = 0;
gdjs.TitleScreenCode.GDPlayerScoreValueObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayerScoreValueObjects2.length = 0;
gdjs.TitleScreenCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.TitleScreenCode.GDTimePlayedTextObjects1.length = 0;
gdjs.TitleScreenCode.GDTimePlayedTextObjects2.length = 0;
gdjs.TitleScreenCode.GDEnemiesKilledTextObjects1.length = 0;
gdjs.TitleScreenCode.GDEnemiesKilledTextObjects2.length = 0;
gdjs.TitleScreenCode.GDTitleObjects1.length = 0;
gdjs.TitleScreenCode.GDTitleObjects2.length = 0;
gdjs.TitleScreenCode.GDStartButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDStartButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDBackgroundImageObjects1.length = 0;
gdjs.TitleScreenCode.GDBackgroundImageObjects2.length = 0;

gdjs.TitleScreenCode.eventsList5(runtimeScene);
return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;

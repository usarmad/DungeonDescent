gdjs.StartMenuCode = {};
gdjs.StartMenuCode.GDMenuBackgroundObjects1= [];
gdjs.StartMenuCode.GDMenuBackgroundObjects2= [];
gdjs.StartMenuCode.GDPlayButtonObjects1= [];
gdjs.StartMenuCode.GDPlayButtonObjects2= [];
gdjs.StartMenuCode.GDTitleObjects1= [];
gdjs.StartMenuCode.GDTitleObjects2= [];
gdjs.StartMenuCode.GDDummyObjects1= [];
gdjs.StartMenuCode.GDDummyObjects2= [];

gdjs.StartMenuCode.conditionTrue_0 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition3IsTrue_0 = {val:false};
gdjs.StartMenuCode.conditionTrue_1 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition3IsTrue_1 = {val:false};


gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.StartMenuCode.GDPlayButtonObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.StartMenuCode.GDPlayButtonObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.StartMenuCode.GDPlayButtonObjects1});gdjs.StartMenuCode.eventsList0xb2358 = function(runtimeScene) {

{

gdjs.StartMenuCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDPlayButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.StartMenuCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDPlayButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.StartMenuCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition0IsTrue_0;
gdjs.StartMenuCode.condition0IsTrue_1.val = false;
gdjs.StartMenuCode.condition1IsTrue_1.val = false;
gdjs.StartMenuCode.condition2IsTrue_1.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartMenuCode.condition0IsTrue_1.val ) {
{
gdjs.StartMenuCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "");
}if ( gdjs.StartMenuCode.condition1IsTrue_1.val ) {
{
gdjs.StartMenuCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
gdjs.StartMenuCode.conditionTrue_1.val = true && gdjs.StartMenuCode.condition0IsTrue_1.val && gdjs.StartMenuCode.condition1IsTrue_1.val && gdjs.StartMenuCode.condition2IsTrue_1.val;
}
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
gdjs.StartMenuCode.condition1IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.StartMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition1IsTrue_0;
gdjs.StartMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7819388);
}
}}
if (gdjs.StartMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\RPGPack\\soundtrack\\Our-Mountain_v003.mp3", 3, false, 100, 1);
}}

}


}; //End of gdjs.StartMenuCode.eventsList0xb2358


gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.StartMenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.StartMenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.StartMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.StartMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.StartMenuCode.GDTitleObjects1.length = 0;
gdjs.StartMenuCode.GDTitleObjects2.length = 0;
gdjs.StartMenuCode.GDDummyObjects1.length = 0;
gdjs.StartMenuCode.GDDummyObjects2.length = 0;

gdjs.StartMenuCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['StartMenuCode'] = gdjs.StartMenuCode;

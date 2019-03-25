gdjs.MainCode = {};
gdjs.MainCode.GDGoblinObjects2_1final = [];

gdjs.MainCode.GDMagePlayerObjects2_1final = [];

gdjs.MainCode.GDSkeletonObjects2_1final = [];

gdjs.MainCode.GDSlimeObjects2_1final = [];

gdjs.MainCode.GDPlayerObjects1= [];
gdjs.MainCode.GDPlayerObjects2= [];
gdjs.MainCode.GDPlayerObjects3= [];
gdjs.MainCode.GDPlayerObjects4= [];
gdjs.MainCode.GDMagePlayerObjects1= [];
gdjs.MainCode.GDMagePlayerObjects2= [];
gdjs.MainCode.GDMagePlayerObjects3= [];
gdjs.MainCode.GDMagePlayerObjects4= [];
gdjs.MainCode.GDWall1Objects1= [];
gdjs.MainCode.GDWall1Objects2= [];
gdjs.MainCode.GDWall1Objects3= [];
gdjs.MainCode.GDWall1Objects4= [];
gdjs.MainCode.GDWall2Objects1= [];
gdjs.MainCode.GDWall2Objects2= [];
gdjs.MainCode.GDWall2Objects3= [];
gdjs.MainCode.GDWall2Objects4= [];
gdjs.MainCode.GDFireballObjects1= [];
gdjs.MainCode.GDFireballObjects2= [];
gdjs.MainCode.GDFireballObjects3= [];
gdjs.MainCode.GDFireballObjects4= [];
gdjs.MainCode.GDGoblinObjects1= [];
gdjs.MainCode.GDGoblinObjects2= [];
gdjs.MainCode.GDGoblinObjects3= [];
gdjs.MainCode.GDGoblinObjects4= [];
gdjs.MainCode.GDSkeletonObjects1= [];
gdjs.MainCode.GDSkeletonObjects2= [];
gdjs.MainCode.GDSkeletonObjects3= [];
gdjs.MainCode.GDSkeletonObjects4= [];
gdjs.MainCode.GDDoorObjects1= [];
gdjs.MainCode.GDDoorObjects2= [];
gdjs.MainCode.GDDoorObjects3= [];
gdjs.MainCode.GDDoorObjects4= [];
gdjs.MainCode.GDHPObjects1= [];
gdjs.MainCode.GDHPObjects2= [];
gdjs.MainCode.GDHPObjects3= [];
gdjs.MainCode.GDHPObjects4= [];
gdjs.MainCode.GDFloorsObjects1= [];
gdjs.MainCode.GDFloorsObjects2= [];
gdjs.MainCode.GDFloorsObjects3= [];
gdjs.MainCode.GDFloorsObjects4= [];
gdjs.MainCode.GDSlimeKingObjects1= [];
gdjs.MainCode.GDSlimeKingObjects2= [];
gdjs.MainCode.GDSlimeKingObjects3= [];
gdjs.MainCode.GDSlimeKingObjects4= [];
gdjs.MainCode.GDSlimeObjects1= [];
gdjs.MainCode.GDSlimeObjects2= [];
gdjs.MainCode.GDSlimeObjects3= [];
gdjs.MainCode.GDSlimeObjects4= [];
gdjs.MainCode.GDNumObjectsObjects1= [];
gdjs.MainCode.GDNumObjectsObjects2= [];
gdjs.MainCode.GDNumObjectsObjects3= [];
gdjs.MainCode.GDNumObjectsObjects4= [];
gdjs.MainCode.GDGameOverObjects1= [];
gdjs.MainCode.GDGameOverObjects2= [];
gdjs.MainCode.GDGameOverObjects3= [];
gdjs.MainCode.GDGameOverObjects4= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.condition3IsTrue_0 = {val:false};
gdjs.MainCode.condition4IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};
gdjs.MainCode.condition3IsTrue_1 = {val:false};
gdjs.MainCode.condition4IsTrue_1 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects = Hashtable.newFrom({"Goblin": gdjs.MainCode.GDGoblinObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects = Hashtable.newFrom({"Goblin": gdjs.MainCode.GDGoblinObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects = Hashtable.newFrom({"Goblin": gdjs.MainCode.GDGoblinObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects = Hashtable.newFrom({"Goblin": gdjs.MainCode.GDGoblinObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects1Objects = Hashtable.newFrom({"SlimeKing": gdjs.MainCode.GDSlimeKingObjects1});gdjs.MainCode.eventsList0x7063d8 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\RPGPack\\soundtrack\\Windless Slopes.mp3", 1, true, 100, 1);
}}

}


}; //End of gdjs.MainCode.eventsList0x7063d8
gdjs.MainCode.eventsList0x707000 = function(runtimeScene) {

{

gdjs.MainCode.GDMagePlayerObjects3.createFrom(gdjs.MainCode.GDMagePlayerObjects2);


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = (gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > (( gdjs.MainCode.GDMagePlayerObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects3[0].getPointX("Centre")));
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects3 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects3[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */

gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = (gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) < (( gdjs.MainCode.GDMagePlayerObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects2[0].getPointX("Centre")));
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].flipX(true);
}
}}

}


}; //End of gdjs.MainCode.eventsList0x707000
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.MainCode.GDFireballObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects3Objects = Hashtable.newFrom({"Goblin": gdjs.MainCode.GDGoblinObjects3});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects3Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects3});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects3Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects3});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects3Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects3});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects3Objects = Hashtable.newFrom({"Slime": gdjs.MainCode.GDSlimeObjects3});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects3Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects3});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects2Objects = Hashtable.newFrom({"SlimeKing": gdjs.MainCode.GDSlimeKingObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects2Objects = Hashtable.newFrom({"Goblin": gdjs.MainCode.GDGoblinObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects2Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.MainCode.GDSlimeObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects2Objects = Hashtable.newFrom({"SlimeKing": gdjs.MainCode.GDSlimeKingObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects2});gdjs.MainCode.eventsList0x7067d8 = function(runtimeScene) {

{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMagePlayerObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDMagePlayerObjects2[i].isCurrentAnimationName("Attack")) ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7367444);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].setAnimationName("Running");
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDMagePlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDMagePlayerObjects2[i].isCurrentAnimationName("Attack")) ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7368292);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].setAnimationName("Attack");
}
}{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}
{ //Subevents
gdjs.MainCode.eventsList0x707000(runtimeScene);} //End of subevents
}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDMagePlayerObjects2[i].isCurrentAnimationName("Attack")) ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDMagePlayerObjects2[i].isCurrentAnimationName("Attack")) ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMagePlayerObjects2[i].isCurrentAnimationName("Attack") ) {
        gdjs.MainCode.condition0IsTrue_1.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMagePlayerObjects2[i].getAnimationFrame() == 2 ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7372588);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
gdjs.MainCode.GDFireballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects, (( gdjs.MainCode.GDMagePlayerObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects2[0].getPointX("Staff")), (( gdjs.MainCode.GDMagePlayerObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects2[0].getPointY("Staff")), "");
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 400, 1);
}
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMagePlayerObjects2[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition0IsTrue_1.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMagePlayerObjects2[i].isCurrentAnimationName("Attack") ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDMagePlayerObjects2[k] = gdjs.MainCode.GDMagePlayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects2.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{



}


{

gdjs.MainCode.GDGoblinObjects2.length = 0;

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.GDSkeletonObjects2.length = 0;

gdjs.MainCode.GDSlimeObjects2.length = 0;


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.GDGoblinObjects2_1final.length = 0;gdjs.MainCode.GDMagePlayerObjects2_1final.length = 0;gdjs.MainCode.GDSkeletonObjects2_1final.length = 0;gdjs.MainCode.GDSlimeObjects2_1final.length = 0;gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
gdjs.MainCode.condition2IsTrue_1.val = false;
{
gdjs.MainCode.GDGoblinObjects3.createFrom(runtimeScene.getObjects("Goblin"));
gdjs.MainCode.GDMagePlayerObjects3.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects3Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects3Objects, false, runtimeScene, false);
if( gdjs.MainCode.condition0IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainCode.GDGoblinObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDGoblinObjects2_1final.indexOf(gdjs.MainCode.GDGoblinObjects3[j]) === -1 )
            gdjs.MainCode.GDGoblinObjects2_1final.push(gdjs.MainCode.GDGoblinObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.MainCode.GDMagePlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDMagePlayerObjects2_1final.indexOf(gdjs.MainCode.GDMagePlayerObjects3[j]) === -1 )
            gdjs.MainCode.GDMagePlayerObjects2_1final.push(gdjs.MainCode.GDMagePlayerObjects3[j]);
    }
}
}
{
gdjs.MainCode.GDMagePlayerObjects3.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.GDSkeletonObjects3.createFrom(runtimeScene.getObjects("Skeleton"));
gdjs.MainCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects3Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects3Objects, false, runtimeScene, false);
if( gdjs.MainCode.condition1IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainCode.GDMagePlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDMagePlayerObjects2_1final.indexOf(gdjs.MainCode.GDMagePlayerObjects3[j]) === -1 )
            gdjs.MainCode.GDMagePlayerObjects2_1final.push(gdjs.MainCode.GDMagePlayerObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.MainCode.GDSkeletonObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDSkeletonObjects2_1final.indexOf(gdjs.MainCode.GDSkeletonObjects3[j]) === -1 )
            gdjs.MainCode.GDSkeletonObjects2_1final.push(gdjs.MainCode.GDSkeletonObjects3[j]);
    }
}
}
{
gdjs.MainCode.GDMagePlayerObjects3.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.GDSlimeObjects3.createFrom(runtimeScene.getObjects("Slime"));
gdjs.MainCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects3Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects3Objects, false, runtimeScene, false);
if( gdjs.MainCode.condition2IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainCode.GDMagePlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDMagePlayerObjects2_1final.indexOf(gdjs.MainCode.GDMagePlayerObjects3[j]) === -1 )
            gdjs.MainCode.GDMagePlayerObjects2_1final.push(gdjs.MainCode.GDMagePlayerObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.MainCode.GDSlimeObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDSlimeObjects2_1final.indexOf(gdjs.MainCode.GDSlimeObjects3[j]) === -1 )
            gdjs.MainCode.GDSlimeObjects2_1final.push(gdjs.MainCode.GDSlimeObjects3[j]);
    }
}
}
{
gdjs.MainCode.GDGoblinObjects2.createFrom(gdjs.MainCode.GDGoblinObjects2_1final);
gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects2_1final);
gdjs.MainCode.GDSkeletonObjects2.createFrom(gdjs.MainCode.GDSkeletonObjects2_1final);
gdjs.MainCode.GDSlimeObjects2.createFrom(gdjs.MainCode.GDSlimeObjects2_1final);
}
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7375684);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.GDSlimeKingObjects2.createFrom(runtimeScene.getObjects("SlimeKing"));

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7376476);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(2);
}}

}


{

gdjs.MainCode.GDGoblinObjects2.createFrom(runtimeScene.getObjects("Goblin"));
gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDGoblinObjects2 */
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].addForceTowardObject((gdjs.MainCode.GDGoblinObjects2.length !== 0 ? gdjs.MainCode.GDGoblinObjects2[0] : null), -(2000), 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDGoblinObjects2[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects2.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects2[0] : null), -(2000), 0);
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.GDSkeletonObjects2.createFrom(runtimeScene.getObjects("Skeleton"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
/* Reuse gdjs.MainCode.GDSkeletonObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].addForceTowardObject((gdjs.MainCode.GDSkeletonObjects2.length !== 0 ? gdjs.MainCode.GDSkeletonObjects2[0] : null), -(2000), 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects2[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects2.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects2[0] : null), -(2000), 0);
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.GDSlimeObjects2.createFrom(runtimeScene.getObjects("Slime"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
/* Reuse gdjs.MainCode.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].addForceTowardObject((gdjs.MainCode.GDSlimeObjects2.length !== 0 ? gdjs.MainCode.GDSlimeObjects2[0] : null), -(2000), 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeObjects2[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects2.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects2[0] : null), -(2000), 0);
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.GDSlimeKingObjects2.createFrom(runtimeScene.getObjects("SlimeKing"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects2 */
/* Reuse gdjs.MainCode.GDSlimeKingObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects2[i].addForceTowardObject((gdjs.MainCode.GDSlimeKingObjects2.length !== 0 ? gdjs.MainCode.GDSlimeKingObjects2[0] : null), -(3000), 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDSlimeKingObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeKingObjects2[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects2.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects2[0] : null), -(500), 0);
}
}}

}


{


{
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects1[i].setAnimationName("Death");
}
}}

}


}; //End of gdjs.MainCode.eventsList0x7067d8
gdjs.MainCode.eventsList0x70a040 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


}; //End of gdjs.MainCode.eventsList0x70a040
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWall1Objects1Objects = Hashtable.newFrom({"Wall1": gdjs.MainCode.GDWall1Objects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWall2Objects1Objects = Hashtable.newFrom({"Wall2": gdjs.MainCode.GDWall2Objects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.MainCode.GDFireballObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects2Objects = Hashtable.newFrom({"Goblin": gdjs.MainCode.GDGoblinObjects2});gdjs.MainCode.eventsList0x70b260 = function(runtimeScene) {

{

gdjs.MainCode.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.MainCode.GDGoblinObjects2.createFrom(gdjs.MainCode.GDGoblinObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDFireballObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDFireballObjects2[i].isCurrentAnimationName("Projectile") ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDFireballObjects2[k] = gdjs.MainCode.GDFireballObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDFireballObjects2.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7386700);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDFireballObjects2 */
/* Reuse gdjs.MainCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].setAnimationName("Explosion");
}
}{for(var i = 0, len = gdjs.MainCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDGoblinObjects2[i].setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].addPolarForce((gdjs.MainCode.GDFireballObjects2[i].getAngle()), 100, 1);
}
}}

}


{

gdjs.MainCode.GDGoblinObjects2.createFrom(gdjs.MainCode.GDGoblinObjects1);

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDGoblinObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDGoblinObjects2[i].getX() < (( gdjs.MainCode.GDMagePlayerObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects2[0].getPointX("Centre")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDGoblinObjects2[k] = gdjs.MainCode.GDGoblinObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDGoblinObjects2.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDGoblinObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.MainCode.GDGoblinObjects1 */
/* Reuse gdjs.MainCode.GDMagePlayerObjects1 */

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDGoblinObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDGoblinObjects1[i].getX() > (( gdjs.MainCode.GDMagePlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects1[0].getPointX("Centre")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDGoblinObjects1[k] = gdjs.MainCode.GDGoblinObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDGoblinObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDGoblinObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDGoblinObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGoblinObjects1[i].flipX(true);
}
}}

}


}; //End of gdjs.MainCode.eventsList0x70b260
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.MainCode.GDFireballObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects2Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects2});gdjs.MainCode.eventsList0x70c370 = function(runtimeScene) {

{

gdjs.MainCode.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.MainCode.GDSkeletonObjects2.createFrom(gdjs.MainCode.GDSkeletonObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDFireballObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDFireballObjects2[i].isCurrentAnimationName("Projectile") ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDFireballObjects2[k] = gdjs.MainCode.GDFireballObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDFireballObjects2.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7391140);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDFireballObjects2 */
gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

/* Reuse gdjs.MainCode.GDSkeletonObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].setAnimationName("Explosion");
}
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].addPolarForce((gdjs.MainCode.GDFireballObjects2[i].getAngle()), 100, 1);
}
}{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects2[i].returnVariable(gdjs.MainCode.GDSkeletonObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects2[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects2.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects2[0] : null), -(2000), 0);
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.GDSkeletonObjects2.createFrom(gdjs.MainCode.GDSkeletonObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSkeletonObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDSkeletonObjects2[i].getX() < (( gdjs.MainCode.GDMagePlayerObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects2[0].getPointX("Centre")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSkeletonObjects2[k] = gdjs.MainCode.GDSkeletonObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDSkeletonObjects2.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSkeletonObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.MainCode.GDMagePlayerObjects1 */
/* Reuse gdjs.MainCode.GDSkeletonObjects1 */

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSkeletonObjects1[i].getX() > (( gdjs.MainCode.GDMagePlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects1[0].getPointX("Centre")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSkeletonObjects1[k] = gdjs.MainCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSkeletonObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects1[i].flipX(true);
}
}}

}


}; //End of gdjs.MainCode.eventsList0x70c370
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.MainCode.GDFireballObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects2Objects = Hashtable.newFrom({"SlimeKing": gdjs.MainCode.GDSlimeKingObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.MainCode.GDSlimeObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.MainCode.GDSlimeObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.MainCode.GDSlimeObjects1});gdjs.MainCode.eventsList0x70d5a8 = function(runtimeScene) {

{

gdjs.MainCode.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.MainCode.GDSlimeKingObjects2.createFrom(gdjs.MainCode.GDSlimeKingObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDFireballObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDFireballObjects2[i].isCurrentAnimationName("Projectile") ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDFireballObjects2[k] = gdjs.MainCode.GDFireballObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDFireballObjects2.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7395804);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDFireballObjects2 */
gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

/* Reuse gdjs.MainCode.GDSlimeKingObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].setAnimationName("Explosion");
}
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].addPolarForce((gdjs.MainCode.GDFireballObjects2[i].getAngle()), 100, 1);
}
}{for(var i = 0, len = gdjs.MainCode.GDSlimeKingObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeKingObjects2[i].returnVariable(gdjs.MainCode.GDSlimeKingObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.MainCode.GDSlimeKingObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeKingObjects2[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects2.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects2[0] : null), -(500), 0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7397076);
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDSlimeKingObjects2.createFrom(gdjs.MainCode.GDSlimeKingObjects1);

gdjs.MainCode.GDSlimeObjects2.length = 0;

{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomFloatInRange(0, 360));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects2Objects, (( gdjs.MainCode.GDSlimeKingObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDSlimeKingObjects2[0].getPointX("Centre")) + Math.cos(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) * 160, (( gdjs.MainCode.GDSlimeKingObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDSlimeKingObjects2[0].getPointY("Centre")) + Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) * 160, "");
}{for(var i = 0, len = gdjs.MainCode.GDSlimeKingObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeKingObjects2[i].resetTimer("SpawnSlime");
}
}}

}


{

/* Reuse gdjs.MainCode.GDSlimeKingObjects1 */

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeKingObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSlimeKingObjects1[i].timerElapsedTime("SpawnSlime", 3) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSlimeKingObjects1[k] = gdjs.MainCode.GDSlimeKingObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeKingObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSlimeKingObjects1 */
gdjs.MainCode.GDSlimeObjects1.length = 0;

{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomFloatInRange(0, 360));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects1Objects, (( gdjs.MainCode.GDSlimeKingObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSlimeKingObjects1[0].getPointX("Centre")) + Math.cos(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) * 160, (( gdjs.MainCode.GDSlimeKingObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSlimeKingObjects1[0].getPointY("Centre")) + Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) * 160, "");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomFloatInRange(0, 360));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects1Objects, (( gdjs.MainCode.GDSlimeKingObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSlimeKingObjects1[0].getPointX("Centre")) + Math.cos(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) * 160, (( gdjs.MainCode.GDSlimeKingObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSlimeKingObjects1[0].getPointY("Centre")) + Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) * 160, "");
}{for(var i = 0, len = gdjs.MainCode.GDSlimeKingObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeKingObjects1[i].resetTimer("SpawnSlime");
}
}}

}


}; //End of gdjs.MainCode.eventsList0x70d5a8
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.MainCode.GDFireballObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.MainCode.GDSlimeObjects2});gdjs.MainCode.eventsList0x70ecf8 = function(runtimeScene) {

{

gdjs.MainCode.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.MainCode.GDSlimeObjects2.createFrom(gdjs.MainCode.GDSlimeObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDFireballObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDFireballObjects2[i].isCurrentAnimationName("Projectile") ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDFireballObjects2[k] = gdjs.MainCode.GDFireballObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDFireballObjects2.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7401772);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDFireballObjects2 */
/* Reuse gdjs.MainCode.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].setAnimationName("Explosion");
}
}{for(var i = 0, len = gdjs.MainCode.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeObjects2[i].setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainCode.GDFireballObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects2[i].addPolarForce((gdjs.MainCode.GDFireballObjects2[i].getAngle()), 100, 1);
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects2.createFrom(gdjs.MainCode.GDMagePlayerObjects1);

gdjs.MainCode.GDSlimeObjects2.createFrom(gdjs.MainCode.GDSlimeObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDSlimeObjects2[i].getX() < (( gdjs.MainCode.GDMagePlayerObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects2[0].getPointX("Centre")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSlimeObjects2[k] = gdjs.MainCode.GDSlimeObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeObjects2.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.MainCode.GDMagePlayerObjects1 */
/* Reuse gdjs.MainCode.GDSlimeObjects1 */

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSlimeObjects1[i].getX() > (( gdjs.MainCode.GDMagePlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDMagePlayerObjects1[0].getPointX("Centre")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSlimeObjects1[k] = gdjs.MainCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeObjects1[i].flipX(true);
}
}}

}


}; //End of gdjs.MainCode.eventsList0x70ecf8
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects = Hashtable.newFrom({"Goblin": gdjs.MainCode.GDGoblinObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects1Objects = Hashtable.newFrom({"SlimeKing": gdjs.MainCode.GDSlimeKingObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.MainCode.GDSlimeObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects1Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.MainCode.GDDoorObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects1Objects = Hashtable.newFrom({"MagePlayer": gdjs.MainCode.GDMagePlayerObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects1Objects = Hashtable.newFrom({"Fireball": gdjs.MainCode.GDFireballObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWall1Objects1Objects = Hashtable.newFrom({"Wall1": gdjs.MainCode.GDWall1Objects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWall2Objects1Objects = Hashtable.newFrom({"Wall2": gdjs.MainCode.GDWall2Objects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.MainCode.GDDoorObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects = Hashtable.newFrom({"Goblin": gdjs.MainCode.GDGoblinObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.MainCode.GDSlimeObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects1Objects = Hashtable.newFrom({"SlimeKing": gdjs.MainCode.GDSlimeKingObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHPObjects1Objects = Hashtable.newFrom({"HP": gdjs.MainCode.GDHPObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFloorsObjects1Objects = Hashtable.newFrom({"Floors": gdjs.MainCode.GDFloorsObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDNumObjectsObjects1Objects = Hashtable.newFrom({"NumObjects": gdjs.MainCode.GDNumObjectsObjects1});gdjs.MainCode.eventsList0xb25a8 = function(runtimeScene) {

{


{
gdjs.MainCode.GDFloorsObjects1.createFrom(runtimeScene.getObjects("Floors"));
{for(var i = 0, len = gdjs.MainCode.GDFloorsObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFloorsObjects1[i].setString("Floor: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 3) == 1);
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7362132);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.MainCode.GDGoblinObjects1.length = 0;

{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(300, 520), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(300, 520), "");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 3) == 2);
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7363340);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.MainCode.GDGoblinObjects1.length = 0;

gdjs.MainCode.GDSkeletonObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(300, 520), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(300, 520), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(300, 520), "");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 3) == 0);
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7364668);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.MainCode.GDSlimeKingObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects1Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(300, 520), "");
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\RPGPack\\soundtrack\\The Arrival (BATTLE II).mp3", 1, true, 100, 1);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 3) != 0);
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList0x7063d8(runtimeScene);} //End of subevents
}

}


{

gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDMagePlayerObjects1[i].isCurrentAnimationName("Death")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDMagePlayerObjects1[k] = gdjs.MainCode.GDMagePlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
{for(var i = 0, len = gdjs.MainCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGameOverObjects1[i].hide();
}
}
{ //Subevents
gdjs.MainCode.eventsList0x7067d8(runtimeScene);} //End of subevents
}

}


{

gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMagePlayerObjects1[i].isCurrentAnimationName("Death") ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDMagePlayerObjects1[k] = gdjs.MainCode.GDMagePlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDMagePlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


{

gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMagePlayerObjects1[i].isCurrentAnimationName("Death") ) {
        gdjs.MainCode.condition0IsTrue_1.val = true;
        gdjs.MainCode.GDMagePlayerObjects1[k] = gdjs.MainCode.GDMagePlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects1.length = k;}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDMagePlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMagePlayerObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDMagePlayerObjects1[k] = gdjs.MainCode.GDMagePlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMagePlayerObjects1.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
{for(var i = 0, len = gdjs.MainCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGameOverObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.MainCode.eventsList0x70a040(runtimeScene);} //End of subevents
}

}


{


{
gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));
gdjs.MainCode.GDWall1Objects1.createFrom(runtimeScene.getObjects("Wall1"));
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects1[i].separateFromObjectsList(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWall1Objects1Objects, false);
}
}}

}


{


{
gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));
gdjs.MainCode.GDWall2Objects1.createFrom(runtimeScene.getObjects("Wall2"));
{for(var i = 0, len = gdjs.MainCode.GDMagePlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMagePlayerObjects1[i].separateFromObjectsList(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWall2Objects1Objects, false);
}
}}

}


{

gdjs.MainCode.GDFireballObjects1.createFrom(runtimeScene.getObjects("Fireball"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDFireballObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDFireballObjects1[i].isCurrentAnimationName("Explosion") ) {
        gdjs.MainCode.condition0IsTrue_1.val = true;
        gdjs.MainCode.GDFireballObjects1[k] = gdjs.MainCode.GDFireballObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDFireballObjects1.length = k;}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDFireballObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDFireballObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDFireballObjects1[k] = gdjs.MainCode.GDFireballObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDFireballObjects1.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDFireballObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDFireballObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFireballObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


{


{
gdjs.MainCode.GDHPObjects1.createFrom(runtimeScene.getObjects("HP"));
{for(var i = 0, len = gdjs.MainCode.GDHPObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDHPObjects1[i].setAnimationFrame(Math.max(0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{



}


{

gdjs.MainCode.GDGoblinObjects1.createFrom(runtimeScene.getObjects("Goblin"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDGoblinObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDGoblinObjects1[i].isCurrentAnimationName("Death") ) {
        gdjs.MainCode.condition0IsTrue_1.val = true;
        gdjs.MainCode.GDGoblinObjects1[k] = gdjs.MainCode.GDGoblinObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDGoblinObjects1.length = k;}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDGoblinObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDGoblinObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDGoblinObjects1[k] = gdjs.MainCode.GDGoblinObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDGoblinObjects1.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDGoblinObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDGoblinObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGoblinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.MainCode.GDGoblinObjects1.createFrom(runtimeScene.getObjects("Goblin"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDGoblinObjects1.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDGoblinObjects1[i].isCurrentAnimationName("Death")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDGoblinObjects1[k] = gdjs.MainCode.GDGoblinObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDGoblinObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDGoblinObjects1 */
gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));
{for(var i = 0, len = gdjs.MainCode.GDGoblinObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGoblinObjects1[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects1.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects1[0] : null), 70, 0);
}
}
{ //Subevents
gdjs.MainCode.eventsList0x70b260(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MainCode.GDSkeletonObjects1.createFrom(runtimeScene.getObjects("Skeleton"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSkeletonObjects1[i].getVariableNumber(gdjs.MainCode.GDSkeletonObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSkeletonObjects1[k] = gdjs.MainCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSkeletonObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects1[i].setAnimationName("Death");
}
}}

}


{

gdjs.MainCode.GDSkeletonObjects1.createFrom(runtimeScene.getObjects("Skeleton"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSkeletonObjects1[i].isCurrentAnimationName("Death") ) {
        gdjs.MainCode.condition0IsTrue_1.val = true;
        gdjs.MainCode.GDSkeletonObjects1[k] = gdjs.MainCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSkeletonObjects1.length = k;}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSkeletonObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDSkeletonObjects1[k] = gdjs.MainCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSkeletonObjects1.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.MainCode.GDSkeletonObjects1.createFrom(runtimeScene.getObjects("Skeleton"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDSkeletonObjects1[i].isCurrentAnimationName("Death")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSkeletonObjects1[k] = gdjs.MainCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSkeletonObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));
/* Reuse gdjs.MainCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects1[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects1.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects1[0] : null), 100, 0);
}
}
{ //Subevents
gdjs.MainCode.eventsList0x70c370(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MainCode.GDSlimeKingObjects1.createFrom(runtimeScene.getObjects("SlimeKing"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeKingObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSlimeKingObjects1[i].getVariableNumber(gdjs.MainCode.GDSlimeKingObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSlimeKingObjects1[k] = gdjs.MainCode.GDSlimeKingObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeKingObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSlimeKingObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSlimeKingObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeKingObjects1[i].setAnimationName("Death");
}
}}

}


{

gdjs.MainCode.GDSlimeKingObjects1.createFrom(runtimeScene.getObjects("SlimeKing"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeKingObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSlimeKingObjects1[i].isCurrentAnimationName("Death") ) {
        gdjs.MainCode.condition0IsTrue_1.val = true;
        gdjs.MainCode.GDSlimeKingObjects1[k] = gdjs.MainCode.GDSlimeKingObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeKingObjects1.length = k;}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeKingObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSlimeKingObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDSlimeKingObjects1[k] = gdjs.MainCode.GDSlimeKingObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeKingObjects1.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSlimeKingObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSlimeKingObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeKingObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.MainCode.GDSlimeKingObjects1.createFrom(runtimeScene.getObjects("SlimeKing"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeKingObjects1.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDSlimeKingObjects1[i].isCurrentAnimationName("Death")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSlimeKingObjects1[k] = gdjs.MainCode.GDSlimeKingObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeKingObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));
/* Reuse gdjs.MainCode.GDSlimeKingObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSlimeKingObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeKingObjects1[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects1.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects1[0] : null), 40, 0);
}
}
{ //Subevents
gdjs.MainCode.eventsList0x70d5a8(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MainCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSlimeObjects1[i].isCurrentAnimationName("Death") ) {
        gdjs.MainCode.condition0IsTrue_1.val = true;
        gdjs.MainCode.GDSlimeObjects1[k] = gdjs.MainCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeObjects1.length = k;}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSlimeObjects1[i].hasAnimationEnded() ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDSlimeObjects1[k] = gdjs.MainCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeObjects1.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.MainCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDSlimeObjects1.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDSlimeObjects1[i].isCurrentAnimationName("Death")) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDSlimeObjects1[k] = gdjs.MainCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSlimeObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));
/* Reuse gdjs.MainCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSlimeObjects1[i].addForceTowardObject((gdjs.MainCode.GDMagePlayerObjects1.length !== 0 ? gdjs.MainCode.GDMagePlayerObjects1[0] : null), 180, 0);
}
}
{ //Subevents
gdjs.MainCode.eventsList0x70ecf8(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


{

gdjs.MainCode.GDGoblinObjects1.createFrom(runtimeScene.getObjects("Goblin"));
gdjs.MainCode.GDSkeletonObjects1.createFrom(runtimeScene.getObjects("Skeleton"));
gdjs.MainCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));
gdjs.MainCode.GDSlimeKingObjects1.createFrom(runtimeScene.getObjects("SlimeKing"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
gdjs.MainCode.condition2IsTrue_1.val = false;
gdjs.MainCode.condition3IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects) == 0;
}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
gdjs.MainCode.condition1IsTrue_1.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects) == 0;
}if ( gdjs.MainCode.condition1IsTrue_1.val ) {
{
gdjs.MainCode.condition2IsTrue_1.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects1Objects) == 0;
}if ( gdjs.MainCode.condition2IsTrue_1.val ) {
{
gdjs.MainCode.condition3IsTrue_1.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects1Objects) == 0;
}}
}
}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val && gdjs.MainCode.condition2IsTrue_1.val && gdjs.MainCode.condition3IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
{for(var i = 0, len = gdjs.MainCode.GDDoorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDoorObjects1[i].setAnimationName("Open");
}
}}

}


{

gdjs.MainCode.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDDoorObjects1[i].isCurrentAnimationName("Open") ) {
        gdjs.MainCode.condition1IsTrue_1.val = true;
        gdjs.MainCode.GDDoorObjects1[k] = gdjs.MainCode.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDDoorObjects1.length = k;}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7405700);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDDoorObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MainCode.GDDoorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDoorObjects1[i].setAnimationName("Closed");
}
}}

}


{



}


{

gdjs.MainCode.GDNumObjectsObjects1.createFrom(runtimeScene.getObjects("NumObjects"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDNumObjectsObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDNumObjectsObjects1[i].isVisible() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDNumObjectsObjects1[k] = gdjs.MainCode.GDNumObjectsObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDNumObjectsObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
gdjs.MainCode.GDFireballObjects1.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.MainCode.GDFloorsObjects1.createFrom(runtimeScene.getObjects("Floors"));
gdjs.MainCode.GDGoblinObjects1.createFrom(runtimeScene.getObjects("Goblin"));
gdjs.MainCode.GDHPObjects1.createFrom(runtimeScene.getObjects("HP"));
gdjs.MainCode.GDMagePlayerObjects1.createFrom(runtimeScene.getObjects("MagePlayer"));
/* Reuse gdjs.MainCode.GDNumObjectsObjects1 */
gdjs.MainCode.GDSkeletonObjects1.createFrom(runtimeScene.getObjects("Skeleton"));
gdjs.MainCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));
gdjs.MainCode.GDSlimeKingObjects1.createFrom(runtimeScene.getObjects("SlimeKing"));
gdjs.MainCode.GDWall1Objects1.createFrom(runtimeScene.getObjects("Wall1"));
gdjs.MainCode.GDWall2Objects1.createFrom(runtimeScene.getObjects("Wall2"));
{for(var i = 0, len = gdjs.MainCode.GDNumObjectsObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNumObjectsObjects1[i].setString("Objects: " + gdjs.evtTools.common.toString(gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDMagePlayerObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFireballObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWall1Objects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWall2Objects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDoorObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoblinObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSlimeKingObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHPObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDFloorsObjects1Objects) + gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDNumObjectsObjects1Objects)));
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7407412);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7408092);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.MainCode.GDNumObjectsObjects1.createFrom(runtimeScene.getObjects("NumObjects"));
{for(var i = 0, len = gdjs.MainCode.GDNumObjectsObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNumObjectsObjects1[i].hide();
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7408676);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.MainCode.GDNumObjectsObjects1.createFrom(runtimeScene.getObjects("NumObjects"));
{for(var i = 0, len = gdjs.MainCode.GDNumObjectsObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNumObjectsObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.MainCode.eventsList0xb25a8


gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDPlayerObjects3.length = 0;
gdjs.MainCode.GDPlayerObjects4.length = 0;
gdjs.MainCode.GDMagePlayerObjects1.length = 0;
gdjs.MainCode.GDMagePlayerObjects2.length = 0;
gdjs.MainCode.GDMagePlayerObjects3.length = 0;
gdjs.MainCode.GDMagePlayerObjects4.length = 0;
gdjs.MainCode.GDWall1Objects1.length = 0;
gdjs.MainCode.GDWall1Objects2.length = 0;
gdjs.MainCode.GDWall1Objects3.length = 0;
gdjs.MainCode.GDWall1Objects4.length = 0;
gdjs.MainCode.GDWall2Objects1.length = 0;
gdjs.MainCode.GDWall2Objects2.length = 0;
gdjs.MainCode.GDWall2Objects3.length = 0;
gdjs.MainCode.GDWall2Objects4.length = 0;
gdjs.MainCode.GDFireballObjects1.length = 0;
gdjs.MainCode.GDFireballObjects2.length = 0;
gdjs.MainCode.GDFireballObjects3.length = 0;
gdjs.MainCode.GDFireballObjects4.length = 0;
gdjs.MainCode.GDGoblinObjects1.length = 0;
gdjs.MainCode.GDGoblinObjects2.length = 0;
gdjs.MainCode.GDGoblinObjects3.length = 0;
gdjs.MainCode.GDGoblinObjects4.length = 0;
gdjs.MainCode.GDSkeletonObjects1.length = 0;
gdjs.MainCode.GDSkeletonObjects2.length = 0;
gdjs.MainCode.GDSkeletonObjects3.length = 0;
gdjs.MainCode.GDSkeletonObjects4.length = 0;
gdjs.MainCode.GDDoorObjects1.length = 0;
gdjs.MainCode.GDDoorObjects2.length = 0;
gdjs.MainCode.GDDoorObjects3.length = 0;
gdjs.MainCode.GDDoorObjects4.length = 0;
gdjs.MainCode.GDHPObjects1.length = 0;
gdjs.MainCode.GDHPObjects2.length = 0;
gdjs.MainCode.GDHPObjects3.length = 0;
gdjs.MainCode.GDHPObjects4.length = 0;
gdjs.MainCode.GDFloorsObjects1.length = 0;
gdjs.MainCode.GDFloorsObjects2.length = 0;
gdjs.MainCode.GDFloorsObjects3.length = 0;
gdjs.MainCode.GDFloorsObjects4.length = 0;
gdjs.MainCode.GDSlimeKingObjects1.length = 0;
gdjs.MainCode.GDSlimeKingObjects2.length = 0;
gdjs.MainCode.GDSlimeKingObjects3.length = 0;
gdjs.MainCode.GDSlimeKingObjects4.length = 0;
gdjs.MainCode.GDSlimeObjects1.length = 0;
gdjs.MainCode.GDSlimeObjects2.length = 0;
gdjs.MainCode.GDSlimeObjects3.length = 0;
gdjs.MainCode.GDSlimeObjects4.length = 0;
gdjs.MainCode.GDNumObjectsObjects1.length = 0;
gdjs.MainCode.GDNumObjectsObjects2.length = 0;
gdjs.MainCode.GDNumObjectsObjects3.length = 0;
gdjs.MainCode.GDNumObjectsObjects4.length = 0;
gdjs.MainCode.GDGameOverObjects1.length = 0;
gdjs.MainCode.GDGameOverObjects2.length = 0;
gdjs.MainCode.GDGameOverObjects3.length = 0;
gdjs.MainCode.GDGameOverObjects4.length = 0;

gdjs.MainCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['MainCode'] = gdjs.MainCode;

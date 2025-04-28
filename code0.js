gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDBallObjects1= [];
gdjs.Game_32SceneCode.GDBallObjects2= [];
gdjs.Game_32SceneCode.GDBlock_9595LightObjects1= [];
gdjs.Game_32SceneCode.GDBlock_9595LightObjects2= [];
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects1= [];
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects2= [];
gdjs.Game_32SceneCode.GDCat1Objects1= [];
gdjs.Game_32SceneCode.GDCat1Objects2= [];
gdjs.Game_32SceneCode.GDSkullAndBonesObjects1= [];
gdjs.Game_32SceneCode.GDSkullAndBonesObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCat1Objects1Objects = Hashtable.newFrom({"Cat1": gdjs.Game_32SceneCode.GDCat1Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBlock_95959595HeavyObjects1Objects = Hashtable.newFrom({"Block_Heavy": gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Block_Heavy"), gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Game_32SceneCode.GDCat1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCat1Objects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBlock_95959595HeavyObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCat1Objects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCat1Objects1[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBallObjects1.length = 0;
gdjs.Game_32SceneCode.GDBallObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595LightObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595LightObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects2.length = 0;
gdjs.Game_32SceneCode.GDCat1Objects1.length = 0;
gdjs.Game_32SceneCode.GDCat1Objects2.length = 0;
gdjs.Game_32SceneCode.GDSkullAndBonesObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkullAndBonesObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBallObjects1.length = 0;
gdjs.Game_32SceneCode.GDBallObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595LightObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595LightObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects2.length = 0;
gdjs.Game_32SceneCode.GDCat1Objects1.length = 0;
gdjs.Game_32SceneCode.GDCat1Objects2.length = 0;
gdjs.Game_32SceneCode.GDSkullAndBonesObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkullAndBonesObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;

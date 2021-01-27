/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";
import { GrBuilding1,GrBuilding2 } from "./6-buildings.js";
import { AmbientLight } from "../libs/CS559-THREE/build/three.module.js";
// your buildings are defined in another file... you should import them
// here
function shift(grobj,x,z) {
  grobj.objects[0].translateX(x);
  grobj.objects[0].translateZ(z);
  return grobj;
}

function test() {
  let world = new GrWorld({lightBrightness:1,ambient:1});

  let b1 = shift(new GrBuilding1(),-4,0);
    world.add(b1);
  // place your buildings and trees into the world here

  let b2 = shift(new GrBuilding2(),4,-4);
  world.add(b2);

  world.go();
}
Helpers.onWindowOnload(test);

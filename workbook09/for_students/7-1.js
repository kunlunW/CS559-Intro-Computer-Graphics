/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";
import { GrBus } from "./7-car.js";
// your vehicles are defined in another file... you should import them
// here

function set(grobj,x,y,z) {
  grobj.objects[0].translateX(x);
  grobj.objects[0].translateY(y);
  grobj.objects[0].translateZ(z);
  return grobj;
}

function test() {
  let world = new GrWorld({ambient:1,lightBrightness:1.5});

  let bus = set(new GrBus(),1,0,0);
    world.add(bus);
  // place your vehicles into the world here

  world.go();
}
Helpers.onWindowOnload(test);

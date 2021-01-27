/*jshint esversion: 6 */
// @ts-check

// get things we need
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import {
  GrSimpleSwing,
  GrAdvancedSwing,
  GrColoredRoundabout,
  GrSimpleRoundabout,
  GrCarousel

} from "./8-parkobjects.js";
import { SimpleBouncer } from "./8-simplepark.js";

function test() {
  let parkDiv = document.getElementById("div1");
  let world = new GrWorld({ groundplanesize: 20, where: parkDiv });

  // world.add(new SimpleBouncer(0, 5));

  let roundabout = new GrSimpleRoundabout({ x: -2 });
  world.add(roundabout);

  let roundabout_2 = new GrColoredRoundabout({ x: 5 });
  world.add(roundabout_2);

  let swing_2 = new GrSimpleSwing({ x: 10 });
  world.add(swing_2);

  let swing = new GrAdvancedSwing({x:10, z:10});
    world.add(swing);

  let carousel = new GrCarousel({z:10});
    world.add(carousel);

  function loop() {
    world.animate();
    window.requestAnimationFrame(loop);
  }
  loop();
}
window.onload = test;

/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559-Libs/inputHelpers.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";


class Skybox extends GrObject {
  constructor(params = {}) {
      let geometry = new T.SphereBufferGeometry(10000, 100, 100);
      let loader  = new T.TextureLoader();
      let texture = loader.load("../images/text4.jpg");
      let material = new T.MeshPhongMaterial({map: texture, side:T.BackSide, flatShading:true});
      let mesh = new T.Mesh(geometry, material);
      super("Skybox", mesh);
  }
}

class GrMetalSphere extends GrObject
{
    constructor()
    {
        let geoSphere = new T.SphereGeometry(5, 50, 50);
        let texture = new T.TextureLoader().load("../images/world.jpg")
        let matSphere = new T.MeshStandardMaterial({map: texture, roughnessMap: texture, metalnessMap: texture, refractionRatio: 1});
        let sphere = new T.Mesh(geoSphere, matSphere);
        super("Sphere", sphere);
    }
}



function test() {
  let parentOfCanvas = document.getElementById("div1");
  let world = new GrWorld({ where: parentOfCanvas, groundplane:false, lookfrom:new T.Vector3(0, 0, -100),  far:20000 });
  world.orbit_controls.maxDistance = 50;

  let box1 = new Skybox();
    world.add(box1);

    let rock1 = new GrMetalSphere();
    world.add(rock1);

  world.go();
}
Helpers.onWindowOnload(test);

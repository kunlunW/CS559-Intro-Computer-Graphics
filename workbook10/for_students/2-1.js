/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559-Libs/inputHelpers.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";


class Grglobe extends GrObject
{
    constructor()
    {
        let geoSphere = new T.SphereGeometry(3, 50, 50);
        let texture = new T.TextureLoader().load("../images/world.jpg")
        let matSphere = new T.MeshStandardMaterial({map: texture, roughnessMap: texture, metalnessMap: texture, refractionRatio: 1});
        let sphere = new T.Mesh(geoSphere, matSphere);
        super("sphere", sphere);
    }
}


function test() {
  let parentOfCanvas = document.getElementById("div1");
  let world = new GrWorld({ where: parentOfCanvas });
  let globe = new Grglobe();
  globe.objects[0].translateY(3);
    world.add(globe);
  world.go();
}
Helpers.onWindowOnload(test);

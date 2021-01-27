/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559-Libs/inputHelpers.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";


class GrSphere extends GrObject
{
    constructor(material)
    {
        let geoSphere = new T.BoxGeometry(4, 4, 4);
        let sphere = new T.Mesh(geoSphere, material);
        super("Sphere", sphere);
    }
}

function test() {
  let parentOfCanvas = document.getElementById("div1");
  let world = new GrWorld({ where: parentOfCanvas });
  let loader = new T.CubeTextureLoader();
    loader.setPath('../images/');
    let envTexture = loader.load([
        "dark_ft.png", "dark_bk.png",
        "dark_up.png", "dark_dn.png",
        "dark_rt.png", "dark_lf.png"
    ]);
    world.scene.background = envTexture;
    let sphere = new GrSphere(new T.MeshLambertMaterial({envMap: envTexture}));
    sphere.objects[0].translateY(2);
    world.add(sphere);
  world.go();
}
Helpers.onWindowOnload(test);

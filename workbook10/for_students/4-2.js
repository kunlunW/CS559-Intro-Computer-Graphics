/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559-Libs/inputHelpers.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";

class GrSphere extends GrObject
{
    constructor()
    {
        let geoSphere = new T.SphereGeometry(4, 50, 50);
        let texture = new T.TextureLoader().load("../images/world.jpg");
        let matSphere = new T.MeshStandardMaterial({map: texture, roughnessMap:texture,
            normalMap: texture});
        let sphere = new T.Mesh(geoSphere, matSphere);
        sphere.translateY(5);
        super("Sphere", sphere);
    }
}
function test() {
    let world = new GrWorld();
    let singleSphere = new GrSphere();
    world.add(singleSphere);
    let loader = new T.CubeTextureLoader();
    loader.setPath('../images/');
    world.scene.background = loader.load([
        "arch3_ft.png", "arch3_bk.png",
        "arch3_up.png", "arch3_dn.png",
        "arch3_rt.png", "arch3_lf.png"
    ]);
    world.go();
}
Helpers.onWindowOnload(test);
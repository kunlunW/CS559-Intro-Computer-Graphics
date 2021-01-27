/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559-Libs/inputHelpers.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";


class GrMyDrawing extends GrObject
{
    constructor()
    {
        let geoBox = new T.BoxGeometry(3, 3, 0.1);
        let texture = new T.TextureLoader().load("../images/myDrawing.jpeg");
        let matBox = new T.MeshStandardMaterial({map: texture, normalMap: texture});
        let normalWoodBox = new T.Mesh(geoBox, matBox);
        super("normalWoodBox", normalWoodBox);
    }
}


class GrNormal extends GrObject
{
  constructor()
  {
      
      let geoBox = new T.SphereGeometry(1.5, 32, 32);
      let texture = new T.TextureLoader().load("../images/window.jpg");
      let matBox = new T.MeshStandardMaterial({map: texture, normalMap: texture});
      let bumpWoodBox = new T.Mesh(geoBox, matBox);
      super("normalWoodBox", bumpWoodBox);
  }
}
class GrBump extends GrObject
{
    constructor()
    {
       
        let geoBox = new T.SphereGeometry(1.5, 32, 32);
        let texture = new T.TextureLoader().load("../images/window.jpg");
        let matBox = new T.MeshStandardMaterial({map: texture, bumpMap: texture});
        let bumpWoodBox = new T.Mesh(geoBox, matBox);
        super("normalWoodBox", bumpWoodBox);
    }
}



function test() {
  let parentOfCanvas = document.getElementById("div1");
  let world = new GrWorld({ where: parentOfCanvas });
  let normalWoodBox = new GrNormal();
    normalWoodBox.objects[0].translateY(1.8);
    normalWoodBox.objects[0].translateX(0.5);
   
    let bumpWoodBox = new GrBump();
    bumpWoodBox.objects[0].translateY(1.8);
    bumpWoodBox.objects[0].translateX(4);
    

    let myDrawing = new GrMyDrawing();
    myDrawing.objects[0].translateX(-3);
    myDrawing.objects[0].translateY(1.8);
    myDrawing.objects[0].translateZ(0);
    

    world.add(myDrawing);
    world.add(bumpWoodBox);
    world.add(normalWoodBox);
  world.go();
}
Helpers.onWindowOnload(test);

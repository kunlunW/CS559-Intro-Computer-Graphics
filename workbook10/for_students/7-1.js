/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559-Libs/inputHelpers.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";


/**
 * A "simple" object (TorusKnot) - this is built into THREE, so the code here is simple,
 * but the object itself has non-simple appearance
 */
export class GrTorus extends GrObject {
  
  constructor(params = {}, paramInfo = []) {
    let material;
    if (params.material) {
      material = params.material;
    } else if (params.color) {
      material = new T.MeshStandardMaterial({ color: params.color });
    } else {
      material = new T.MeshStandardMaterial({ color: "#FF8888" });
    }
    let geom = new T.TorusKnotBufferGeometry();
    let mesh = new T.Mesh(geom, material);
    super(`${simpleObjectCounter++}`, mesh, paramInfo);
    mesh.position.x = params.x ? Number(params.x) : 0;
    mesh.position.y = params.y ? Number(params.y) : 0;
    mesh.position.z = params.z ? Number(params.z) : 0;
    let size = params.size || 0.7;
    mesh.scale.set(size, size, size);
  }
}
 let simpleObjectCounter = 0;

export class sphere extends GrObject {
  constructor(world,radius) {
      let group = new T.Group();
      super("sphere",group);
      this.world = world;
      this.cam = new T.CubeCamera(radius*1.1,1000,128);
      this.Geom = new T.SphereGeometry(radius,50,50);
      this.Mat = new T.MeshStandardMaterial(
          {
              color: "gold",
              roughness : 0.1,
              metalness : .9,
              envMap : this.cam.renderTarget.texture
          });
      this.sculpture = new T.Mesh(this.Geom, this.Mat);
      group.add(this.cam);
      group.add(this.sculpture);
      group.translateY(2);
  }
  tick(delta, timeOfDay) {
      this.cam.update(this.world.renderer,this.world.scene);
  }
}

function test() {
  let parentOfCanvas = document.getElementById("div1");
  let world = new GrWorld({ where: parentOfCanvas });
  let loader = new T.CubeTextureLoader();
    loader.setPath('../images/');
    let envTexture = loader.load([
        "skype_ft.png", "skype_bk.png",
        "skype_up.png", "skype_dn.png",
        "skype_rt.png", "skype_lf.png"
    ]);
    world.scene.background = envTexture;
    world.add(new GrTorus({x:-4, z:-4, y:1.5, color: "green"}));
    world.add(new GrTorus({x:-4, z: 4, y:1.5, color: "green"}));
    world.add(new GrTorus({x: 4, z: 4, y:1.5, color: "green"}));
    world.add(new GrTorus({x:-4, z: 0, y:1.5, color: "green"}));
    world.add(new GrTorus({x: 4, z: 0, y:1.5, color: "green"}));
    world.add(new GrTorus({x: 4, z:-4, y:1.5, color: "green"}));

    let s1 = new sphere(world,2);
    world.add(s1);
    s1.objects[0].translateY(2)

    let s2 = new sphere(world, 1);
    world.add(s2);
    
    let s2t=0;

    let s3 = new sphere(world, 2.3);
    world.add(s3);

    s2.oldTick = s2.tick;
    
    s2.tick = function(delta) {
        s2t += delta;
        s2.setPos(3*Math.sin(s2t/1000),1,3*Math.cos(s2t/1000));
        s2.oldTick(delta);
    }
    


  world.go();
}
Helpers.onWindowOnload(test);


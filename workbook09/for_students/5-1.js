/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";


function set(grobj,x,y,z) {
  grobj.objects[0].translateX(x);
  grobj.objects[0].translateY(y);
  grobj.objects[0].translateZ(z);
  return grobj;
}

class Dice extends GrObject {
  constructor() {
      let geometry = new T.Geometry();
      geometry.faceVertexUvs = [ [] ];
      geometry.vertices.push(new T.Vector3( 0,0, 0));
      geometry.vertices.push(new T.Vector3( 2,0, 0));
      geometry.vertices.push(new T.Vector3( 2,0, 2));
      geometry.vertices.push(new T.Vector3( 0,0, 2));
      geometry.vertices.push(new T.Vector3( 0,2, 2));
      geometry.vertices.push(new T.Vector3( 0,2, 0));
      geometry.vertices.push(new T.Vector3( 2,2, 0));
      geometry.vertices.push(new T.Vector3( 2,2, 2));

      let s1 = 1/3; 
      let s2 = 2/3;
      
      let f2 = new T.Face3(3,7,4);
      geometry.faces.push(f2);
      geometry.faceVertexUvs[0].push([new T.Vector2(s1,s1), new T.Vector2(s2,s2), new T.Vector2(s1,s2)]);
      let f3 = new T.Face3(2,1,6);
      geometry.faces.push(f3);
      geometry.faceVertexUvs[0].push([new T.Vector2(s2,s1), new T.Vector2(1,s1), new T.Vector2(1,s2)]);
      let f1 = new T.Face3(3,2,7);
      geometry.faces.push(f1);
      geometry.faceVertexUvs[0].push([new T.Vector2(s1,s1), new T.Vector2(s2,s1), new T.Vector2(s2,s2)]);
      let f5 = new T.Face3(4,7,6);
      geometry.faces.push(f5);
      geometry.faceVertexUvs[0].push([new T.Vector2(s1,s2), new T.Vector2(s2,s2), new T.Vector2(s2,1)]);
      let f6 = new T.Face3(4,6,5);
      geometry.faces.push(f6);
      geometry.faceVertexUvs[0].push([new T.Vector2(s1,s2), new T.Vector2(s2,1), new T.Vector2(s1,1)]);
      let f11 = new T.Face3(1,0,5);
      geometry.faces.push(f11);
      geometry.faceVertexUvs[0].push([new T.Vector2(s2,0), new T.Vector2(1,0), new T.Vector2(1,s1)]);
      let f8 = new T.Face3(0,4,5);
      geometry.faces.push(f8);
      geometry.faceVertexUvs[0].push([new T.Vector2(0,s1), new T.Vector2(s1,s2), new T.Vector2(0,s2)]);
      let f4 = new T.Face3(2,6,7);
      geometry.faces.push(f4);
      geometry.faceVertexUvs[0].push([new T.Vector2(s2,s1), new T.Vector2(1,s2), new T.Vector2(s2,s2)]);
      let f9 = new T.Face3(0,1,2);
      geometry.faces.push(f9);
      geometry.faceVertexUvs[0].push([new T.Vector2(s1,0), new T.Vector2(s2,0), new T.Vector2(s2,s1)]);
      let f10 = new T.Face3(0,2,3);
      geometry.faces.push(f10);
      geometry.faceVertexUvs[0].push([new T.Vector2(s1,0), new T.Vector2(s2,s1), new T.Vector2(s1,s1)]);
     
      let f12 = new T.Face3(1,5,6);
      geometry.faces.push(f12);
      geometry.faceVertexUvs[0].push([new T.Vector2(s2,0), new T.Vector2(1,s1), new T.Vector2(s2,s1)]);
      let f7 = new T.Face3(0,3,4);
      geometry.faces.push(f7);
      geometry.faceVertexUvs[0].push([new T.Vector2(0,s1), new T.Vector2(s1,s1), new T.Vector2(s1,s2)]);
      geometry.computeFaceNormals();
      geometry.uvsNeedUpdate=true;

      let tl=new T.TextureLoader().load("../images/dice_texture.png");
      let material = new T.MeshStandardMaterial({map:tl});
      let mesh = new T.Mesh(geometry,material);
      super("dice",mesh);
  }
}

function test() {

  let world = new GrWorld();

  let t1 = set(new Dice(), 0,0,0);
  t1.objects[0].rotateOnAxis(new T.Vector3(0,0,1),-Math.PI/3);
  t1.objects[0].translateX(-2);
  world.add(t1);
  let t2 = set(new Dice(), 1.7,0,0);
  world.add(t2);
  world.go();
}
Helpers.onWindowOnload(test);
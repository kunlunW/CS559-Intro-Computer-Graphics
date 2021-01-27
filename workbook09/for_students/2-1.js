/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559-Libs/inputHelpers.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";

/*
 * Define your 3 objects here. If the objects fit inside +/- 1,
 * the world code below will place them nicely.
 * Otherwise, you need to modify the world code below to make the
 * world bigger and space the objects out differently.
 */

class Object1 extends GrObject {
  constructor() {
    let geometry = new T.Geometry();
        geometry.vertices.push(new T.Vector3(0, 0, 0));
       geometry.vertices.push(new T.Vector3(0, 1, 0));
      geometry.vertices.push(new T.Vector3(1, 1, 0));
      geometry.vertices.push(new T.Vector3(1, 0, 0));
      geometry.vertices.push(new T.Vector3(0.5, 0.5, 1));
      
        let side1 = new T.Face3(0,1,2);
        side1.color.setStyle("white");
        geometry.faces.push(side1);

        let side2 = new T.Face3(0,2,3);
        side2.color.setStyle("white");
        geometry.faces.push(side2);

        let side3 = new T.Face3(1,0,4);
        side3.color.setStyle("blue");
        geometry.faces.push(side3);

        let side4 = new T.Face3(2,1,4);
        side4.color.setStyle("purple");
        geometry.faces.push(side4);

         let side5 = new T.Face3(3,2,4);
       side5.color.setStyle("red");
       geometry.faces.push(side5);
        

         let side6 = new T.Face3(0,3,4);
       side6.color.setStyle("green");
       geometry.faces.push(side6);
       geometry.computeFaceNormals();

      let faceMaterial = new T.MeshStandardMaterial({roughness:0.9, vertexColors:T.VertexColors});

      let faceColoring = new T.Mesh(geometry, faceMaterial);

    super("faceColor", faceColoring);

    faceColoring.rotateX(Math.PI*3/2);
    
  }
}
class Object2 extends GrObject {
  constructor() {
    let geometry = new T.Geometry();
       
    geometry.vertices.push(new T.Vector3(0, 0, 0));
    geometry.vertices.push(new T.Vector3(0, 1, 0));
   geometry.vertices.push(new T.Vector3(1, 1, 0));
   geometry.vertices.push(new T.Vector3(1, 0, 0));
   geometry.vertices.push(new T.Vector3(0.5, 0.5, 1));

        let side1 = new T.Face3(0,1,2);
        side1.color.setStyle("white");
        geometry.faces.push(side1);

        let side2 = new T.Face3(0,2,3);
        side2.color.setStyle("white");
        geometry.faces.push(side2);

        let side3 = new T.Face3(1,0,4);
        side3.vertexColors[0] = new T.Color("blue");
        side3.vertexColors[1] = new T.Color("green");
        side3.vertexColors[2] = new T.Color("white");
        geometry.faces.push(side3);

        let side4 = new T.Face3(2,1,4);
        side4.vertexColors[0] = new T.Color("red");
        side4.vertexColors[1] = new T.Color("blue");
        side4.vertexColors[2] = new T.Color("white");
        geometry.faces.push(side4);

        let side5 = new T.Face3(3,2,4);
        side5.vertexColors[0] = new T.Color("yellow");
        side5.vertexColors[1] = new T.Color("red");
        side5.vertexColors[2] = new T.Color("white");
        geometry.faces.push(side5);

        let side6 = new T.Face3(0,3,4);
        side6.vertexColors[0] = new T.Color("green");
        side6.vertexColors[1] = new T.Color("yellow");
        side6.vertexColors[2] = new T.Color("white");
        geometry.faces.push(side6);

        geometry.computeFaceNormals();

        let faceMaterial = new T.MeshStandardMaterial({roughness:0.79, metalness:0.1, vertexColors:T.VertexColors, })
        let vertexColor = new T.Mesh(geometry,  faceMaterial);
        super("vertexColoring", vertexColor);
        vertexColor.rotateX(Math.PI*3/2);

  }
}
class Object3 extends GrObject {
  constructor() {
    let geometry = new T.Geometry();
    geometry.vertices.push(new T.Vector3(0, 0, 0));
    geometry.vertices.push(new T.Vector3(0, 1, 0));
   geometry.vertices.push(new T.Vector3(1, 1, 0));
   geometry.vertices.push(new T.Vector3(1, 0, 0));
   geometry.vertices.push(new T.Vector3(0.5, 0.5, 1));


    let s = 1/(2**(1/2));
    let s2 = Math.sqrt(2)/2; 

    let normals = [
      new T.Vector3(0, 1, 0),
      new T.Vector3(0, s, 0),
      new T.Vector3(s, s, 0),
      new T.Vector3(s, 0, 0),
      new T.Vector3(s/2, s/2, 0),
      // new T.Vector3(0, 1, 0)
    ]

    let side1 = new T.Face3(0,1,2);
        side1.color.setStyle("white");
        geometry.faces.push(side1);

        let side2 = new T.Face3(0,2,3);
        side2.color.setStyle("white");
        geometry.faces.push(side2);

        let side3 = new T.Face3(1,0,4);
        side3.vertexNormals[0] = normals[1];
        side3.vertexNormals[1] = normals[0];
        side3.vertexNormals[2] = normals[4];
        geometry.faces.push(side3);

        let side4 = new T.Face3(2,1,4);
        side4.vertexNormals[0] = normals[2];
        side4.vertexNormals[1] = normals[1];
        side4.vertexNormals[2] = normals[4];
        geometry.faces.push(side4);

         let side5 = new T.Face3(3,2,4);
         side5.vertexNormals[0] = normals[3];
         side5.vertexNormals[1] = normals[2];
         side5.vertexNormals[2] = normals[4];
          geometry.faces.push(side5);
        

         let side6 = new T.Face3(0,3,4);
         side6.vertexNormals[0] = normals[0];
         side6.vertexNormals[1] = normals[3];
         side6.vertexNormals[2] = normals[4];
        geometry.faces.push(side6);


    let object = new T.Mesh(geometry,  new T.MeshStandardMaterial({roughness:0.9, color: "silver"}));
    super("smoothEdge", object);
    object.rotateX(Math.PI*3/2);
  }
}

// translate an object in the X direction
function shift(grobj, x) {
    grobj.objects.forEach(element => {
        element.translateX(x);
    });
  return grobj;
}

// Set the Object's Y rotate
function roty(grobj, ry) {
    grobj.objects.forEach(element => {
        element.rotation.y = ry;
    });
  return grobj;
}

/*
 * The world making code here assumes the objects are +/- 1
 * and have a single mesh as their THREE objects.
 * If you don't follow this convention, you will need to modify
 * the code below.
 * The code is a little funky because it is designed to work for
 * a variety of demos.
 */
function test() {
  let mydiv = document.getElementById("div1");

  let box = InputHelpers.makeBoxDiv({ width: mydiv ? 640 : 820 }, mydiv);
  if (!mydiv) {
    InputHelpers.makeBreak(); // sticks a break after the box
  }
  InputHelpers.makeHead("Three Different Objects", box);

  let world = new GrWorld({ width: mydiv ? 600 : 800, where: box });
  let tt = shift(new Object1(), -3);
  world.add(tt);

  let t2 = shift(new Object2(), 0);
  world.add(t2);

  let t3 = shift(new Object3(), 3);
  world.add(t3);

  let div = InputHelpers.makeBoxDiv({}, box);

  let sl = new InputHelpers.LabelSlider("ry", { min: -2, max: 2, where: div });

  InputHelpers.makeBreak(box);

  sl.oninput = function(evt) {
    let v = sl.value();
    roty(tt,v);
    roty(t2,v);
    roty(t3,v);
  };

  world.go();
}
Helpers.onWindowOnload(test);

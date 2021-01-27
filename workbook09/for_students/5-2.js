/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";

function set (grobj, x, y, z) {
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateY(y);
    grobj.objects[0].translateZ(z);
    return grobj;
}

let s1 = 1/2; 
let s2 = 2/3; 
let domino1 = new T.Vector2(0, 0),
    domino2 = new T.Vector2(s1, 0),
    domino3 = new T.Vector2(0, s1);
let six1 = new T.Vector2(s2, s2),
    six2 = new T.Vector2(s2, 1),
    six3 = new T.Vector2(1, s2),
    six4 = new T.Vector2(s2, 1),
    six5 = new T.Vector2(1, 1),
    six6 = new T.Vector2(1, s2);

class GrDominosHalf extends GrObject {
    constructor(d1, d2, d3, d4, d5, d6, domino1, domino2, domino3){
        let geo = new T.Geometry();
        geo.vertices.push(new T.Vector3(-1, 0, 1));
        geo.vertices.push(new T.Vector3(-1, 1, 1));
        geo.vertices.push(new T.Vector3(0, 1, 1));
        geo.vertices.push(new T.Vector3(0, 0, 1));
        geo.vertices.push(new T.Vector3(0, 0, 0.5));
        geo.vertices.push(new T.Vector3(0, 1, 0.5));
        geo.vertices.push(new T.Vector3(-1, 1, 0.5));
        geo.vertices.push(new T.Vector3(-1, 0, 0.5));
        geo.faceVertexUvs = [ [] ];
  
    
        let f3 = new T.Face3(3, 4, 2);
        geo.faces.push(f3);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);

        let f4 = new T.Face3(4, 5, 2);
        geo.faces.push(f4);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);

        let f5 = new T.Face3(5, 6, 2);
        geo.faces.push(f5);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);

        let f6 = new T.Face3(6, 1, 2);
        geo.faces.push(f6);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);
   
        let f7 = new T.Face3(5, 4, 6);
        geo.faces.push(f7);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);

        let f8 = new T.Face3(4, 7, 6);
        geo.faces.push(f8);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);
 
        let f9 = new T.Face3(7, 0, 6);
        geo.faces.push(f9);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);

        let f10 = new T.Face3(0, 1, 6);
        geo.faces.push(f10);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);

        let f11 = new T.Face3(0, 7, 3);
        geo.faces.push(f11);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);

        let f12 = new T.Face3(7, 4, 3);
        geo.faces.push(f12);
        geo.faceVertexUvs[0].push([domino1, domino2, domino3]);

        let f1 = new T.Face3(1, 0, 2);
        geo.faces.push(f1);
        geo.faceVertexUvs[0].push([d1, d2, d3]);

        let f2 = new T.Face3(0, 3, 2);
        geo.faces.push(f2);
        geo.faceVertexUvs[0].push([d4, d5, d6]);

        geo.uvsNeedUpdate = true;
        geo.computeFaceNormals();
        let texture = new T.TextureLoader().load("../images/dice_texture.png");
        texture.flipY = false;
    let geoGroup = new T.Geometry();
        geoGroup.vertices.push(new T.Vector3(-1, 1, 1));
        geoGroup.vertices.push(new T.Vector3(0, 1, 1));
        let mat = new T.MeshBasicMaterial({map: texture});
        let mesh = new T.Mesh(geo, mat);
        super("dominos", mesh);
        mesh.rotateX(Math.PI*3/2);
    }
}


function test() {
    let world = new GrWorld();
    let do1 = set(new GrDominosHalf(six1, six2, six3, six4, six5, six6, domino1, domino2, domino3), 2, 1, 0);
    world.add(do1);
    let do2 = set(new GrDominosHalf(six1, six2, six3, six4, six5, six6, domino1, domino2, domino3), 2, 0, 0);
    world.add(do2);
    world.go();
}
Helpers.onWindowOnload(test);
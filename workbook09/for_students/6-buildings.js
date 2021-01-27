/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your buildings here - remember, they need to be imported
// into the "main" program

export class GrBuilding1 extends GrObject {
    constructor() {

        let geometry = new T.Geometry();
        geometry.faceVertexUvs = [[]];
        let width = 3, height = 2;
        // setting up the house
        geometry.vertices.push(new T.Vector3(0, 0, 0));
        geometry.vertices.push(new T.Vector3(3, 0, 0));
        geometry.vertices.push(new T.Vector3(3, 0, 3));
        geometry.vertices.push(new T.Vector3(0, 0, 3));
        geometry.vertices.push(new T.Vector3(0, 2, 3));
        geometry.vertices.push(new T.Vector3(0, 2, 0));
        geometry.vertices.push(new T.Vector3(3, 2, 0));
        geometry.vertices.push(new T.Vector3(3, 2, 3));
        geometry.vertices.push(new T.Vector3(3, 3, 1.5));
        geometry.vertices.push(new T.Vector3(0, 3, 1.5));

        let s1 = 1/3;
        let s2 = 2/3;

        let f1 = new T.Face3(3, 2, 7);
        geometry.faces.push(f1);
        geometry.faceVertexUvs[0].push([new T.Vector2(s1, s1), new T.Vector2(s2, s1), new T.Vector2(s2, s2)]);
        let f7 = new T.Face3(0, 3, 4);
        geometry.faces.push(f7);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, s1), new T.Vector2(s1, s1), new T.Vector2(s1, s2)]);

        let f3 = new T.Face3(2, 1, 6);
        geometry.faces.push(f3);
        geometry.faceVertexUvs[0].push([new T.Vector2(s2, s1), new T.Vector2(1, s1), new T.Vector2(1, s2)]);
        let f5 = new T.Face3(4, 7, 6);
        geometry.faces.push(f5);
        geometry.faceVertexUvs[0].push([new T.Vector2(s1, s2), new T.Vector2(s2, s2), new T.Vector2(s2, 1)]);

        let f11 = new T.Face3(1, 0, 5);
        geometry.faces.push(f11);
        geometry.faceVertexUvs[0].push([new T.Vector2(s2, 0), new T.Vector2(1, 0), new T.Vector2(1, s1)]);


        let f8 = new T.Face3(0, 4, 5);
        geometry.faces.push(f8);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, s1), new T.Vector2(s1, s2), new T.Vector2(0, s2)]);
        let f9 = new T.Face3(0, 1, 2);
        geometry.faces.push(f9);
        geometry.faceVertexUvs[0].push([new T.Vector2(s1, 0), new T.Vector2(s2, 0), new T.Vector2(s2, s1)]);
        let f10 = new T.Face3(0, 2, 3);
        geometry.faces.push(f10);
        geometry.faceVertexUvs[0].push([new T.Vector2(s1, 0), new T.Vector2(s2, s1), new T.Vector2(s1, s1)]);

        let f2 = new T.Face3(3, 7, 4);
        geometry.faces.push(f2);
        geometry.faceVertexUvs[0].push([new T.Vector2(s1, s1), new T.Vector2(s2, s2), new T.Vector2(s1, s2)]);

        let f4 = new T.Face3(2, 6, 7);
        geometry.faces.push(f4);
        geometry.faceVertexUvs[0].push([new T.Vector2(s2, s1), new T.Vector2(1, s2), new T.Vector2(s2, s2)]);

        let f6 = new T.Face3(4, 6, 5);
        geometry.faces.push(f6);
        geometry.faceVertexUvs[0].push([new T.Vector2(s1, s2), new T.Vector2(s2, 1), new T.Vector2(s1, 1)]);

        let f12 = new T.Face3(1, 5, 6);
        geometry.faces.push(f12);
        geometry.faceVertexUvs[0].push([new T.Vector2(s2, 0), new T.Vector2(1, s1), new T.Vector2(s2, s1)]);
        // setting up the window
        height = height - 0.5, width = width + 0.01;
        geometry.vertices.push(new T.Vector3(4 / 3 - 0.9, 1.5 / 2, 3.1));
        geometry.vertices.push(new T.Vector3(4 * s2 - 0.9, 1.5 / 2, 3.1));
        geometry.vertices.push(new T.Vector3(4 * s2 - 0.9, 1.5 / 2 + 2 * 3 / 7, 3.1));
        geometry.vertices.push(new T.Vector3(4 / 3 - 0.9, 1.5 / 2 + 2 * 3 / 7, 3.1));
        let w1 = new T.Face3(10, 11, 12);
        w1.materialIndex = 2;
        geometry.faces.push(w1);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1, 0), new T.Vector2(1, 1)]);
        let w2 = new T.Face3(10, 12, 13);
        w2.materialIndex = 2;
        geometry.faces.push(w2);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1, 1), new T.Vector2(0, 1)]);

        // setting up the door 
        geometry.vertices.push(new T.Vector3(2.8 - 0.5, 0, 3.05));
        geometry.vertices.push(new T.Vector3(2.8, 0, 3.05));
        geometry.vertices.push(new T.Vector3(2.8, 0.5 * 2, 3.05));
        geometry.vertices.push(new T.Vector3(2.8 - 0.5, 0.5 * 2, 3.05));

        let d1 = new T.Face3(14, 15, 16);
        d1.materialIndex = 3;
        geometry.faces.push(d1);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1, 0), new T.Vector2(1, 1)]);
        let d2 = new T.Face3(14, 16, 17);
        d2.materialIndex = 3;
        geometry.faces.push(d2);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1, 1), new T.Vector2(0, 1)]);
        
        let tl = new T.TextureLoader().load("../images/wallTexture1.jpeg");
        let material = new T.MeshStandardMaterial({ map: tl });

        // setting up the roof
        let r1 = new T.Face3(4, 7, 8);
        r1.materialIndex = 1;
        geometry.faces.push(r1);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1 , 0), new T.Vector2(1 , 1)]);
        let r2 = new T.Face3(4, 8, 9);
        r2.materialIndex = 1;
        geometry.faces.push(r2);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1 , 1 ), new T.Vector2(0, 1 )]);
        let r3 = new T.Face3(6, 5, 9);
        r3.materialIndex = 1;
        geometry.faces.push(r3);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1, 0), new T.Vector2(1, 1)]);
        let r4 = new T.Face3(6, 9, 8);
        r4.materialIndex = 1;
        geometry.faces.push(r4);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1, 1), new T.Vector2(0, 1)]);
        let r5 = new T.Face3(9, 5, 4);
        r5.materialIndex = 1;
        geometry.faces.push(r5);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1, 0), new T.Vector2(1, 1)]);
        let r6 = new T.Face3(8, 7, 6);
        r6.materialIndex = 1;
        geometry.faces.push(r6);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(1, 1), new T.Vector2(0, 1)]);

        geometry.computeFaceNormals();
        geometry.uvsNeedUpdate = true;

        let t2 = new T.TextureLoader().load("../images/roof1.jpg");
        let material2 = new T.MeshStandardMaterial({ map: t2 });

        let t3 = new T.TextureLoader().load("../images/newWindow.png");
        let material3 = new T.MeshStandardMaterial({ map: t3 });

        let t4 = new T.TextureLoader().load("../images/door1.png");
        let material4 = new T.MeshStandardMaterial({ map: t4 });
        let mesh = new T.Mesh(geometry, [material, material2, material3, material4]);

        super("TwoTriangles1", mesh);
    }
}


export class GrBuilding2 extends GrObject {
    constructor() {
        let geo = new T.Geometry();
        geo.vertices.push(new T.Vector3(-4, 0, 4));
        geo.vertices.push(new T.Vector3(-4, 4, 4));
        geo.vertices.push(new T.Vector3(0, 4, 4));
        geo.vertices.push(new T.Vector3(0, 0, 4));
        geo.vertices.push(new T.Vector3(0, 0, 0));
        geo.vertices.push(new T.Vector3(0, 4, 0));
        geo.vertices.push(new T.Vector3(-4, 4, 0));
        geo.vertices.push(new T.Vector3(-4, 0, 0));
        geo.vertices.push(new T.Vector3(-2, 7, 2));
        geo.faceVertexUvs = [[]];

        
        let f1 = new T.Face3(1, 0, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f1);
        let f2 = new T.Face3(0, 3, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f2);
        // Right face
        let f3 = new T.Face3(3, 4, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f3);
        let f4 = new T.Face3(4, 5, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f4);
        // Left face
        let f5 = new T.Face3(7, 0, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f5);
        let f6 = new T.Face3(0, 1, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f6);
        // Back face
        let f7 = new T.Face3(5, 4, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f7);
        let f8 = new T.Face3(4, 7, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f8);
        // Bottom face
        let f9 = new T.Face3(0, 7, 3);
        geo.faces.push(f9);
        let f10 = new T.Face3(7, 4, 3);
        geo.faces.push(f10);
        // Top-front face
        let f11 = new T.Face3(8, 1, 2);
        geo.faces.push(f11);
        // Top-right face
        let f12 = new T.Face3(8, 2, 5);
        geo.faces.push(f12);
        // Top-back face
        let f13 = new T.Face3(8, 5, 6);
        geo.faces.push(f13);
        // Top-left face
        let f14 = new T.Face3(8, 6, 1);
        geo.faces.push(f14);
        
        geo.computeFaceNormals();
        geo.uvsNeedUpdate = true;
        let texture = new T.TextureLoader().load("../images/squareTexture.jpg");
        texture.flipY = true;
        let material = new T.MeshStandardMaterial({ map: texture, roughness: 0.9 });
        let mesh = new T.Mesh(geo, material);
        super("pyramid", mesh);

    }
}





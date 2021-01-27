/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program

export class GrBus extends GrObject {
    constructor() {
		let vehicleModel = new T.Group();
        let rearModel = new T.Group();
        let sidewindows = new T.Group();

        // setting up the car 
		let rearGeometry = new T.BoxGeometry( 4.5, 1, 0.8 );
		let rearmaterial = new T.MeshStandardMaterial({color:"#ebc034", metalness:0.6, roughness:0.8});
        let rearMesh = new T.Mesh(rearGeometry, rearmaterial);

        let frontLight = new T.CircleGeometry(2, 50);
        let lightMaterial = new T.MeshStandardMaterial({color:"white", metalness:0.6, roughness:0.8});
        let lightmesh = new T.Mesh(frontLight, lightMaterial);
       
        // setting up the front window 
        let rearWindowGeo = new T.BoxGeometry( 0.1, 0.5, 0.7 );
        rearWindowGeo.translate(0.5,0,0);
        let windowMaterial = new T.MeshStandardMaterial({color:"white", metalness:0.8, roughness:0.9});
        let rearwindowMesh = new T.Mesh(rearWindowGeo, windowMaterial);

        // setting up the side windows 
        let sideWindowGeo = new T.BoxGeometry( 0.5, 0.5, 0.1 );
        let first = new T.Mesh(sideWindowGeo, windowMaterial);
        let second = new T.Mesh(sideWindowGeo, windowMaterial);
        let third = new T.Mesh(sideWindowGeo, windowMaterial);
        let fourth = new T.Mesh(sideWindowGeo, windowMaterial);
        let fifth = new T.Mesh(sideWindowGeo, windowMaterial);
        let sixth = new T.Mesh(sideWindowGeo, windowMaterial);
        let seventh = new T.Mesh(sideWindowGeo, windowMaterial);
        let eightth = new T.Mesh(sideWindowGeo, windowMaterial);
        
        let driverMirror = new T.BoxGeometry( 0.3, 0.5, 0.1 );
        let ninth = new T.Mesh(driverMirror, windowMaterial);
        let tenth = new T.Mesh(driverMirror, windowMaterial);

        let eleven = new T.Mesh(sideWindowGeo, windowMaterial);
        let twelve = new T.Mesh(sideWindowGeo, windowMaterial);


        // setting up the mirror 
        let mirror = new T.BoxGeometry( 0.1, 0.4, 0.25 );
		let mirrorMaterial = new T.MeshStandardMaterial({color:"white", metalness:0.9, roughness:0.2});
        let leftMirror = new T.Mesh(mirror, mirrorMaterial);
        let secondMirror = new T.Mesh(mirror, mirrorMaterial);
       
        // translate z axis 
        first.translateZ(0.355);
        second.translateZ(-0.355);
        third.translateZ(0.355);
        fourth.translateZ(-0.355);
        fifth.translateZ(0.355);
        sixth.translateZ(-0.355);
        seventh.translateZ(0.355);
        eightth.translateZ(-0.355);
        ninth.translateZ(0.355);
        tenth.translateZ(-0.355);
        eleven.translateZ(0.355);
        twelve.translateZ(-0.355);
        // translate x axis
        first.translateX(-0.1);
        second.translateX(-0.1);
        
        third.translateX(0.5);
        fourth.translateX(0.5);
        
        fifth.translateX(1.1);
        sixth.translateX(1.1);

        seventh.translateX(-0.7);
        eightth.translateX(-0.7);
        ninth.translateX(1.9);
        tenth.translateX(1.9);

        eleven.translateX(-1.4);
        twelve.translateX(-1.4);

        leftMirror.translateZ(0.35);
        secondMirror.translateZ(-0.35);

        leftMirror.translateX(2.15);
        secondMirror.translateX(2.15);

        leftMirror.translateY(0.2);
        secondMirror.translateY(0.2);

        rearwindowMesh.translateX(1.72);
        rearwindowMesh.translateY(0.15);

        sidewindows.add(first,second,third,fourth,fifth,sixth,seventh,eightth, ninth, tenth, eleven, twelve);
        rearModel.add(rearMesh,rearwindowMesh,leftMirror,secondMirror,sidewindows);
        sidewindows.translateY(0.1);
        rearModel.translateY(0.4);
        vehicleModel.add(rearModel);

        let tireGeo = new T.CylinderGeometry( 0.25, 0.25, 0.9, 50);
        let tirematerial = new T.MeshStandardMaterial({color:"black", metalness:0.9, roughness:0.8});
        let tire1 = new T.Mesh(tireGeo, tirematerial);
        let tire2 = new T.Mesh(tireGeo, tirematerial);
        let tire3 = new T.Mesh(tireGeo, tirematerial);
        let tire4 = new T.Mesh(tireGeo, tirematerial);
        let tire5 = new T.Mesh(tireGeo, tirematerial);
        let tire6 = new T.Mesh(tireGeo, tirematerial);

        tire1.rotateX(Math.PI/2);
        tire2.rotateX(Math.PI/2);
        tire3.rotateX(Math.PI/2);
        tire4.rotateX(Math.PI/2);
        tire5.rotateX(Math.PI/2);
        tire6.rotateX(Math.PI/2);

        tire1.translateX(1.2);
        tire2.translateX(0.5);
        tire3.translateX(-0.5);
        tire4.translateX(-1.2);
        tire5.translateX(-1.8);
        tire6.translateX(1.8);
        vehicleModel.add(tire1,tire2,tire3,tire4,tire5, tire6);
        vehicleModel.translateY(0.2);
        super(`bus`,vehicleModel);
    }

}

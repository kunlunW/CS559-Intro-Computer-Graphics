/**
 * 8-1.js - a simple JavaScript file that gets loaded with
 * page 8 of Workbook 7 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as T from "../libs/THREE/build/three.module.js";
import { OrbitControls } from "../libs/THREE/examples/jsm/controls/OrbitControls.js";

window.onload = function() {
  let renderer = new T.WebGLRenderer();
  renderer.setSize(500, 500);
  document.getElementById("div1").appendChild(renderer.domElement);

  let scene = new T.Scene();
  let camera = new T.PerspectiveCamera();

  camera.position.z = 10;
  camera.position.y = 5;
  camera.position.x = 5;
  camera.lookAt(0, 3, 0);

  scene.add(new T.AmbientLight("white", 0.2));
  let point = new T.PointLight("white", 1, 0, 0);
  point.position.set(20, 10, 15);
  scene.add(point);

  let groundBox = new T.BoxGeometry(5, 0.1, 5);
  let groundMesh = new T.Mesh(
    groundBox,
    new T.MeshLambertMaterial({ color: 0x888888 })
  );

  groundMesh.position.y = -0.05;
  scene.add(groundMesh);

    // drawing the body of the snowman 
  let box1 = new T.Mesh(
    new T.SphereGeometry(1.65, 12, 12),
    new T.MeshStandardMaterial({ color: "white" })
    
  );

 
    // drawing the head of the snowman 
  let box2 = new T.Mesh(
    new T.SphereGeometry(1,12,12),
    new T.MeshStandardMaterial({ color: "white" })
  );

    // drawing the nose of the snowman 
  let box3 = new T.Mesh(
    new T.CylinderGeometry(0.05, 0.3, 1, 12),
    new T.MeshStandardMaterial({ color: "red" })
  );
    // drawing the left eye of the snowman 
  let box4 = new T.Mesh(
    new T.CylinderGeometry(0.1, 0.1, 0.05, 12),
    new T.MeshStandardMaterial({ color: "black" })
  );

  // drawing the left arm 
  let box5 = new T.Mesh(
    new T.BoxGeometry(0.2, 2, 0.2),
    new T.MeshStandardMaterial({ color: "brown" })
  );

  //  drawing the right arm
  let box6 = new T.Mesh(
    new T.BoxGeometry(0.2, 2, 0.2),
    new T.MeshStandardMaterial({ color: "brown" })
  );

  // drawing the right eye of the snowman 
  let box7 = new T.Mesh(
    new T.CylinderGeometry(0.1, 0.1, 0.05, 12),
    new T.MeshStandardMaterial({ color: "black" })
  );
  
  let box8 = new T.Mesh(
    new T.CylinderGeometry(0.05, 0.5, 1, 12),
    new T.MeshStandardMaterial({ color: "red" })
  );

  // mouth
  let box9 = new T.Mesh(
    new T.CylinderGeometry(0.2, 0.19, 0.05, 12),
    new T.MeshStandardMaterial({ color: "black" })
  );

  // the middle ball 
  let box10 = new T.Mesh(
    new T.SphereGeometry(1.3, 12, 12),
    new T.MeshStandardMaterial({ color: "white" })
  );

  let box11 = new T.Mesh(
    new T.CylinderGeometry(0.1, 0.1, 0.05, 12),
    new T.MeshStandardMaterial({ color: "green" })
  );

  let box12 = new T.Mesh(
    new T.CylinderGeometry(0.1, 0.1, 0.05, 12),
    new T.MeshStandardMaterial({ color: "green" })
  );

  let box13 = new T.Mesh(
    new T.CylinderGeometry(0.1, 0.1, 0.05, 12),
    new T.MeshStandardMaterial({ color: "green" })
  );

   
  box1.position.set(0,1,0);
  // head mesh 
  box10.position.set(0,3,0);
  box2.position.set(0, 5, 0);
  box3.position.set(0, 5, 1);
  box3.rotateOnAxis(new T.Vector3(1, 0, 0), Math.PI * 0.5);
  box5.position.set(1, 4, 0);
  box5.rotateOnAxis(new T.Vector3(0, 0, 1), Math.PI * 0.6);
  box6.position.set(-1, 4, 0);
  box6.rotateOnAxis(new T.Vector3(0, 0, 1), -Math.PI * 0.65);
  box4.position.set(0.25, 5.5, 1);
  box4.rotateOnAxis(new T.Vector3(1, 0, 0), Math.PI * 0.5);
  box7.position.set(-0.25, 5.5, 1);
  box7.rotateOnAxis(new T.Vector3(1, 0, 0), Math.PI * 0.5);
  box8.position.set(0,6.2,0);
  box9.position.set(0,4.5,1);
  box9.rotateOnAxis(new T.Vector3(1, 0, 0), Math.PI * 0.5);
  box11.position.set(0,3.5,1);
  box11.rotateOnAxis(new T.Vector3(2, 0, 0), Math.PI * 0.5);
  box12.position.set(0,2.5,1);
  box12.rotateOnAxis(new T.Vector3(2.2, 0, 0), Math.PI * 0.5);
  box13.position.set(0,3,1);
  box13.rotateOnAxis(new T.Vector3(2.3, 0, 0), Math.PI * 0.5);


scene.add(box1);
scene.add(box2);
scene.add(box3);
scene.add(box4);
scene.add(box5);
scene.add(box6);
scene.add(box7);
scene.add(box8);
scene.add(box9);
scene.add(box10);
scene.add(box11);
scene.add(box12);
scene.add(box13);
renderer.render(scene, camera);


  // student does the rest.
};

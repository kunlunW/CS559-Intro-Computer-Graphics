/**
 * 6-1.js - a simple JavaScript file that gets loaded with
 * page 6 of Workbook 7 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as T from "../libs/THREE/build/three.module.js";

window.onload = function() {
  let renderer = new T.WebGLRenderer();
  renderer.setSize(500, 500);
  document.getElementById("div1").appendChild(renderer.domElement);

  let scene = new T.Scene();

  // make an array of materials
  // student should improve these materials
  let materials = [];

  // Give each material some parameters to create different appearances
  materials[0] = new T.MeshStandardMaterial({ color: 0xeb3434, metalness: 0.1, roughness:0.1});
  materials[1] = new T.MeshStandardMaterial({ color: 0xeb4634, metalness: 0.2, roughness:0.2});
  materials[2] = new T.MeshStandardMaterial({ color: 0xeb5634, metalness: 0.3, roughness:0.3 });
  materials[3] = new T.MeshStandardMaterial({ color: 0xeb7134, metalness: 0.4, roughness:0.4 });
  materials[4] = new T.MeshStandardMaterial({ color: 0xeb8334, metalness: 0.5, roughness:0.5 });
  materials[5] = new T.MeshStandardMaterial({ color: 0xeb9934, metalness: 0.6, roughness:0.6});
  materials[6] = new T.MeshStandardMaterial({ color: 0xebae34, metalness: 0.7, roughness:0.7 });
  materials[7] = new T.MeshStandardMaterial({ color: 0xebc034, metalness: 0.8, roughness:0.8 });
  materials[8] = new T.MeshStandardMaterial({ color: 0xebdc34, metalness: 0.9, roughness:0.9 });

  // make spheres to show off the materials
  let geometry = new T.SphereBufferGeometry(1, 20, 20);

  // array of meshes
  let spheres = [];
  for (let i = 0; i < 9; i++) {
    spheres[i] = new T.Mesh(geometry, materials[i]);
    spheres[i].position.set(((i % 3) - 1) * 3, 0, Math.floor(i / 3) * 3);

    
    scene.add(spheres[i]);
  }

  // make some lights
  let l1 = new T.DirectionalLight();
  let l2 = new T.PointLight();
  l2.position.set(10, 10, 10);
  scene.add(l1);
  scene.add(l2);

  // a camera
  let camera = new T.PerspectiveCamera();
  camera.position.set(0, 10, 10);
  camera.lookAt(0, -2, 0);

  renderer.render(scene, camera);
};

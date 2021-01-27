/**
 * 9-1.js - a simple JavaScript file that gets loaded with
 * page 9 of Workbook 7 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as T from "../libs/THREE/build/three.module.js";
import { OrbitControls } from "../libs/THREE/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "../libs/THREE/examples/jsm/loaders/OBJLoader.js";

window.onload = function() {
  /** @type{T.Scene} */
  let scene = new T.Scene();
  /** @type{number} */
  let wid = 670; // window.innerWidth;
  /** @type{number} */
  let ht = 500; // window.innerHeight;
  /** @type{T.PerspectiveCamera} */
  let main_camera = new T.PerspectiveCamera(60, wid / ht, 1, 100);
  main_camera.position.set(0, 4, 6);
  main_camera.rotation.set(-0.5, 0, 0);
  let active_camera = main_camera;
  /** @type{T.WebGLRenderer} */
  let renderer = new T.WebGLRenderer();
  renderer.setSize(wid, ht);
  renderer.shadowMap.enabled = true;

  document.getElementById("museum_area").appendChild(renderer.domElement);
  setupButtons();
  setupBasicScene();

  // Here, we add a basic, simple first object to the museum.
  /**@type{T.Material} */
  let material = new T.MeshPhongMaterial({
    color: "#00aa00",
    shininess: 15,
    specular: "#00ff00"
  });
  /**@type{T.Geometry} */
  let geometry = new T.BoxGeometry(0.5, 0.5, 0.5);
  /**@type{T.Mesh} */
  let cube = new T.Mesh(geometry, material);
  cube.position.set(2, 1.35, 2);
  cube.rotation.set(Math.PI / 4, 0, Math.PI / 4);
  cube.castShadow = true;

  // TODO: You need to create three more objects, and place them on pedestals.
  
  let material1 = new T.MeshPhongMaterial({
    color: "#ebe534",
    shininess: 25,
    specular: "#dffc03"
  });
  /**@type{T.Geometry} */
  let geometry1 = new T.TorusGeometry(0.3, 0.05, 100, 100, Math.PI * 2);
  /**@type{T.Mesh} */
  let sphere = new T.Mesh(geometry1, material1);
  sphere.position.set(-1.90, 1.5, 2);
  sphere.rotation.set(Math.PI / 4, 0, Math.PI / 4);
  sphere.castShadow = true;

  let material2 = new T.MeshPhongMaterial({
    color: "#03c2fc",
    shininess: 35,
    specular: "#03d3fc",
  });

  let geometry2 = new T.IcosahedronGeometry(0.3, 0);
  let cylinder = new T.Mesh(geometry2, material2);
  cylinder.position.set(-1.0, 2.9, 2);
  cylinder.rotation.set(Math.PI / 4, 0, Math.PI / 4);
  cylinder.castShadow = true;

  let material3 = new T.MeshPhongMaterial({
    color: "#fc036b",
    shininess: 45,
    specular: "#fc0394",
  });

  let geometry3 = new T.TorusKnotGeometry(0.2, 0.05, 100, 100, 2, 3);
  let knot = new T.Mesh(geometry3, material3);
  knot.position.set(1, 2.8, 2);
  knot.rotation.set(Math.PI / 4, 0, Math.PI / 4);
  knot.castShadow = true;

  /**@type{T.SpotLight} */
  let spotlight_1 = new T.SpotLight(0xaaaaff, 1);
  spotlight_1.angle = Math.PI / 16;
  spotlight_1.position.set(2, 5, 2);
  spotlight_1.target = cube;
  spotlight_1.castShadow = true;
  scene.add(spotlight_1);


  // TODO: You need to place the lights.
  let spotlight_2 = new T.SpotLight(0xaaaaff, 1);
  spotlight_2.angle = Math.PI / 16;
  spotlight_2.position.set(-1.90, 5, 2);
  spotlight_2.target = sphere;
  spotlight_2.target.position.set(-1.90, 1.5, 2);
  spotlight_2.castShadow = true;
  scene.add(spotlight_2);


  let spotlight_3 = new T.SpotLight(0xaaaaff, 1);
  spotlight_3.angle = Math.PI /16 ;
  spotlight_3.position.set(-0.5, 4.5, 4);
  spotlight_3.target = cylinder;
  spotlight_3.castShadow = true;
  scene.add(spotlight_3);

  
  let spotlight_4 = new T.SpotLight(0xaaaaff, 1);
  spotlight_4.target = knot;
  spotlight_4.angle = 2*Math.PI / 36;
  spotlight_4.position.set(0.5, 4.5, 4);
  spotlight_4.castShadow = true;
  scene.add(spotlight_4);

  // TODO: You need to place these cameras.
  let camera_1 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
  let camera_2 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
  let camera_3 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
  let camera_4 = new T.PerspectiveCamera(60, wid / ht, 1, 100);

  camera_1.position.set(2,2,2);
  let controls = new OrbitControls(camera_1, renderer.domElement);
  controls.target.set(3,3,2);


  scene.add(cube);
  scene.add(sphere);
  scene.add(cylinder);
  scene.add(knot);

  // finally, draw the scene. Also, add animation.
  renderer.render(scene, main_camera);
  function animate() {
    cube.rotateOnWorldAxis(new T.Vector3(0, 1, 0), 0.005);
    sphere.rotateOnWorldAxis(new T.Vector3(0, 1, 0), 0.005);
    cylinder.rotateOnWorldAxis(new T.Vector3(0, 1, 0), 0.005);
    knot.rotateOnWorldAxis(new T.Vector3(0, 1, 0), 0.005);
    renderer.render(scene, active_camera);
    requestAnimationFrame(animate);
  }
  animate();

  // Simple wrapper function for code to set up the basic scene
  // Specifically, sets up the stuff students don't need to use directly.
  function setupBasicScene() {
    // make a ground plane.
    let geometry1 = new T.BoxGeometry(10, 0.1, 10);
    let material1 = new T.MeshStandardMaterial({
      color: "#dddddd",
      metalness: 0.2,
      roughness: 0.8
    });
    /**@type{T.Mesh} */
    let ground = new T.Mesh(geometry1, material1);
    ground.position.set(0, -1, 0);
    scene.add(ground);

    let locs = [-2, 2];
    /**@type{T.Geometry} */
    let geometry2 = new T.CylinderGeometry(0.5, 0.75, 2, 16, 8);
    /**@type{T.Material} */
    let material2 = new T.MeshPhongMaterial({
      color: "#888888",
      shininess: 50
    });
    locs.forEach(function(x_loc) {
      locs.forEach(function(z_loc) {
        /**@type{T.Mesh} */
        let object = new T.Mesh(geometry2, material2);
        object.position.x = x_loc;
        object.position.z = z_loc;
        object.position.y = 0;
        object.receiveShadow = true;

        scene.add(object);
      });
    });

    /**@type{T.AmbientLight} */
    let amb_light = new T.AmbientLight(0xffffff, 0.2);
    scene.add(amb_light);
  }

  function setupButtons() {
    document.getElementById("main_cam").onclick = function() {
      active_camera = main_camera;
      renderer.render(scene, active_camera);
    };
    document.getElementById("cam_1").onclick = function() {
      active_camera = camera_1;
      renderer.render(scene, active_camera);
    };
    document.getElementById("cam_2").onclick = function() {
      active_camera = camera_2;
      renderer.render(scene, active_camera);
    };
    document.getElementById("cam_3").onclick = function() {
      active_camera = camera_3;
      renderer.render(scene, active_camera);
    };
    document.getElementById("cam_4").onclick = function() {
      active_camera = camera_4;
      renderer.render(scene, active_camera);
    };
  }
};

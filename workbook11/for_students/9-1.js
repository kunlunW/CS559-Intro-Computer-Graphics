/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";
import * as InputHelpers from "../libs/CS559-Libs/inputHelpers.js";
import * as SimpleObjects from "../libs/CS559-Framework/SimpleObjects.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";


let image = new T.TextureLoader().load("../textures/thumb_ocean.jpg");


function test() {
  let mydiv = document.getElementById("div1");

  let world = new GrWorld({ width: mydiv ? 600 : 800, where: mydiv });

  let objs = [];
  let dx = -6;

  let shaderMat = shaderMaterial("./shaders/9-1.vs", "./shaders/9-1.fs", {
    side: T.DoubleSide,
    
    uniforms: {
      time: {
        type: 'f',
        glslType: 'float'
      },
      waveWidth: {
        value: 3,
        type: 'f',
        glslType: 'float'
      },
      waveHeight: {
        value: 0.04,
        type: 'f',
        glslType: 'float'
      },
      image: {
        value: image,
        type: 't',
        glslType: 'sampler2D'
      },
      speed: {
        value: 1,
        type: 'f',
        glslType: 'float'
      },
      contrast: {
        value: 6,
        type: 'f',
        glslType: 'float'
      },
      color: {
        value: {
          r: 0.6431372549019608,
          g: 0.9647058823529412,
          b: 1
        },
        type: 'c',
        glslType: 'vec3'
      }
    },
    
  });

  let s1 = new SimpleObjects.GrSphere({ x: -2, y: 1, material: shaderMat });
  let s2 = new SimpleObjects.GrSquareSign({ x: 2, y: 1, size:1, material: shaderMat });

  
  

  // s1.time = 0;
  // s2.time = Math.PI * 1000;


  function spinner(delta, tod) {
    this.time += delta;
    this.objects[0].position.x = 2 * Math.sin(this.time / 1000);
    this.objects[0].position.z = 2 * Math.cos(this.time / 1000);
  }

  s1.tick = spinner;
  s2.tick = spinner;

  world.add(s1);
  world.add(s2);
  
  world.go();
}
Helpers.onWindowOnload(test);




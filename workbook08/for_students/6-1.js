/*jshint esversion: 6 */
// @ts-check

/**
 * Minimal Starter Code for the QuadCopter assignment
 */

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { OrbitControls } from "../libs/CS559-THREE/examples/jsm/controls/OrbitControls.js";
import { onWindowOnload } from "../libs/CS559-Libs/helpers.js";

class Mesh {
    constructor(node) {
        this.base = new T.Group();
        if(node instanceof Mesh) {
            node.base.add(this.base);
        } 
        else {
            node.add(this.base);
        }
    }
}

class blade extends Mesh {

    constructor(node, numBlades, Length) {
        super(node);
        let bladeGeometry = new T.BoxGeometry(0.1, 0.2, Length);
        let bladeMaterial = new T.MeshStandardMaterial({color: "yellow"});
        let each = 8 * Math.PI / numBlades;
        for(let i = 0; i < numBlades; i++) {
            let blade = new T.Mesh(bladeGeometry, bladeMaterial);
            let xincre = (Length/ 2) * Math.cos(i * each)
            let zincre = (Length / 2) * Math.sin(i * each)
            blade.position.x = xincre;
            blade.position.z = zincre;
            let angle = Math.atan2( blade.position.x, blade.position.z ); 
            blade.rotateY(angle);
            this.base.add(blade);
        }
    }
}

class Body extends Mesh {
    constructor(stage) {
        super(stage);
        let body = new T.BoxGeometry (1,1,1);
        body.rotateX(Math.PI / 2);
        let bodyMaterial = new T.MeshStandardMaterial({color: "blue"});
        let quadBody = new T.Mesh(body, bodyMaterial);
        this.base.add(quadBody);
        let coneGeometry = new T.ConeGeometry (0.5,2,30);
        let head = new T.Mesh(coneGeometry, bodyMaterial);
        head.rotateOnAxis(new T.Vector3(1, 0, 0), Math.PI * 0.5);
        head.position.set(0,0.5,1);
        head.translateZ(0.45);
        this.base.add(head);
        this._rotors = [];
        let radius = 1;
        for(let i = 0; i < 5; i++) {
            let quadArm = 3 * radius ;
            let angle = (i * Math.PI / 2) + (Math.PI / 4);
            let Xchange = quadArm * Math.cos(angle);
            let Zchange = quadArm * Math.sin(angle);
            let quadArmGeo = new T.CylinderGeometry (0.15,0.15, 3,50);
            let quadArmMaterial = new T.MeshStandardMaterial({color: "red"});
            let quadMesh = new T.Mesh(quadArmGeo, quadArmMaterial);
            let XangleChange = Xchange / 2;
            let YangleChange = Zchange  / 2;
            quadMesh.position.x = XangleChange;
            quadMesh.position.z = Zchange  / 2;
            quadMesh.rotateY(angle);
            quadMesh.rotateOnAxis(new T.Vector3(1, 0, 0), Math.PI * 0.5);
            this.base.add(quadMesh);
            let quad = new blade(this, 15, radius);
            quad.base.position.x = Xchange;
            quad.base.position.y = 0.2;
            quad.base.position.z = Zchange ;
            this._rotors.push(quad);
        }
    }
    animate() {
        let angle = Math.PI / 2;
        for(let i = 0; i < this._rotors.length; i++) {
            if(i % 2 == 0) {
                this._rotors[i].base.rotateY(angle);
            } else {
                this._rotors[i].base.rotateY(-angle);
            }
        }
    }
}
class RadioDish extends Mesh {
    constructor(node) {
        super(node);
        let dishGeo = new T.ConeGeometry(1,1,8,1);
        let dishMaterial = new T.MeshStandardMaterial({color: "red"});
        let dishMesh = new T.Mesh(dishGeo, dishMaterial);
        let dishGroup = new T.Group();
        let dishtogether = new T.Group();
        dishMesh.position.y = 0;
        dishMesh.position.z = 1.2;
        dishMesh.position.x = 0;
        dishMesh.rotation.x = -Math.PI/2;
        dishtogether.add(dishMesh);
        dishtogether.position.y = 0.7;
        dishGroup.add(dishtogether);
        // dishGroup.add(BaseMesh);
        // dishGroup.add(base2Mesh);
        this.base.add(dishGroup);
    }
}

class Station extends Mesh {
    constructor(parent) {
        super(parent);
        let BaseGeo = new T.CylinderGeometry(0.8,0.8);
        let base2 = new T.CylinderGeometry(0.4,0.4, 1);
        let baseMaterial = new T.MeshStandardMaterial({color:"darkgrey"});
        let BaseMesh = new T.Mesh(BaseGeo, baseMaterial);
        let base2Mesh = new T.Mesh(base2, baseMaterial)
        base2Mesh.position.set(0,1,0);
        BaseMesh.position.y = 0.3;
        this.base.add(BaseMesh);
        this.base.add(base2Mesh);
        this.disk = new RadioDish(this);
       
    }
    quadRadar(quadcopter) {
        let target = new T.Vector3();
        quadcopter.getWorldPosition(target);
        this.disk.base.lookAt(target);
    }
}

class radar extends Mesh {
    constructor(node) {
        super(node);
        this.object = new Body(this);
        this.object.base.position.y = 5;
        this.Station = new Station(this);
        
    }
    animate() {
        let time = performance.now() / 1000;
        let xchange = 10 * Math.cos(time);
        let zchange = 4 * Math.sin(time);
        this.object.base.position.x = xchange;
        this.object.base.position.z = zchange;
        let angle = Math.atan2(zchange, xchange);
        this.object.base.rotation.y = -angle;
        this.object.animate();
        this.Station.quadRadar(this.object.base);
    }
}

function quadcopter() {
  let renderer = new T.WebGLRenderer();
  renderer.setSize(600, 400);
  document.body.appendChild(renderer.domElement);

  let scene = new T.Scene();
  let camera = new T.PerspectiveCamera(
    40,
    renderer.domElement.width / renderer.domElement.height,
    1,
    1000
  );

  camera.position.z = 10;
  camera.position.y = 5;
  camera.position.x = 5;
  camera.lookAt(0, 0, 0);

  // since we're animating, add OrbitControls
  let controls = new OrbitControls(camera, renderer.domElement);

  scene.add(new T.AmbientLight("white", 0.2));

  // two lights - both a little off white to give some contrast
  let dirLight1 = new T.DirectionalLight(0xf0e0d0, 1);
  dirLight1.position.set(1, 1, 0);
  scene.add(dirLight1);

  let dirLight2 = new T.DirectionalLight(0xd0e0f0, 1);
  dirLight2.position.set(-1, 1, -0.2);
  scene.add(dirLight2);

  // make a ground plane
  let groundBox = new T.BoxGeometry(10, 0.1, 10);
  let groundMesh = new T.Mesh(
    groundBox,
    new T.MeshStandardMaterial({ color: 0x88b888, roughness: 0.9 })
  );
  // put the top of the box at the ground level (0)
  groundMesh.position.y = -0.05;
  scene.add(groundMesh);

  // this is the part the student should change
  let group1 = new radar(scene);
  group1.base.translateX(4);
  group1.base.translateY(0);
  group1.base.translateZ(3);
  group1.base.scale.x = 0.25;
  group1.base.scale.y = 0.25;
  group1.base.scale.z = 0.25;

  let group2 = new radar(scene);
  group2.base.translateX(-4);
  group2.base.translateY(0);
  group2.base.translateZ(-3.5);
  group2.base.scale.x = 0.75;
  group2.base.scale.y = 0.75;
  group2.base.scale.z = 0.75;

  let group3 = new radar(scene);
  group3.base.translateX(-4);
  group3.base.translateY(0);
  group3.base.translateZ(3);
  group3.base.scale.x = 0.5;
  group3.base.scale.y = 0.5;
  group3.base.scale.z = 0.5;

  let group4 = new radar(scene);
  group4.base.translateX(4);
  group4.base.translateY(0);
  group4.base.translateZ(-3);
  group4.base.scale.x = 0.6;
  group4.base.scale.y = 0.6;
  group4.base.scale.z = 0.6;

  let group5 = new radar(scene);
  group5.base.translateX(0);
  group5.base.translateY(0);
  group5.base.translateZ(0);
  group5.base.scale.x = 0.4;
  group5.base.scale.y = 0.4;
  group5.base.scale.z = 0.4;

  //** GET RID OF THIS SILLY DONUT! Replace it with an aircraft*/
  
  function animateLoop() {
    //** EXAMPLE CODE - STUDENT SHOULD REPLACE */
    // move in a circle
    group1.animate();
        group2.animate();
        group3.animate();
        group4.animate();
        group5.animate();

    renderer.render(scene, camera);
    window.requestAnimationFrame(animateLoop);
  }
  animateLoop();
}
onWindowOnload(quadcopter);
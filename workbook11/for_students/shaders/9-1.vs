
precision highp float;
precision highp int;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform float waveWidth;
uniform float waveHeight;
uniform float speed;
uniform float time;
 attribute vec3 position;
 attribute vec3 normal;
 attribute vec2 uv;
 attribute vec2 uv2;
varying vec3 vPosition
varying vec3 vNormal;
varying vec2 vUv;
varying vec2 vUv2;
varying float vHeight;
vec4 Simple_ocean1585558557219_30_main(){

    vec4 Simple_ocean1585558557219_30_gl_Position = vec4(0.0);
    vNormal = normal
     vUv = uv;
     vec4 v = vec4(position, 1.0);
      float t = time * speed;
      v.z += (sin(waveWidth * position.x + t * 1.3) * cos(waveWidth * position.y + t * 0.9) * waveHeight) + (cos(waveWidth * 2.0 * position.x + t * -.3) * sin(waveWidth * 4.0 * position.y + t * 3.9) * (waveHeight / 2.0));
      vHeight = v.z;
      Simple_ocean1585558557219_30_gl_Position = projectionMatrix * modelViewMatrix * v;
      return Simple_ocean1585558557219_30_gl_Position *= 1.0;

}

/* the vertex shader just passes stuff to the fragment shader after doing the
 * appropriate transformations of the vertex information
 */
void main() {
    gl_Position = Simple_ocean1585558557219_30_main();

}

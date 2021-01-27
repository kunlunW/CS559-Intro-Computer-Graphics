
// const vec3 drLight = vec3(0, 2, 2);
// uniform sampler2D texture;
// uniform float time;
// uniform float waveWidth;
// uniform float waveHeight;
// uniform sampler2D image;
// uniform float speed;
// uniform float contrast;
// uniform vec3 color;
precision highp float;
precision highp int;
uniform mat3 normalMatrix;
uniform float time;
uniform sampler2D image;
uniform float speed;
uniform float contrast;
uniform vec3 color;
varying float vHeight;
varying vec2 vUv;
varying vec3 vNormal;


vec4 Simple_ocean1585558557219_30_main() {
    vec4 Simple_ocean1585558557219_30_gl_FragColor = vec4(0.0);                                                                                                                                                                                                   
    float t = time * speed * 0.01;                                                                                                                                                                                                    
    vec3 color = texture2D(image, vUv + vec2(sin(t), cos(t))).rgb + vHeight * contrast * color;                                                                                                                                                                                                  
    Simple_ocean1585558557219_30_gl_FragColor = vec4(color, 1.0);                                                                                                                                                                                                    
    return Simple_ocean1585558557219_30_gl_FragColor *= 1.0;\n                                                                                                                                                                                                
    }
    
    void main()                                                                                                                                                                                                
    {                                                                                                                                                                                                  
        
        gl_FragColor = Simple_ocean1585558557219_30_main(); 

        }


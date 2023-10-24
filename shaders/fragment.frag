uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform vec3 uColor;


varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying float vDisplacement;


float PI = 3.1415926;

 

 
void main() {
 
	vec3 finalColor = mix(uColor, vec3(vDisplacement), .5);
	 
	gl_FragColor = vec4(finalColor, 1.);
}
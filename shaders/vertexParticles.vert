uniform float time;
uniform float progress;
 

varying vec2 vUv;
varying vec3 vPosition;
varying float vColorRandom;

uniform sampler2D texture1;
float PI = 3.1415926;


attribute float randoms;
attribute float offset;

attribute float colorRandoms;

float qinticInOut(float t) {
	return t< 0.5 ? +16.0 * pow(t, 5.0) : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;
}

void main () {
	vUv = uv;
	vec3 newpos = position;

	float uvOffset = uv.y;

	newpos.x +=  qinticInOut(clamp(0., 1., (progress - uvOffset * 0.9 )/ 0.1)); 
	vColorRandom = colorRandoms;
	vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.);
	gl_PointSize = (30. * randoms + 10.) * ( 1. / -mvPosition.z);
	gl_Position = projectionMatrix * mvPosition;
}

uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.1415926;


varying float vColorRandom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

void main() {

	float alpha1 = 1. - smoothstep(-0.2, 0.5, length(gl_PointCoord - vec2(0.5)));
	alpha1 *= 0.5 ;

	vec3 finalColor = uColor1;
	if(vColorRandom > 0.33 && vColorRandom < 0.66) {
		finalColor = uColor2;
	}
	if(vColorRandom > 0.66) {
		finalColor = uColor3;
	}

	float gradient = smoothstep(0.38, 0.55, vUv.y);
 
	gl_FragColor = vec4(finalColor, alpha1);
	// gl_FragColor = vec4(finalColor, 1.);

}
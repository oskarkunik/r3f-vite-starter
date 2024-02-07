#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	gl_FragColor = vec4(min(vUv.x, u_mouse.x),min(vUv.y, u_mouse.y),min(abs(sin(u_time)), min(u_mouse.x, u_mouse.y)),1.0);
}

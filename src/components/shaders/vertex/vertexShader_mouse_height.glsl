uniform vec2 u_mouse;
uniform float u_time;


varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * u_mouse.x * 0.6;
  modelPosition.y += cos(modelPosition.z * 5.0 + u_time * 2.0) * u_mouse.y * 0.6;

  vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}

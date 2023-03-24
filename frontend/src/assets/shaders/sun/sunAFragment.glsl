
varying vec3 vertexNormal;

void main() {
    float intensity = pow(0.2 - dot(vertexNormal, vec3(0.0, 0.0, 0.8)), 1.8);

    gl_FragColor = vec4(1.0, 0.9, 0.5, 0.2) * intensity;
}
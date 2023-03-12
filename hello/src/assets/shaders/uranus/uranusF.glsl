uniform sampler2D uranusTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    float intensity = 1.05 - dot(
        vertexNormal, vec3(0.0, 0.0, 0.0));
    vec3 atmosphere = vec3(0.0, 0.2, 0.5) * pow(intensity, 1.5);

    gl_FragColor = vec4(atmosphere + texture2D(uranusTexture,
    vertexUV).xyz, 1.0);
}
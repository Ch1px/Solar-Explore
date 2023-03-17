uniform sampler2D saturnTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    float intensity = 1.05 - dot(
        vertexNormal, vec3(0.0, 0.0, 0.0));
    vec3 atmosphere = vec3(0.04, 0.02, 0.02) * pow(intensity, 1.5);

    gl_FragColor = vec4(atmosphere + texture2D(saturnTexture,
    vertexUV).xyz, 1.0);
}
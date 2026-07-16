"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --- CUSTOM SHADER DEFINITION ---
// We write custom GLSL code to dynamically morph the sphere shape using 3D Noise.
const HologramShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("gray") }, // Teal color
    uGlowPower: { value: 2.0 },                    // Edge glow intensity
  },
  
  // Vertex Shader: Displaces vertices outwards based on Simplex Noise + Time
  vertexShader: `
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    // Classic 3D Simplex Noise generator
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
    float snoise(vec3 v){
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - D.yyy;
      i = mod(i, 289.0 );
      vec4 p = permute( permute( permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      // Calculate vertex displacement using noise + time
      float noise = snoise(position * 1.5 + uTime * 0.5);
      
      // Move vertices along their normal directions to create organic bumps
      vec3 displacedPosition = position + normal * (noise * 0.3);
      
      vec4 modelViewPosition = modelViewMatrix * vec4(displacedPosition, 1.0);
      vViewPosition = -modelViewPosition.xyz;
      
      gl_Position = projectionMatrix * modelViewPosition;
    }
  `,

  // Fragment Shader: Generates a beautiful Fresnel rim-lighting edge glow
  fragmentShader: `
    uniform vec3 uColor;
    uniform float uGlowPower;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);

      // Fresnel formula: glows brighter on the outer edges of the sphere
      float intensity = pow(0.9 - max(dot(normal, viewDir), 0.0), uGlowPower);
      
      // Soft center color mixed with a strong glowing outer rim
      vec3 finalColor = mix(uColor * 0.2, uColor, intensity);
      
      gl_FragColor = vec4(finalColor, intensity);
    }
  `,
};

export default function AnimatedSphere() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    // 1. Pass time to the shaders to drive the continuous shape-shifting animation
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsed;
    }

    // 2. Add some slow, elegant base rotation and floating motion
    if (meshRef.current) {
      meshRef.current.rotation.y = elapsed * 0.15;
      meshRef.current.rotation.x = elapsed * 0.1;
      meshRef.current.position.y = Math.sin(elapsed * 0.8) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* A highly-subdivided sphere so the displacement waves look clean and smooth.
        args=[radius, widthSegments, heightSegments]
      */}
      <sphereGeometry args={[2, 128, 128]} />
      
      <shaderMaterial
        ref={materialRef}
        args={[HologramShaderMaterial]}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        wireframe={true} // Keep wireframe active for a futuristic mesh grid look
      />
    </mesh>
  );
}
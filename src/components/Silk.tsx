/* eslint-disable react/no-unknown-property */
import React, { forwardRef, useMemo, useRef, useLayoutEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree, RootState } from '@react-three/fiber';
import { Color, Mesh, ShaderMaterial } from 'three';
import { IUniform } from 'three';

type NormalizedRGB = [number, number, number];

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
};

interface UniformValue<T = number | Color> {
  value: T;
}

interface SilkUniforms {
  uSpeed: UniformValue<number>;
  uScale: UniformValue<number>;
  uNoiseIntensity: UniformValue<number>;
  uColor: UniformValue<Color>;
  uRotation: UniformValue<number>;
  uTime: UniformValue<number>;
  [uniform: string]: IUniform;
}

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vPosition = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uRotation;
  uniform float uNoiseIntensity;
  const float e = 2.71828182845904523536;
  float noise(vec2 texCoord) {
    float G = e;
    vec2 r = (G * sin(G * texCoord));
    return fract(r.x * r.y * (1.0 + texCoord.x));
  }
  vec2 rotateUvs(vec2 uv, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    mat2 rot = mat2(c, -s, s, c);
    return rot * uv;
  }
  void main() {
    float rnd = noise(gl_FragCoord.xy);
    vec2 uv = rotateUvs(vUv * uScale, uRotation);
    vec2 tex = uv * uScale;
    float tOffset = uSpeed * uTime;
    tex.y += 0.03 * sin(8.0 * tex.x - tOffset);
    float pattern = 0.6 +
      0.4 * sin(5.0 * (tex.x + tex.y +
        cos(3.0 * tex.x + 5.0 * tex.y) +
        0.02 * tOffset) +
      sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));
    vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
    col.a = 1.0;
    gl_FragColor = col;
  }
`;

interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane({ uniforms }, ref) {
  const { viewport, size } = useThree();

  useLayoutEffect(() => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      const aspect = size.width / size.height;
      mesh.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport, size]);

  useFrame((_state: RootState, delta: number) => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial & {
        uniforms: SilkUniforms;
      };
      if (material && material.uniforms) {
        material.uniforms.uTime.value += 0.1 * delta;
      }
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2, 1, 1]} />
      <shaderMaterial 
        uniforms={uniforms} 
        vertexShader={vertexShader} 
        fragmentShader={fragmentShader}
        transparent={false}
      />
    </mesh>
  );
});

SilkPlane.displayName = 'SilkPlane';

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

const Silk: React.FC<SilkProps> = ({ 
  speed = 5, 
  scale = 1, 
  color = '#7B7481', 
  noiseIntensity = 1.5, 
  rotation = 0 
}) => {
  const meshRef = useRef<Mesh>(null);
  const [webglError, setWebglError] = useState<string | null>(null);

  // Check WebGL support
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      const error = 'WebGL is not supported in your browser';
      console.error('Silk Background Error:', error);
      setWebglError(error);
      return;
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      console.log('WebGL Renderer:', renderer);
    }
    console.log('WebGL is enabled and working');
  }, []);

  const uniforms = useMemo<SilkUniforms>(
    () => {
      try {
        const rgb = hexToNormalizedRGB(color);
        console.log('Silk color:', color, 'RGB:', rgb);
        return {
          uSpeed: { value: speed },
          uScale: { value: scale },
          uNoiseIntensity: { value: noiseIntensity },
          uColor: { value: new Color(...rgb) },
          uRotation: { value: rotation },
          uTime: { value: 0 }
        };
      } catch (error) {
        console.error('Error creating Silk uniforms:', error);
        throw error;
      }
    },
    [speed, scale, noiseIntensity, color, rotation]
  );

  const onCreated = useCallback((state: any) => {
    console.log('Canvas created successfully', state);
    if (state.gl) {
      state.gl.domElement.addEventListener('webglcontextlost', (event: Event) => {
        event.preventDefault();
        console.error('WebGL context lost');
      });
      state.gl.domElement.addEventListener('webglcontextrestored', () => {
        console.log('WebGL context restored');
      });
    }
  }, []);

  const onError = useCallback((error: Error) => {
    console.error('Canvas error:', error);
    setWebglError(error.message);
  }, []);

  if (webglError) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        inset: 0,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <p>WebGL not available: {webglError}</p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Canvas 
        dpr={[1, 2]} 
        frameloop="always" 
        style={{ 
          width: '100%', 
          height: '100%',
          display: 'block'
        }}
        camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 10 }}
        gl={{ 
          alpha: false, 
          antialias: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false
        }}
        onCreated={onCreated}
        onError={onError}
      >
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>
    </div>
  );
};

export default Silk;


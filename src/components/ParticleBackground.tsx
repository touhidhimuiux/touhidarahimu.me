import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 800;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const bright = new THREE.Color("hsl(145, 65%, 50%)");
    const mid = new THREE.Color("hsl(170, 55%, 45%)");
    const soft = new THREE.Color("hsl(130, 40%, 55%)");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;

      const r = Math.random();
      const color = r < 0.4 ? bright : r < 0.7 ? mid : soft;
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.006) * 0.04;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function NetworkLines() {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: number[] = [];
    const nodeCount = 50;
    const nodes: [number, number, number][] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push([
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8 - 4,
      ]);
    }

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = Math.sqrt(
          (nodes[i][0] - nodes[j][0]) ** 2 +
          (nodes[i][1] - nodes[j][1]) ** 2 +
          (nodes[i][2] - nodes[j][2]) ** 2
        );
        if (dist < 5) {
          points.push(...nodes[i], ...nodes[j]);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#22c55e" transparent opacity={0.15} />
    </lineSegments>
  );
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.02;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.06;
    }
  });

  const shapes = useMemo(() => {
    return [
      { pos: [-5, 2.5, -5] as [number, number, number], type: "ico", color: "#22c55e" },
      { pos: [5, -1.5, -6] as [number, number, number], type: "oct", color: "#14b8a6" },
      { pos: [0, 3.5, -7] as [number, number, number], type: "tet", color: "#34d399" },
      { pos: [-4, -2, -5] as [number, number, number], type: "ico", color: "#10b981" },
      { pos: [6, 2, -6] as [number, number, number], type: "oct", color: "#22c55e" },
      { pos: [3, -3, -4] as [number, number, number], type: "tet", color: "#059669" },
      { pos: [-6, 1, -7] as [number, number, number], type: "oct", color: "#14b8a6" },
    ];
  }, []);

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <mesh key={i} position={s.pos}>
          {s.type === "ico" ? (
            <icosahedronGeometry args={[0.4]} />
          ) : s.type === "oct" ? (
            <octahedronGeometry args={[0.35]} />
          ) : (
            <tetrahedronGeometry args={[0.3]} />
          )}
          <meshStandardMaterial
            color={s.color}
            transparent
            opacity={0.25}
            wireframe
            emissive={s.color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10" style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 70 }} style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[8, 5, 5]} intensity={0.4} color="#22c55e" />
        <pointLight position={[-6, -3, 3]} intensity={0.3} color="#14b8a6" />
        <Particles />
        <NetworkLines />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;

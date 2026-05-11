'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingOrb({ position, color, speed, size }: {
  position: [number, number, number]
  color: string
  speed: number
  size: number
}) {
  const mesh = useRef<THREE.Mesh>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    mesh.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.3
    mesh.current.position.x = position[0] + Math.cos(t * speed * 0.7 + offset) * 0.15
    mesh.current.scale.setScalar(1 + Math.sin(t * speed * 1.3 + offset) * 0.08)
  })

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} transparent opacity={0.7} roughness={0.1} metalness={0.3} />
    </mesh>
  )
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(500 * 3)
    for (let i = 0; i < 500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#f97316" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

const orbs = [
  { position: [-2, 0, -1] as [number, number, number], color: '#f97316', speed: 0.6, size: 0.5 },
  { position: [2.5, 0.5, -2] as [number, number, number], color: '#8b5cf6', speed: 0.4, size: 0.7 },
  { position: [0, -0.5, 0] as [number, number, number], color: '#f97316', speed: 0.8, size: 0.35 },
  { position: [-3, 1, -3] as [number, number, number], color: '#ec4899', speed: 0.5, size: 0.45 },
  { position: [3.5, -1, -1] as [number, number, number], color: '#06b6d4', speed: 0.7, size: 0.3 },
]

export default function OrbScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#f97316" intensity={0.8} />
      <pointLight position={[-5, -3, 2]} color="#8b5cf6" intensity={0.6} />
      {orbs.map((orb, i) => <FloatingOrb key={i} {...orb} />)}
      <ParticleField />
    </Canvas>
  )
}

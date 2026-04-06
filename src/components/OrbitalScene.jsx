import { Canvas, useFrame } from '@react-three/fiber'
import {
  Billboard,
  Float,
  PerspectiveCamera,
  Sparkles,
  Text,
} from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const stackOrbs = [
  { position: [-2.5, 0.8, -0.2], scale: 0.74, color: '#f7f8fb', label: 'Python', textColor: '#2b5cff' },
  { position: [-1.3, -0.6, 0.8], scale: 0.52, color: '#edf7ff', label: 'Django', textColor: '#1f6b4f' },
  { position: [0.2, 1.15, -0.6], scale: 0.9, color: '#ffffff', label: 'AI/ML', textColor: '#0d5b84' },
  { position: [1.2, 0.1, 0.3], scale: 0.58, color: '#f6fbff', label: 'JS', textColor: '#b38b00' },
  { position: [2.35, 0.95, -0.2], scale: 1.05, color: '#fafbff', label: 'SQL', textColor: '#3d5afe' },
  { position: [2.15, -0.8, 0.5], scale: 0.46, color: '#f5f6fb', label: 'HTML', textColor: '#dd4b25' },
  { position: [-0.35, -1.1, -0.1], scale: 0.62, color: '#fefefe', label: 'CSS', textColor: '#1976d2' },
  { position: [-2.15, -1.2, 0.6], scale: 0.44, color: '#f8fafc', label: 'Auth', textColor: '#7b2cbf' },
  { position: [0.9, -1.35, -0.4], scale: 0.34, color: '#ecf8ff', label: 'Data', textColor: '#00897b' },
]

function SceneLights({ pointerRef, variant }) {
  const accentRef = useRef(null)

  useFrame(() => {
    if (!accentRef.current) return

    const target = pointerRef.current
    const xFactor = variant === 'hero' ? 3.6 : 1.5
    const yFactor = variant === 'hero' ? 2.4 : 1.2

    accentRef.current.position.x = THREE.MathUtils.lerp(
      accentRef.current.position.x,
      target.x * xFactor,
      0.06,
    )
    accentRef.current.position.y = THREE.MathUtils.lerp(
      accentRef.current.position.y,
      target.y * yFactor + 1.2,
      0.06,
    )
  })

  return (
    <>
      <ambientLight intensity={variant === 'hero' ? 0.9 : 1} />
      <directionalLight position={[4, 5, 5]} intensity={1.4} color="#fef3ff" />
      <directionalLight position={[-5, -2, 4]} intensity={0.7} color="#5cdfff" />
      <pointLight position={[0, -1.5, 3]} intensity={8} distance={8} color="#d992ff" />
      <pointLight
        ref={accentRef}
        position={[0, 1.2, 4]}
        intensity={variant === 'hero' ? 14 : 8}
        distance={12}
        color="#63e6ff"
      />
    </>
  )
}

function DataRing() {
  const ringRef = useRef(null)

  useFrame((_, delta) => {
    if (!ringRef.current) return
    ringRef.current.rotation.z += delta * 0.18
  })

  return (
    <mesh ref={ringRef} rotation={[0.25, 0, -0.2]} position={[0, 0.72, -0.35]}>
      <torusGeometry args={[1.85, 0.04, 12, 96]} />
      <meshStandardMaterial color="#71e9ff" emissive="#64dfff" emissiveIntensity={0.95} />
    </mesh>
  )
}

function HeroOperator({ pointerRef }) {
  const groupRef = useRef(null)
  const panelRef = useRef(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return

    const target = pointerRef.current
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      target.x * 0.45,
      0.05,
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      target.y * 0.16,
      0.05,
    )
    groupRef.current.position.y = Math.sin(performance.now() * 0.0012) * 0.08
    groupRef.current.rotation.z += delta * 0.04

    if (panelRef.current) {
      panelRef.current.rotation.y += delta * 0.18
      panelRef.current.position.x = THREE.MathUtils.lerp(
        panelRef.current.position.x,
        1.95 + target.x * 0.22,
        0.05,
      )
      panelRef.current.position.y = THREE.MathUtils.lerp(
        panelRef.current.position.y,
        0.38 + target.y * 0.16,
        0.05,
      )
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      <DataRing />

      <Float speed={2} rotationIntensity={0.32} floatIntensity={0.55}>
        <mesh position={[0, 0.98, 0]} castShadow>
          <sphereGeometry args={[0.88, 20, 20]} />
          <meshStandardMaterial color="#c7d3eb" roughness={0.22} metalness={0.58} />
        </mesh>

        <mesh position={[0, 1.58, 0.02]} scale={[0.56, 0.16, 0.56]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#edf3ff" roughness={0.18} metalness={0.6} />
        </mesh>

        <mesh position={[0, 1.86, 0.02]} scale={[0.07, 0.3, 0.07]}>
          <cylinderGeometry args={[1, 1, 1, 10]} />
          <meshStandardMaterial color="#c7d6f2" roughness={0.2} metalness={0.72} />
        </mesh>

        <mesh position={[0, 2.08, 0.02]} scale={[0.16, 0.16, 0.16]}>
          <sphereGeometry args={[1, 14, 14]} />
          <meshStandardMaterial color="#8ff3ff" emissive="#7cefff" emissiveIntensity={1.2} />
        </mesh>

        <mesh position={[0, 0.96, 0.7]} scale={[1.1, 0.34, 0.24]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#10192a" roughness={0.28} metalness={0.38} />
        </mesh>

        <mesh position={[0, 0.96, 0.76]} scale={[0.96, 0.16, 0.08]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            color="#7ee8ff"
            roughness={0.08}
            transmission={0.78}
            ior={1.08}
            clearcoat={1}
            transparent
            opacity={0.9}
          />
        </mesh>

        <mesh position={[-0.22, 0.96, 0.82]} scale={[0.11, 0.04, 0.04]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8ff7ff" emissive="#7eeeff" emissiveIntensity={1.2} />
        </mesh>

        <mesh position={[0.22, 0.96, 0.82]} scale={[0.11, 0.04, 0.04]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8ff7ff" emissive="#7eeeff" emissiveIntensity={1.2} />
        </mesh>

        <mesh position={[0, 0.7, 0.76]} scale={[0.18, 0.03, 0.03]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#76deff" emissive="#4cdeff" emissiveIntensity={0.9} />
        </mesh>

        <mesh position={[0, -0.46, 0]} scale={[1.26, 1.72, 0.94]}>
          <capsuleGeometry args={[0.64, 1.35, 8, 14]} />
          <meshStandardMaterial color="#151b28" roughness={0.7} metalness={0.16} />
        </mesh>

        <mesh position={[0, -0.18, 0.48]} scale={[0.72, 0.86, 0.08]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            color="#67e8ff"
            emissive="#4cdeff"
            emissiveIntensity={0.32}
            roughness={0.14}
            metalness={0.12}
            transparent
            opacity={0.86}
          />
        </mesh>

        <mesh position={[-1.08, -0.14, 0.06]} rotation={[0, 0, 0.56]} scale={[0.28, 1.02, 0.28]}>
          <capsuleGeometry args={[0.22, 1, 8, 14]} />
          <meshStandardMaterial color="#1a2331" roughness={0.72} metalness={0.14} />
        </mesh>

        <mesh position={[1.08, -0.14, 0.06]} rotation={[0, 0, -0.56]} scale={[0.28, 1.02, 0.28]}>
          <capsuleGeometry args={[0.22, 1, 8, 14]} />
          <meshStandardMaterial color="#1a2331" roughness={0.72} metalness={0.14} />
        </mesh>

        <mesh position={[-0.44, -1.78, 0]} scale={[0.22, 1.16, 0.22]}>
          <capsuleGeometry args={[0.2, 1.02, 8, 14]} />
          <meshStandardMaterial color="#171d2a" roughness={0.72} metalness={0.12} />
        </mesh>

        <mesh position={[0.44, -1.78, 0]} scale={[0.22, 1.16, 0.22]}>
          <capsuleGeometry args={[0.2, 1.02, 8, 14]} />
          <meshStandardMaterial color="#171d2a" roughness={0.72} metalness={0.12} />
        </mesh>

        <mesh position={[-0.44, -2.5, 0.16]} scale={[0.28, 0.08, 0.46]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#dce6fb" roughness={0.26} metalness={0.42} />
        </mesh>

        <mesh position={[0.44, -2.5, 0.16]} scale={[0.28, 0.08, 0.46]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#dce6fb" roughness={0.26} metalness={0.42} />
        </mesh>

        <mesh position={[-0.78, 0.06, 0]} scale={[0.34, 0.5, 0.34]}>
          <sphereGeometry args={[1, 14, 14]} />
          <meshStandardMaterial color="#202a3a" roughness={0.64} metalness={0.16} />
        </mesh>

        <mesh position={[0.78, 0.06, 0]} scale={[0.34, 0.5, 0.34]}>
          <sphereGeometry args={[1, 14, 14]} />
          <meshStandardMaterial color="#202a3a" roughness={0.64} metalness={0.16} />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.8}>
        <mesh position={[-1.9, 1.2, 0.5]} scale={[0.22, 0.22, 0.22]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#b2f5ff" emissive="#7be9ff" emissiveIntensity={1.1} />
        </mesh>
      </Float>

      <Float speed={1.9} rotationIntensity={0.2} floatIntensity={1}>
        <mesh position={[1.9, -0.1, 0.2]} scale={[0.18, 0.18, 0.18]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#f7d9ff" emissive="#db86ff" emissiveIntensity={1.05} />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.45}>
        <group ref={panelRef} position={[1.95, 0.38, 0.64]}>
          <mesh scale={[1.04, 0.72, 0.08]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#111826" roughness={0.6} metalness={0.2} />
          </mesh>

          <mesh position={[0, 0, 0.06]} scale={[0.92, 0.58, 0.02]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial
              color="#7ee8ff"
              emissive="#56dcff"
              emissiveIntensity={0.4}
              roughness={0.14}
              metalness={0.08}
              transparent
              opacity={0.84}
            />
          </mesh>

          <Billboard position={[0, 0.12, 0.1]}>
            <Text fontSize={0.1} color="#071119" anchorX="center" anchorY="middle">
              AI CORE
            </Text>
          </Billboard>

          <Billboard position={[0, -0.08, 0.1]}>
            <Text fontSize={0.07} color="#0d2d40" anchorX="center" anchorY="middle">
              DEV MODE
            </Text>
          </Billboard>
        </group>
      </Float>
    </group>
  )
}

function StackCluster({ pointerRef }) {
  const groupRef = useRef(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return

    const target = pointerRef.current
    groupRef.current.rotation.y += delta * 0.14
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      target.y * 0.14,
      0.05,
    )
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      -target.x * 0.16,
      0.05,
    )
  })

  return (
    <group ref={groupRef} position={[0, -0.15, 0]}>
      {stackOrbs.map((item) => (
        <Float
          key={`${item.position.join('-')}-${item.scale}`}
          speed={1.4 + item.scale}
          rotationIntensity={0.26}
          floatIntensity={1.25}
        >
          <mesh position={item.position} scale={item.scale} castShadow>
            <sphereGeometry args={[1, 20, 20]} />
            <meshStandardMaterial
              color={item.color}
              roughness={0.18}
              metalness={0.08}
              emissive="#dff7ff"
              emissiveIntensity={0.1}
            />
          </mesh>

          <Billboard position={[item.position[0], item.position[1], item.position[2] + item.scale + 0.02]}>
            <Text
              fontSize={item.scale * 0.28}
              maxWidth={item.scale * 3}
              color={item.textColor}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.01}
              outlineColor="#ffffff"
            >
              {item.label}
            </Text>
          </Billboard>
        </Float>
      ))}
    </group>
  )
}

function OrbitalScene({ variant = 'hero' }) {
  const pointerRef = useRef({ x: 0, y: 0 })
  const cameraPosition = variant === 'hero' ? [0, 0.48, 6] : [0, 0.15, 7.4]
  const sparkleScale = variant === 'hero' ? [9, 6, 6] : [10, 5, 6]

  return (
    <div
      className="orbital-scene"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        pointerRef.current = {
          x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
        }
      }}
      onPointerLeave={() => {
        pointerRef.current = { x: 0, y: 0 }
      }}
    >
      <Canvas
        dpr={variant === 'hero' ? [1, 1.3] : [0.9, 1.1]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <PerspectiveCamera makeDefault position={cameraPosition} fov={36} />
        <fog attach="fog" args={['#071119', 6.5, 14]} />
        <SceneLights pointerRef={pointerRef} variant={variant} />
        <Sparkles
          count={variant === 'hero' ? 26 : 18}
          scale={sparkleScale}
          size={1.8}
          speed={0.28}
          color={variant === 'hero' ? '#95f1ff' : '#ffffff'}
          opacity={0.52}
        />
        {variant === 'hero' ? <HeroOperator pointerRef={pointerRef} /> : <StackCluster pointerRef={pointerRef} />}
      </Canvas>
    </div>
  )
}

export default OrbitalScene

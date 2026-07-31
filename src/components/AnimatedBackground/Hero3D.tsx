// import { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, MeshDistortMaterial } from "@react-three/drei";
// import { Box } from "@mui/material";
// import type { Mesh } from "three";

// function AnimatedSphere() {
//   const meshRef = useRef<Mesh>(null);

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
//       <mesh ref={meshRef} scale={2.2}>
//         <icosahedronGeometry args={[1, 4]} />
//         <MeshDistortMaterial
//           color="#00E5FF"
//           emissive="#8B5CF6"
//           emissiveIntensity={0.3}
//           roughness={0.2}
//           metalness={0.8}
//           distort={0.3}
//           speed={2}
//         />
//       </mesh>
//     </Float>
//   );
// }

// export default function Hero3D() {
//   return (
//     <Box
//       sx={{ width: "100%", height: { xs: 300, md: 450 }, position: "relative" }}
//     >
//       <Suspense fallback={null}>
//         <Canvas
//           camera={{ position: [0, 0, 5], fov: 45 }}
//           style={{ background: "transparent" }}
//         >
//           <ambientLight intensity={0.4} />
//           <directionalLight
//             position={[10, 10, 5]}
//             intensity={1}
//             color="#00E5FF"
//           />
//           <pointLight
//             position={[-10, -10, -5]}
//             intensity={0.5}
//             color="#8B5CF6"
//           />
//           <AnimatedSphere />
//         </Canvas>
//       </Suspense>
//     </Box>
//   );
// }
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Sparkles, Environment, Torus, Image } from "@react-three/drei";
import { Box } from "@mui/material";

import Logo from "../../assets/yahtec.png";

function Logo3D() {
  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <Image url={Logo} scale={[2.4, 2.4]} transparent toneMapped={false} />
    </Float>
  );
}

function Rings() {
  return (
    <>
      {/* Gold Ring */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
        <Torus args={[2.05, 0.05, 64, 300]}>
          <meshPhysicalMaterial
            color="#FFD700"
            emissive="#FFCC33"
            emissiveIntensity={2}
            metalness={1}
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0}
            reflectivity={1}
            envMapIntensity={3}
          />
        </Torus>
      </Float>

      {/* Purple Orbit */}
      <Float speed={2.5} rotationIntensity={0.7} floatIntensity={1}>
        <Torus args={[2.45, 0.03, 32, 220]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#C084FC"
            emissive="#C084FC"
            emissiveIntensity={3}
            metalness={1}
            roughness={0.15}
          />
        </Torus>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: 150,
          md: 350,
        },

        // Transparent
        background: "transparent",

        "& canvas": {
          background: "transparent !important",
        },
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <Suspense fallback={null}>
          {/* IMPORTANT:
              Remove <color attach="background" />
              Canvas is transparent now
          */}

          <Environment preset="city" />

          {/* Lights */}
          <ambientLight intensity={0.8} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={5}
            color="#FFD700"
          />

          <pointLight position={[-5, -3, 2]} intensity={3} color="#00E5FF" />

          <pointLight position={[5, -4, -2]} intensity={2} color="#C084FC" />

          {/* Logo */}
          <Logo3D />

          {/* Rings */}
          <Rings />

          {/* Sparkles */}
          <Sparkles
            count={300}
            scale={12}
            size={3}
            speed={0.3}
            color="#FFD700"
          />

          {/* 3 */}
          {/* <EffectComposer>
            <Bloom
              intensity={2}
              luminanceThreshold={0.15}
              luminanceSmoothing={0.9}
            />
          </EffectComposer> */}
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFD700"
            emissiveIntensity={10}
            toneMapped={false}
            metalness={1}
            roughness={0.05}
          />
        </Suspense>
      </Canvas>
    </Box>
  );
}

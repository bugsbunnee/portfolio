'use-client';

import { motion } from 'framer-motion-3d';
import { MotionConfig, MotionValue } from 'framer-motion';
import { useRef, useLayoutEffect } from 'react';
import { Canvas, PerspectiveCameraProps, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from 'three';
import { spring, transition } from '@/app/utils';
import { Circle, Float, Text } from '@react-three/drei';

import useSmoothTransform from '@/app/hooks/useSmoothTransform';

interface Props {
  isHover: boolean;
  isPress: boolean;
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>,
}
interface CircleProps { 
  position: [x: number, y: number, z: number ], 
  title: string; 
}

const skills: CircleProps[] = [
  {
    title: 'REACT JS',
    position: [-0.5, -0.5, 0],
  },
  {
    title: 'DJANGO JS',
    position: [1.1, 0, 0],
  },
  {
    title: 'JS & TS',
    position: [-1.5, 1, 0],
  },
  {
    title: 'EXPRESS JS',
    position: [-3.5, 1, 0],
  },
  {
    title: 'REACT NATIVE',
    position: [-4.5, 1, 0],
  },
  {
    title: 'REDUX JS',
    position: [-1.5, 0.5, 0],
  }
]

function Camera({ mouseX, mouseY, ...props }: Pick<Props, 'mouseX' | 'mouseY'>) {
  const cameraX = useSmoothTransform(mouseX, spring, (x: number) => x / 350);
  const cameraY = useSmoothTransform(mouseY, spring, (y: number) => (-1 * y) / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef<PerspectiveCameraProps>(null);

  useLayoutEffect(() => {
    if (cameraRef.current) {
        cameraRef.current.aspect = size.width / size.height;
        cameraRef.current?.updateProjectionMatrix?.();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current as unknown as PerspectiveCamera }));

      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.on('change', () => camera.lookAt(scene.position));
  }, [cameraX, camera, scene.position]);

  return (
      <motion.perspectiveCamera ref={cameraRef} fov={90} position={[cameraX, cameraY, 3.8]} />
  );
}

export function Shapes({ isHover, isPress, mouseX, mouseY }: Props) {
    return (
        <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
            <Camera mouseX={mouseX} mouseY={mouseY} />
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            
            <MotionConfig transition={transition}>
              <motion.group
                  initial={false}
                  animate={isHover ? "hover" : "rest"}
                  dispose={null}
                  variants={{ hover: { z: isPress ? -0.9 : 0 } }}
              >
                  {skills.map((skill) => (
                      <CircleShape 
                        key={skill.title} 
                        position={skill.position} 
                        title={skill.title} 
                      />
                  ))}
              </motion.group>
            </MotionConfig>
        </Canvas>
    );
}

export function CircleShape({ position, title }: CircleProps) {
  return (
    <Float speed={2}>
      <motion.mesh position={position} variants={{ hover: { z: 2 } }}>
        <Circle args={[0.7, 100]}>
          <Material />
          <Text letterSpacing={-0.05} position={[0, 0, 0.01]} fontWeight='bold' fontSize={0.25} material-toneMapped={false}>
            {title.toUpperCase()}
          </Text>
        </Circle>
      </motion.mesh>
    </Float>
  );
}

export function Material() {
  return <meshPhongMaterial color="#B336FF" specular="#B336FF" shininess={10} />;
}





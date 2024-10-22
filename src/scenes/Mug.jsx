import { useGLTF, Float, PresentationControls, Environment } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useMemo } from 'react';


const Mug = () => {
    const mug = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf');

    const MugScene = () => {
        const { viewport } = useThree();

        // Check if the device is mobile
        const isMobile = viewport.width < 640;

        // Adjust position and scale based on the device type
        useMemo(() => {
            mug.scene.position.set(isMobile ? 0 : -2, isMobile ? -1 : -1, 0);
            mug.scene.scale.set(isMobile ? 3 : 4, isMobile ? 3 : 4, isMobile ? 3 : 4);
            mug.scene.rotation.set(-0.5, -0.3, -0.1);
        }, [isMobile]);

        return (
            <Float floatIntensity={isMobile ? 1 :4}>
                <primitive object={mug.scene} />
            </Float>
        );
    };

    return (
        <Canvas id='mug'
            camera={{
                near: 0.5,
                fov: 25,
                far: 2000,
                position: [0, 0, -10],
            }}
        >
            <Environment preset='city' />
            <PresentationControls
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.075]}
                config={{ mass: 2, tension: 2000 }}
                snap={{ mass: 4, tension: 400 }}
            >
                <MugScene />
            </PresentationControls>
        </Canvas>
    );
};

export default Mug;

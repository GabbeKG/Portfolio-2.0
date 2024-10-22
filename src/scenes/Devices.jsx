/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls, useGLTF, Html, Float } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { projects } from "../constants/constants";

const Projects = ({ currentProject }) => {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf');

    // State for checking window width (for responsiveness)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    // Check if the screen is mobile-sized and update state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);  // Tailwind's `sm` breakpoint (~640px)
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Adjust computer model transformations for desktop and mobile
    const computerScale = isMobile ? 0.5 : 0.75;
    const phoneScale = isMobile ? 1.25 : 1.5;

    // Computer model adjustments
    computer.scene.rotation.y = Math.PI / 2 * 0.5;
    computer.scene.rotation.x = 0.1;
    computer.scene.position.set(isMobile ? 0 : -3.45, 0, isMobile ? 0 : -2.5);
    computer.scene.scale.set(computerScale, computerScale, computerScale);

    // Phone model adjustments
    phone.scene.rotation.y = -Math.PI / 2.5 * 0.65;
    phone.scene.position.set(isMobile ? 0 : 8, isMobile ? -1.65 : -2, isMobile ? -2 : -8);
    phone.scene.scale.set(phoneScale, phoneScale, phoneScale);

    return (
        <Canvas className="z-50 w-[90vw]" camera={{ near: 0.5, fov: 46, far: 2000 }}>
            <Environment preset="forest" />

            {/* Conditionally render computer model only if it's not mobile */}
            {!isMobile && (
                <Float rotationIntensity={0.2}>
                    <PresentationControls
                        rotation={[0.13, 0.1, 0]}
                        polar={[-0.4, 0.2]}
                        azimuth={[-1, 0.075]}
                        config={{ mass: 2, tension: 2000 }}
                        snap={{ mass: 4, tension: 100 }}
                    >
                        {/* Render Computer Model */}
                        <rectAreaLight width={2.5} height={1.65} intensity={65} rotation={[-0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
                        <primitive object={computer.scene}>
                            <Html
                                transform
                                wrapperClass="htmlScreen"
                                distanceFactor={isMobile ? 1.7 : 1.17}
                                position={isMobile ? [-.9, 1.76, -1] : [0.08, 1.65, -1.55]}  // Adjust this position
                                rotation-x={-0.256}
                            >
                                <iframe
                                    style={{
                                        borderRadius: '25px',
                                        maxWidth: isMobile ? '650px' : '1010px',    // Ensure iframe is responsive
                                        width: isMobile ? '1010px' : '5010px',  // Adjust dynamically for mobile
                                        height: isMobile ? '450px' : '675px'
                                    }}
                                    src={projects[currentProject].url}
                                />
                            </Html>
                        </primitive>
                    </PresentationControls>
                </Float>
            )}

            {/* Always render phone model */}
            <Float rotationIntensity={0.002}>
                <PresentationControls
                    enabled
                    rotation={[0.13, 0.1, 0]}
                    polar={[0.04, 0.02]}
                    azimuth={[-0.01, 0.0001]}
                    config={{ mass: 2, tension: 2000 }}
                    snap={{ mass: 4, tension: 2000 }}
                >
                    {/* Render Phone Model */}
                    <primitive object={phone.scene}>
                        <Html
                            transform
                            wrapperClass="htmlScreen"
                            distanceFactor={1.17}
                            position={isMobile ? [1.3, 1.69, 1.35] : [0.157, 1.419, 0.1]}  // Adjust this position
                            rotation-x={0}
                        >
                            <iframe
                                style={{
                                    borderRadius: '75px',
                                    maxWidth: '100%',  // Ensure iframe is responsive
                                    width: isMobile ? '375px' : '530px',
                                    height: isMobile ? '755px' : '1110px',
                                    touchAction: 'auto',
                                    zIndex: 1
                                }}
                                src={projects[currentProject].url}
                            />
                        </Html>
                    </primitive>
                </PresentationControls>
            </Float>
        </Canvas>
    );
};

export default Projects;

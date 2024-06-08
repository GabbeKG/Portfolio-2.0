
import {  useGLTF, Html, Float, PresentationControls, SpotLight, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { useState, Suspense } from 'react'
import { PointLight } from 'three';

const Mug = () => {
    
    
    
    
  
    const mug = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf')
    mug.scene.position.x = -2;
    mug.scene.position.y = -1;
    mug.scene.rotation.set(-.5,-.3,-.1)
    mug.scene.scale.set(4,4,4)



    return (
        <Canvas id='mug'
            camera={{
                
                near: .5,
                fov: 25,
                far: 2000,
                position: [-3, 1.5, -10],
            }}
        >
            <Environment
                preset='city'
                
            />
            <mesh>
                
            
                <PresentationControls
                 rotation={ [ 0.13, 0.1, 0 ] }
                 polar={ [ - 0.4, 0.2 ] }
                 azimuth={ [ - 1, 0.075 ] }
                 config={ { mass: 2, tension: 2000 } }
                 snap={ { mass: 4, tension: 400 } }
                >
                    <Float floatIntensity={4}>

                
                        <primitive
                        object={mug.scene}
                        
                        
                        />
                        </Float>
            
                    </PresentationControls> 
            </mesh>
        </Canvas>
    )
}

export default Mug;
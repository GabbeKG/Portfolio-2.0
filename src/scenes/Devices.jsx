/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import {
    Environment,
    PresentationControls,
    useGLTF,
    Html,
    Float,        
} from '@react-three/drei'

import { projects } from "../constants/constants";


const Projects = ({currentProject, setCurrentProject}) => {
    
    
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf');
    computer.scene.rotation.y = (Math.PI / 2 * .5)
    computer.scene.rotation.x=.1
    computer.scene.position.set(-3.45, 0, -2.5)
    computer.scene.scale.set(.75,.75,.75)
    
    
    phone.scene.rotation.y = -Math.PI / 2.5 * .65
    phone.scene.position.x = 8
    phone.scene.position.y=-2
    phone.scene.position.z = -8
    phone.scene.scale.set(1.5, 1.5, 1.5)
    
    

    return (
        <Canvas className="z-50 w-[90vw] "
           
        camera={{
                
            near: .5,
            fov: 46,
            far: 2000,
            
            
        }}
        >
            <Environment             
                preset="forest"
                
            />
           
                <Float
                    rotationIntensity={0.2}
                    >

            <PresentationControls
            
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.075 ] }
            config={ { mass: 2, tension: 2000 } }
            snap={ { mass: 4, tension: 100 } }
            >
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                    />
                <primitive 
                    object={ computer.scene} preset="city"
                    >

                    <Html
                            transform
                            
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ -1.5, 2.68, -1.55 ] }
                        rotation-x={ - 0.256 }
                        >
                             
                            <iframe style={{ borderRadius: '25px', position: 'fixed' }} width={1010} height={675} src={projects[currentProject].url}/>
                            
                    </Html>

            </primitive>
                                     
                            
        </PresentationControls>
                </Float>
                <Float rotationIntensity={0.002}>

        <PresentationControls
         enabled
         rotation={ [ 0.13, 0.1, 0 ] }
         polar={ [  0.04, 0.02 ] }
         azimuth={ [ - .01, 0.0001 ] }
         config={ { mass: 2, tension: 2000 } }
         snap={ { mass: 4, tension: 2000 } }
         >
            <primitive
                    object={ phone.scene }
                    
                    >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ .157, 1.419, .1  ] }
                        rotation-x={  0 }
                        >
                        <iframe style={{borderRadius:'75px', touchAction:'auto', zIndex:1}} width={530} height={1110} src={projects[currentProject].url} />
                    </Html>
                </primitive>
                        </PresentationControls>
            </Float>
            
        
        </Canvas>
    )
}
export default Projects
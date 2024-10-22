import { Canvas, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three";



const Cubes = (props) => {
    let loader = new TextureLoader();
    const texture = useLoader(TextureLoader, props.imgUrl)
    return (<>
        


    
            
        <mesh>
            <boxGeometry args={[3,3,3.5]} />
            <meshPhongMaterial color={'#DD93FD'} />

   </mesh>
    <mesh   scale={2}>
      <boxGeometry args={[1, 1,2.5]} />
            <meshBasicMaterial
                transparent
                map={texture}
                
                
                
                
                
                />
    
   
    </mesh>
      

        </>
    )
}

const TechCubes = ({icon}) => {
    return (
        <Canvas
            camera={{
                
                near: 1,
                fov: 46,
                far: 2000,
            }}
            frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
        >
            <ambientLight intensity={2} />
            
                
         <Cubes imgUrl={icon} />
            
        </Canvas>
    )
}
export default TechCubes
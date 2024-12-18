import React from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { useLoader } from '@react-three/fiber'

export const Model = () => {
 
    const materials = useLoader(MTLLoader, "logoBW.mtl");
  const obj = useLoader(OBJLoader, "logoBW.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(materials);
  return <primitive object={obj} scale={0.2} rotation-x={180}  rotation-y={0} rotation-z={0}/>;
  
}

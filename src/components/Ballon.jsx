import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ballon(props) {
  const { nodes, materials } = useGLTF('models/character.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="fix" position={[0.047, 2.062, -0.078]} scale={0.01}>
          <mesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials['Material.002']} />
          <mesh name="Mesh_1_1" geometry={nodes.Mesh_1_1.geometry} material={materials['Material.008']} />
          <mesh name="Mesh_1_2" geometry={nodes.Mesh_1_2.geometry} material={materials['Material.005']} />
          <mesh name="Mesh_1_3" geometry={nodes.Mesh_1_3.geometry} material={materials['Material.006']} />
        </group>
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[0.037, 2.364, -0.072]} scale={0.589} />
      </group>
    </group>
  )
}

useGLTF.preload('models/character.glb')
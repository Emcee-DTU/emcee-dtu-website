import { logDOM } from "@testing-library/react";
import React, { useState, useEffect, useRef, Suspense } from "react";
import logo from "./logo.png";
import mic from "./mic.png";
import mic_button from "./mic_button.png";
import mic_button_arrow from "./maki--arrow (1).svg";
import model from "./microphone/scene.gltf";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
    const { nodes, materials } = useGLTF('/scene.gltf')
    // Use useRef to access the mesh object
    return (
        <group {...props} dispose={null} scale={1.5}>
            <group rotation={[10, 50, 0]} scale={0.007} >
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.Body_low_Microphone_0.geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
                    <mesh geometry={nodes['0'].geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
                    <mesh geometry={nodes.Weave_low_Microphone_0.geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
                    <mesh geometry={nodes['1'].geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
                    <mesh geometry={nodes.Prongs_low_Microphone_0.geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
                </group>
            </group>
        </group>
    )
}

export default function Main() {

    const [micModel, setMicModel] = useState(null);


    return (
        <div className="first-main-master" id="home">
            <div className="first-main-parent">
                <div className="first-main-info">
                    <img src={logo} alt="mainlogo" />

                    <p>Welcome to EMCEE DTU, the vibrant anchoring society at Delhi Technological University!
                        With a passion for hosting engaging events and captivating audiences,
                        we take pride in creating memorable experiences.
                        From academic conferences to cultural extravaganzas,
                        our team of enthusiastic anchors ensures seamless execution and unparalleled entertainment.
                    </p>

                    <a className="registration-button"
                        href="https://unstop.com/p/emcee-dtu-dynamic-dtu-new-delhi-935238"
                        target="__blank">
                        <img src={mic_button} />
                        <div className="button-content">
                            <div className="dynamic">DynaMIC</div>
                            <div className="register">Register Here
                                <img src={mic_button_arrow} />
                            </div>
                        </div>
                    </a>

                </div>
                {/* <div>
                    <img src={mic} className="main-mic" />
                </div> */}
                <div className="mic-model" style={{ height: "600px", width: "500px" }}>

                    <Canvas>
                        <Suspense fallback={null}>
                            <ambientLight />
                            <pointLight position={[10, 10, 10]} />
                            <spotLight position={[10, 10, 10]} intensity={5000} />
                            <Model />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                enableRotate={true}

                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
}
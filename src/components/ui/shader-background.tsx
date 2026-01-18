"use client";
import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export function ShaderBackground() {
    return (
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
            <ShaderGradientCanvas
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                }}
                lazyLoad={true}
                fov={100}
                pixelDensity={1}
                pointerEvents="none"
            >
                <ShaderGradient
                    animate="on"
                    type="waterPlane"
                    wireframe={false}
                    shader="defaults"
                    uTime={8.5}
                    uSpeed={0.3}
                    uStrength={1.7}
                    uDensity={1.5}
                    uFrequency={0}
                    uAmplitude={0}
                    positionX={0}
                    positionY={0}
                    positionZ={0}
                    rotationX={50}
                    rotationY={0}
                    rotationZ={-60}
                    color1="#457372"
                    color2="#04D1CD"
                    color3="#212121"
                    reflection={0.1}

                    // View (camera) props
                    cAzimuthAngle={180}
                    cPolarAngle={80}
                    cDistance={2.8}
                    cameraZoom={9.1}

                    // Effect props
                    lightType="3d"
                    brightness={0.9}
                    envPreset="city"
                    grain="on"

                    // Tool props
                    toggleAxis={false}
                    zoomOut={false}
                    hoverState=""

                    enableTransition={false}
                />
            </ShaderGradientCanvas>
        </div>
    );
}

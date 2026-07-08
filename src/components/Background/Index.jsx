import LightPillar from './LightPillar';

export function Background() {
    return (
        <>
            <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: '0', left: '0', zIndex: '-1' }}>
                <LightPillar
                    topColor="#4f0210"
                    bottomColor="#4f0210"
                    intensity={0.6}
                    rotationSpeed={0.1}
                    glowAmount={0.003}
                    pillarWidth={6.4}
                    pillarHeight={0.9}
                    noiseIntensity={0.4}
                    pillarRotation={44}
                    interactive
                    mixBlendMode="normal"
                    quality="high"
                />
            </div>
        </>
    )
}
import { useGlowEffect } from '../../hooks/useGlowEffect';

export function LinkButton({key, title, url, icon}) {
    const { ref, handleMouseMove } = useGlowEffect();
    return(
        <>
            <div ref={ref} className="glow-card bg-gray-700/5 hover:bg-gray-600/10 backdrop-blur-md rounded-2xl p-4 hover:scale-105 active:scale-95 transform-all duration-200 cursor-pointer text-gray-300 text-lg">
                <a href={url} onMouseMove={handleMouseMove} target="_blank" className="flex gap-3 items-center">
                    <p>{icon}</p>
                    <span>{title}</span>
                </a>
            </div>
        </>
    )
}
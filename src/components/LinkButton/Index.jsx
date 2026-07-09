import { useGlowEffect } from '../../hooks/useGlowEffect';
import { ExternalLink } from 'lucide-react';

export function LinkButton({key, title, url, icon}) {
    const { ref, handleMouseMove } = useGlowEffect();
    return(
        <>
            <div ref={ref} className="glow-card bg-gray-700/5 hover:text-blue-200 hover:bg-gray-600/10 backdrop-blur-md rounded-2xl p-5 hover:scale-105 active:scale-95 transform-all duration-200 cursor-pointer text-gray-300 text-md shadow-md border border-gray-500/10">
                <a href={url} onMouseMove={handleMouseMove} target="_blank" className="group flex gap-3 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <p>{icon}</p>
                        <span>{title}</span>
                    </div>
                    <ExternalLink size={16} className="text-gray-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-100"/>
                </a>
            </div>
        </>
    )
}
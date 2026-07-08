import { LinkButton } from "../LinkButton/Index"
import { Profile } from "../Profile/Index"
import { Footer } from "../Footer/Index"
import { linksData, userData } from "../../data/linksData"

import { useGlowEffect } from '../../hooks/useGlowEffect';

export function Card() {
    const { ref, handleMouseMove } = useGlowEffect();

    return (
        <>
            <div ref={ref}
                onMouseMove={handleMouseMove}
                className="glow-card bg-gray-600/10 backdrop-blur-md rounded-2xl p-8 max-w-sm w-full relative">
                <Profile
                    avatarUrl={userData.profileIcon}
                    name={userData.name}
                    bio={userData.bio}
                />

                <div className="flex flex-col gap-3 mt-3">
                    {linksData.map((link) => (
                        <LinkButton
                            key={link.id}
                            title={link.title}
                            url={link.url}
                            icon={link.icon}
                        />
                    ))}
                </div>

                <Footer />
            </div>
        </>
    )
}
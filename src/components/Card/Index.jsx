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
                className="glow-card border border-gray-500/10 bg-black/20 backdrop-blur-lg rounded-2xl p-9 max-w-sm w-full relative tracking-wider shadow-mg">
                <Profile
                    avatarUrl={userData.profileIcon}
                    name={userData.name}
                    bio={userData.bio}
                />

                <div className="flex flex-col gap-4 mt-9">
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
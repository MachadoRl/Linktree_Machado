import { LinkButton } from "../LinkButton/Index"
import { Profile } from "../Profile/Index"
import { Footer } from "../Footer/Index"
import { linksData, userData } from "../../data/linksData"

import { useRef } from 'react';

export function Card() {
    const cardRef = useRef(null);

    function handleMouseMove(e) {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
    return (
        <>
            <div ref={cardRef}
                onMouseMove={handleMouseMove}
                className="glow-card bg-gray-600/10 backdrop-blur-md rounded-2xl p-6 max-w-sm w-full relative h-60">
                <Profile
                    avatarUrl={userData.profileIcon}
                    name={userData.name}
                    bio={userData.bio}
                />

                {linksData.map((link) => (
                    <LinkButton
                        key={link.id}
                        title={link.title}
                        url={link.url}
                        icon={link.icon}
                    />
                ))}

                <Footer />
            </div>
        </>
    )
}
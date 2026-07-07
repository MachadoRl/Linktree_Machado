import { LinkButton } from "../LinkButton/Index"
import { Profile } from "../Profile/Index"
import { Footer } from "../Footer/Index"
import { linksData, userData } from "../../data/linksData"


export function Card() {
    return (
        <>
            <div className="">
                <Profile
                    avatarUrl={userData.avatarUrl}
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
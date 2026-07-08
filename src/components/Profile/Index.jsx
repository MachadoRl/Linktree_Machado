export function Profile({avatarUrl, name, bio}) {
    return (
        <>
            <div className="flex justify-center flex-col items-center gap-2">
                <img
                    src={avatarUrl}
                    alt={name}
                    className="w-30 h-30 rounded-full"
                />
                <h1 className="text-gray-200 text-xl font-bold">{name}</h1>
                <p className="text-gray-300">{bio}</p>
            </div>
        </>
    )
}
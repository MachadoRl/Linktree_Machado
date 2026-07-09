export function Profile({avatarUrl, name, bio}) {
    return (
        <>
            <div className="flex justify-center flex-col items-center gap-3">
                <img
                    src={avatarUrl}
                    alt={name}
                    className="w-30 h-30 rounded-full border border-gray-500/10 shadow-md"
                />
                <h1 className="text-gray-200 text-2xl font-bold">{name}</h1>
                <p className="text-gray-300/90">{bio}</p>
            </div>
        </>
    )
}
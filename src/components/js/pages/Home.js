import React from 'react'

const Home = () => {
    return (
        <>
<div className="w-full h-screen flex flex-col items-center justify-center gap-8">
    <h1 className="text-4xl text-gray-600 leading-relaxed text-center w-4/5">
        "This took a pretty long time to build"
    </h1>
    <div className="flex items-center gap-4">
        <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
            <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="profile"/>
        </div>
        <div className="flex flex-col tracking-wider">
            <a className="text-gray-600 font-bold text-base" href="https://twitter.com/zacc_X_">Ibrahim shaz</a>
            <label className="text-gray-400 font-normal text-sm">A Student Developer</label>
        </div>
    </div>
</div>
        </>
    )
}

export default Home

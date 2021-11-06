import React, { useEffect, useState } from "react";
import Plyr from "plyr-react";
import './css/style.css';
import "plyr-react/dist/plyr.css";

const VideoTrailer = ({ src }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        const trailerUrl = parserTrailerSrc(src);
        setUrl(trailerUrl);
    }, [src]);

    const parserTrailerSrc = (url) => {
        const regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url?.match(regExp);
        return match && match[7].length === 11 ? match[7] : false;
    };

    if (!url) return <div></div>;

    return (
        <>
            <Plyr
                source={{
                    type: "video",
                    sources: [
                        {
                            src: url,
                            provider: "youtube",
                        },
                    ],
                }}
            />
        </>
    );
};

export default VideoTrailer;

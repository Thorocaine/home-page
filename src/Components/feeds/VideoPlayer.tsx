import React, {useRef} from 'react';

interface Props { feed: { youtubeId: string } };

const VideoPlayer: React.FC<Props> = ({feed}) => {
    return (
        <div className="relative w-full aspect-video">
            <iframe src={`https://www.youtube.com/embed/${feed.youtubeId}`}                                        
                    width="100%" height="100%"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>    );
        
};

export default VideoPlayer;

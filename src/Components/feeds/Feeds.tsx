import React from 'react';
import feeds from './feeds.json';
import {Vidaloka} from "@next/font/google";
import VideoPlayer from "@/Components/feeds/VideoPlayer";

const Feeds: React.FC = () => {


    return (<>           
            <div className="grid grid-cols-3 gap-4 custom-grid-width">
                {feeds.map((feed) => (<VideoPlayer key={feed.youtubeId} feed={feed}/>))}
            </div>
        </>
    );


};

export default Feeds;

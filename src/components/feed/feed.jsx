import React from 'react';
import Share from '../share/share';
import Post from '../post/post';
import './feed.css';

export default function Feed() {
    return (
        <>
            <div class="feed">
                <div className="feedWrapper">
                    <Share/>
                    <Post/>
                </div>
            </div>
        </>
    )
}
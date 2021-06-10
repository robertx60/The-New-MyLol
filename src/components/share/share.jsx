import React from 'react';
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import './share.css';

export default function Share() {
    return (
        <div class="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="#" alt="" /> 
                    <input placeholder="Hey, Robert! What's new? Share something..." type="text" className="shareInput"/>
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="darkgold" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                </div>
                <button className="shareButton">Share...</button>
            </div>
        </div>
    )
}
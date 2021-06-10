import React, {useState, useEffect} from "react";
import "./sidebar.css";
import {Switch, Paper} from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import { Chat, HelpOutline, PlayCircleOutlineOutlined, RssFeed, WorkOutline, Event, School, Bookmark, Group } from "@material-ui/icons";
import styled from 'styled-components';

export default function Sidebar() {

   const [darkMode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
        }     
    });

    return (
         <ThemeProvider theme={theme}>
            <Paper>   
               <div className="sidebar">
                  <div className="sidebarWrapper">
                        <ul className="sidebarList">
                           <li className="sidebarListItem">
                              <RssFeed className="sidebarIcon" />
                              <span className="sidebarListItemText">Feed</span>
                           </li>
                           <li className="sidebarListItem">
                              <Chat className="sidebarIcon" />
                              <span className="sidebarListItemText">Chats</span>
                           </li>
                           <li className="sidebarListItem">
                              <PlayCircleOutlineOutlined className="sidebarIcon" />
                              <span className="sidebarListItemText">Videos</span>
                           </li>
                           <li className="sidebarListItem">
                              <Group className="sidebarIcon" />
                              <span className="sidebarListItemText">Groups</span>
                           </li>
                           <li className="sidebarListItem">
                              <Bookmark className="sidebarIcon" />
                              <span className="sidebarListItemText">Bookmarks</span>
                           </li>
                           <li className="sidebarListItem">
                              <HelpOutline className="sidebarIcon" />
                              <span className="sidebarListItemText">Questions</span>
                           </li>
                           <li className="sidebarListItem">
                              <WorkOutline className="sidebarIcon" />
                              <span className="sidebarListItemText">Jobs</span>
                           </li>
                           <li className="sidebarListItem">
                              <Event className="sidebarIcon" />
                              <span className="sidebarListItemText">Events</span>
                           </li>
                           <li className="sidebarListItem">
                              <School className="sidebarIcon" />
                              <span className="sidebarListItemText">Courses</span>
                           </li>
                        </ul>
                        <button className="sidebarButton">Show More</button><br></br>
                        <span><Switch color="#f14000" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />Light/Dark Mode</span>
                        <hr className="sidebarHr"/>
                        <ul className="sidebarFriendList">
                           <li className="sidebarFriend">
                              <img className="sidebarFriendImg" src="#" alt="" />
                              <span className="sidebarFriendName">Jane Doe</span>
                           </li>
                           <li className="sidebarFriend">
                              <img className="sidebarFriendImg" src="#" alt="" />
                              <span className="sidebarFriendName">Jane Doe</span>
                           </li>
                           <li className="sidebarFriend">
                              <img className="sidebarFriendImg" src="#" alt="" />
                              <span className="sidebarFriendName">Jane Doe</span>
                           </li>
                           <li className="sidebarFriend">
                              <img className="sidebarFriendImg" src="#" alt="" />
                              <span className="sidebarFriendName">Jane Doe</span>
                           </li>
                           <li className="sidebarFriend">
                              <img className="sidebarFriendImg" src="#" alt="" />
                              <span className="sidebarFriendName">Jane Doe</span>
                           </li>
                           <li className="sidebarFriend">
                              <img className="sidebarFriendImg" src="#" alt="" />
                              <span className="sidebarFriendName">Jane Doe</span>
                           </li>
                           <li className="sidebarFriend">
                              <img className="sidebarFriendImg" src="#" alt="" />
                              <span className="sidebarFriendName">Jane Doe</span>
                           </li>
                           <li className="sidebarFriend">
                              <img className="sidebarFriendImg" src="#" alt="" />
                              <span className="sidebarFriendName">Jane Doe</span>
                           </li>
                           <li className="sidebarFriend">
                              <img className="sidebarFriendImg" src="#" alt="" />
                              <span className="sidebarFriendName">Jane Doe</span>
                           </li>
                        </ul>
                  </div>
               </div>
            </Paper>
         </ThemeProvider>
    )
}
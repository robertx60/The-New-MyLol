import React from "react";
import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
    return (
       <div className="topbarContainer">
           <div className="topbarLeft">
                <span className="topbarLogo">The New MYLOL</span>
           </div>
           <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input className="searchInput" placeholder="Search for friends, videos or photos..." className="searchInput" />
                </div>
           </div>
           <div className="topbarRight">
                <div className="topbarLinks">
                     <span className="topbarLink">Homepage</span>
                     <span className="topbarLink">Timelne</span>
                </div>
                <div className="topbarIcons">
                     <div className="topbarIcons">
                          <div className="topbarIconItem">
                              <Person />
                              <span className="topbarIconBadge">1</span>
                          </div>
                          <div className="topbarIconItem">
                              <Chat />
                              <span className="topbarIconBadge">3</span>
                          </div>
                          <div className="topbarIconItem">
                              <Notifications />
                              <span className="topbarIconBadge">2</span>
                          </div>
                     </div>
                     <mg src="../../public/assets/1.jpg" alt="" className="topbarImage" />
                </div>
           </div> 
       </div> 
    )
}
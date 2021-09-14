import React from 'react'
import Feed from './feed/feed'
import Sidebar from './sidebar/sidebar'
import"./index.css";
import Widgets from './widgets/widgets';

function AppBody() {
    return (
        <div className="app_body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    )
}

export default AppBody

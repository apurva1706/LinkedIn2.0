import React from 'react'
import "./widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

    const newsArticle=(heading,subtitle)=>
    (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
<FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div> 
    )

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Finally it's done","Yeahh")}
            {newsArticle("Build this site using create-react-app","React app with redux template")}
            {newsArticle("Is Redux too good?","Top news-768 readers")}
            {newsArticle("Tesla hits new highs","Cars and auto")}
            {newsArticle("Bitcoin breaks $22k","Woahhh ")}
        </div>
    )
}

export default Widgets

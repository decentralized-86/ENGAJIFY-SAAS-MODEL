import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar";
import MainPreview from "./components/CampaignPreview/mainPreviewpage";

export default function CampaignPreviewPage(){
    return(
        <>
        <Navbar/>
        <Sidebar/>
        <MainPreview/>
        </>
    )
}
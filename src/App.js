import React from "react";
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Campaign from "./Campaign";
import CampaignPreviewPage from "./CampaignPreviewpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Campaign" element={<Campaign />} />
        <Route path="/CampaignPreviewPage" element={<CampaignPreviewPage />} />
        </Routes>
    </Router>
  );
}

export default App;

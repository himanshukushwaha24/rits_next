import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;

"use client";

import { useEffect } from "react";
// import { initializeGA } from "@/utils/GoogleAnalytics";
import ReactGA from "react-ga4";

const initializeGA = () => {
  ReactGA.initialize("G-57ZTQRRFBG");
  console.log("GA INITIALIZED");
};

const trackGAEvent = (category, action, label) => {
  console.log("GA event:", category, ":", action, ":", label);
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};


const GoogleAnalytics = () => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);

  return null;
}

export default GoogleAnalytics;
export {GoogleAnalytics, initializeGA, trackGAEvent };
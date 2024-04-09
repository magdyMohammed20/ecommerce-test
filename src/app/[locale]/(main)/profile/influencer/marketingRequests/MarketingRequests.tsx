"use client";

import { useState } from "react";

import Requests from "./Requests";
import RequestDetails from "./RequestDetails";

const MarketingRequests = () => {
  const [showRequest, setShowRequest] = useState<boolean>(false);

  const handleRequestChange = () => {
    setShowRequest((prevState) => !prevState);
  };

  return (
    <>
      {!showRequest ? (
        <Requests onClick={handleRequestChange} />
      ) : (
        <RequestDetails onClose={handleRequestChange} />
      )}
    </>
  );
};

export default MarketingRequests;

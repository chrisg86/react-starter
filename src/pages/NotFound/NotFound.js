import React from "react";

import MainLayout from "@/layouts/MainLayout/MainLayout";

const NotFound = (props) => {
  return (
    <MainLayout>
      <div>
        <h1>Not Found</h1>
        <p>Route was not found. Try another one</p>
      </div>
    </MainLayout>
  );
};

export default NotFound;

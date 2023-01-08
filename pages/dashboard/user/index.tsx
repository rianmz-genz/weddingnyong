import React from "react";
import ContainerDashboard from "../../../components/dashboard/layout/ContainerDashboard";
import ContainerContentDashboard from "../../../components/dashboard/layout/ContainerContentDashboard";
import NavbarDashboard from "../../../components/dashboard/navbar/NavbarDashboard";
import SectionDashboard from "../../../components/dashboard/sections/SectionDashboard";

const index = () => {
  return (
    <ContainerDashboard>
      <NavbarDashboard />
      <ContainerContentDashboard>
        <SectionDashboard />
      </ContainerContentDashboard>
    </ContainerDashboard>
  );
};

export default index;

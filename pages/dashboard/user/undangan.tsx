import React from 'react'
import ContainerDashboard from "../../../components/dashboard/layout/ContainerDashboard";
import ContainerContentDashboard from "../../../components/dashboard/layout/ContainerContentDashboard";
import NavbarDashboard from "../../../components/dashboard/navbar/NavbarDashboard";
import SectionInvitations from '../../../components/dashboard/sections/SectionInvitations';

const undangan = () => {
  return (
    <ContainerDashboard>
      <NavbarDashboard />
      <ContainerContentDashboard>
        <SectionInvitations />
      </ContainerContentDashboard>
    </ContainerDashboard>
  )
}

export default undangan

import React from 'react'
import ContainerGuest from '../../components/guest/layout/ContainerGuest';
import ContainerContentGuest from '../../components/guest/layout/ContainerContentGuest';
import NavbarGuest from '../../components/guest/navbar/NavbarGuest';
import SectionGuest from '../../components/guest/sections/SectionGuest';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Tamu = () => {
    const router =  useRouter()
    const [id, setId] = useState<string>("")
    useEffect(()=> {
        const paramsid = router.query?.invitation as string
        setId(paramsid)
    },[router.isReady])
  return (
    <ContainerGuest>
      <NavbarGuest />
      <ContainerContentGuest>
        {id ?  <SectionGuest id={id} /> : null}
      </ContainerContentGuest>
    </ContainerGuest>
  )
}

export default Tamu

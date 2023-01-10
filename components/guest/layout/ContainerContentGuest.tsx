import React from 'react'
import { ReactNode, FC } from 'react';

const ContainerContentGuest: FC<ContainerContentProps> = ({children}) => {
  return (
    <main className='lg:w-9/12 max-sm:w-11/12 min-h-screen h-fit absolute right-0  max-sm:ml-0 ml-6'>
      {children}
    </main>
  )
}

export default ContainerContentGuest

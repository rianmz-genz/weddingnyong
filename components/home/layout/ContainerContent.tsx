import React from 'react'
import { ReactNode, FC } from 'react';

const ContainerContent: FC<ContainerContentProps> = ({children}) => {
  return (
    <main className='lg:w-8/12 max-sm:w-10/12 min-h-screen h-fit absolute left-1/2 -translate-x-1/2 ml-6'>
      {children}
    </main>
  )
}

export default ContainerContent

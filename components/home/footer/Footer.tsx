import React, {FC} from 'react'

const Footer: FC<FooterProps> = ({
    copyright,
    description
}) => {
  return (
    <footer className='w-7/12 mx-auto h-14 z-20 text-center'>
      <h1 className='text-sm'>{copyright}</h1>
      <p className='text-xs'>{description}</p>
    </footer>
  )
}

export default Footer

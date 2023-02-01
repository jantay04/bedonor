import React from 'react'

type Props = {
    children: React.ReactNode
}

function HeadPage({children}: Props) {
  return (
    <h2 className=''>
        {children}
    </h2>
  )
}

export default HeadPage
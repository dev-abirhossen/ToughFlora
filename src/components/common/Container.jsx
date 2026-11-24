import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`mx-auto w-330 ${className}`}>{children}</div>
  )
}

export default Container
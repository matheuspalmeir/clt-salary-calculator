import React from 'react'

const PagesContainer = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  )
}

export default PagesContainer

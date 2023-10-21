import React from 'react'

export const Contentpage = () => {
    const set = localStorage.getItem('items')
  return (
    <div>
        Contentpage
        <p>
            {set[2]}
        </p>
    </div>
  )
}

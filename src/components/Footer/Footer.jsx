import React from 'react'

function Footer() {
    const date = new Date()
  return (
      <div>
          <div className="footer">
              <p>&copy;{ date}</p>
          </div>
    </div>
  )
}

export default Footer
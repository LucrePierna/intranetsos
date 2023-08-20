/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function CorredorTurista() {
  return (
    <div>
      <h1>Transportin Turista</h1>
      <iframe 
      src="https://www.google.com/maps/d/viewer?mid=15hD9V0JCdH3q58WN8w2lXK1XiUms4O4&ll=-35.28891084313367%2C-58.00290965000001&z=7" 
      frameborder="0"
      width={640}
      height={480}
      ></iframe>
    </div>
  )
}

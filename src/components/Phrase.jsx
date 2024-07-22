import React from 'react'
import '../App.jsx'

function Phrase({phraseSelected}) {
  console.log(phraseSelected);
  return (
    <p className='text-xl text-center font-semibold mb-6 z-3'>{phraseSelected.phrase}</p>
  )
}

export default Phrase

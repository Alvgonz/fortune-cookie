import React from 'react'
import '../App.jsx'

function Phrase({phraseSelected}) {
  console.log(phraseSelected);
  return (
    <p className='text-xl text-center font-semibold mb-6 z-3 roboto-mono'>{phraseSelected.phrase}</p>
  )
}

export default Phrase

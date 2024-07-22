import quotes from './data/frases.json'
import getRandomNumbers from './utils/getRandomNumbers';
import { useState, useEffect, useRef } from 'react';
import Phrase from './components/Phrase';
import BtnPhrase from './components/BtnPhrase';
import photos from './data/photos.json';
import VideoBackground from './components/VideoBackground.jsx';

function App() {
  const indexRandom = getRandomNumbers(quotes.length)
  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);
  const [bgSelected, setBgSelected] = useState(photos[getRandomNumbers(photos.length)])
  const videoRef = useRef(null);

  const objStyles = {
    backgroundImage: `/video/video${bgSelected}.mp4`,
  }

  const videoSrc = `/video/video${bgSelected}.mp4`

  return (
   <div /*style={objStyles}*/ className='relative min-h-screen bg-cover bg-center flex justify-center items-center px-4'>
   <VideoBackground src={videoSrc}/>
    <h1 className='absolute text-5xl top-20 text-white text-center drop-shadow-lg roboto-mono'>Galleta de la fortuna</h1>
    <article className='max-w-[400px] bg-white p-6 rounde-x1 shadow-2xl absolute z-3'>
      <Phrase phraseSelected={phraseSelected}/>
      <BtnPhrase setPhraseSelected={setPhraseSelected} setBgSelected={setBgSelected}/>
    </article>
    <footer className='absolute bottom-20 bg-indigo-950 p-5 rounded-lg text-white bg-opacity-75'>
      <p>{phraseSelected.author}</p>
    </footer>
   </div>
  )
}

export default App


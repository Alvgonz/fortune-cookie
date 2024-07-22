import React from 'react';
import getRandomNumbers from '../utils/getRandomNumbers';
import quotes from '../data/frases.json';
import photos from '../data/photos.json';

const BtnPhrase = ({setPhraseSelected, setBgSelected}) => {
  const changePhrase = () => {
    const indexRandom = getRandomNumbers(quotes.length)
    const phraseRandom = quotes[indexRandom];
    setPhraseSelected(phraseRandom);
    setBgSelected(photos[getRandomNumbers(photos.length)]);
  }

  return (
    <button className='z-40 hover:scale-125 transition-transform cursor-pointer ml-auto block bg-indigo-950 py-2 px-4 rounded-xl text-white' onClick={changePhrase}>
      Abrir otra
    </button>
  )
}

export default BtnPhrase

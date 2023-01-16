import React, { useState } from 'react';
import RAIN_SOUND from '../assets/audio/Rain.mp3'
import JAZZ_SOUND from '../assets/audio/Jazz.mp3'
import NATURE_SOUND from '../assets/audio/Nature.mp3'
import WAVES_SOUND from '../assets/audio/Waves.mp3'

export function VolumeRange() {

  //The decision was deliberately made to be able to overlay sounds. 
  //A user may, for example, want to listen to the sounds of nature with a background of rain. 
  //For this reason there is the possibility to adjust the volume of each one.

  const initSoundState = [
    { name: 'Jazz', sound: JAZZ_SOUND },
    { name: 'Rain', sound: RAIN_SOUND },
    { name: 'Wave', sound: WAVES_SOUND },
    { name: 'Nature', sound: NATURE_SOUND },
  ]

  const [soundRange] = useState(initSoundState);

  return (
    <div className="my-20 flex flex-1 flex-col items-center justify-center">
      {soundRange.map((item, index) => {
        const audio = new Audio(item.sound)
        audio.loop = true
        let play = false

        const handlePlayPause = () => {
          if (!play) {
            audio.play().then()
            play = true
          } else {
            audio.pause()
            play = false
          }
        }

        const handleChangeVolume = (e) => {
          audio.volume = e.target.value
        }

        return (
          <div key={index} className="md:m-10 m-3 text-xl w-60">
            {item.name}

            <label className="swap ml-2 relative bottom-[-7px]">
              <input type="checkbox" onClick={handlePlayPause} />
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                viewBox="0 0 24 24">
                <path
                  d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
              </svg>
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                viewBox="0 0 24 24">
                <path
                  d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
              </svg>
            </label>
            <input type="range" min="0" max="1" step="0.01" className="range range-xs md:range-sm "
              onChange={handleChangeVolume} />
          </div>
        )
      })}
    </div>
  )
}

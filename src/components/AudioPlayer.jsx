import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
export default function AudioPlayer() {
  return (
    <div><ReactAudioPlayer
    src="my_audio_file.ogg"
    autoPlay
    controls
  /></div>
  )
}

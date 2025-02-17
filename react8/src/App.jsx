import React, { useState } from 'react'

const App = () => {

  const [songName, setSongName] = useState('')
  const [songArtist, setSongArtist] = useState('')
  const [songAlbum, setSongAlbum] = useState('')
  const [songPoster, setSongPoster] = useState('')

  const [allSongs, setAllSongs] = useState([])
  


  const submitHandler = (e)=>{

    e.preventDefault()
    
    const copySong = [...allSongs]
    copySong.push({songName,songArtist,songAlbum,songPoster})
    setAllSongs(copySong)

    setSongName('')
    setSongArtist('')
    setSongPoster('')
    setSongAlbum('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={songName}
        onChange={(e)=>{
          setSongName(e.target.value)
        }}

        className='border-2 rounded px-4 py-1 m-2' type="text" placeholder='Enter Song Name' />
        <input
        value={songArtist}
        onChange={(e)=>{
          setSongArtist(e.target.value)
        }}
        className='border-2 rounded px-4 py-1 m-2' type="text" placeholder='Enter Song Artist' />
        <input
        value={songAlbum}
        onChange={(e)=>{
          setSongAlbum(e.target.value)
        }}
        className='border-2 rounded px-4 py-1 m-2' type="text" placeholder='Enter Song Album' />
        <input
        value={songPoster}
        onChange={(e)=>{
          setSongPoster(e.target.value)
        }}
        className='border-2 rounded px-4 py-1 m-2' type="text" placeholder='Paste Song Poster' />
        <button className='rounded px-4 py-2 text-white bg-blue-500 m-2'>Add Song</button>
      </form>

      <div>
        {allSongs.map(function(elem){
          
          return <div>
            <img className='h-20' src={elem.songPoster} alt="" />
            <h1>{elem.songName}</h1>
            <h3>Artist: {elem.songArtist}</h3>
            <h4>Album: {elem.songAlbum}</h4>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
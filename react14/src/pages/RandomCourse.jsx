import React from 'react'
import { useParams } from 'react-router-dom'


const RandomCourse = () => {

    const data = useParams()

  return (
    <div>
        <h1>{data.id} Course Page</h1>
    </div>
  )
}

export default RandomCourse
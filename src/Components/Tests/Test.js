import React from 'react'
import { Link } from 'react-router-dom';

const Test = () => {
  const testTopics = ["Java", "JavaScript", "Python", "C", "Cpp"];


  return (
    <div class="container d-flex justify-content-center w-75 flex-wrap p-2">
      {testTopics.map((item) => (
        <div class="card m-2" >
        <img src="" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{item}</h5>
          <p class="card-text">Total Questions:- 5</p>
          <p class="card-text">Your Best Score:- 0</p>
          <Link to={`/test/${item.toLowerCase()}`} className="btn btn-primary">Start Test</Link>
        </div>
        </div>
      ))}  
    </div>


  )
}

export default Test

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({isLoggedIn}) => {
    const navigate = useNavigate();

    useEffect(() => {

        if(!isLoggedIn){
            navigate('/auth');
        }
    }, [isLoggedIn])

  return (
    <div>
      
    </div>
  )
}

export default Home

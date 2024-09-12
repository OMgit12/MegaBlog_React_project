// import { useState } from 'react'
import React , { useEffect ,useState } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import authservice from "./appwite/auth"
import {login, logout} from "./store/authSlice"
import {Header, Footer} from "./components"

function App() {
  const[loading ,setloading] = useState() 
  const dispatch = useDispatch()

  useEffect (()=> {
    authservice.GetcurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })

    .finally(()=>{
      setloading(false) 
    })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO: <outlet></outlet>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

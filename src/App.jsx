import React from 'react'
import Header from './components/header'
import Appbar from './components/appbar'
import Body from './components/body'

function App() {
  return (
      <div className='bg-[#202020] h-[100vh] w-full flex-col flex items-center'>
         <Header/>
         <Appbar/>
         <Body/>
    </div>
  
  )
}

export default App
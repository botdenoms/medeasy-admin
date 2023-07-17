import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { firebaseConfig } from './config/config'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

import AppBar from './components/AppBar'
import SideBar from './components/SideBar'
import Content from './components/Content'


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

function App() {
  const [tab, setTab] = useState(0)
  const [users, setUsers] = useState([])
  const [specialists, setSpecialists] = useState([])
  const [schedules, setSchedules] = useState([])

  // functions
  const usersData = async() => {
    // get data about users
    try {
      const querySnap = await getDocs(collection(db, 'users'))
      if(querySnap.empty){
        // do data
        return
      }
      var items = []
      querySnap.forEach((doc)=>{
        const dt = doc.data()
        var item ={
          id: doc.id,
          name: dt.name,
          telephone: dt.telephone,
          email: dt.email,
          at: dt.at.toDate()
        }
        items.push(item)
      })
      setUsers([...items])
    } catch (error) {
      alert(`An error occured:, ${error}`)
    }
  }

  const specialistsData = async()=>{
    // get data about specialists
    try {
      const querySnap = await getDocs(collection(db, 'specialists'))
      if(querySnap.empty){
        // do data
        return
      }
      var items = []
      querySnap.forEach((doc)=>{
        const dt = doc.data()
        var item ={
          id: doc.id,
          location: dt.location,
          speciality: dt.speciality,
          cert: dt.cert,
          profile: dt.profile,
          name: dt.name,
          reg: dt.regNo
        }
        items.push(item)
      })
      setSpecialists([...items])
    } catch (error) {
      alert(`An error occured:, ${error}`)
    }
  }

  const schedulesData = async()=>{
    // get data about schedules
    try {
      const querySnap = await getDocs(collection(db, 'schedules'))
      if(querySnap.empty){
        // do data
        return
      }
      var items = []
      querySnap.forEach((doc)=>{
        const dt = doc.data()
        var item ={
          id: doc.id,
          patient: dt.patient,
          specialist: dt.specialist,
          online: dt.online,
          at: dt.at.toDate()
        }
        items.push(item)
      })
      setSchedules([...items])
    } catch (error) {
      alert(`An error occured:, ${error}`)
    }
  }

  const tabChange = (index)=>{
    switch (index) {
      case 0:
        // home
        break
      case 1:
        // users
        break
      case 2:
        // specialists
        break
      case 3:
        // schedules
        break
      case 4:
        // Registrations
        break
      default:
        break
    }
    setTab(index)
  }

  // effects
  useEffect(() => {
    usersData()
    specialistsData()
    schedulesData()
  }, [])
  
  // ui
  return (
    <div className='main'>
      <AppBar />
      <div className='content'>
        <SideBar tab={tab} handler={tabChange}/>
        <Content tab={tab} users={users} specialists={specialists} schedules={schedules}/>
      </div>
    </div>
  )
}

export default App

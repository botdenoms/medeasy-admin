import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { firebaseConfig } from './config/config'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {initializeFirestore, collection, getDocs, persistentLocalCache, doc, updateDoc } from "firebase/firestore"

import AppBar from './components/AppBar'
import SideBar from './components/SideBar'
import Content from './components/Content'


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = initializeFirestore(app, {localCache: persistentLocalCache()})
// getFirestore(app)

function App() {
  const [tab, setTab] = useState(0)
  const [users, setUsers] = useState([])
  const [specialists, setSpecialists] = useState([])
  const [facilities, setFacilities] = useState([])
  const [tests, setTests] = useState([])
  const [schedules, setSchedules] = useState([])
  // ui controllers
  const [running, setRunning] = useState(false)

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
          at: dt.at.toDate(),
          specialist: dt.specialist
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
        // check if verified 
        if(doc.get('verified') === true){
          // check if geo
          // doc.get('geo')
          var item ={
            id: doc.id,
            location: [...dt.location],
            speciality: dt.speciality,
            cert: dt.cert,
            profile: dt.profile,
            name: dt.name,
            reg: dt.regNo,
            verified: dt.verified,
            at: dt.at.toDate(),
            usr: dt.id
          }
          items.push(item)
        }else{
          var item ={
            id: doc.id,
            location: [...dt.location],
            speciality: dt.speciality,
            cert: dt.cert,
            profile: dt.profile,
            name: dt.name,
            reg: dt.regNo,
            usr: dt.id
          }
          items.push(item)
        }
      })
      setSpecialists([...items])
    } catch (error) {
      alert(`An error occured:, ${error}`)
    }
  }

  const facilitiesData = async()=>{
    // get data about facilities
    try {
      const querySnap = await getDocs(collection(db, 'facilities'))
      if(querySnap.empty){
        // do data
        return
      }
      var items = []
      querySnap.forEach((doc)=>{
        const dt = doc.data()
        // check if verified 
        if(doc.get('verified') === true){
          // check if geo
          // doc.get('geo')
          var item ={
            name: dt.name,
            id: doc.id,
            location: [...dt.location],
            email: dt.email,
            lincence: dt.lincence,
            img: dt.img,
            pobox: dt.pobox,
            usr: dt.id
            // at.toDate()
          }
          items.push(item)
        }else{
          var item ={
            name: dt.name,
            id: doc.id,
            location: [...dt.location],
            email: dt.email,
            lincence: dt.lincence,
            img: dt.img,
            pobox: dt.pobox,
            usr: dt.id
          }
          items.push(item)
        }
      })
      setFacilities([...items])
    } catch (error) {
      alert(`An error occured:, ${error}`)
    }
  }

  const testsData = async()=>{
    // get data about tests
    try {
      const querySnap = await getDocs(collection(db, 'tests'))
      if(querySnap.empty){
        // do data
        return
      }
      var items = []
      querySnap.forEach((doc)=>{
        const dt = doc.data()
        var item ={
          id: doc.id,
          client: dt.client,
          facility: dt.facility,
          date: dt.date.toDate(),
          type: dt.type,
          ref: dt.ref,
        }
        items.push(item)
      })
      setTests([...items])
    } catch (error) {
      alert(`An error occured:, ${error}`)
    }
  }

  const daignosisData = async()=>{
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
        // check if verified 
        if(doc.get('verified') === true){
          // check if geo
          // doc.get('geo')
          var item ={
            id: doc.id,
            location: dt.location,
            speciality: dt.speciality,
            cert: dt.cert,
            profile: dt.profile,
            name: dt.name,
            reg: dt.regNo,
            verified: dt.verified,
            at: dt.at.toDate()
          }
          items.push(item)
        }else{
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
        }
      })
      setSpecialists([...items])
    } catch (error) {
      alert(`An error occured:, ${error}`)
    }
  }

  const schedulesData = async()=>{
    // get data about specialists
    try {
      const querySnap = await getDocs(collection(db, 'schedules'))
      if(querySnap.empty){
        // do data
        return
      }
      var items = []
      querySnap.forEach((doc)=>{
        const dt = doc.data()
        // check if verified 
        var item ={
          id: doc.id,
          patient: dt.patient,
          specialist: dt.specialist,
          from: dt.from.toDate(),
          to: dt.to.toDate(),
          tests: [...dt.tests],
          // at: dt.at.toDate()
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
        specialistsData()
        break
      case 3:
        // facilities
        facilitiesData()
        break
      case 4:
        // tests
        testsData()
      case 5:
          // Schedule
          schedulesData()
      case 6:
        // Diagnosis
        // specialistsData()
      case 7:
          // Registrations
          specialistsData()
        break
      default:
        break
    }
    setTab(index)
  }

  const approve = async(id)=>{
    // approves a specialists
    setRunning(true)
    const feedback = await updateDoc(doc(collection(db, 'specialists'), id), {
      'verified': true,
      'at': new Date(Date.now())
    })
    specialistsData()
    setRunning(false)
  }

  // effects
  useEffect(() => {
    usersData()
    specialistsData()
    schedulesData()
    facilitiesData()
    testsData()
  }, [])
  
  // ui
  return (
    <div className='main'>
      <AppBar />
      <div className='content'>
        <SideBar tab={tab} handler={tabChange}/>
        <Content 
          tab={tab} 
          users={users} 
          running = {running}
          specialists={specialists} 
          schedules={schedules}
          tabHander={tabChange}
          approveHandler={approve}
          />
      </div>
    </div>
  )
}

export default App

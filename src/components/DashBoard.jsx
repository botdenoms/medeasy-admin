import { useState, useEffect } from 'react'

import Specialists from "./Specialists"

function DashBoard({users=[], specialists=[], schedules=[],  regHandler=false}) {
    
    // state
    const [verified, setVerified] = useState(0)
    // functions
    const toReg = ()=>{
        if(regHandler == false){
            return
        }
        regHandler(4)
    }
    const verifiedSpecialists = ()=>{
        const lst = specialists.filter((v)=> v.verified === true)
        setVerified(lst.length)
    }
    useEffect(() => {
        verifiedSpecialists()
    }, [])

    // ui
    return (
        <div className="dashBoard">
            <div className="stats">
                <h4>Overall</h4>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Users</span>
                        <span>{users.length}</span>
                    </div>
                    <div className="data-row">
                        <span>Schedules</span>
                        <span>{schedules.length}</span>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Specialists</span>
                        <span>{specialists.length}</span>
                    </div>
                </div>
            </div>
            <div className="regs">
                <h4>Registrations</h4>
                <div className="stats-row">
                    <h5>Specialists </h5>
                    <div className="data-row">
                        <span>Registrations made: </span>
                        <span>{specialists.length}</span>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Verified: </span>
                        <span>{verified}</span>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Verifications rejected: </span>
                        <span>0</span>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Pending: </span>
                        <span>{specialists.length - verified}</span>
                        <button onClick={()=> toReg()}>Registrations</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
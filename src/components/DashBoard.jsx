import { useState, useEffect } from 'react'

function DashBoard({users=[], specialists=[], schedules=[], facis=[], tests=[], regHandler=false}) {
    
    // state
    const [verified, setVerified] = useState(0)
    // functions
    const toReg = ()=>{
        if(regHandler == false){
            return
        }
        regHandler(7)
    }
    const verifiedSpecialists = ()=>{
        var tmp = []
        specialists.forEach((v, i)=> {
            if(v.verified === true){
                tmp.push(v)
            }
        })
        setVerified(tmp.length)
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
                        <span>Users: </span>
                        <span>{users.length}</span>
                    </div>
                    <div className="data-row">
                        <span>Schedules: </span>
                        <span>{schedules.length}</span>
                    </div>
                    <div className="data-row">
                        <span>Specialists: </span>
                        <span>{specialists.length}</span>
                    </div>
                    <div className="data-row">
                        <span>Tests: </span>
                        <span>{tests.length}</span>
                    </div>
                    <div className="data-row">
                        <span>Facilities: </span>
                        <span>{facis.length}</span>
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
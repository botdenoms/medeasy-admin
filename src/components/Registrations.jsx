import './styles.css'
import { useState, useEffect } from 'react'

function Registrations({users=[], specialist=[]}) {

    // state
    const [unVerified, setUnVerified] = useState([])

    // functions
    const registered = (items=[])=>{
        // return users registered as specialists
        const lst = items.filter((v)=> v.specialist === true)
    }

    // effects
    useEffect(() => {
        //   filter registered accounts only and not verified
        const lst = specialist.filter((v)=> v.verified != true)
        setUnVerified([...lst])
    }, [])
    

    // ui
    return (
        <div className="board">
            <h4>pending registrations</h4>
            <div className='itemslist'>
                {
                    unVerified.map((item, index)=>{
                        return (
                            <div className='case' key={index}>
                                <div className='data'>
                                    <div>
                                        <span>{item.name}</span>
                                        <span>{item.speciality}</span>
                                        <span>{item.location.toString()}</span>
                                        <span className='sep'>Credentials</span>
                                        <span>Reg number: {item.reg}</span>
                                    </div>
                                    <img src={item.cert} alt="cert" className='cert'/>
                                </div>
                                <div className='controls'>
                                    <button>Reject</button>
                                    <button className='apr'>Approve</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Registrations
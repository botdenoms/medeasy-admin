import './styles.css'
import { useState, useEffect } from 'react'

function Registrations({users=[], specialist=[], handler=false}) {

    // state
    const [unVerified, setUnVerified] = useState([])

    // functions
    const approve = (index)=>{
        // return users registered as specialists
        const spl = unVerified[index]
        if(handler === false){
            alert('document upadated not possible')
            return
        }
        handler(spl.id)
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
                                        <span>
                                            <span>id: </span>
                                            {item.id}
                                        </span>
                                        <span>{item.name}</span>
                                        <span>{item.speciality}</span>
                                        <span>{item.location.toString()}</span>
                                        <span className='sep'>Credentials</span>
                                        <span>Reg number: {item.reg}</span>
                                    </div>
                                </div>
                                <div className='rowfx'>
                                    <img src={item.cert} alt="cert" className='cert'/>
                                </div>
                                <div className='rowfx'>
                                    <img src={item.profile} alt="cert" className='prof'/>
                                </div>
                                <div className='controls'>
                                    <button>Reject</button>
                                    <button className='apr' onClick={()=> approve(index)}>Approve</button>
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
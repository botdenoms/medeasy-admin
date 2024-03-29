import './styles.css'
import { useState, useEffect } from 'react'

function Registrations({running=false, specialist=[], handler=false}) {

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
        var tmp = []
        specialist.forEach((v, i)=> {
            if(v.verified != true){
                tmp.push(v)
            }
        })
        // const lst = specialist.map((v)=> v.verified != true)
        setUnVerified([...tmp])
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
                                        <span>{item.location}</span>
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
                                    {
                                        !running &&
                                        <button className='apr' onClick={()=> approve(index)}>Approve</button>
                                    }
                                    {
                                        running &&
                                        <span>Processing ...</span>
                                    }
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
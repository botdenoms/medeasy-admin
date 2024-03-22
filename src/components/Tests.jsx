import React, { useState } from 'react'

function Tests({list=[], faci = [], users=[]}) {

    // ui
    const [client, SetClient] = useState(false)
    const [fc, SetFc] = useState(false)
    const [testView, SetTestView] = useState(false)

    const testsList = [
        'Xray',
        'CT',
        'MRI',
        'Ultrasound',
        'PET',
        'Blood',
        'DNA',
        'Electrocardiogram'
    ]

    // functions
    const getCleint = () =>{

    }

    const viewTest = () =>{

    }

    const getFacility = () =>{
        
    }

    return (
        <div>
            <div className="hdtb">
                Tests
            </div>
            <div className="itemslist">
                {
                    list.map((item, index)=>{
                        return (
                            <div key={index} className="usercard">
                                {/* <span>
                                    <span>ID : </span>
                                    {item.id}
                                </span> */}
                                <span>
                                    <span>Date</span>
                                </span>
                                <span id='name'>
                                    {item.date.toDateString()}
                                </span>
                                <span>
                                    <span>Type</span>
                                </span>
                                <span id='spec'>
                                    {testsList[item.type]} test
                                </span>
                                <span>
                                    <span>Facility</span>
                                </span>
                                {
                                    fc &&
                                    <span className='name'>
                                        Facility name, email, tel, loc
                                    </span>
                                }
                                {
                                    !fc &&
                                    <button className='xtr'>Facility</button>
                                }
                                <span>
                                    <span>Client</span>
                                </span>
                                {
                                    client &&
                                    <span className='name'>
                                        client name, email, tel
                                    </span>
                                }
                                {
                                    !client &&
                                    <button className='xtr'>Client</button>
                                }
                                <div className="sprc"></div>
                                <div className="sprc-btw">
                                    <div></div>
                                    <button className='xtr'>View Test</button>
                                </div>
                                {/* <span>
                                    {item.ref}
                                </span> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tests
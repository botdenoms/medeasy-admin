import React from 'react'

function Facilities({list=[]}) {
    return (
        <div>
            <div className="hdtb">
                Facilities
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
                                <span id='spec'>
                                    {item.name}
                                </span>
                                <span>
                                    <span>Email</span>
                                </span>
                                <span id='name'>
                                    {item.email}
                                </span>
                                <span>
                                    <span>P.o.Box</span>
                                </span>
                                <span id='name'>
                                    {item.pobox}
                                </span>
                                {/* <span>{item.profile}</span> */}
                                <span>
                                    {item.location[1]} {item.location[0]}
                                </span>
                                <span>
                                    <span>lincence</span>
                                </span>
                                <span id='spec'>
                                    {item.lincence}
                                </span>
                                <span>
                                    <span>certifications</span>
                                </span>
                                <img src={item.img} alt="cert" className='cert'/>
                                {
                                    item.verified &&
                                    <span className='vrf'>
                                        Verified
                                    </span>
                                }
                                {
                                    !item.verified &&
                                    <button className='xtr'>Verify</button>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Facilities
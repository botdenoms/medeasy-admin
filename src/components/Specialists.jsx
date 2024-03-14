import './styles.css'

function Specialists({list=[]}) {
    return (
        <div className='board'>
            <h4>Specialists</h4>
            <div className='itemslist'>
                {
                    list.map((item, index)=>{
                        return (
                            <div key={index} className="usercard">
                                {/* <span>
                                    <span>ID : </span>
                                    {item.id}
                                </span> */}
                                <img src={item.profile} alt="pro" className='prof'/>
                                <span id='name'>
                                    {item.name}
                                </span>
                                <span id='spec'>
                                    {item.speciality}
                                </span>
                                {/* <span>{item.profile}</span> */}
                                <span>
                                    {item.location}
                                </span>
                                <span>
                                    <span>certification</span>
                                </span>
                                <img src={item.cert} alt="cert" className='cert'/>
                                {/* <span>{item.at.toDateString()}</span> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Specialists
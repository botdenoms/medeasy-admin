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
                                <span>
                                    <span>ID : </span>
                                    {item.id}
                                </span>
                                <span>
                                    <span>Name : </span>
                                    {item.name}
                                </span>
                                <span>
                                    <span>Speciality : </span>
                                    {item.speciality}
                                </span>
                                {/* <span>{item.profile}</span> */}
                                <span>
                                    <span>Speciality : </span>
                                    {item.location.toString()}
                                </span>
                                <span>
                                    <span>profile</span>
                                </span>
                                <img src={item.profile} alt="cert" className='cert'/>
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
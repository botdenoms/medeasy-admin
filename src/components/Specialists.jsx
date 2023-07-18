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
                                <span>{item.name}</span>
                                <span>{item.speciality}</span>
                                {/* <span>{item.profile}</span> */}
                                <span>{item.location.toString()}</span>
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
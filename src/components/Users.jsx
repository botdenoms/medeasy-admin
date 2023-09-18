import './styles.css'

function Users({users=[]}) {
    return (
        <div className='board'>
            <h4>Users</h4>
            <div className='itemslist'>
                {
                    users.map((item, index)=>{
                        return (
                            <div key={index} className="usercard">
                                {/* <span>
                                    <span>ID : </span>
                                    {item.id}
                                </span> */}
                                <div className='circ'></div>
                                <span>
                                    {item.name}
                                </span>
                                <span>
                                    {item.telephone}
                                </span>
                                <span>
                                    {item.email}
                                </span>
                                <span>
                                    <span>joined on: </span> 
                                    {item.at.toDateString()}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Users
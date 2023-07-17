import './styles.css'

function Users({users=[]}) {
    return (
        <div className='users'>
            {
                users.map((item, index)=>{
                    return (
                        <div key={index} className="usercard">
                            <span>{item.name}</span>
                            <span>{item.telephone}</span>
                            <span>{item.email}</span>
                            <span>{item.at.toDateString()}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users
import './styles.css'

function SideBar({tab=0, handler=false}) {
    // states

    // functions
    const selectTab = (index)=>{
        if(handler == false){
            return
        }
        handler(index)
    }

    // ui
    return (
        <div className='sidebar'>
            {/* tabs */}
            <div className={tab == 0?'tabbar active':'tabbar'} onClick={()=> selectTab(0)}>
                <span>Home</span>
            </div>
            <div className={tab == 1?'tabbar active':'tabbar'} onClick={()=> selectTab(1)}>
                <span>Users</span>
            </div>
            <div className={tab == 2?'tabbar active':'tabbar'} onClick={()=> selectTab(2)}>
                <span>Specialist</span>
            </div>
            <div className={tab == 3?'tabbar active':'tabbar'} onClick={()=> selectTab(3)}>
                <span>Schedules</span>
            </div>
            <div className={tab == 4?'tabbar active':'tabbar'} onClick={()=> selectTab(4)}>
                <span>Registrations</span>
            </div>
        </div>
    )
}

export default SideBar
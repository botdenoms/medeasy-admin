import DashBoard from './DashBoard'
import Registrations from './Registrations';
import Specialists from './Specialists';
import Users from './Users';
import './styles.css'

function Content({tab=0, users=[], specialists=[], schedules=[], tabHander=false}) {
    switch (tab) {
        case 0:
            return <DashBoard 
                    users={users} 
                    specialists={specialists}
                    schedules={schedules}
                    regHandler={tabHander}
                    />
        case 1:
            return <Users users={users}/>
        case 2:
            return <Specialists list={specialists}/>
        case 4:
            return <Registrations users={users} specialist={specialists}/>
        default:
            return (
                <div className='notice'>content under development</div>
            )
    }
    
}

export default Content
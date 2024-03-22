import DashBoard from './DashBoard'
import Registrations from './Registrations';
import Specialists from './Specialists';
import Users from './Users';
import Facilities from './Facilities';
import Tests from './Tests';
import Diagnosis from './Diagnosis'
import Schedules from './Schedules'

import './styles.css'

function Content({tab=0, users=[], diagnosis=[], tests=[], specialists=[], facilisties=[], schedules=[], tabHander=false, approveHandler=false, running=false}) {
    switch (tab) {
        case 0:
            return <DashBoard 
                    users={users} 
                    specialists={specialists}
                    schedules={schedules}
                    regHandler={tabHander}
                    tests={tests}
                    facis= {facilisties}
                    />
        case 1:
            return <Users users={users}/>
        case 2:
            return <Specialists list={specialists}/>
        case 3:
            return <Facilities handler={approveHandler} list={facilisties}/>
        case 4:
            return <Tests handler={approveHandler} list={tests} faci={facilisties} users={users}/>
        case 5:
            return <Schedules handler={approveHandler} list={schedules}/>
        case 6:
            return <Diagnosis handler={approveHandler} list={diagnosis}/>
        case 7:
            return <Registrations running={running} specialist={specialists} handler={approveHandler}/>
        default:
            return (
                <div className='notice'>content under development</div>
            )
    }
    
}

export default Content
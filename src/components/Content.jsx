import DashBoard from './DashBoard'
import Users from './Users';
import './styles.css'

function Content({tab=0, users=[], specialists=[], schedules=[]}) {
    switch (tab) {
        case 0:
            return <DashBoard users={users}/>
        case 1:
            return <Users users={users}/>
        default:
            return (
                <div>content error</div>
            )
    }
    
}

export default Content
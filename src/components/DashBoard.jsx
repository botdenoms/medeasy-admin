
function DashBoard({users=[]}) {
    return (
        <div className="dashBoard">
            <div className="stats">
                <h4>Overall</h4>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Users</span>
                        <span>{users.length}</span>
                    </div>
                    <div className="data-row">
                        <span>Schedules</span>
                        <span>0</span>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Specialists</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div className="regs">
                <h4>Registrations</h4>
                <div className="stats-row">
                    <h5>Specialists </h5>
                    <div className="data-row">
                        <span>Registrations made: </span>
                        <span>0</span>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Verified: </span>
                        <span>0</span>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Verifications rejected: </span>
                        <span>0</span>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="data-row">
                        <span>Pending: </span>
                        <span>0</span>
                        <button>Registrations</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
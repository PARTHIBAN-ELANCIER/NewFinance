import React, { Component } from 'react';
import NewAppBar from '../Component/NewAppBar';
import TeamInsuranceCard from '../Component/TeamInsuranceCard';
class TeamInsurance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{width:'100%',height:'100px'}}>
                    <NewAppBar />
                </div>
                {/* <div>
                <img src="https://img.icons8.com/office/80/000000/payment-history.png"/>
                </div> */}
                <div>
                    <TeamInsuranceCard />
                </div>
            </React.Fragment>
         );
    }
}
 
export default TeamInsurance;
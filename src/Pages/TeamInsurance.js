import React, { Component } from 'react';
import NewAppBar from '../Component/NewAppBar';
import Footer from '../Component/Footer';
import Advertisement from '../Component/Advertisement';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

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
                <div style={{marginTop:'100px'}}>
                    <Advertisement />
                </div>

                {/* <div style={{width:'150px',height:'120px',marginLeft:'10%',marginTop:'5%'}}>
                    <div>May I help you</div>
                    <HeadsetMicIcon style={{fontSize:'100px',textAlign:'left'}} />
                </div> */}
                <div>
                    <Footer />
                </div>
            </React.Fragment>
         );
    }
}
 
export default TeamInsurance;
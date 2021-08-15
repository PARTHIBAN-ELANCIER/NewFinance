import React, { Component } from 'react';
import Advertisement from '../Component/Advertisement';
import BuyInsurance from '../Component/BuyInsurance';
import Footer from '../Component/Footer';
import LifePoliciesPlans from '../Component/LifePoliciesPlans';
import NewAppBar from '../Component/NewAppBar';
class LifePolicies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
            <div style={{backgroundImage: `url(bghd.jpg)`,width:'100%',height:'2000px'}}>

               <div style={{width:'100%',height:'100px'}}>
                <NewAppBar />
               </div>
               <div>
                 <BuyInsurance />
               </div>
               <div>
                   <LifePoliciesPlans />
               </div>
               <div>
                   <Advertisement />
               </div>
               <div>
                   <Footer />
               </div>
               </div>
            </React.Fragment>
        );
    }
}
 
export default LifePolicies;
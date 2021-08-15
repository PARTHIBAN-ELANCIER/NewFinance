import React, { Component } from 'react';
import Advertisement from '../Component/Advertisement';
import Footer from '../Component/Footer';
import NewAppBar from '../Component/NewAppBar';
import ProposalFormOne from '../Component/ProposalFormOne';


class ProposalPage1 extends Component {
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
                <div style={{width:'100%',height:'500px'}}>
                   <ProposalFormOne />
                </div>
                <div style={{marginTop:'700px'}}>
                    <Advertisement />
                </div>
                <div>
                    <Footer />
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProposalPage1;
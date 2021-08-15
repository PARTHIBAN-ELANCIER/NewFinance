import React, { Component } from 'react';
import Advertisement from '../Component/Advertisement';
import Footer from '../Component/Footer';
import NewAppBar from '../Component/NewAppBar';
import ProposalFormTwo from '../Component/ProposalFormTwo';
class ProposalPage2 extends Component {
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
                <div>
                    <ProposalFormTwo />
                </div>
                <div>
                    <Advertisement />
                </div>
                <div>
                    <Footer />
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProposalPage2;
import React, { Component } from 'react';
import Advertisement from '../Component/Advertisement';
import Footer from '../Component/Footer';
import NewAppBar from '../Component/NewAppBar';
import NonLifePolicyLists from '../Component/NonLifePolicyLists';
class NonLifePolicies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div  style={{width:'100%',height:'100px'}}>
                    <NewAppBar />
                </div>
                <div>
                    <NonLifePolicyLists />
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
 
export default NonLifePolicies;
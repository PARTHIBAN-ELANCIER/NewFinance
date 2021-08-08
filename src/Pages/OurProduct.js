import React, { Component } from 'react';
import NewAppBar from '../Component/NewAppBar';
import Policies from '../Component/Policies';
class OurProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <NewAppBar />
                </div>
                <div style={{marginTop:'7%'}}>
                    <Policies />
                </div>
            </React.Fragment>
         );
    }
}
 
export default OurProduct;
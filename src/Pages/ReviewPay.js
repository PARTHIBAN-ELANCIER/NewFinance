import React, { Component } from 'react';
import NewAppBar from '../Component/NewAppBar';
class ReviewPay extends Component {
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
            </React.Fragment>
         );
    }
}
 
export default ReviewPay;
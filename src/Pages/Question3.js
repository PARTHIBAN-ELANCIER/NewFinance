import React, { Component } from 'react';
import NewAppBar from '../Component/NewAppBar';
import QuestionThree from '../Component/QuestionThree';
import { withRouter } from 'react-router';
import Advertisement from '../Component/Advertisement';
import Footer from '../Component/Footer';

class Question3 extends Component {
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
                    <QuestionThree />
                </div>
                <div style={{marginTop:'100px'}}>
                    <Advertisement />
                </div>
                <div>
                    <Footer />
                </div>
            </React.Fragment>
           
         );
    }
}
 
export default Question3;
import React, { Component } from 'react';
import Advertisement from '../Component/Advertisement';
import Footer from '../Component/Footer';
import NewAppBar from '../Component/NewAppBar';
import QuestionOne from '../Component/QuestionOne';
class Question1 extends Component {
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
                    <QuestionOne />
                </div>
                <div style={{marginTop:'100px'}}>
                    <Advertisement />
                </div>
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default Question1;
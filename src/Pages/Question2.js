import React, { Component } from 'react';
import QuestionTwo from '../Component/QuestionTwo';
import NewAppBar from '../Component/NewAppBar';
import Advertisement from '../Component/Advertisement';
import Footer from '../Component/Footer';
class Question2 extends Component {
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
                    <QuestionTwo />
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
 
export default Question2;
import React, { Component } from 'react';
import NewAppBar from '../Component/NewAppBar';
import QuestionFour from '../Component/QuestionFour';
import Plan from '../Component/Plan';
import Advertisement from '../Component/Advertisement';
import Footer from '../Component/Footer';

class Question4 extends Component {
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
                    <QuestionFour />
                </div>
                <div>
                    <Plan />
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
 
export default Question4;
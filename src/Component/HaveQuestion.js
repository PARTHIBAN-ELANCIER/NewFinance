import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';

class HaveQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{width:'100%',height:'500px' ,display:'flex',textAlign:'left' , fontSize:'21px'}}>
                <div style={{width:'40%',marginLeft:'10%'}}>
                    <div>
                        <u style={{fontSize:'26px'}}>Have a question</u>
                    </div>
                    <div style={{fontWeight:'bold', marginTop:'5%',fontSize:'26px'}}>
                        Here to help.
                    </div>
                    <div style={{marginTop:'3%',fontSize:'24px',color:'#53B8BB' }}></div>
                        <div style={{textAlign:'Left',width:"500px",fontSize:'21px'}}>
                            <div>Our friendly customer support team is</div>
                           <div style={{marginTop:'2%'}}> your extended family.Speak your heart</div>
                            <div style={{marginTop:'2%'}}>out.They listen with undivided attention</div>
                            <div style={{marginTop:'2%'}}>to resolve your concerns. Give as a call,</div>
                            <div style={{marginTop:'2%'}}>request a callback or drop us an email</div>
                        </div>    
                    </div>
                <div style={{width:'50%'}}>
                    <div style={{height:"500px",marginTop:'5%'}}>
                        <img src="ques.jpg"  style={{height:"300px",width:"400px"}}/>  
                    </div>
                </div>

            </div>
          );
    }
}
 
export default HaveQuestion;
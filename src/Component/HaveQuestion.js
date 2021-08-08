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
            <div style={{width:'100%',height:'500px' ,display:'flex',textAlign:'left',color:'#53B8BB' , fontSize:'21px'}}>
                <div style={{width:'40%',marginLeft:'10%'}}>
                    <div>
                        <u>Have a question</u>
                    </div>
                    <div style={{fontWeight:'bold', marginTop:'5%'}}>
                        Here to help.
                    </div>
                    <div style={{marginTop:'3%', }}>Our friendly customer support team is</div>
                        <p>your extended family.Speak your heart</p>
                        <p>out.They listen with undivided attention</p>
                        <p>to resolve your concerns. Give as a call,</p>
                        <p>request a callback or drop us an email</p>
                    </div>
                <div style={{width:'50%'}}>
                    <div style={{height:"500px"}}>
                        <img src="grp.png"  style={{height:"400px",width:"400px"}}/>  
                    </div>
                </div>

            </div>
          );
    }
}
 
export default HaveQuestion;
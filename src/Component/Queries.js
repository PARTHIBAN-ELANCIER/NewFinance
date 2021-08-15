import React, { Component } from 'react';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';


class Queries extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{width:'100%',height:'150px'}}>
                        {/* <p style={{marginLeft:'4%'}}>May I help you</p> */}

                    <div style={{display:'flex'}}>

                        {/* <div  style={{marginTop:'1%'}}> 

                            <HeadsetMicIcon style={{fontSize:'100px',textAlign:'left', marginLeft:'50%'}} />
                        </div> */}
                        <div>
                            <Button variant="contained" style={{width:'500px' ,height:'85px',backgroundColor:'blue',borderRadius:'51px' ,marginTop:'1%', marginLeft:'250px',color:'white'}}><HelpIcon style={{fontSize:'51px', textAlign:'left',color:'white'}} />Customer Sales Enquiry 1800 2563 0032 012</Button>
                        </div>    
                        <div>
                            <Button variant="contained" style={{width:'500px' , height:'85px' ,backgroundColor:'blue',borderRadius:'51px' , marginLeft:'150px', marginTop:'1%',color:'white'}}> <span style={{fontSize:'35px', textAlign:'left',color:'white'}}>@</span>General Enqueries care@astra.com</Button>
                        </div>
                    </div>    
                </div>
            </React.Fragment>
         );
    }
}
 
export default Queries;
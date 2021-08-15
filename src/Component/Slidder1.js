import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';


class Slidder1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <Card style={{height:'550px'}}>
                        <p style={{marginLeft:'10%',fontWeight:'bold',fontSize:'24px'}}>
                            Great! Let's Start with proper details
                        </p>
                        <div style={{display:'flex',marginLeft:'10%'}}>
                            <TextField label="Full Name" style={{width:'300px'}} />
                            <select placeholder="Marital Status" style={{width:'290px',marginLeft:'10%' ,height:'50px',border:'none',borderBottom:'1px solid'}}>
                                        <option>Single</option>
                                        <option>Married</option>
                            </select>
                            <TextField label="Occupation" style={{width:'300px',marginLeft:'10%'}}/>
                        </div>
                        <p style={{marginLeft:'10%',fontWeight:'bold',fontSize:'24px'}}>
                            Address
                        </p>   
                        <div style={{display:'flex',marginLeft:'10%'}}>
                            <TextField label="Flat/ House No." style={{width:'300px'}} />
                            <TextField label="Street" style={{width:'300px',marginLeft:'10%'}} />
                            <TextField label="Area" style={{width:'300px',marginLeft:'10%'}} />
                        </div>
                        <div style={{display:'flex',marginLeft:'10%'}}>
                            <TextField label="City" style={{width:'300px',marginTop:'2%'}} />
                            <TextField label="State" style={{width:'300px',marginLeft:'10%',marginTop:'2%'}} />
                            <TextField label="Pincode" style={{width:'300px',marginLeft:'10%',marginTop:'2%'}} />
                        </div>
                        <p style={{marginLeft:'10%',fontWeight:'bold',fontSize:'24px'}}>
                            Contact Details
                        </p>  
                        <div style={{display:'flex',marginLeft:'10%'}}>
                            <TextField label="Email" style={{width:'300px'}} />
                            <TextField label="Mobile" style={{width:'300px',marginLeft:'10%'}} />
                            <TextField label="Emergency" style={{width:'300px',marginLeft:'10%'}} />
                        </div>
                    </Card>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Slidder1;
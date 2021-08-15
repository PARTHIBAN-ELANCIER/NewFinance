import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

class Slidder2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <Card style={{height:'350px'}}>
                        <p style={{marginLeft:'10%',fontWeight:'bold',fontSize:'24px'}}>
                            Tell us the details about the members to be insured
                        </p>
 
                        <div style={{display:'flex',marginLeft:'10%'}}>
                            <TextField label="Member 1" style={{width:'300px'}} />
                            <TextField label="Age " style={{width:'300px',marginLeft:'10%'}} />
                            <TextField label="D O B" style={{width:'300px',marginLeft:'10%'}} />
                        </div>
                        <div style={{display:'flex',marginLeft:'10%'}}>
                            <TextField label="Member 2" style={{width:'300px',marginTop:'2%'}} />
                            <TextField label="Age " style={{width:'300px',marginLeft:'10%',marginTop:'2%'}} />
                            <TextField label="D O B" style={{width:'300px',marginLeft:'10%',marginTop:'2%'}} />
                        </div>
                        <div style={{display:'flex',marginLeft:'10%'}}>
                            <TextField label="Member 3" style={{width:'300px',marginTop:'2%'}} />
                            <TextField label="Age " style={{width:'300px',marginLeft:'10%',marginTop:'2%'}} />
                            <TextField label="D O B" style={{width:'300px',marginLeft:'10%',marginTop:'2%'}} />
                        </div>
                    </Card>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Slidder2;
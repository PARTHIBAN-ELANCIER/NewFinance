import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

class Slidder3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <Card style={{height:'250px'}}>
                        <p style={{marginLeft:'10%',fontWeight:'bold',fontSize:'24px'}}>
                            Tell us who you want to make your nominee
                        </p>
                        <div style={{display:'flex',marginLeft:'10%'}}>
                            <TextField label="Full Name" style={{width:'300px'}} />
                            <select placeholder="Marital Status" style={{width:'290px',marginLeft:'10%' ,height:'50px',border:'none',borderBottom:'1px solid'}}>
                                        <option>Single</option>
                                        <option>Married</option>
                            </select>
                            <TextField label="D O B" style={{width:'300px',marginLeft:'10%'}}/>
                        </div>
                        <div style={{display:'flex',marginLeft:'10%'}}>
                            <TextField label="Mobile" style={{width:'300px'}} />
                            <TextField label="EMAIL " style={{width:'300px',marginLeft:'10%'}} />
                        </div>
                       
                    </Card>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Slidder3;
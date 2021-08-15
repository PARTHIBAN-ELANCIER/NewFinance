import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

class Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{width:'100%',height:'300px'}}>
                <Card style={{width:'1200px',height:'300px', backgroundColor:'#787A91', marginLeft:'10%'}}>
                    <div style={{display:'flex'}}>
                    <Card style={{width:'267px', height:'250px',backgroundColor:'white',marginLeft:'100px',marginTop:'25px'}}>
                        AD
                    </Card>
                    <Card style={{width:'267px', height:'250px',backgroundColor:'white',marginLeft:'100px',marginTop:'25px'}}>
                        AD
                    </Card>
                    <Card style={{width:'267px', height:'250px',backgroundColor:'white',marginLeft:'100px',marginTop:'25px'}}>
                        AD
                    </Card>
                    </div>
                </Card>
            </div>
          );
    }
}
 
export default Advertisement;
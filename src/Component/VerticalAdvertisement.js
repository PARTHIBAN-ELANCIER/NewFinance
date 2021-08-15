import React, { Component } from 'react';
import Card from '@material-ui/core/Card';


class VerticalAdvertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                    <div>
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
            </React.Fragment>
         );
    }
}
 
export default VerticalAdvertisement;
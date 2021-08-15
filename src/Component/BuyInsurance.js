import React, { Component } from 'react';
class BuyInsurance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{width:'100%', height:'70px'}}>
                    <p style={{fontSize:'26px',color:'#50CB93',marginLeft:'38%'}}>Why Should you<span style={{color:'#FF3D68',fontSize:'31px',fontWeight:'bold'}}>Buy Insurance</span> from us</p>
                </div>
                <div style={{width:'100%', height:'418px'}}>
                       <img src="finance2.jpg" style={{width:'1000px',marginLeft:'20%',height:'400px'}} />
                </div> 
            </React.Fragment>
         ); 
    }
}
 
export default BuyInsurance;
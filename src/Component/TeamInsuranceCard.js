import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import FinDropDown from './FInDropDown';
var cover = ['Rs.1Lakhs','Rs.2Lakhs','Rs.3Lakhs','Rs.4Lakhs','Rs.5Lakhs','Rs.6Lakhs' ]

class TeamInsuranceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{width:'100%',height:'600px',display:'flex'}}>
                    <div style={{width:'50%'}}>
                        <img src="tr.png" style={{height:'600px', width:'100%'}} />
                    </div>
                    <div style={{width:'50%',backgroundColor:'#FFCDA3'}}>
                        <p style={{fontSize:'31px',fontWeight:'bold',marginLeft:'34%'}}>Team Insurance</p>
                        <div>
                            <Card style={{width:'500px', height:'500px',borderRadius:'22px', marginLeft:'20%'}}>
                                <div style={{display:'flex',marginTop:'2%'}}>
                                    <div style={{marginLeft:'20%',marginTop:'50px',fontSize:'21px'}}>Cover</div>
                                    <div style={{marginLeft:'23%',marginTop:'50px',fontSize:'21px'}}>Members</div>
                                </div> 
                                <div style={{display:'flex',lineHeight:'-10px'}}> 
                                    <div style={{marginLeft:'5%'}}>
                                    <FinDropDown 
                                    menus={cover} />
                                    </div>    
                                    <div style={{marginLeft:'3%'}}>
                                    <FinDropDown 
                                    menus={cover}  />
                                    </div>       
                                </div>     
                                <div style={{display:'flex',marginTop:'2%'}}>
                                    <div style={{marginLeft:'13%',marginTop:'50px',fontSize:'21px'}}>Policy Period</div>
                                    <div style={{marginLeft:'18%',marginTop:'50px',fontSize:'21px'}}>Total Premium</div>
                                </div>    
                                <div style={{display:'flex',lineHeight:'-10px'}}> 
                                    <div style={{marginLeft:'5%'}}>
                                    <FinDropDown 
                                    menus={cover} />
                                    </div>    
                                    <div style={{marginLeft:'7%'}}>
                                        <div style={{fontSize:'24px',fontWeight:'bold'}}>Rs. 716/month</div>  
                                    </div>       
                                </div>   
                                <div>
                                <img src="https://img.icons8.com/office/16/000000/hospital-3.png"/>
                                </div>       
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default TeamInsuranceCard;
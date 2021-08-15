import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import FinDropDown from './FInDropDown';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

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
                            <Card style={{width:'500px', height:'500px',borderRadius:'22px', marginLeft:'20%', borderRadius:'21px'}}>
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
                                <div style={{display:'flex'}}>
                                    <div style={{marginLeft:'25%',marginTop:'15%'}}>
                                        <img src="https://img.icons8.com/office/40/000000/hospital-3.png"/>
                                    </div>   
                                    <div style={{marginTop:'18%', fontSize:'21px',marginLeft:'1%'}}>
                                        220 Cashless Hospital
                                    </div> 
                                </div>       
                                <div>
                                    <Button variant="contained" style={{backgroundColor:'#C400FF', marginLeft:'20%',marginTop:'10%', borderRadius:'21px', width:'300px'}} onClick={()=>{
                                window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                            this.props.history.push('/Question1')}}>Proceed</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default withRouter(TeamInsuranceCard);
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import MotorcycleTwoToneIcon from '@material-ui/icons/MotorcycleTwoTone';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';
import PetsIcon from '@material-ui/icons/Pets';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AccessibilityNewSharpIcon from '@material-ui/icons/AccessibilityNewSharp';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import PoolSharpIcon from '@material-ui/icons/PoolSharp';
import { withRouter } from 'react-router';


class NonLifePolicyLists extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    NavLifePolicy = () => {
        this.props.history.push('/LifePolicies')
    }
    render() { 
        return ( 
            <React.Fragment>
                     <div style={{width:'100%',height:'850px'}}>
                    <div style={{height:'140px'}}>
                        <p style={{fontSize:'26px',color:'#54436B',marginLeft:'40%'}}>Protect yourself from<span style={{fontWeight:'bold',fontSize:'30px',color:'#A73489'}}>Covid 19</span></p>
                        <Button variant="contained" style={{backgroundColor:'#C400FF', height:'40px',borderRadius:'51px',marginLeft:'43%',width:'250px'}}><PoolSharpIcon />Non Life Policies</Button>
                    </div>  
                    <div style={{marginTop:'2%',display:'flex',fontSize:'26px',textAlign:'center'}}>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'5%',borderRadius:'21px'}}>
                            <p>Property Loss</p>
                            <HomeTwoToneIcon style={{fontSize:'80px',marginTop:'12%',color:'#2978B5'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Fire Insurance</p>
                            <WhatshotOutlinedIcon style={{fontSize:'80px',marginTop:'12%',color:'#FF5200'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Motor Insurance Plan</p>
                            <MotorcycleTwoToneIcon style={{fontSize:'80px',color:'#150E56',marginTop:'12%'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Commercial Insurance</p>
                            <MoneyOutlinedIcon style={{fontSize:'80px', color:'#D5ECC2'}}/>
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Pet Insurance</p>
                            <PetsIcon style={{fontSize:'80px',marginTop:'12%',color:'#FFE268'}} />
                        </Card>
                    </div>

                    <div style={{marginTop:'2%',display:'flex',fontSize:'26px',textAlign:'center'}}>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'5%',borderRadius:'21px'}}>
                            <p>Marine Insurance</p>
                            <DirectionsBoatIcon style={{fontSize:'80px',marginTop:'12%' , color:'#FFD880'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Employer Liability Insurance</p>
                            <PermIdentityIcon style={{fontSize:'80px', color:'#FDFFBC'}}/>
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Reinsurance </p>
                            <AccessibilityNewSharpIcon style={{fontSize:'80px',marginTop:'12%', color:'#1A508B'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Reenter Insurance</p>
                            <AccessibilityNewSharpIcon style={{fontSize:'80px',marginTop:'12%', color:'#00917C'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Professional Indeminty Insurance</p>
                            <VpnKeySharpIcon style={{fontSize:'80px',color:'#DDDDDD'}} />
                        </Card>
                    </div>

                    <div>
                        <TextField label="Tell Us Who You Are !" style={{marginLeft:'44%',marginTop:'5%',width:'230px'}} />
                    </div>
                    <div>
                        <Button variant="contained" style={{backgroundColor:'#C400FF', height:'40px',borderRadius:'51px',marginLeft:'43%',width:'250px', marginTop:'2%'}} onClick={()=>{
                                window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                            this.props.history.push('/LifePolicies')}}>Life Policies</Button>
                    </div>

                </div>
            </React.Fragment>
         );
    }
}
 
export default withRouter(NonLifePolicyLists);
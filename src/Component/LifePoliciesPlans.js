import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupWorkTwoToneIcon from '@material-ui/icons/GroupWorkTwoTone';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import BeachAccessOutlinedIcon from '@material-ui/icons/BeachAccessOutlined';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withRouter } from 'react-router';


class LifePoliciesPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    NavNonLifePolicy = () => {
        this.props.history.push('/NonLifePolicies')
    }
    NavTeamInsurance = () => {
        this.props.history.push('/NonLifePolicies')
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{width:'100%',height:'850px'}}>
                    <div style={{height:'140px'}}>
                        <p style={{fontSize:'26px',color:'#54436B',marginLeft:'40%'}}>Protect yourself from<span style={{fontWeight:'bold',fontSize:'30px',color:'#A73489'}}>Covid 19</span></p>
                        <Button variant="contained" style={{backgroundColor:'#C400FF', height:'40px',borderRadius:'51px',marginLeft:'43%',width:'250px'}}><FavoriteIcon />Life Policies</Button>
                    </div>  
                    <div style={{marginTop:'2%',display:'flex',fontSize:'26px',textAlign:'center'}}>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'5%',borderRadius:'21px'}} onClick={()=>{
                                window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                            this.props.history.push('/TeamInsurance')}}>
                            <p>Team Insurance</p>
                            <AssignmentIcon style={{fontSize:'80px',marginTop:'12%'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Team Insurance with return of premium</p>
                            <MonetizationOnOutlinedIcon style={{fontSize:'80px'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Unit Linked Insurance Plan</p>
                            <ReceiptOutlinedIcon style={{fontSize:'80px'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Endowment Plans</p>
                            <AssignmentOutlinedIcon style={{fontSize:'80px',marginTop:'12%'}}/>
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>MoneyBack Policy</p>
                            <GroupWorkTwoToneIcon style={{fontSize:'80px',marginTop:'12%'}} />
                        </Card>
                    </div>

                    <div style={{marginTop:'2%',display:'flex',fontSize:'26px',textAlign:'center'}}>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'5%',borderRadius:'21px'}}>
                            <p>Whole Life Insurance</p>
                            <SecurityOutlinedIcon style={{fontSize:'80px',marginTop:'12%'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Group Life Insurance</p>
                            <AssignmentOutlinedIcon style={{fontSize:'80px',marginTop:'12%'}}/>
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Child Insurance Plans</p>
                            <AccountBalanceOutlinedIcon style={{fontSize:'80px',marginTop:'12%'}} />
                        </Card>
                        <Card style={{width:'250px',height:'200px',backgroundColor:'#F39189',marginLeft:'2%',borderRadius:'21px'}}>
                            <p>Retirement Plans</p>
                            <BeachAccessOutlinedIcon style={{fontSize:'80px',marginTop:'12%'}} />
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
                            this.props.history.push('/NonLifePolicies')}}>Non Life Policies</Button>
                    </div>

                </div>
            </React.Fragment>
         );
    }
}
 
export default withRouter(LifePoliciesPlans);

import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                 <div style={{width:'100%', height:'400px'}}>
                        <p style={{marginTop:'5%',fontSize:'26px', color:'#FF4848', marginLeft:'10%'}}>Let's Find You the <span style={{color:'black',fontWeight:'bold', fontSize:'26px'}}> Best Insurance</span></p>
                        <div style={{marginLeft:'20%'}}>
                        <img src="finance1.jpg" style={{width:'600px',height:'340px',marginLeft:'15%'}} />
                        </div>
                    </div>
               
                <Card style={{width:'1200px', backgroundColor:'#262A53', marginLeft:'10%'}}>
                    <div style={{width:'100%',height:'50px',display:'flex',marginTop:'2%'}}>

                        <div><Button variant="contained" style={{width:'300px' ,backgroundColor:'white',borderRadius:'51px' , marginLeft:'250px'}} onClick={()=>{
                                window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                            this.props.history.push('/LifePolicies')}}>Life Policies</Button></div>
                        <div><Button variant="contained" style={{width:'300px',backgroundColor:'white',borderRadius:'51px' ,marginLeft:'200px'}} onClick={()=>{
                                window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                            this.props.history.push('/NonLifePolicies')}}>Non Life Policies</Button> </div> 
                    </div>
                    <div style={{display:'flex'}}>
                    <div style={{width:'50%',borderRight:'1px solid ',borderRightColor:'white', textAlign:'left', marginLeft:'20%',color:'#C2FFD9',height:'300px',fontSize:'21px'}}>
                       <div> Team Insurance</div>
                       <div>Team Insurance with return of premium</div> 
                       <div>Unit Linked Insurance Plan</div>
                       <div>Endowment Plans</div>
                       <div>Moneyback Policy</div>
                       <div>Whole life Insurance </div>
                       <div>Group life Insurance</div>
                       <div>Child Insurance Plan</div>
                       <div>Retirement Plans</div>


                    </div>
                    <div style={{width:'50%' ,textAlign:'left' , marginLeft:'10%',color:'#C2FFD9',height:'300px',fontSize:'21px'}}>
                       <div>Property Loss</div>
                       <div>Fire Insurance</div>
                       <div>Motor Insurance</div>
                       <div>Commercial Insurance</div>
                       <div>Pet Insurance</div>
                       <div>Marine Insurance</div>
                       <div>Employer Liability Insurance</div>
                       <div>Reinsurance</div>
                       <div>Renter Insurance</div>
                       <div>Professional Indemnity Insurance </div>
                       
                    </div>
                    </div>
                </Card>
            </React.Fragment>
         );
    }
}
 
export default Details;
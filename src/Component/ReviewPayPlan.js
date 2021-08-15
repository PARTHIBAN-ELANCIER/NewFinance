import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

class ReviewPayPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
            <div style={{width:'100%',height:'500px', display:'flex'}}>
                 <div style={{width:'70%',height:'500px'}}>
                     <Card style={{width:'80%',height:'200px',backgroundColor:'#FFF5B7',marginLeft:'10%',display:'flex'}}>
                         <div style={{width:'50%', backgroundColor:'violet'}}>
                             <img src='man.png' style={{width:'100%',height:'100%'}} />
                         </div>
                         <div style={{width:'50%',backgroundColor:'white'}}>
                             <div style={{display:'flex'}}>
                                 <img src='GoldenStar.png' style={{width:'20%',height:'20%',marginTop:'10%'}} />
                                 <div style={{marginTop:'13%',fontSize:'26px'}}>
                                     Young Star Plan
                                 </div>
                             </div>
                             <div style={{fontWeight:'bold'}}>
                                 Cover Amount
                             </div>
                             <div>
                                 <TextField />
                             </div>
                         </div>
                     </Card>
                     <Card style={{width:'80%',height:'200px',backgroundColor:'#51C4D3',marginLeft:'10%',marginTop:'2%'}}>
                         <div style={{fontWeight:'bold',fontSize:'25px'}}>
                             Policy Period
                         </div>
                         <div>
                             Choosing a multi-year plan saves your money and the trouble of remembering yearly renewls 
                         </div>
                         <div style={{display:'flex'}}>
                             <Card style={{height:'100px',width:'240px',backgroundColor:'yellow',marginLeft:'2%',marginTop:'3%'}}>
                                 <div style={{height:'30px'}}>
                                     <input type="radio" />
                                     <label >1 year</label>
                                 </div>
                                 <p style={{fontSize:'16px',marginLeft:'10%'}}>Premium<span style={{fontSize:'16px',fontWeight:'bold'}}>Rs. 6631/-</span></p>
                             </Card>
                             <Card style={{height:'100px',width:'240px',backgroundColor:'green',marginLeft:'2%',marginTop:'3%'}}>
                                 <div style={{height:'30px'}}>
                                         <input type="radio" />
                                         <label >2 year</label>
                                 </div>
                                 <p style={{fontSize:'16px',marginLeft:'10%'}}>Premium<span style={{fontSize:'16px',fontWeight:'bold'}}>Rs. 12,799/-</span></p>
                             </Card>
                             <Card style={{height:'100px',width:'240px',backgroundColor:'yellow',marginLeft:'2%',marginTop:'3%'}}>
                                 <div style={{height:'30px'}}>
                                     <input type="radio" />
                                     <label >3 year</label>
                                 </div>
                                 <p style={{fontSize:'16px',marginLeft:'10%'}}>Premium<span style={{fontSize:'16px',fontWeight:'bold'}}>Rs. 18,100/-</span></p>
                             </Card>
                         </div>
                     </Card>
                 </div>
                 <div style={{width:'30%',height:'500px'}}>
                     <Card style={{width:'80%',height:'420px',backgroundColor:'#F4A9A8',marginLeft:'5%'}}>
                         <div style={{height:'30px',borderBottom:'1px solid',borderBottomColor:'yellow'}}>
                            <p style={{marginLeft:'5%'}}> Summary </p>
                         </div>
                         <div style={{marginLeft:'5%'}}>

                         <div style={{display:'flex', marginTop:'7%'}}>
                             <div>
                                 Base Plan
                             </div>
                             <div style={{marginLeft:'50%',fontWeight:'bold'}}>
                                 Rs. 6631/-
                             </div>
                         </div>
                         <div style={{display:'flex', marginTop:'10%'}}>
                             <div>
                                 Cover Amount
                             </div>
                             <div style={{marginLeft:'37%',fontWeight:'bold'}}>
                                 Rs. 5 Lakhs/-
                             </div>
                         </div>
                         <div style={{display:'flex', marginTop:'10%'}}>
                                <div>
                                    Policy Period 
                                </div>
                                <div style={{marginLeft:'50%',fontWeight:'bold'}}>
                                    1 year
                                </div>
                            </div>
                            <div style={{display:'flex', marginTop:'40%',fontWeight:'bold'}}>
                                <div>
                                    TOTAL PREMIUM
                                </div>
                                <div style={{marginLeft:'33%',fontWeight:'bold'}}>
                                    Rs. 6631/-
                                </div>
                            
                        </div>
                         {/* <div style={{ marginTop:'2%'}}>
                                 <Button variant="contained" style={{marginLeft:'5%',backgroundColor:'#C400FF',color:'white', height:'40px',borderRadius:'51px',width:'250px',marginTop:'8%'}} onClick={()=>{
                                 window.scrollTo({
                                 top: 0,
                                 behavior: "smooth"
                             });
                             this.props.history.push('/ProposalPage1')}}>Proceed to Proposal</Button>
                             </div> */}
                         </div>
                     </Card>
                 </div>
             </div>

              <div>
                                 <Button variant="contained" style={{marginLeft:'5%',backgroundColor:'#C400FF',color:'white', height:'40px',borderRadius:'51px',width:'250px',marginLeft:'40%'}} onClick={()=>{
                                 window.scrollTo({
                                 top: 0,
                                 behavior: "smooth"
                             });
                             this.props.history.push('/ProposalPage1')}}>Pay</Button>
                             </div>
         </React.Fragment>
         );
    }
}
 
export default withRouter(ReviewPayPlan);
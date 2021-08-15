import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FinDropDown from './FInDropDown';
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { withRouter } from 'react-router';
import Card from '@material-ui/core/Card';
import VerticalAdvertisement from './VerticalAdvertisement';


var city = ['Seithur','Rajapalayam', 'Thalavaipuram','Sivagiri','Vasudevanalur','Kadayanalur','Puliyangudi','Thenkasi','Shengottai']
class ProposalFormOne extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                    <div style={{width:'100%',height:'1100px'}}>
                        <div style={{display:'flex'}} >
                            <div style={{width:'300px',height:'50px',backgroundColor:'#5C527F', fontSize:'31px', border: '1px solid', borderColor:'#FF4C29',marginLeft:'10%',marginTop:'5%'}}>
                                Basic Information
                            </div>
                            <div style={{width:'500px',height:'50px', fontSize:'31px',marginTop:'5%'}}>
                            Physical Medical Information
                            </div>
                        </div>
                        <div style={{display:"flex"}}>
                            <Card style={{width:'100%',height:'900px',backgroundColor:'#A2DBFA',marginLeft:'10%'}}>
                                <div style={{height:'60px',display:'flex'}}>
                                    <TextField  label="Name"  style={{width:'280px', marginLeft:'5%'}} />
                                    <TextField  label="Spouse Name"  style={{width:'280px',marginLeft:'5%'}} />
                                    <TextField  label="Last Name"  style={{width:'280px',marginLeft:'5%'}} />
                                </div>
                                <div style={{height:'60px',display:'flex',marginTop:'3%'}}>
                                    <TextField  label="Mother Name"  style={{width:'280px', marginLeft:'5%'}} />
                                    {/* <FinDropDown menus={city} dropLabel ={Gender} style={{width:'280px'}} /> */}
                                    <select style={{width:'280px',marginLeft:'5%' ,height:'50px',backgroundColor:'#A2DBFA'}}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <label style={{fontSize:'21px',marginTop:'1%'}}>DOB</label>
                                    <input type="date" label='DOB' style={{width:'285px',height:'50px',backgroundColor:'#A2DBFA'}} />
                                    
                                </div>
                                <div style={{height:'60px',display:'flex',marginTop:'3%'}}>
                                    <TextField  label="Age Proof"  style={{width:'259px', marginLeft:'5%'}} /><AttachFileIcon style={{marginTop:'2%'}}/>
                                    <TextField  label="Address Proof"  style={{width:'259px',marginLeft:'5%'}} /><AttachFileIcon style={{marginTop:'2%'}}/>
                                    <select placeholder="Marital Status" style={{width:'290px',marginLeft:'3.5%' ,height:'50px',backgroundColor:'#A2DBFA'}}>
                                        <option>Single</option>
                                        <option>Married</option>
                                    </select>
                                </div>
                                <div style={{height:'210px',display:'flex',marginTop:'3%'}}>
                                    <textarea placeholder="Address for Communication" style={{width:'40%',height:'200px', backgroundColor:'yellow', marginLeft:'5%'}} />
                                    <textarea placeholder="Permanent Address" style={{width:'40%',height:'200px', backgroundColor:'yellow', marginLeft:'5%'}} />
                                </div>
                                <div style={{height:'60px',display:'flex', marginTop:'3%'}}>
                                    <TextField  label="EmailId"  style={{width:'280px', marginLeft:'5%'}} />
                                    <p>Nationality</p>
                                    <select  style={{width:'240px',height:'50px',backgroundColor:'#A2DBFA'}}>
                                        <option> Indian </option>
                                        <option>Chinese</option>
                                        <option>Japenese</option>
                                    </select>
                                    <p>Qualification</p>
                                    <select placeholder="Marital Status" style={{width:'260px',height:'50px',backgroundColor:'#A2DBFA'}}>
                                        <option> 10th </option>
                                        <option>12th</option>
                                        <option>BE</option>
                                    </select>                            
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{height:'60px',display:'flex', marginTop:'3%',width:'40%'}}>
                                        
                                            <p style={{marginLeft:'13%'}}>Qualification</p>
                                            <select placeholder="Marital Status" style={{width:'260px',height:'50px',backgroundColor:'#A2DBFA'}}>
                                                <option> 10th </option>
                                                <option>12th</option>
                                                <option>BE</option>
                                            </select>  
                                        
                                    </div>
                                    <div style={{display:'flex' ,marginTop:'5%',width:'60%'}}>
                                        <div style={{marginLeft:'20%',fontSize:'21px'}}>State of Health</div>
                                        
                                            <div style={{marginLeft:'8%'}}>
                                                <div style={{fontSize:'12px',width:'50px'}}>Excellent</div>
                                                <label class="container">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div>
                                                <div style={{fontSize:'12px',width:'70px'}}>Very Good</div>
                                                <label class="container" >
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div>
                                                <div style={{fontSize:'12px',width:'50px'}}>Good</div>
                                                <label class="container">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div>
                                                <div style={{fontSize:'12px',width:'60px'}}>Moderate</div>
                                                <label class="container">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div>
                                                <div style={{fontSize:'12px'}}>Poor</div>
                                                <label class="container">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                    </div>
                                </div>
                                <div style={{height:'60px',display:'flex',backgroundColor:'#FAFF00', marginTop:'3%'}}>
                                    <div style={{marginLeft:'5.5%'}}>
                                        Smoker
                                    </div>
                                    
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'5%'}}>Yes</div>
                                    <label class="container">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    </label>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>No</div>
                                    <label class="container">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    </label>
                                    
                                    <div style={{marginLeft:'24%'}}>
                                        Do you consume Alcohol regularly ?
                                    </div>

                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'5%'}}>Yes</div>
                                    <label class="container">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    </label>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>No</div>
                                    <label class="container">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    </label>
                                </div>

                                <div style={{display:'flex',marginLeft:'50%',marginTop:'5%'}}>
                                    <Button variant="contained" style={{backgroundColor:'#C400FF',color:'white', height:'40px',borderRadius:'51px',width:'150px', marginTop:'2%'}} onClick={()=>{
                                        window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                    this.props.history.push('/')}}>Save</Button>
                                    <Button variant="contained" style={{backgroundColor:'#C400FF',color:'white',marginLeft:'20%', height:'40px',borderRadius:'51px',width:'150px', marginTop:'2%'}} onClick={()=>{
                                        window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                    this.props.history.push('/ProposalPage2')}}>Next</Button>
                                </div>
                            </Card>
                            <div style={{width:'30%'}}>
                                <VerticalAdvertisement />
                            </div>
                        </div>       
                    </div> 
            </React.Fragment>
         );
    }
}
 
export default withRouter(ProposalFormOne);
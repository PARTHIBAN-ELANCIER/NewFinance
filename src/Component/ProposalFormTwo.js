import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import VerticalAdvertisement from './VerticalAdvertisement';
import { withRouter } from 'react-router';


class ProposalFormTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{width:'100%',height:'2200px',backgroundColor:'#F8E2CF'}}> 
                        <div style={{display:'flex'}} >
                            <div style={{width:'300px',height:'50px', fontSize:'31px',marginLeft:'10%',marginTop:'5%',color:'white'}}>
                                Basic Information
                            </div>
                            <div style={{width:'500px',height:'50px', fontSize:'31px',marginTop:'5%', border: '1px solid', borderColor:'#FF4C29',backgroundColor:'#FF616D'}}>
                                Physical Medical Information
                            </div>
                        </div>

                    <div style={{display:'flex'}}>

                    <Card style={{width:'70%',height:'1920px',backgroundColor:'#F6C6EA',marginLeft:'10%'}}>
                        <div style={{display:'flex',backgroundColor:'#FFC947'}}>
                            <div style={{width:'50%',height:'100px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                    <div style={{marginLeft:'20%'}}>
                                       Height 
                                    </div>
                                    <div style={{marginLeft:'20%'}}>
                                        Weight
                                    </div>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div>
                                    <TextField  label="Inches" style={{width:'150px',marginLeft:'20%'}} />
                                    </div>
                                    <div>
                                    <TextField  label="Kg" style={{width:'150px',marginLeft:'60%'}} />
                                    </div>
                                </div>
                            </div>
                            <div style={{width:'50%',height:'100px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Do you have have any Physical deformity/handicap/
                                    congenital defect/abnormality
                                </p>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>

                        <div style={{display:'flex'}}>
                            <div style={{width:'50%',height:'180px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Are you currently undergoing/have undergone any tests, investigations, awaiting results of any tests, investigations or
                                    have you ever been advised to undergo any tests, investigations or surgery or been hospitalized for 
                                    general checkup, observations, treatment surgery?
                                </p>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'180px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever been treated or hospitalized for Cancer, Tumor, Cysts or any other growth?
                                </p>
                                <div style={{display:'flex',marginTop:'15%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>

                        <div style={{display:'flex',backgroundColor:'#FFC947'}}>
                            <div style={{width:'50%',height:'100px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                   Have you ever been referred to an Oncologist or Cancer hospital for any investigation or treatment
                                </p>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'100px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Did you have any oilment/injury/accident requiring treatment/medication for morethan a week?
                                </p>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>

                        <div style={{display:'flex'}}>
                            <div style={{width:'50%',height:'100px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                   Have you ever been from work from more than a week in last 2years due to any illness or treatment  
                                </p>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'100px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    were you/ your spouse ever tested as Hepatitis B or C, HIV/AIDS or any other sexually transmitted disease?
                                </p>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>

                        <div style={{display:'flex',backgroundColor:'#FFC947'}}>
                            <div style={{width:'50%',height:'140px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                   Have you ever suffered chest pain, Palpitation, Rheumatic fever, Heart Murmur, Heart attack, shortness of 
                                   Breath or any other Heart related disorder?
                                </p>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'140px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever suffered symptoms/ailment relating to kidney, Prostate, Hydrocele, And Urinary System?
                                </p>
                                <div style={{display:'flex', marginTop:'7.3%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>


                        <div style={{display:'flex'}}>
                            <div style={{width:'50%',height:'140px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                   Have you ever suffered Thyroid disorder or any other disease or disorder of the Endocrine system  
                                </p>
                                </div>
                                <div style={{display:'flex' ,marginTop:'4.5%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'140px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you undergone/have been recommended to undergo Angioplasty, Bypass Surgery, Brain Surgery, Heart
                                    valve Surgery, Aorta Surgery or Organ Transplant?
                                </p>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>


                        <div style={{display:'flex',backgroundColor:'#FFC947'}}>
                            <div style={{width:'50%',height:'100px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                   Have you ever suffered Diabetes/ High Blood Sugar
                                </p>
                                </div>
                                <div style={{display:'flex',marginTop:'4%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'100px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever suffered High/Low Blood Pressure
                                </p>
                                <div style={{display:'flex',marginTop:'7%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>

                        <div style={{display:'flex',}}>
                            <div style={{width:'50%',height:'140px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever suffered Disorders of Eye, Ear, Nose, Throat including defective sight, speech or 
                                    hearing & discharge from ears? 
                                </p>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'140px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever suffered ailments relating to Liver or reproductive System?
                                </p>
                                <div style={{display:'flex',marginTop:'7%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>        



                        <div style={{display:'flex',backgroundColor:'#FFC947'}}>
                            <div style={{width:'50%',height:'145px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever Suffered symptoms/ailments relating to Brain, Depression?
                                    Mental/Pyschiatric ailment, Multiple Sclerosis, Nervous System, Stroke, Paralysis, Parkinsonism or Epilepsy?
                                </p>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'145px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever suffered Asthma, Bronchitis, Blood spitin. Tuberculosis or other Respiratory disorders?
                                </p>
                                <div style={{display:'flex',marginTop:'13%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>        

                        <div style={{display:'flex',}}>
                            <div style={{width:'50%',height:'125px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever suffered Anaemia, Blood or Blood related disorders? 
                                </p>
                                </div>
                                <div style={{display:'flex',marginTop:'4%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'125px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever suffered Musculoskeletal disorders such as Arthritis, Recurrent Back Pain, Slipped disc or any other 
                                    disorder of spine, Joints, Limbs or Leprosy?
                                </p>
                                <div style={{display:'flex',marginTop:'1%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>     

                        <div style={{display:'flex',backgroundColor:'#FFC947'}}>
                            <div style={{width:'50%',height:'100px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever suffered any other illness or impairment not mentioned above?
                                </p>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'100px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                
                            </div>
                        </div>

                        <div style={{width:'100%',height:'50px',borderBottom:'1px solid',borderColor:'yellow', fontSize:'31px',fontWeight:'bolder'}}>
                            <div style={{marginLeft:'15%'}}>Details of Female Prospects /Covered person</div>
                        </div>


                        <div style={{display:'flex',backgroundColor:'#FFC947'}}>
                            <div style={{width:'50%',height:'100px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%'}}>
                                    Are you currently Pregnant?
                                </p>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'100px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <div style={{display:'flex', marginTop:'3.5%'}}>
                                    <p style={{marginLeft:'10%'}}>
                                        If yes, current months of pregnancy:
                                    </p>
                                    <textarea  rows="4" cols="20">
                                    </textarea>
                                </div>
                            </div>
                        </div>


                        <div style={{display:'flex'}}>
                            <div style={{width:'50%',height:'100px',borderBottom:'1px solid',borderColor:'yellow',borderRight:'3px dotted',borderRightColor:'red'}}>
                                <div style={{display:'flex', marginTop:'3.5%'}}>
                                    <p style={{marginLeft:'10%'}}>
                                        Stage the age of first pregnancy:
                                    </p>
                                    <textarea  rows="4" cols="20">
                                    </textarea>
                                </div>
                            </div>
                            <div style={{width:'50%',height:'100px',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever had any abortion, miscarriage or ectopic pregnancy?
                                </p>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            
                        </div>

                        <div style={{display:'flex',backgroundColor:'#FFC947'}}>
                            <div style={{width:'50%',height:'165px',borderRight:'3px dotted',borderRightColor:'red',borderBottom:'1px solid' ,borderBottomColor:'yellow'}}>
                                <div style={{display:'flex'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                   Have you undergone any gynecological investigations, internal checkups, breast checks such as mammogram or 
                                   biopsy?
                                </p>
                                </div>
                                <div style={{display:'flex',marginTop:'9%'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div> 
                            </div>
                            <div style={{width:'50%',height:'165px',borderBottom:'1px solid',borderColor:'yellow'}}>
                                <p style={{marginLeft:'10%',marginRight:'2%'}}>
                                    Have you ever consulted a doctor because of an irregularity at the breast, vagina, uterus, ovary, fallopian tubes,
                                    menstruation, birth delivery, complications during pregnancy or child delivery or a sexually transmitted disease?
                                </p>
                                <div style={{display:'flex'}}>
                                    <div style={{fontSize:'12px',display:'flex', marginLeft:'70%'}}>
                                        Yes
                                    </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                        <div style={{fontSize:'12px',display:'flex', marginLeft:'3%'}}>
                                            No
                                        </div>
                                        <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        </label>
                                </div>        
                            </div>
                        </div>

                        <div style={{width:'100%',height:'40px'}}>
                            <div style={{display:'flex',marginTop:'5%'}}>
                                <Button variant="contained" style={{backgroundColor:'#C400FF',marginLeft:'5%',color:'white', height:'40px',borderRadius:'51px',width:'150px', marginTop:'2%'}} onClick={()=>{
                                                window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            });
                                            this.props.history.push('/ProposalPage1')}}>Back
                                </Button>
                                <Button variant="contained" style={{backgroundColor:'#C400FF' ,marginLeft:'25%', color:'white', height:'40px',borderRadius:'51px',width:'150px', marginTop:'2%'}} onClick={()=>{
                                                window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            });
                                            this.props.history.push('/')}}>Save
                                </Button>
                                <Button variant="contained" style={{backgroundColor:'#C400FF',marginLeft:'20%',color:'white', height:'40px',borderRadius:'51px',width:'150px', marginTop:'2%'}} onClick={()=>{
                                                window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            });
                                            this.props.history.push('/Forms')}}>Next
                                </Button>
                            </div>
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
 
export default withRouter(ProposalFormTwo);
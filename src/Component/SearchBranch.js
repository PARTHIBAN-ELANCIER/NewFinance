import React, { Component } from 'react';
import FinDropDown from './FInDropDown';
import RoomIcon from '@material-ui/icons/Room';
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';
import Button from '@material-ui/core/Button';

var city = ['Seithur','Rajapalayam', 'Thalavaipuram','Sivagiri','Vasudevanalur','Kadayanalur','Puliyangudi','Thenkasi','Shengottai']

class SearchBranch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{height:'50px',marginTop:'4%', display:'flex'}}>
                    <div style={{display:'flex',marginLeft:'13.5%'}}>
                        <div style={{width:'240px',textAlign:'right',fontSize:'21px',color:'#F8485E',marginTop:'1%'}}>Branch Locator  </div>
                        <RoomIcon style={{fontSize:'32px'}} />
                        <div style={{marginLeft:'1%'}}>
                        <FinDropDown 
                        menus={city} />
                        </div>
                    </div>
                    
                    <div style={{marginLeft:'2%'}}>
                        <FinDropDown 
                        menus={city} />
                    </div>

                    <div style={{marginLeft:'2%'}}>
                        <FinDropDown 
                        menus={city} />
                    </div>
                <Button variant="contained" style={{backgroundColor:'blue',borderRadius:'51px',lineHeight:'10px', marginLeft:'2%',width:'150px',height:'35px',color:'white'}}>Search</Button>

                </div>
                
                <div style={{width:'100%',height:'50px', display:'flex'}}>
                    <div style={{marginLeft:'20%',display:'flex'}}>
                    <p style={{width:'140px',textAlign:'right',color:'#F8485E',marginTop:'1%'}}>Agent Search </p>
                    <FaceTwoToneIcon style={{fontSize:'32px'}} />
                        <div style={{marginLeft:'1%'}}>
                        <FinDropDown 
                        menus={city} />
                        </div>
                    </div>
                    <div style={{marginLeft:'2%'}}>
                        <FinDropDown                    
                        menus={city} />
                    </div>
                    <div style={{marginLeft:'2%'}}>
                        <FinDropDown                    
                        menus={city} />
                    </div>
                <Button variant="contained" style={{backgroundColor:'blue',borderRadius:'51px',lineHeight:'10px', marginLeft:'2%',width:'150px',height:'35px',color:'white'}}>Search</Button>

                </div>

            </React.Fragment>
         );
    }
}
 
export default SearchBranch;
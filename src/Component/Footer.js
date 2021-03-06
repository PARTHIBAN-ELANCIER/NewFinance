import React, { Component } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
            <div style={{width:'150px',height:'120px',marginLeft:'10%',marginTop:'5%'}}>
                    <div>May I help you</div>
                    <HeadsetMicIcon style={{fontSize:'100px',textAlign:'left'}} />
            </div>
            <div style={{justifyContent:'space-between', width:'100%',height:'100px',backgroundColor:'#A7BBC7' ,display:'flex',lineHeight:'100px'}}>
                <div style={{textAlign:'left', marginLeft:'5%',width:'70%'}}>
                    ┬ęCopyright 2008-2021 AstraQuark Insurance. All Rights are Reserved
                </div>
                <div style={{ width:"30%"}}>
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                        <div><TwitterIcon/></div>
                        <div><LinkedInIcon/></div>
                        <div><InstagramIcon/></div>
                        <div><FacebookIcon/></div>
                        <div><YouTubeIcon/></div>
                    </div>
                </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;
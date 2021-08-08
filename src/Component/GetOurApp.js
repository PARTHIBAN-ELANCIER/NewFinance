import React, { Component } from 'react';
class GetOurApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{width:'100%',height:'500px ',textAlign:'left', display:'flex',color:'#53B8BB' , fontSize:'21px'}}>
                <div style={{width:'50%',marginLeft:'10%'}}>
                    <div style={{fontSize:'30px'}}><u>Get Our App From</u></div>
                    <div style={{display:"flex"}}>
                        <div style={{width:"50%"}}>
                            <img src="apple.png" style={{height:'120px', width:'70%'}} />
                        </div>
                        <div style={{width:"50%"}}>
                            <img src="gp.png" style={{height:'120px', width:'70%'}} />
                        </div>
                    </div>    
                    <div>
                        Get Control of all your insurance needs anywhere, anytime
                    </div>
                    <div style={{marginTop:'5%'}}>
                        Compare different insurance policies
                    </div>
                    <p>
                        Buy, store and share all your polcies online
                    </p>
                    <p>Track your policy status on the go</p>
                    <p>Download your policy with a single tap</p>

                </div>
                <div style={{width:'50%',height:'500px'}}>
                    <img src="mbl.png" style={{height:'500px', width:'50%'}} />  
                </div>
            </div>
         );
    }
}
 
export default GetOurApp;
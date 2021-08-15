import React, { Component } from 'react';
class GetOurApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{width:'100%',height:'500px ',textAlign:'left', display:'flex', fontSize:'21px'}}>
                <div style={{width:'50%',marginLeft:'10%'}}>
                    <div style={{fontSize:'26px'}}><u>Get Our App From</u></div>
                    <div style={{display:"flex", marginTop:'2%'}}>
                        <div style={{width:"50%"}}>
                            <img src="applelogo.jpg" style={{height:'50px', width:'70%'}} />
                        </div>
                        <div style={{width:"50%"}}>
                            <img src="googlelogo.jpg" style={{height:'50px', width:'70%'}} />
                        </div>
                    </div>    
                    <div style={{fontSize:'21px'}}>
                        Get Control of all your insurance needs anywhere, anytime
                    </div>
                    <div style={{marginTop:'5%',fontSize:'21px'}}>
                        Compare different insurance policies
                    </div>
                    <p style={{fontSize:'21px'}}>
                        Buy, store and share all your polcies online
                    </p>
                    <p >Track your policy status on the go</p>
                    <p >Download your policy with a single tap</p>

                </div>
                <div style={{width:'50%',height:'500px'}}>
                    <img src="mbl.png" style={{height:'400px', width:'40%'}} />  
                </div>
            </div>
         );
    }
}
 
export default GetOurApp;
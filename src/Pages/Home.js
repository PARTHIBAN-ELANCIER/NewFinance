import React, { Component } from 'react';
import NewAppBar from '../Component/NewAppBar';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Advertisement from '../Component/Advertisement';
import Footer from '../Component/Footer';
import GetOurApp from '../Component/GetOurApp';
import HaveQuestion from '../Component/HaveQuestion';
import Queries from '../Component/Queries';
import SearchBranch from '../Component/SearchBranch';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    NonLifePolicy = () => {
        this.props.history.push('/NonLifePolicies')
    }
    render() { 
        return (
            <div >
                <div style={{width:'100%',height:'100px'}}>
                    <NewAppBar />
                </div>
                <div >
                <SearchBranch />
                </div>
                <div style={{width:'100%', height:'400px'}}>
                    <p style={{marginTop:'5%',fontSize:'26px', color:'#787A91', marginLeft:'10%'}}>Let's Find You the <span style={{color:'black',fontWeight:'bold', fontSize:'26px'}}> Best Insurance</span></p>
                    <div style={{marginLeft:'20%'}}>
                    <img src="f.png" style={{width:'810px'}} />
                    </div>
                </div>
                
                <Card style={{width:'1200px', backgroundColor:'#AAD8D3', marginLeft:'10%'}}>
                    <div style={{width:'100%',height:'50px',display:'flex',marginTop:'2%'}}>

                        <div><Button variant="contained" style={{width:'300px' ,backgroundColor:'white',borderRadius:'51px' , marginLeft:'250px'}} onClick={() => this.props.history.push('/LifePolicies')}>Life Policies</Button></div>
                        <div><Button variant="contained" style={{width:'300px',backgroundColor:'white',borderRadius:'51px' ,marginLeft:'200px'}} onClick={this.NonLifePolicy} >Non Life Policies</Button> </div> 
                    </div>
                    <div style={{display:'flex'}}>
                    <div style={{width:'50%',borderRight:'1px solid ',borderRightColor:'white', textAlign:'left', marginLeft:'20%'}}>
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
                    <div style={{width:'50%' ,textAlign:'left' , marginLeft:'10%'}}>
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
                <div style={{width:'100%',height:'500px'}}>
                   <div style={{textAlign:'left',marginLeft:'10%', color:'#787A91',fontSize:'21px', marginTop:'5%',height:'30px'}}>
                        <u>Advantage of our Service</u>
                   </div>
                   <div style={{height:'220px' ,display:'flex'}}>
                       <div style={{marginLeft:'10%', width:'26%'}}>
                            <img src="p1.png" style={{width:'100%',height:'220px'}} />
                       </div>
                       <div style={{marginLeft:'1%', width:'26%'}}>
                            <img src="p2.png" style={{height:'220px',width:'100%'}} />
                       </div>
                       <div style={{marginLeft:'1%', width:'26%'}}>
                            <img src="p3.png" style={{height:'220px', width:'100%'}} />
                       </div>
                   </div>
                    <div style={{height:'250px' , marginLeft:'20%',fontSize:'18px',fontWeight:'inherit'}}>
                        <p>
                            When You buy insurance from us, You get more than just financial safety.You also get:
                        </p>
                        <p>
                            our promise of simplifying complex insurance terms and conditions, quick stress-free
                        </p>
                        <p>
                            claims, instant quotes from top insurers and being present for you in the toughest of times.
                        </p>
                    </div>
                </div>
                <Advertisement />
                <GetOurApp />
                <HaveQuestion />
                <Queries />
                <Footer />
            </div>
          );
    }
}
 
export default Home;
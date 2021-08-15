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
import Details from '../Component/Details';
import Advantages from '../Component/Advantages';

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
            <React.Fragment>
                <div>
                    <div style={{width:'100%',height:'100px'}}>
                        <NewAppBar />
                    </div>
                    
                    <div style={{backgroundImage:'b1.png',width:'100%',height:'100px'}} >
                        <SearchBranch />
                    </div>
                    <div>
                        <Details />
                    </div>
                    
                    <div>
                        <Advantages />
                    </div>
                </div>
               
                
                    <div>
                        <Advertisement />
                    </div>
                <div>
                    <div style={{marginTop:"4%"}}>
                        <GetOurApp />
                    </div>
                    <div style={{marginTop:'2%'}}>
                        <HaveQuestion />
                    </div>
                    <Queries />
                    <Footer />
                    
                </div>    
            </React.Fragment>
          );
    }
}
 
export default Home;
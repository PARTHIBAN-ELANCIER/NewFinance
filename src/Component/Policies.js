import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { useHistory } from "react-router";
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router';
import { createBrowserHistory as history} from 'history';
class Policies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
        NEXT = () => {
            this.props.history.push('/')

        }

    render() { 
        return ( 
            <React.Fragment>
                
                <div style={{width:'100%', height:'1000px'}}>
                    <Card style={{width:'1100px',backgroundColor:'#FF3D68', height:'540px',marginLeft:'10%'}}>
                        <div style={{display:'flex',marginLeft:'2%',margin:'2%'}}>
                            <Card style={{width:'250px',height:'150px'}} onClick={() => this.props.history.push('/AboutUs')} ></Card>
                            <Card style={{width:'250px',height:'150px',marginLeft:'2%'}} onClick={this.NEXT}></Card>
                            <Card style={{width:'250px',height:'150px',marginLeft:'2%'}}></Card>
                            <Card style={{width:'250px',height:'150px',marginLeft:'2%'}}></Card>
                        </div>
                        <div style={{display:'flex', margin:'2%'}}>
                            <Card style={{width:'250px',height:'150px'}}></Card>
                            <Card style={{width:'250px',height:'150px',marginLeft:'2%'}}></Card>
                            <Card style={{width:'250px',height:'150px',marginLeft:'2%'}}></Card>
                            <Card style={{width:'250px',height:'150px',marginLeft:'2%'}}></Card>
                        </div>
                        <div style={{display:'flex', margin:'2%'}}>
                            <Card style={{width:'250px',height:'150px'}}></Card>
                            <Card style={{width:'250px',height:'150px',marginLeft:'2%'}}></Card>
                            <Card style={{width:'250px',height:'150px',marginLeft:'2%'}}></Card>
                            <Card style={{width:'250px',height:'150px',marginLeft:'2%'}}></Card>
                        </div>
                    </Card>
                </div>

            </React.Fragment>
         );
    }
}
 
export default withRouter(Policies);
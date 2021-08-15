import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

class QuestionFour extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{width:'100%',height:'500px',backgroundColor:'yellow', display:'flex'}}>
                    <div style={{width:'50%',height:'500px',backgroundColor:'orange'}}>
                        <img src='doctor.png' style={{width:'100%',height:'100%'}} />
                    </div>
                    <div style={{width:'50%',height:'500px',backgroundColor:'#F5E8C7'}}>
                        <p style={{marginTop:'10%', fontSize:'31px'}}>QUESTION #4</p>
                        <div style={{fontSize:'21px',height:'21px'}}>
                            Do you have any existing illness(or)Medical History?
                        </div>
                        <p style={{fontSize:'11px'}}>
                           This will help us to find plan that cover your condition
                        </p>
                        <div style={{height:'30px'}}>
                        <input type="radio" />
                        <label >Existing Illness</label>
                        </div>
                        <div  style={{height:'30px'}}>
                        <input type="radio" />
                        <label>Covid 19</label>
                        </div>
                        <div style={{height:'30px'}}>
                        <input type="radio" />
                        <label>Surgical Procedure</label>
                        </div>
                        <div>
                        <input type="radio" />
                        <label>Non of These above</label>
                        </div>
                        {/* <div style={{marginRight:'100%', marginTop:'2%'}}>
                        <Button variant="contained" style={{backgroundColor:'#C400FF',color:'white', height:'40px',borderRadius:'51px',marginLeft:'43%',width:'250px', marginTop:'2%'}} onClick={()=>{
                                window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                            this.props.history.push('/Question2')}}>Next Question</Button>
                        </div> */}
                    </div>
                </div>
            </React.Fragment>

         );
    }
}
 
export default withRouter(QuestionFour);
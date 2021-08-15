import React, { Component } from 'react';
class Advantages extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{width:'100%',height:'500px'}}>
                   <div style={{textAlign:'left',marginLeft:'10%', color:'#F8485E',fontSize:'26px', marginTop:'3%',height:'30px',fontSize:'26px'}}>
                        <u >Advantage of our Service</u>
                   </div>
                   <div style={{height:'220px' ,display:'flex',marginTop:'2%'}}>
                       <div style={{marginLeft:'10%', width:'26%'}}>
                            <img src="finance2.jpg" alt='finance2' style={{width:'100%',height:'220px'}} />
                       </div>
                       <div style={{marginLeft:'1%', width:'26%'}}>
                            <img src="finance1.jpg"  alt='finance2' style={{height:'220px',width:'100%'}} />
                       </div>
                       <div style={{marginLeft:'1%', width:'26%'}}>
                            <img src="finance.jpg"  alt='finance2' style={{height:'220px', width:'100%'}} />
                       </div>
                   </div>
                    <div style={{height:'250px' , marginLeft:'20%',fontSize:'21px'}}>
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
            </React.Fragment>
         );
    }
}
 
export default Advantages;
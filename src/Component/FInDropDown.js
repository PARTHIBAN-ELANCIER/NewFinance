import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class FinDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var {dropLabel = '' , value = '' , onChange = ()=>{} , menus = []} = this.props
        return (<div> 
            <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{width : '200px'}}
          value={value}
          onChange={onChange}
        >
          {
            menus.map((item)=>{
            return  <MenuItem value={item}>{item}</MenuItem>
            })
          }
        
        </Select>
        </div>  );
    }
}
 
export default FinDropDown;
import React from "react";
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import { DeleteForever } from '@material-ui/icons';
import ListItemText from '@material-ui/core/ListItemText';
// import mockjson from "../../../../mock/config.json"
const ItemText = styled(ListItemText)({
  background: 'linear-gradient(45deg, #6d6bfe 30%, #53b8ff 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  height: 60,
  margin: '0',
  padding: '0 30px',
  "&.is-active": {
    background: 'linear-gradient(45deg, #ff8257 30%, #ff5353 90%)',
  },
  "& span": {
    color: 'white',
    lineHeight: "30px",
    fontSize: "16px"
  },
  "& p": {
    color: "white",
    lineHeight: "30px",
    paddingLeft: "20px",
    fontSize: "22px"
  }
});
const IconDel = styled(DeleteForever)({
  color:"#b4f9bd",
  position:"absolute",
  width:"60px",
  height:"100%",
  backgroundColor:"#333333cc",
  right:"0",
  opacity:0,
  transition:".4s opacity",
  "&:hover":{
    opacity:1
  }
})
export default class main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuList: [],
            props:props,
            index: 0
        }
    }
    indexFun(key,i) {
      this.setState({
        index:i,
      })
      this.props.indexFun(key)
    }
    
    addFun = () => {
      this.setState({
        index: -1,
      })
      this.props.addFun()
    }
    
    delFun = () =>{
      this.props.delFun()
    }

    render(){
        return    <List component="nav" aria-label="main mailbox folders">
        {this.props.listData.map((child,i) =>{
            return <ListItem style={{padding:"0px",borderTop:"1px solid #fff",cursor: "pointer",position:"relative"}} key={i}>
            <IconDel onClick={this.delFun}></IconDel>
            <ItemText 
              className={{"is-active": i === this.state.index}} 
              primary={"Method==>" + child.method} 
              secondary={child.url} 
              onClick={this.indexFun.bind(this, child.bW9ja2RhdGFjb2Rl, i)}
              /></ListItem>
        })}
        <ListItem style={{padding:"0px",borderTop:"1px solid #fff",cursor: "pointer"}}>
          <ItemText className={{"is-active": -1 === this.state.index}}  primary={"add"} onClick={this.addFun}/></ListItem>
      </List>
    }
}
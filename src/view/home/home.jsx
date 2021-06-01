import React from 'react';
import Menu from "./childer/menu.jsx"
import axios from "axios"
import { Select, TextField, Grid, FormControl, InputLabel, Button } from '@material-ui/core';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
let n = 0;
class main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code: 0,
            method:"",
            url: "",
            data: [],
            viewData: "",
            add: false,
        }
        
    }
    componentDidMount() {
        axios.post("/",{
            call: "get"
        }).then(res=>{
            if (res.data.data && res.data.data.length) {
                this.setState({
                    data:res.data.data,
                })
                this.gridText( res.data.data[0].bW9ja2RhdGFjb2Rl )
            }
          })
    }
    listIndex(code) {
        this.gridText(code)
    }
    gridText =(code) => {
        let obj = {};
        let method = "";
        let url = "";
        for (let item of this.state.data) {
            console.log(item.url , code)
            if (item.bW9ja2RhdGFjb2Rl === code) {
                console.log(item)
                obj = item.resquest; 
                method = item.method; 
                url = item.url; 
                break;
            }
        }
        this.setState({
            code: code,
            viewData: JSON.stringify(obj, null, 4),
            method: method,
            url: url,
            add: true,
        })
        console.log("gridText",n++,this.state)
        // return obj)
    }
    save = () =>{
        let obj = {}
        try{
            obj.data = JSON.parse(this.state.viewData);
            obj.method = this.state.method;
            obj.url = this.state.url;
            obj.bW9ja2RhdGFjb2Rl = this.state.code;
            axios.post("/",{
                call: this.state.add ? "add" : "set",
                data: obj
            }).then(res=>{
                console.log(res)
                this.setState({
                    data:res.data.data,
                    add:false,
                })
                
                // this.gridText( res.data.data[0].bW9ja2RhdGFjb2Rl )
                alert("成功")
            }) 
        } catch {
            alert("数据json化失败，请重新调整")
        }
    }
    log = ()=>{
        console.log("this.state.viewData=>",this)
    }
    addFun = ()=>{
        console.log("1dd")
        this.setState({
            viewData: "",
            method: "get",
            url: "",
            add:true
        })
    }
    delFun = ()=>{
        axios.post("/",{
                call: "del",
                data: {
                    bW9ja2RhdGFjb2Rl: this.state.code
                }
            }).then(res=>{
                this.setState({
                    data:res.data.data,
                })
                // this.gridText( res.data.data[0].bW9ja2RhdGFjb2Rl )
                alert("成功")
            }) 
    }
    render() {
        return (<Grid container alignContent="center" >
            <Grid item lg={2} ></Grid>
                    <Grid item lg={2} >
                        {this.state.data && this.state.data.length ?<Menu delFun={this.delFun} listData={this.state.data} addFun={this.addFun} indexFun={this.listIndex.bind(this)}/>:undefined}
                    </Grid>
                    <Grid item lg={6}>
                        <Grid item xs={12}>
                            <FormControl variant="filled" >
                                <InputLabel id="demo-simple-select-filled-label">Method</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={this.state.method}
                                    style={{width:120}}
                                    onChange={event=>{this.setState({method:event.target.value})}}
                                    >
                                    <option value="get">get</option>
                                    <option value="post">post</option>
                                </Select>
                            </FormControl>
                            <TextField 
                                id="filled-basic" 
                                value={this.state.url}
                                style={{width:520}}
                                onChange={event=>{this.setState({url:event.target.value})}} 
                                label="Filled" 
                                variant="filled" 
                                />
                            {/* <Button variant="contained" onClick={this.log}>重置</Button>
                            <Button variant="contained" color="secondary" onClick={this.log}>格式化</Button> */}
                            <Button variant="contained" color="primary" onClick={this.save}>保存</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="filled-multiline-static"
                                label="Multiline"
                                style={{width: 900}}
                                multiline
                                rows={20}
                                value={this.state.viewData}
                                onChange={event=>{this.setState({viewData:event.target.value})}}
                                variant="filled"
                            />
                        </Grid>
                    </Grid>
            <Grid item lg={2} ></Grid>
                </Grid>)

    }
}
export default main
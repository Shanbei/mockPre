const fs = require("fs");
const Koa = require('koa2');
const Bodyparser = require('koa-bodyparser');
const Mock = require('mockjs');       //引入mock
const ReqJson = require("./sendJson.js");
const KoaStatic = require('koa-static');
const { inherits } = require("util");
const bodyparser = new Bodyparser();
const app = new Koa();
// 
// =========================
const fileDir = './mock/config.json';
let person = [],
    apiMap = {},
    n = 1;
// ==========================
app.use(ReqJson())
    .use(bodyparser)
    .use(KoaStatic('./build'))
    .use((ctx,next) => {
    if (ctx.method === "POST" && ctx.url === "/") {
        const data = ctx.request.body;
        let sendData = {
            "status":200,
            "msg":"SUCCESS",
        };
        switch (data.call) {
            case "get":
                break;
            case "set":
                machSet(data.data)
                break;
                
            case "add":
                person.push({
                    bW9ja2RhdGFjb2Rl: n++,
                    resquest: data.data.data,
                    url: data.data.url,
                    method: data.data.method,
                })
                apiMapHandle()
                break;
            case "del":
                machDel(data.data)
                
                break;
        }

        sendData.data = person;
        ctx.send(sendData);
    } else if (apiMap[`${ctx.method}:${ctx.url}`]) {
        ctx.send(Mock.mock(apiMap[`${ctx.method}:${ctx.url}`]));
    } else {
        ctx.body = ctx.request
    }
    next()
  })

// ======================
const machSet = ({url, method, data, bW9ja2RhdGFjb2Rl}) => {
    for (let i = 0; i < person.length;i++) {
        if (person[i].bW9ja2RhdGFjb2Rl === bW9ja2RhdGFjb2Rl) {
            person[i].resquest = data;
            person[i].url = url;
            person[i].method = method;
            break;
        }
    }
    apiMapHandle()
}
const machDel = ({bW9ja2RhdGFjb2Rl})=>{
    for (let i = 0; i < person.length;i++) {
        if (person[i].bW9ja2RhdGFjb2Rl === bW9ja2RhdGFjb2Rl) {
            person.splice(i, 1)
            break;
        }
    }
    apiMapHandle()
}
const apiMapHandle = (e) =>{
    apiMap = {}
    for (let child of person){
        if (!child.bW9ja2RhdGFjb2Rl){
            child.bW9ja2RhdGFjb2Rl = n++;
        }
        apiMap[`${child.method ? child.method.toUpperCase() : "GET" }:${child.url}`] = child.resquest;
    }
    e && wq()
}
const wq = () =>(fs.writeFile(fileDir, JSON.stringify(person, null, 4), { encoding: 'utf8' }, err => {
    if (err) {
        console.log("===============err ==============\n",err)
    }
}))
const init = () =>{
    fs.readFile(fileDir,(err, data) => {
        if (err) {
            return console.log("readFile",err)
        }
        const personStr = data.toString(); //将二进制的数据转换为字符串
        person = JSON.parse(personStr);
        apiMapHandle(true)
    })
}

// ===========================
init()
const port = 3009;
app.listen(port,()=>{console.log(`link==>      http://127.0.0.1:${port}\n Master！ I succeeded！`)});
// router
import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routeData from "./routeMap";
// import head from "components/head/head";
const PathMach = (item, key) =>{
    const { path, component: Component, children } = item;
    if(children){
        return (
        <Route key={key} path={path}>
            <Switch>
                {children.map((child, index)=>{
                    return PathMach({...child, path: path + child.path}, `${key}-${index}`);
                })}
                <Route path={path} component={Component}></Route>
                <Redirect to="/404"/>
            </Switch>
        </Route>)
    } else {
        return <Route exact key={key} path={path} component={Component} />
    }
}
const main = () => {
    return (
    <Router basename="/">
        {/* <Route path='*' component={head}></Route> */}
        <Switch>
            {
                routeData.map((child, index)=>{
                    return PathMach(child, `key~${index}`)
                })
            }
            <Redirect to="/404"/>
        </Switch>
    </Router>
)
}
export default main
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from "react-router-dom";
import Login from '../component/Login/Login';
import PesonnelContainer from '../container/PesonnelContainer/PesonnelContainer';
import ProjectContainer from '../container/ProjectContainer/ProjectContainer';
import Home from '../component/Home/Home';
export default class RouterURL extends Component {
    render(){
        return (
                <div>
                    <Switch >
                        <Route path="/logout" component={Login} />
                        <Route exact path="/home/nhan-su-chinh-thuc" component={PesonnelContainer} />
                        <Route exact path="/home/lich-su-du-an" component={ProjectContainer} />
                        <Route path="/home" component={Home} />
                        <Route component={Home} />
                    </Switch>
                </div>
            
          
        )
    }
}

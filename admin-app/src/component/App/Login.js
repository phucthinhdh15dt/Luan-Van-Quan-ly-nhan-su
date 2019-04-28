import React, {Component} from 'react';
import {Connect} from 'react-redux';
export default class Login extends Component {
    render(){
   
        return (
          
          <div style={{backgroundColor: '#BCA9F5' ,height:'600px',paddingTop:'100px'}}>
         
            <div className="login-box" >
                  {/* /.login-logo */}
                  <div className="login-box-body">
                  <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b></a>
                  </div>
                    <p className="login-box-msg">Xin vui lòng đăng nhập để sữ dụng hệ thống</p>
                    <form action="../../home">
                      <div className="form-group has-feedback">
                        <input type="email" className="form-control" placeholder="Tài khoản" />
                        <span className="glyphicon glyphicon-envelope form-control-feedback" />
                      </div>
                      <div className="form-group has-feedback">
                        <input type="password" className="form-control" placeholder="Mật khẩu" />
                        <span className="glyphicon glyphicon-lock form-control-feedback" />
                      </div>
                      <div className="row">
                      <div className="col-xs-1">
                        
                        </div>
                        <div className="col-xs-6">
                          <div className="checkbox icheck">
                            <label>
                              <input type="checkbox" /> Nhớ mật khẩu
                            </label>
                          </div>
                        </div>
                        {/* /.col */}
                        <div className="col-xs-4">
                          <button  className="btn btn-primary btn-block btn-flat">Đăng nhập</button>
                        </div>
                        {/* /.col */}
                      </div>
                    </form>
                    
                    <a href="#">Quên mật khẩu</a><br />
                  </div>
                  
                </div>
                </div>
                
                
            )
        }
    }
    const mapStateToProps = state =>{

      return 
    }
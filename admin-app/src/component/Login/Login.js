import React, {Component} from 'react';
import {Connect} from 'react-redux';
export default class Login extends Component {
    render(){
        return (
            <div className="login-box">
                  <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                  </div>
                  {/* /.login-logo */}
                  <div className="login-box-body">
                    <p className="login-box-msg">Xin vui lòng đăng nhập để sữ dụng hệ thống</p>
                    <form action="../../index2.html" method="post">
                      <div className="form-group has-feedback">
                        <input type="email" className="form-control" placeholder="Tài khoản" />
                        <span className="glyphicon glyphicon-envelope form-control-feedback" />
                      </div>
                      <div className="form-group has-feedback">
                        <input type="password" className="form-control" placeholder="Mật khẩu" />
                        <span className="glyphicon glyphicon-lock form-control-feedback" />
                      </div>
                      <div className="row">
                        <div className="col-xs-8">
                          <div className="checkbox icheck">
                            <label>
                              <input type="checkbox" /> Nhớ mật khẩu
                            </label>
                          </div>
                        </div>
                        {/* /.col */}
                        <div className="col-xs-4">
                          <button type="submit" className="btn btn-primary btn-block btn-flat">Đăng nhập</button>
                        </div>
                        {/* /.col */}
                      </div>
                    </form>
                    
                    <a href="#">Quên mật khẩu</a><br />
                  </div>
                  
                </div>
                
                
            )
        }
    }
    const mapStateToProps = state =>{

      return 
    }
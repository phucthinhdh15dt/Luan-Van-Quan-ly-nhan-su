import React, {Component} from 'react';
import Navigation from '../Layouts/Navigation';
import Pagination from './Pagination';
import * as StringNavigation from '../../constants/NavigationConstants';
import { withRouter } from 'react-router-dom';

export default class Table extends Component {

  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  

    render(){
      function routeChange() {
        let path = 'newPath';
        this.props.history.push(path);
      }

      function showListTable(personnels){
        var result =null ;
        if(personnels.length > 0){
            result = personnels.map((person, index) =>{
                return <tr>
                          <td>{person.id}</td>
                          <td>{person.name}</td>
                          <td>{person.birthDay}</td>
                          <td>{person.startDay}</td>
                          <td>{person.phone}</td>
                          <td> 
                              <button className="btn btn-danger btn-xs" data-toggle="modal" data-target="#exampleModalDelete" >Xóa</button> &nbsp;
                              <button className="btn btn-primary btn-xs" data-toggle="modal" data-target="#exampleModalEdit" >Sửa</button>  &nbsp;
                              <button className="btn btn-primary btn-xs" id={person.id} onClick={routeChange} >Chi tiết</button> 
                          </td>
                          
                        </tr>
            } );
        }
        return  result;
    } 
    
    function detailPersonnel(e){
      window.location.href = "login";
      alert(e.target.id);
    }

    function showListHeader(arrayHeader){
      var result =null ;
      if(arrayHeader.length > 0){
          result = arrayHeader.map((item, index) =>{
              return <th>{item}</th>
          } );
      }
      return  result;
    }      
        var {personnels} =this.props;
        console.log(personnels);
        var {headerTable} = this.props;
        var array = headerTable.split("-");
        var {title} =this.props;
      
         
        return (
          
        <div className="content-wrapper">
          <Navigation title={StringNavigation.TITLE_NAVIGATION_QUANLYNHANSU} navi={StringNavigation.STRING_NAVIGATION_QUANLYNHANSU} />
          <section className="content">
            <div className="row">
              <div className="col-xs-12">
                <div className="box">
                  <div className="box-header">
                   <center> <h1 style={{fontWeight :'bold' ,color : 'blue'}} className="box-title">{title}</h1> </center>
                  </div>
                  <div className="col-xs-10">

                  </div>
                  <div className="col-xs-2">
                  <button type="button" className="btn btn-success btn-md" data-toggle="modal" data-target="#exampleModalCreate" data-whatever="@mdo">Thêm mới</button>
                  </div>
                  <br/>
                  <div className="box-body">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                         {showListHeader(array)}
                        </tr>
                      </thead>
                      <tbody>
                        {showListTable(personnels)}
                      </tbody>

                    </table>
                    <div className="row">
                        <div className="col-sm-8"></div>
                        <div className="col-sm-4"><Pagination /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>


        )
       
    }

    
}


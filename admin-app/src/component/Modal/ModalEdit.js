import React, { Component } from 'react'

export default class ModalEdit extends Component {
  //phương thức hiển thị các record trong component 
  showListTableAdd=(modal,arrayType,arrayLayout)=>{
    var result =null ;
    if(modal.length > 0){
        result = modal.map((item, index) =>{
          //Cách in dòng 2 input
          if(index%2==0)
          {
            return <div className="row">
                      <div className={arrayLayout[index]}>
                        <label >{modal[index]}</label>
                        <input type={arrayType[index]} className="form-control" />
                      </div>
                      <div className={arrayLayout[index+1]}>
                        <label >{modal[index+1]}</label>
                        <input type={arrayType[index+1]} className="form-control" />
                      </div>
                    </div>
          }
        } );
    }
    return  result;
  }
  render() {
          // Cắt chuỗi thành mãng để lấy các thuộc tính trong component
            var array  =this.props.modalCreate.split("-");
            var arrayType = this.props.modalCreateType.split("-");
            var arrayLayout =this.props.modalCreateLayout.split("!");
    return (
        <div className="modal fade" id="exampleModalEdit" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.titleModalCreate}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body container">
                   {this.showListTableAdd(array,arrayType,arrayLayout)}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button type="button" className="btn btn-primary">Sửa</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

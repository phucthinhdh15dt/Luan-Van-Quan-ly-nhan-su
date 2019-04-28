import React, { Component } from 'react'

export default class ModalDelete extends Component {
  render() {
    return (
        <div>
        <div className="modal fade" id="exampleModalDelete" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    {this.props.titleModalDelete}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              Bạn có chắc chắn muốn xóa .....
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                <button type="button" className="btn btn-danger">Đồng ý</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

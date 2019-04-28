import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from "../../component/Table/Table" ;
import * as TableOption from  './ConstantsCommon';
import {reqGetAllData} from '../../redux/Pessonnel/action';
import Modal from '../../component/Modal/Modal';
import ModalDelete from '../../component/Modal/ModalDelete';
import ModalEdit from '../../component/Modal/ModalEdit';

class ProjectContainer extends Component {
    //Lấy Tất cả data sau khi load hết component
    componentWillMount(){
        this.props.getAllData();
    }
   
    //Reder ra các component
    render() {
        var person = this.props.personnelReducer; 
        return (
                <div>
                    <Modal
                        titleModalCreate={TableOption.PROJECT_MODAL_CREATE_TITLE}
                        modalCreate={TableOption.PROJECT_MODAL_CREATE}
                        modalCreateType={TableOption.PROJECT_MODAL_CREATE_TYPE}
                        modalCreateLayout = {TableOption.PROJECT_MODAL_CREATE_LAYOUT} />

                     <ModalEdit
                        titleModalCreate={TableOption.PROJECT_MODAL_EDIT_TITLE}
                        modalCreate={TableOption.PROJECT_MODAL_EDIT}
                        modalCreateType={TableOption.PROJECT_MODAL_EDIT_TYPE}
                        modalCreateLayout = {TableOption.PROJECT_MODAL_EDIT_LAYOUT} />

                    <ModalDelete titleModalDelete={TableOption.PROJECT_MODAL_DELETE_TITLE} />

                    <Table personnels={person} headerTable={TableOption.PROJECT_TABLE_STRING}
                        title={TableOption.PROJECT_TITLE_STRING} />
                        
                </div>
        );
    }
}
//Chuyển State thành Props cho component sử dụng
const mapStateToProps = (state) => {
    return {
        personnelReducer: state.personnelReducer,
        person: state.person
    }
}
//Dispatch action và props
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllData:()=>{
            dispatch(reqGetAllData()) ;
        },
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ProjectContainer);
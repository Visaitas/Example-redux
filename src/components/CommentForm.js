import React,{ Component } from 'react';
import { connect } from 'react-redux'


class CommentForm extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();
        const name = this.getName.value; //ดึงค่าจาก getName
        const message = this.getMessage.value; //ดึงค่าจาก getMessage
        //สร้าง Object จัดเก็บ id,name, message 
        const data = {
            id: new Date(),
            name,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_COMMENT',
            data
        })
        this.getName.value = "";
        this.getMessage.value = "";  
        console.log(data);
    }


    render(){
        return(
            <div>
                <h1> Add Comment </h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื้อ" ref={(input)=>this.getName = input }/><br /><br />
                    <textarea required rows="5" placeholder="ข้อความ" ref={(input)=>this.getMessage = input }/><br /><br />
                    <button> Comment </button>
                </form>
            </div>
        );
    }
}

export default connect()(CommentForm);
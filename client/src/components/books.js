import React , {Component}from 'react';
import {connect} from "react-redux";
class Books extends Component{
    checkUnit(){
        if(this.props.obj.bookName === 'New Headway Elementary v.4'){
            this.props.checkU()
        }
        console.log(this.key)

        console.log(this.props.obj.key)
    }
    ifAdmin(check){
        if(check){
            return (
                <div>
                    <input  placeholder="Unit number" />
                    <button>Add unit</button>
                </div>
            )
        }
    }

    render() {
        console.log(this.props.testStore[0]);
        return (
            <div>
                <div className="card p-3 col-12 col-md-3">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src="assets/images/01.jpg" alt="Mobirise"/>
                    </div>
                    <div className="card-box">
                        <h4 className="card-title mbr-fonts-style display-7">{this.props.obj.bookName}</h4>
                        <p className="mbr-text mbr-fonts-style display-7">{this.props.obj.bookText}</p>
                    </div>
                    <div className="mbr-section-btn text-center"><a  className="btn btn-danger display-4" id="change" onClick={this.checkUnit.bind(this)}>Choose Unit</a></div>
                    {this.ifAdmin(this.props.testStore[0])}
                </div>
                </div>
            </div>
        );
    }
}


export default connect(
    state => ({
        testStore: state.isAdmin
    }),
    dispatch => ({
        checkU:()=>{
            dispatch({type:"ELEMENTARY"})
        }
    })
)(Books);
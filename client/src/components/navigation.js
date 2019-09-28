import React , {Component}from 'react';
import {connect} from "react-redux";
class Nav extends Component{
    adminSub(){
        console.log("I am Admin");
        this.props.isAdmin()
    }
    render() {
        console.log(this.props.testStore);
        let text = "NoAdmin";
        if(this.props.testStore[0] !== false){
            text = "Admin"
        }
        // return (
        //     <div>
        //         <button onClick={this.adminSub.bind(this)}>Admin</button>
        //         <p>{text}</p>
        //     </div>
        // );
        return(
            <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Hidden brand</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="password" placeholder="password" aria-label="Search"/>
                        <input className="form-control mr-sm-2" type="search" placeholder="login" aria-label="Search"/>
                            <button onClick={this.adminSub.bind(this)} className="btn btn-outline-success my-2 my-sm-0">Admin</button>
                    </form>
                </div>
            </nav>
            </div>
        );
    }
}




export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        isAdmin:()=>{
            dispatch({type:"ADMIN"})
        }
    })
)(Nav);
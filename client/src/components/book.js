import React , {Component}from 'react';
import axios from 'axios';
import Books from "./books";
import {connect} from "react-redux";
class Book extends Component{

    constructor(props) {
        super(props);
        this.state = {books: []};
    }
    componentDidMount(){
        axios.get('/book')
            .then(response => {
                this.setState({ books: response.data });
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tableBooks(){
        return this.state.books.map(function(object, i){
            return <Books obj={object} key={i}  />;
        });
    }
    ifAdmin(check){
        if(check){
            return (
                <div>
                    <div className="card p-3 col-12 col-md-3">
                    <form>
                        <div className="form-group">
                            <label>Book name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Book name"/>
                        </div>
                        <div className="form-group">
                            <label>Book text</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Book text"/>
                        </div>
                    </form>
                    <button>Add unit</button>
                    </div>
                </div>
            )
        }
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <section className="features3 cid-rqmSnChdXl mbr-parallax-background" id="features3-b">
                    <div className="container">
                        <div className="media-container-row">
                    {this.tableBooks()}
                    {this.ifAdmin(this.props.testStore[0])}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(Book);
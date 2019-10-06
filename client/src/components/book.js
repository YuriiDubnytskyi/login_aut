import React , {Component}from 'react';
import axios from 'axios';
import Books from "./books";
import {connect} from "react-redux";
class Book extends Component{

    constructor(props) {
        super(props);
        this.state = {books: []};
        this.addBook = this.addBook.bind(this);
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

    addBook(){
        let book={
            bookName:document.getElementById('formGroupExampleInput'),
            bookText:document.getElementById('formGroupExampleInput2')
        };
        if(book.bookText !== null) {
            axios.post('/addBook', book)
                .then(res => console.log(res.data));

            alert('Sucsses')
        }else{
            console.log("here")
        }
    }
    ifAdmin(check){
        if(check){
            return (
                <div>
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
                    <button id="addBook">Add book</button>
                </div>
            )
        }
    }
    checkUnit(unit){
        if(unit === "Elementary"){
            return(
                <section className="features3 cid-rqmTYSQ99c" id="features3-d">
                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-6 col-lg-3">
                                <div className="card-wrapper">
                                    <div className="card-box">
                                        <h4 className="card-title mbr-fonts-style display-7"><strong>Unit 6</strong></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }


    render() {
        let el = document.getElementById("addBook");
        if(el!==null) {
            el.addEventListener('click', this.addBook)
        }
        console.log(this.props)
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
                {this.checkUnit(this.props.testUnit)}
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state.isAdmin,
        testUnit:state.unitCheck
    }),
    dispatch => ({})
)(Book);
import React , {Component}from 'react';
import axios from 'axios';
import Books from "./books";
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



    render() {
        console.log(this.state)
        return (
            <div>
                <section className="features3 cid-rqmSnChdXl mbr-parallax-background" id="features3-b">
                    {this.tableBooks()}
                </section>
            </div>
        );
    }
}


export default Book;
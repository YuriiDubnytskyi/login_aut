import React , {Component}from 'react';
import {connect} from "react-redux";
class addBook extends Component{
    constructor(props) {
        super(props);
        this.addBook = this.addBook.bind(this);
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
        );
    }
}




export default connect(
    state => ({
        testStore: state.isAdmin
    }),
    dispatch => ({

    })
)(addBook);
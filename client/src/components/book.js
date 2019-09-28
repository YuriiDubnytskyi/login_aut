import React , {Component}from 'react';
import axios from 'axios';
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
    tabRow(){
        return (<section className="features3 cid-rqmSnChdXl mbr-parallax-background" id="features3-b">
            <div className="container">
                <div className="media-container-row">
                    <div className="card p-3 col-12 col-md-3">
                        <div className="card-wrapper">
                            <div className="card-img">
                                <img src="assets/images/01.jpg" alt="Mobirise"/>
                            </div>
                            <div className="card-box">
                                <h4 className="card-title mbr-fonts-style display-7"></h4>
                                <p className="mbr-text mbr-fonts-style display-7"></p>
                            </div>
                            <div className="mbr-section-btn text-center"><a  className="btn btn-danger display-4" id="change" onClick="start()">Choose Unit</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }



    render() {
        console.log(this.state)
        return (
            <div>
            {this.tabRow()}
            </div>
        );
    }
}


export default Book;
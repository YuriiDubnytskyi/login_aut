import React , {Component}from 'react';

class Books extends Component{
    render() {

        return (
            <div>
                    <div className="container">
                        <div className="media-container-row">
                            <div className="card p-3 col-12 col-md-3">
                                <div className="card-wrapper">
                                    <div className="card-img">
                                        <img src="assets/images/01.jpg" alt="Mobirise"/>
                                    </div>
                                    <div className="card-box">
                                        <h4 className="card-title mbr-fonts-style display-7">{this.props.obj.bookName}</h4>
                                        <p className="mbr-text mbr-fonts-style display-7">{this.props.obj.bookText}</p>
                                    </div>
                                    <div className="mbr-section-btn text-center"><a  className="btn btn-danger display-4" id="change" onClick="start()">Choose Unit</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}


export default Books;
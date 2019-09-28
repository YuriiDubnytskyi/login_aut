import React , {Component}from 'react';
import {NavLink} from 'react-router-dom'

class Main extends Component{

    render() {
        return (
            <div>
                <section className="header8 cid-rqmi4jypMn mbr-fullscreen mbr-parallax-background" id="header8-2">
                    <div className="container align-center">
                        <div className="row justify-content-md-center">
                            <div className="mbr-white col-md-10">
                                <h1 className="mbr-section-title align-center py-2 mbr-bold mbr-fonts-style display-1">Hello !<br/>let's go to study</h1>
                                <p className="mbr-text align-center py-2 mbr-fonts-style display-5"></p>
                                <div className="mbr-section-btn text-center"><a className="btn btn-md btn-info-outline display-4" href="index.html#features3-4">Go</a></div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="engine">website builder</section><section className="features3 cid-rqmnEDf1w8" id="features3-4">
                <div className="container">
                    <div className="media-container-row">
                        <div className="card p-3 col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper">
                                <div className="card-img">
                                    <img src="assets/images/mbr-514x314.jpg" alt="Mobirise" title=""/>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title mbr-fonts-style display-7">My study</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">New words in my studying.<br/>I use New Headwey Elementary.</p>
                                </div>
                                <div className="mbr-section-btn text-center"><NavLink to='/books' className="btn btn-danger display-4">Go learning !!!</NavLink></div>
                            </div>
                        </div>
                        <div className="card p-3 col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper">
                                <div className="card-img">
                                    <img src="assets/images/mbr-514x343.jpg" alt="Mobirise" title=""/>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title mbr-fonts-style display-7">My books in English.</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">My books which I read and words which I don't know.<br/></p>
                                </div>
                                <div className="mbr-section-btn text-center"><a href="#" className="btn btn-danger display-4">Go learning !!!</a></div>
                            </div>
                        </div>

                        <div className="card p-3 col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper">
                                <div className="card-img">
                                    <img src="assets/images/mbr-514x348.jpg" alt="Mobirise" title=""/>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title mbr-fonts-style display-7">Users words.</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">Words which add users.<br/>You also can add new words.<br/></p>
                                </div>
                                <div className="mbr-section-btn text-center"><a href="#" className="btn btn-danger display-4">Go learning !!!</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className="mbr-section form1 cid-rqmzVx9wtW" id="form1-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="title col-12 col-lg-8">
                                <h2 className="mbr-section-title align-center pb-3 mbr-fonts-style display-2">Hello everybody !!!</h2>
                                <h3 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-5">You can send words. And I necessarity add words to data base.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="media-container-column col-lg-8" data-form-type="formoid">
                                <form className="mbr-form"  >
                                    <div className="row row-sm-offset">
                                        <div className="col-md-4 multi-horizontal" >
                                            <div className="form-group">
                                                <label className="form-control-label mbr-fonts-style display-7" >Word</label>
                                                <input type="text" className="form-control"    id="name-form1-7"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 multi-horizontal" >
                                            <div className="form-group">
                                                <label className="form-control-label mbr-fonts-style display-7" >Translate</label>
                                                <input type="text" className="form-control"  id="email-form1-7"/>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                <span className="input-group-btn"><button type="submit" className="btn btn-form btn-danger display-4" onClick="addWord()">Send to array</button></span>
                                <span className="input-group-btn"><button type="submit" className="btn btn-form btn-danger display-4" onClick="sendServer()">Send to server</button></span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;
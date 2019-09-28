import React , {Component}from 'react';

import Nav from "./components/navigation";
import Main from "./components/main";
import {BrowserRouter,Route} from 'react-router-dom'
import Book from "./components/book"
class App extends Component{

    render() {
        console.log(this.props);
        return (
            <BrowserRouter>
            <div>
                <Nav />
                <Route path="/" exact component={Main} />
                <Route path="/books" exact component={Book}/>
            </div>
            </BrowserRouter>
        );
    }
}


export default App;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            account: this.props.account
        }
    }

    render(){
        return(
            <div>
                <div class="row">
                    <div class="col s8">
                        <div className="container">
                            <h2><b>Welcome to Symposium Labs!</b></h2>
                            <i><h4>Your one-stop research paper library</h4></i>
                            <h6>Symposium Labs uses a technology called <b>Blockchain</b> which provides decentralization and immutabilty to any data present on it</h6>
                            <p>Powered by the <b><a href='https://ethereum.org/' target='_blank'>Ethereum Blockchain</a></b></p>
                            <p><i>Your account is: <b>{this.state.account}</b></i></p>
                        </div>
                    </div>
                    <div class="col s4">
                        <div className="container">
                            <ul class="collection with-header" style={{marginTop: 50}}>
                                <li class="collection-header"><h6><b>Choose what you want to do</b></h6></li>
                                <li class="collection-item"><i className="material-icons">cloud_upload</i>&nbsp;&nbsp;&nbsp;<Link to='/upload'>Upload a research paper</Link></li>
                                <li class="collection-item"><i className="material-icons">insert_drive_file</i>&nbsp;&nbsp;&nbsp;<Link to='/view'>View your uploaded research papers</Link></li>
                                <li class="collection-item"><i className="material-icons">person_add</i>&nbsp;&nbsp;&nbsp;<Link to='/doctors'>View/Add a trusted collaborators</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
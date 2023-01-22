import React from "react";
import '../Change.css';
import Header from "./Header";
import Footer from "./Footer";
import table1 from "./Userpart";
import ChangePassword from "./changenPW";
const Mild={
    marginTop:"10px",
    marginBottom:"10px",
    color:"Black",
    fontSize:"18px"
};
const Tab={
    fontSize:"10px",
    border:"solid",
    marginTop:"15px",
    marginBottom:"15px"
};

function User()
{
    return (<div className='container-fluid'>
        <Header/>
        <center>
        <div className="col-md-12">
            <ul className="list-group list-group-horizontal offset-2 "style={Mild}>
                <li className="list-group-item col-md-2">Search</li>
                        
                <div className="col-md-2">
                    <button type="button" onClick={table1} className="list-group-item list-group-item-action I">History</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick="University()" className="list-group-item list-group-item-action I">Change username</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick={ChangePassword} className="list-group-item list-group-item-action I">Change Password</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick="" className="list-group-item list-group-item-action I">Report Issue</button>
                </div>
            </ul>
        </div>
        <h4 id='abc'>Press an Option</h4>
        </center>    
        <Footer/>
    </div>);
}
export default User;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Change.css';

function List()
{
    return <div className='container-fluid'>
        <Header/>
        <div className="row">
                <aside className="col-lg-2 menubar">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" style="background-color:#5F9AA0">Filter</li>
                        <li className="list-group-item list-group-item-action I">Programmes</li>
                        <li className="list-group-item list-group-item-action I">University</li>
                        <li className="list-group-item list-group-item-action I">Type</li>
                        <li className="list-group-item list-group-item-action I">Region</li>
                        <li className="list-group-item list-group-item-action I">Schemes</li>
                        
                    </ul>
                </aside>
    
                <div className="col-lg-10 customTable text-white">
                    <table className="table">
                        <tbody><tr className="text-white">
                            <td>University</td>
                            <td>Research Name</td>
                            <td>Starting Year</td>
                            <td>Ending Year</td>
                            <td>Grant Provided</td>
                            <td>Link</td>
                        </tr>
                        <tr className="text-white">
                            <td>IIT H</td>
                            <td>AI</td>
                            <td>2023</td>
                            <td>2025</td>
                            <td>1000000</td>
                            <td><a href="Example.html" class="text-white">IITH-research</a></td>
                        </tr>
                        <tr className="text-white">
                            <td>IIT B</td>
                            <td>Mineral Engineering</td>
                            <td>2023</td>
                            <td>2026</td>
                            <td>1200000</td>
                        </tr>
                        <tr className="text-white">
                            <td>IIT C</td>
                            <td>CSE</td>
                            <td>2023</td>
                            <td>2026</td>
                            <td>4000000</td>
                        </tr>
                        <tr className="text-white">
                            <td>IIT B</td>
                            <td>CSE</td>
                            <td>2023</td>
                            <td>2024</td>
                            <td>250000</td>
                        </tr>
                    </tbody></table>
                    
                </div>
            </div>

        <Footer/>
    </div>;
}
export default List;
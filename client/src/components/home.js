import './home.css'
import React from "react";

function HomeComponent(props) {
    return (
        <div className="home-root">
            <div className="row">
                <div className="col-md-12">
                    <span className="home-title">
                        The making of IG Coder
                    </span>
                    <h1 className="home-sub-title">Policy Coding - We're trying to make it work!</h1>
                    <a href="/document/new" className="btn btn-dark">Create New Document</a>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;

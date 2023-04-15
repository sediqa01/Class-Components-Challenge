import React from "react";

class NavBarSimple extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }



    render(){
        return (
            <div>
                <h1>My Gallery</h1>
                <span>Hello, Guest! </span>
                <button>Login</button>
            </div>
        );

    }
    
}

export default NavBarSimple
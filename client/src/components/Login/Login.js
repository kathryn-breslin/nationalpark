import React from "react";


const Login = props =>
    <div className="container">
        <div id="searchDiv">
            <div id="searchHead">Join the NP Club</div>
            <form id="form">
                <label for="userName">Username:</label>
                <input name="userName" onChange={props.handleInput} type="text" className="form-control"/>
                <br></br>
                <label for="passWord">Password:</label>
                <input name="passWord" onChange={props.handleInput} type="text" className="form-control"/>
                <br></br>
                <button type="text" className="btn btn-primary btn-lg btn-block">Join!              
                    <a href={"/api/user/" + props.id} onClick={props.handleLoginInfo}>Join!</a>
                </button>
                {/* <a href={"/api/user/" + props.id} onClick={props.handleLoginInfo}></a>
                <button onClick={props.handleLoginInfo} type="text" className="btn btn-primary btn-lg btn-block">Join!</button> */}
            </form>
        </div>
    </div>

    export default Login;
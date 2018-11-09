import React from "react";


const Login = props =>
    <div className="container">
        <div id="searchDiv">
            <div id="searchHead">Join the NP Club</div>
            <form id="form">
                <label for="userName">Username:</label>
                <input name="userName" onChange={props.inputUser} type="text" className="form-control"/>
                <br></br>
                <label for="passWord">Password:</label>
                <input name="passWord" onChange={props.inputPassword} type="text" className="form-control"/>
                <br></br>
                {/* <button onClick={props.handleLoginInfo} type="text" className="btn btn-primary btn-lg btn-block">Join! </button> */}
                <a href={"/user/" + props.id} onClick={props.handleLoginInfo} onClick={props.handleUserInfo} className="btn btn-primary btn-lg btn-block">Join!</a>
            </form>
        </div>
    </div>

    export default Login;
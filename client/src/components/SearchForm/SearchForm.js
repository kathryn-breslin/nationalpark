import React from "react";
import "./SearchForm.css";

const SearchForm = props =>
    <div className="container">
        <div id="searchDiv">
            <div id="searchHead">Search for National Parks</div>
            <form id="form">
                <label for="searchTerm">Search by State: </label>
                <input name="searchTerm" placeholder="Ex. 'California'" onChange={props.handleSearch} type="text" className="form-control"/>
                <br></br>
                <button onClick={props.handleFormSearch} type="text" className="btn btn-primary btn-lg btn-block">Search</button>
                <button onClick={props.handleClearPage} type="text" className="btn btn-primary btn-lg btn-block">Clear Results</button>
            </form>
        </div>
    </div>

    export default SearchForm;
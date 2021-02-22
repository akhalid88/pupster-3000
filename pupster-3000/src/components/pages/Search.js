import React from "react";

function Search(props) {
	return (
		<div className="container">
			<h1>Search for your doggleganger</h1>
			<div className="alert alert-danger fade in"></div>
			<form className="search">
				<div className="form-group">
				<label for="breed">Breed Name:</label>
				<input type="text" name="breed" list="breed" className="form-control" placeholder="Search doggies" id="breed"></input>
				<button type="submit" className="btn btn-success">Search</button>
			</div>
			</form>
		</div>
	)
}

export default Search;
import React from 'react'

class Content extends React.Component{
	render(){
		const repo = "https://github.com/NazeemNato/Free-Quotes-Api"
		return(
			<>
			<div className="card">
			<div className="card-body">
			<h3 className="card-title">What is Api ? </h3>
			<p className="card-text">
			An API (Application Programming Interface) is a contract that allow developers to interact with an application through a set of interfaces. In this case, the application is a database of thousands of quotes and author name, and the interfaces are URL links.
			</p>
			</div>
			</div>
			<div className="card">
			<div className="card-body">
			<h3 className="card-title">What is this for? </h3>
			<p className="card-text">
			This website provides a API interface to highly detailed objects built from thousands of lines of data related to Quotes from famous an unkown persons.Using this website, you can consume information on Quotes, their author.
			</p>
			</div>
			</div>
			<div className="card">
			<div className="card-body">
			<h3 className="card-title">Contact Us !! </h3>
			<p className="card-text">Email:<a href="#">freequotesapi@yahoo.com</a></p>
			<p className="card-title">Github:<a href={repo}>Free Quotes Api</a></p>
			</div>
			</div>
			<div className="card">
			<div className="card-body">
			<h3 className="card-title">What's the technology stack?</h3>
			<p className="card-text">
			API were built in a php project using PDO and Mysql database to data.We will use more technology and good hosting soon
			</p>
			<p className="card-text">
			This website is built with reactjs for sharing our API documentation and examples
			</p>
			</div>
			</div>
			</>
			)
	}
}
export default Content
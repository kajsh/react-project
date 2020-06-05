import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Link
} from 'react-router-dom';


    

function App() {
  return (
    <header>
		<div className="main">
			<div className="container-fluid head ">
			<Link to="./"><p className="headtext"><FontAwesomeIcon icon="arrow-left"/>Back</p></Link>
			<div className="row header">
			<img src={"../unknown-person.jpg"} valign="left"></img>
			<p className="headtext"><h4>User Name</h4>@handle</p>
			</div>
			</div>

			<div className="container-fluid body">
			<span className="heading">Bio</span>
			<p>Lorem ipsum dolor sit amet</p>
			<span className="heading">Works at</span>
			<p>Lorem ipsum dolor sit amet</p>
			<div className="row">
			<div className="col mb-10">
			<span className="heading">Repositories</span>
			<p>52</p>
			</div>
			<div className="col mb-2">
			<span className="heading">Followers</span>
			<p>259</p>
			</div>
			</div>

			<span className="heading">Pinned Repositories</span>
       		<div className="row repo">
	       		<div className="col mb-12">
	       		<div className="card">
	       		<div className="card-body">
	       		<div className="row">
	       		<div className="media">		
  					<FontAwesomeIcon icon="user" id="user"/>
  				</div>
  			    <div>	
				   <p className="card-text"><b>username/reponame</b><br></br>Description about repository</p>
				</div>
				</div>
	     		</div>  			
	        	</div>
	      		</div>
	      	</div>

	      	<div className="row repo">
	       		<div className="col mb-12">
	       		<div className="card">
	       		<div className="card-body">
	       		<div className="row">
	       		<div className="media">		
  					<FontAwesomeIcon icon="user" id="user"/>
  				</div>
  			    <div>	
				   <p className="card-text"><b>username/reponame</b><br></br>Description about repository</p>
				</div>
				</div>
	     		</div>  			
	        	</div>
	      		</div>
	      	</div>

	      	<div className="row repo">
	       		<div className="col mb-12">
	       		<div className="card">
	       		<div className="card-body">
	       		<div className="row">
	       		<div className="media">		
  					<FontAwesomeIcon icon="user" id="user"/>
  				</div>
  			    <div>	
				   <p className="card-text"><b>username/reponame</b><br></br>Description about repository</p>
				</div>
				</div>
	     		</div>  			
	        	</div>
	      		</div>
	      	</div>
	      	</div>
	    </div>		
    </header>
  );
}

export default App;

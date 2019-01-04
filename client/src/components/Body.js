import React from "react";

class Body extends React.Component{	
	render(){
		return(
			<table className="table table-hover">
			<tbody>
				<tr className="table-secondary">
      				<th scope="row" >Item</th>
      				<td> Price</td>
      				<td> Type</td>
      				<td> Expiration Date</td>
    			</tr>
			</tbody>		
			</table> 
		);
	}
}

export default Body;

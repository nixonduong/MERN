import React from "react";

class Body extends React.Component{	
	constructor(){
		super();
		this.state = {
			itemList: []
		}
	}

	componentDidMount(){
		fetch('/get-data')
		.then(res => res.json())
		.then(itemList => this.setState({itemList}));
	}

	render(){
		return(
			<div>
				<table className="table table-hover">
					<tbody>
						<tr className="table-secondary">
      						<th> Item</th>
      						<th> Price</th>
      						<th> Type</th>
      						<th> Expiration Date</th>
    					</tr>
						{this.state.itemList.map(item => 
							<tr key= {item.id} >
								<td>{item.item}</td>
								<td>{item.price}</td>
								<td>{item.type}</td>
								<td>{item.expiration}</td>
							</tr>
						)}
	
					</tbody>		
				</table> 
			</div>
			
		);
	}
}

export default Body;

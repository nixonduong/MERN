import React from "react";

class Footer extends React.Component{
	render(){
		return(
			<div className="form-group">
{/*  START OF FORM */}
				<form method= "POST" action= "/submit">
{/* HEADER */}
				<h4> Insert new item:</h4>
{/* ITEM INPUT:  NAME= item     */}
	 			<label className="col-form-label"  htmlFor="inputDefault">Item</label>
	 			<input type="text" className="form-control" placeholder="Item" id="inputDefault" name="item"></input>
				<br />
{/* PRICE INPUT: NAME= price    */}
				<label class="control-label">Price</label>
				<div class="form-group">
					<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text">$</span>
					</div>
					<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder= "0" name= "price"></input>
					<div class="input-group-append">
						<span class="input-group-text">.00</span>
					</div>
					</div>
				</div>
{/* TYPE INPUT:  NAME= type    */}				
				<label className="col-form-label"  htmlFor="inputDefault">Type</label>
	 			<input type="text" className="form-control" placeholder="Type" id="inputDefault" name= "type"></input>
				<br />
{/* EXPIRATION DATE INPUT:  NAME= expiration 	 */}		
				<label className="col-form-label"  htmlFor="inputDefault">Expiration Date</label>
	 			<input type="text" className="form-control" placeholder="MMDDYYYY" id="inputDefault" name= "expiration"></input>
{/* SUBMIT BUTTON */}
	 			<button type="submit" className="btn btn-success">Submit</button>
{/* END OF FORM */}
				</form>
			</div>
		);
	}
}

export default Footer;

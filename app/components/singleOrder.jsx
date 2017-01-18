import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class singleOrder extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const date;
		return (
			<div className="singleOrder-detail container-fluid">
				<div className="row">
					{
						this.props.currentOrder.length > 0 ?
							<div>
								<p> Order Placed On: { this.props.currentOrder[0].created_at.slice(0,10) this.props.currentOrder[0].created_at.slice(11, 16)}</p>
								<p> ${this.props.currentOrder.map(product => product.price * product.selectedProduct.quantity).reduce((a, b) => a + b).toFixed(2)}</p>
							</div>
						:
							<div></div>
					}

					{
						this.props.currentOrder && this.props.currentOrder.map((product, index) => {
							date = product.created_at
						return (
							<div key={product.id}>
								<Link to={`/products/${product.id}`}>
									<p>{ product.name }</p>
								</Link>
								<Link to={`/products/${product.id}`}>
									<img src={ product.imageUrl } width="150" height="150"/>
								</Link>
								<p>${ product.price }</p>
								<p>{ product.selectedProduct.quantity === 1 ? 
										<p>{ product.selectedProduct.quantity } Copy</p> 
									: 
										<p>{ product.selectedProduct.quantity} Total Quantity</p>
									}
								</p>
								<p>Total Cost: {(product.price * product.selectedProduct.quantity).toFixed(2)}</p>
							</div>
						)
						})
					}
				</div>
			</div>
		)
	}
}

export default singleOrder;
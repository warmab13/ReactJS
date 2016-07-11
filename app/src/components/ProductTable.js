import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.js'
import ProductRow from './ProductRow.js'

export default class ProductTable extends React.Component {
	
	constructor(){
		super()
	}

	render() {
		return (
			<div>
			<ProductCategoryRow/>
			<ProductRow/>
			<ProductRow/>
			<ProductRow/>
			<ProductCategoryRow/>
			<ProductRow/>
			<ProductRow/>
			<ProductRow/>
			</div>
		)
	}
}


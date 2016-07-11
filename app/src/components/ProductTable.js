import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.js'
import ProductRow from './ProductRow.js'

export default class ProductTable extends React.Component {
	
	constructor(){
		super()
	}

	render() {
		let rows = []
		let last_category = null

		if(this.props.products != null){
			this.props.products.forEach((product) => {
				console.log(product);
				if(product.category != last_category)
					rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
				rows.push(<ProductRow product={product.name} key={product.name}/>)
				last_category = product.category		
			})
		}else{
			rows.push(<h1>Loading</h1>)
		}	

		return (
			<div>
				{ rows }
			</div>
		)
	}
}


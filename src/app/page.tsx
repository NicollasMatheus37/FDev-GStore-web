import ProductComponent from '@/components/Product/product-component';
import { Product, products } from '@/core';

export default function Home() {
	return (
		<div className={'grid grid-cols-4 container'}>
			{products.map((product: Product) => (
				<ProductComponent key={`product_${product.id}`} product={product} />
			))}
		</div>
	);
}

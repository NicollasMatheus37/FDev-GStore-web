import { RouteProps } from '@/helpers/routes';
import { products } from '@/core';

export default function (props: RouteProps) {
	const { params } = props;

	const product = products.find(product => product.id === Number(params.id));

	return <div>Product: {product?.name}</div>;
}
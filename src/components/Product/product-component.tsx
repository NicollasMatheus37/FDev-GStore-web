import React from 'react';
import Link from 'next/link';
import { Product } from '@/core';

interface IProductComponentProps {
	product: Product
}

export default function (props: IProductComponentProps) {
	const { product } = props;

	return (
		<Link href={`/product/${product.id}`} className={'flex flex-col bg-violet-dark border'}>
			{product.name}
		</Link>
	);
};

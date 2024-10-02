// TODO: Migrate to class
import Priceable from '@/core/product/priceable';
import { ProductSpecs } from '@/core';

export default interface Product extends Priceable {
	id: number;
	name: string;
	description: string;
	brand: string;
	model: string;
	// TODO: Migrate to new entity (product_prices)
	image: string;
	// TODO: Migrate to new entity (product_statistics)
	rating: number;
	videoReview: string;
	tags: string[];
	specs: ProductSpecs;
}
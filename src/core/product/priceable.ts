// TODO: Migrate to class
// TODO: Needs improvement
export default interface Priceable {
	basePrice: number;
	promotionalPrice?: number;
	lowestPrice: number;
	highestPrice: number;
	averagePrice: number;
}
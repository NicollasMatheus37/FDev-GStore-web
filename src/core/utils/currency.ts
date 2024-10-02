import { TLocale } from '@/core/helpers/locale';

interface CurrencyOptions {
	locale: TLocale;
	currency: string;
	minimumFractionDigits: number;
	maximumFractionDigits: number;
}

export default class Currency {
	static format(value: number, { locale, currency, maximumFractionDigits, minimumFractionDigits}: CurrencyOptions): string {

		return value.toLocaleString((locale || 'pt-BR'), {
			style: 'currency',
			currency: currency || 'BRL',
			minimumFractionDigits: minimumFractionDigits || 2,
			maximumFractionDigits: maximumFractionDigits || 2,
		});
	}
}
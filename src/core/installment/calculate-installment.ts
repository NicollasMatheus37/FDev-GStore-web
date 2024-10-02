import Installment from '@/core/installment/installment';
import { MAX_NUMBER_OF_INSTALLMENTS } from '../helpers';

export default class CalculateInstallment {
	execute(value: number, numberOfInstallments: number, interestRate: number): Installment {
		if (numberOfInstallments in Array.from({ length: MAX_NUMBER_OF_INSTALLMENTS }, (_, i) => i + 1)) {
			throw new Error('Número de parcelas inválido.');
		}

		const totalValue = this.calculateTotalValue(value, numberOfInstallments, interestRate);

		return {
			totalValue,
			installmentValue: totalValue / numberOfInstallments,
			numberOfInstallments,
			interestRate,
		};
	}

	calculateTotalValue(value: number, interestRate: number, numberOfInstallments: number): number {
		return value * Math.pow(1 + interestRate, numberOfInstallments);
	}
}

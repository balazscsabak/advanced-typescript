export type SubmitRequest = {
	transactionId: string;
	customer: {
		firstName: string;
		lastName: string;
		address: string;
		email: string;
		previousAliases: {
			firstName: string;
			lastName: string;
			address: string;
		}[];
	};
	payment: {
		cardToken: string;
	};
};

type PaymentRequest = SubmitRequest['payment'];
type PreviousAliasesRequest = SubmitRequest['customer']['previousAliases'][0];

export function getPayment(): PaymentRequest {
	return {
		cardToken: 'jnJKNsd1d32d2aasddac',
	};
}

export function getPreviousAliases(): PreviousAliasesRequest {
	return {
		firstName: 'John',
		lastName: 'Doe',
		address: 'King street 9.',
	};
}

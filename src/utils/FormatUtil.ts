export const formatCurrency = (value: number, digits: number = 2): string => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(value)
}

export const formatReview = (rating: number, reviews: number): string => {
	const average = rating / reviews

	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 1,
		maximumFractionDigits: 1
	}).format(average)
}

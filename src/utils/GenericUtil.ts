export const shuffedData = <T>(data: T[], quantity: number): T[] => {
	const shuffledArray = data.sort(() => Math.random() - 0.5)
	return shuffledArray.slice(0, quantity)
}

export const shuffedSingleData = <T>(data: T[]): T => {
	const shuffledArray = shuffedData(data, 1)
	return shuffledArray[0]
}

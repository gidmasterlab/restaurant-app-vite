export const loadDynamicAsset = (asset: string) => {
	return new URL(`/src/${asset}`, import.meta.url).href
}

export const loadDynamicSvg = (svg: string) => {
	return new URL(`/src/assets/icons/${svg}.svg`, import.meta.url).href
}

// convert a number to superscript like 22 => ²²
export const toSuperscript = (num: number): string => {
	const superscriptMap = {
		'0': '⁰',
		'1': '¹',
		'2': '²',
		'3': '³',
		'4': '⁴',
		'5': '⁵',
		'6': '⁶',
		'7': '⁷',
		'8': '⁸',
		'9': '⁹'
	} as const

	return num
		.toString()
		.split('')
		.map((n) => superscriptMap[n as keyof typeof superscriptMap])
		.join('')
}

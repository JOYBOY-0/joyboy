export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export const isClient = typeof document !== 'undefined'
export const isServer = !isClient

export const SITE_TITLE = 'JOYBOY'
export const SITE_DESCRIPTION =
	'Hey you from the other side. Here I left everything I learned. Welcome to JOYBOY.'

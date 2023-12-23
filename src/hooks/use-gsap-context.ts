import { gsap } from 'gsap'

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect'
export const useGsapContext = (
	func: gsap.ContextFunc,
	deps: any[] = [],
	scope?: string | object | Element | undefined
) => {
	useIsomorphicLayoutEffect(() => {
		const ctx = gsap.context(func, scope)
		return () => {
			ctx?.revert()
		}
	}, deps)
}

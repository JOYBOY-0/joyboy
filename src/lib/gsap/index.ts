import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'
import { CustomBounce } from 'gsap/dist/CustomBounce'
import { CustomEase } from 'gsap/dist/CustomEase'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'
import { Flip } from 'gsap/dist/Flip'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import { TextPlugin } from 'gsap/dist/TextPlugin'

gsap.registerPlugin(
	CSSRulePlugin,
	CustomEase,
	CustomBounce,
	ScrollToPlugin,
	DrawSVGPlugin,
	ScrollTrigger,
	TextPlugin,
	Flip,
	SplitText
)

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
const DURATION = RECIPROCAL_GR * 0.8
const ease = CustomEase.create('custom', 'M0,0 C0.30,0.35 0.40,1 1,1')

// custom eases

export type RegisteredEffects =
	| 'fadeIn'
	| 'fadeInScale'
	| 'in'
	| 'out'
	| 'pulse'
	| 'flash'

gsap.config({
	autoSleep: 60,
	nullTargetWarn: false
})

gsap.defaults({
	ease: ease,
	duration: DURATION
})

gsap.registerEffect({
	name: 'pulse',
	effect: (targets: GSAPTweenTarget, config: GSAPTweenVars) => {
		return gsap.to(targets, {
			keyframes: {
				'0%': { scale: 1 },
				'50%': { scale: 1.05 },
				'100%': { scale: 1 },
				ease: 'power2.inOut'
			},
			duration: config.duration,
			repeat: config.repeat
		})
	},
	defaults: { duration: 1, repeat: -1 },
	extendTimeline: true
})

gsap.registerEffect({
	name: 'flash',
	effect: (targets: GSAPTweenTarget, config: GSAPTweenVars) => {
		return gsap.to(targets, {
			keyframes: {
				'0%': { autoAlpha: 1 },
				'25%': { autoAlpha: 0 },
				'50%': { autoAlpha: 1 },
				'75%': { autoAlpha: 0 },
				'100%': { autoAlpha: 1 },
				ease: 'none'
			},
			duration: config.duration,
			repeat: config.repeat
		})
	},
	defaults: { duration: DURATION * 2 },
	extendTimeline: true
})

gsap.registerEffect({
	name: 'typewritter',
	effect: (targets: GSAPTweenTarget, config: GSAPTweenVars) => {
		return gsap.fromTo(
			targets,
			{
				text: {
					value: ' ',
					preserveSpaces: true
				}
			},
			{
				text: {
					value: config.value
				},
				duration: config.duration,
				repeat: config.repeat,
				...config
			}
		)
	},
	extendTimeline: true
})

gsap.registerEffect({
	name: 'typewritter-reverse',
	effect: (targets: GSAPTweenTarget, config: GSAPTweenVars) => {
		return gsap.fromTo(
			targets,
			{
				text: {
					value: config.value
				}
			},
			{
				text: {
					value: ''
				},
				duration: config.duration,
				repeat: config.repeat,
				...config
			}
		)
	},
	extendTimeline: true
})

export {
	CSSRulePlugin,
	DrawSVGPlugin,
	DURATION,
	Flip,
	GOLDEN_RATIO,
	gsap,
	ScrollTrigger,
	SplitText,
	TextPlugin
}

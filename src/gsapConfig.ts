import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CustomEase } from "gsap/CustomEase"

gsap.registerPlugin(ScrollTrigger, CustomEase)

gsap.defaults({
    duration: 0.8
})

export * from "gsap";
export * from "gsap/ScrollTrigger";
export * from "gsap/CustomEase";
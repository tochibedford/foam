import styles from "./Loader.module.scss"
import { gsap } from "../../gsapConfig";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import img1 from "./assets/img (1).webp";
import img2 from "./assets/img (2).webp";
import img3 from "./assets/img (3).webp";
import img4 from "./assets/img (4).webp";
import img5 from "./assets/img (5).webp";
import img6 from "./assets/img (6).webp";
import img7 from "./assets/img (7).webp";
import img8 from "./assets/img (8).webp";
import img9 from "./assets/img (9).webp";
import img10 from "./assets/img (10).webp";
import img11 from "./assets/img (11).webp";
import img12 from "./assets/img (12).webp";
import img13 from "./assets/img (13).webp";
import img14 from "./assets/img (14).webp";
import img15 from "./assets/img (15).webp";
import img16 from "./assets/img (16).webp";
import img17 from "./assets/img (17).webp";

const Loader = () => {
    const loaderRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const loader = loaderRef?.current
        const tl = gsap.timeline({ onUpdate: () => { setProgress(Math.round(tl.progress() * 100)) }, onComplete: () => { if (progressRef.current) progressRef.current.style.opacity = "0.001" } })
        if (loader) {
            tl.to(loader?.querySelector("#foamSvg"), { duration: 1.5, width: "0.03em", delay: 0.4, ease: "expo.inOut" }) //foam svg reduce
                .to(loader?.querySelector("#loaderTitle"), { duration: 1.5, scale: "2", ease: "expo.inOut" }, "-=1.5") //title text increase
                .fromTo(loader?.querySelector(".imageAnim1"), { transform: "translate(-50%, -50%)" }, { duration: 0.6, opacity: "1", ease: "expo.inOut", zIndex: 1 }, "-=0.8") //center image
                .to(loader?.querySelector(".imageAnim1"), { duration: 0.8, scale: 0.4, opacity: "0.001", ease: "expo.inOut", zIndex: 1 })
                .to(loader?.querySelector(".imageAnim1"), { duration: 0.1, left: "55%", top: "55%", scale: 1 })
                .fromTo(loader?.querySelector(".imageAnim2"), { top: "35%", left: "20%", }, { top: "40%", left: "15%", duration: 1, opacity: "1", ease: "expo.inOut", zIndex: 1 }, "-=0.9")
                .fromTo(loader?.querySelector(".imageAnim3"), { top: "25%", left: "65%", }, { top: "20%", left: "70%", duration: 1, opacity: "1", ease: "expo.inOut", zIndex: 1 }, "-=1")
                .to(loader?.querySelector(".imageAnim2"), { top: "35%", left: "10%", duration: 0.6, opacity: "0.001", ease: "expo.inOut", zIndex: 1 })
                .to(loader?.querySelector(".imageAnim3"), { top: "25%", left: "65%", duration: 0.6, opacity: "0.001", ease: "expo.inOut", zIndex: 1 }, "-=0.6")
                .fromTo(loader?.querySelector(".imageAnim4"), { top: "35%", left: "10%", opacity: "0.001", }, { top: "30%", left: "15%", opacity: 1, duration: 0.4 }, "-=0.4")
                .fromTo(loader?.querySelector(".imageAnim5"), { top: "65%", left: "85%", opacity: "0.001", }, { top: "60%", left: "75%", opacity: 1, duration: 0.4 }, "-=0.4")
                .fromTo(loader?.querySelector(".imageAnim6"), { top: "0%", left: "60%", opacity: "0.001", }, { top: "5%", left: "65%", opacity: 1, duration: 0.4 }, "-=0.4")
                .to(loader?.querySelector(".imageAnim4"), { top: "90%", left: "40%", opacity: 1, duration: 0.6, ease: "expo.inOut" }, "+=0.5")
                .to(loader?.querySelector(".imageAnim5"), { top: "-5%", left: "20%", opacity: 1, duration: 0.6, ease: "expo.inOut" }, "-=0.6")
                .to(loader?.querySelector(".imageAnim6"), { top: "10%", left: "80%", opacity: 1, duration: 0.6, ease: "expo.inOut" }, "-=0.6")
                .to(loader?.querySelector("#loaderTitle"), { duration: 0.7, opacity: 0.001, ease: "expo.inOut" }, "-=0.6") //title text increase
                .to(loader, { backgroundColor: "white" }, "-=0.7")
                .to([loader?.querySelector("#imageFieldInner")?.querySelectorAll('img')], { opacity: 1 }, "-=0.5")
                .fromTo(loader?.querySelector("#imageFieldInner"), { scale: 1.05 }, { duration: 0.5, scale: 1 }, "-=0.5")


            // tl.to(loader?.querySelector(".imageAnim1"), { duration: 1, scale: 1, opacity: "0", ease: "expo.inOut", zIndex: "inherit" })
        }
    }, [])

    useEffect(() => {
        const loader = loaderRef?.current
        let mouseDown = false
        const shift = {
            x: 0,
            y: 0
        }
        const handleMouseDown = (e: MouseEvent) => {
            const imageField = loader?.querySelector(`.${styles.imageField}`)
            imageField?.classList.add(styles.grabbing)
            mouseDown = true
            if (imageField) {
                shift.x = e.clientX - imageField.getBoundingClientRect()?.left
                shift.y = e.clientY - imageField.getBoundingClientRect()?.top
            }
        }
        const handleTouchStart = (e: TouchEvent) => {
            const touch = e.touches[0]
            const imageField = loader?.querySelector(`.${styles.imageField}`)
            imageField?.classList.add(styles.grabbing)
            mouseDown = true
            if (imageField) {
                shift.x = touch.clientX - imageField.getBoundingClientRect()?.left
                shift.y = touch.clientY - imageField.getBoundingClientRect()?.top
            }

        }

        const handleMouseUp = () => {
            loader?.querySelector(`.${styles.imageField}`)?.classList.remove(styles.grabbing)
            mouseDown = false
        }

        const handleTouchEnd = () => {
            loader?.querySelector(`.${styles.imageField}`)?.classList.remove(styles.grabbing)
            mouseDown = false
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (mouseDown) {
                const imageField = loader?.querySelector<HTMLDivElement>(`.${styles.imageField}`)
                if (loader && imageField) {
                    // extra height and width are used to calculate the bounds for how much you can drag the image field
                    const extraWidth = (imageField.offsetWidth - loader?.offsetWidth)
                    const extraHeight = (imageField.offsetHeight - loader?.offsetHeight)
                    imageField.style.left = `${Math.max(Math.min(0, e.pageX - shift.x), -extraWidth)}px`
                    imageField.style.top = `${Math.max(Math.min(0, e.pageY - shift.y), -extraHeight)}px`
                }

            }
        }

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            const touch = e.touches[0]
            if (mouseDown) {
                const imageField = loader?.querySelector<HTMLDivElement>(`.${styles.imageField}`)
                if (loader && imageField) {
                    const extraWidth = (imageField.offsetWidth - loader?.offsetWidth)
                    const extraHeight = (imageField.offsetHeight - loader?.offsetHeight)
                    imageField.style.left = `${Math.max(Math.min(0, touch.pageX - shift.x), -extraWidth)}px`
                    imageField.style.top = `${Math.max(Math.min(0, touch.pageY - shift.y), -extraHeight)}px`
                }

            }
        }

        loader?.querySelector<HTMLDivElement>(`.${styles.imageField}`)?.addEventListener("mousedown", handleMouseDown)
        loader?.querySelector<HTMLDivElement>(`.${styles.imageField}`)?.addEventListener("touchstart", handleTouchStart)

        document.addEventListener("mousemove", handleMouseMove)
        loader?.addEventListener("touchmove", handleTouchMove)

        window.addEventListener("mouseup", handleMouseUp)
        loader?.querySelector<HTMLDivElement>(`.${styles.imageField}`)?.addEventListener("touchend", handleTouchEnd)

        return () => {
            loader?.querySelector<HTMLDivElement>(`.${styles.imageField}`)?.removeEventListener("mousedown", handleMouseDown)
            loader?.querySelector<HTMLDivElement>(`.${styles.imageField}`)?.removeEventListener("touchstart", handleTouchStart)

            document.removeEventListener("mousemove", handleMouseMove)
            loader?.removeEventListener("touchmove", handleTouchMove)

            window.removeEventListener("mouseup", handleMouseUp)
            loader?.querySelector<HTMLDivElement>(`.${styles.imageField}`)?.removeEventListener("mouseup", handleTouchEnd)

        }
    }, [])

    useEffect(() => {
        //parallax
        const handleScroll = () => {
            const scrollDistance = window.scrollY
            const damping = 0.5 //0.5 means ~ for every 1px of scrolling only move the controlled object 0.5px
            const loader = loaderRef?.current
            if (loader)
                loader.style.transform = `translateY(${scrollDistance * damping}px)`
        }
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className={styles.loaderContainer} ref={loaderRef}>
            <div className={styles.progress} ref={progressRef}>{progress}</div>
            <div className={styles.mainLoader}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 138" className={styles.foamSvg} id="foamSvg">
                    <path fill="currentColor" d="M42.6837 134.143V61.4479H60.2243V35.3791H42.1996C41.7155 29.7557 44.6203 25.7337 50.5416 25.7337C53.5954 25.7337 57.4685 27.1861 60.1871 27.9681V2.90481C56.6492 1.78758 50.6906 0 45.8865 0C25.9625 0 13.226 13.8165 13.226 31.506V35.3791H0.415009V61.4479H13.3005V134.143H42.6837Z"></path>
                    <path fill="currentColor" d="M309.517 77.3499C309.517 67.0714 314.656 59.5114 324.972 59.5114C333.165 59.5114 337.187 65.2838 337.187 74.2962V134.143H368.06V77.5361C368.06 67.5555 373.199 59.5114 383.329 59.5114C391.857 59.5114 396.028 65.2838 396.028 74.6313V134.143H426.417V66.5872C426.417 47.7804 414.202 33.4426 394.725 33.4426C379.605 33.4426 372.194 38.7308 363.367 49.3818C357.893 38.917 347.13 33.4426 335.548 33.4426C324.115 33.4426 313.986 40.1832 307.878 48.4135V35.3791H279.24V134.143H309.479V77.3499H309.517Z"></path>
                    <path fill="currentColor" d="M113.628 33.4426C83.2394 33.4426 60.0754 56.1225 60.0754 85.7292C60.0754 114.517 83.3884 137.532 113.628 137.532C143.868 137.532 167.33 114.554 167.33 85.7292C167.33 56.1225 144.017 33.4426 113.628 33.4426ZM113.628 109.191C99.9607 109.191 89.9801 98.9126 89.9801 85.7292C89.9801 72.2107 99.1414 61.5969 113.628 61.5969C127.929 61.5969 137.425 72.2107 137.425 85.7292C137.425 98.9126 127.445 109.191 113.628 109.191Z"></path>
                    <path fill="currentColor" d="M235.705 45.9929C227.512 37.9488 218.835 33.4426 207.253 33.4426C194.553 33.4426 183.455 37.9488 175.411 45.9929V124.162C183.455 132.057 194.702 136.563 207.253 136.563C218.835 136.563 227.512 131.908 235.705 123.864V134.18H265.311V35.3791H235.705V45.9929ZM213.174 108.893C199.506 108.893 189.675 98.7636 189.675 85.0961C189.675 71.4286 199.469 61.15 213.174 61.15C227.177 61.15 236.673 71.4286 236.673 85.0961C236.673 98.7636 227.177 108.893 213.174 108.893Z"></path>
                </svg>
                <div className={styles.loaderTitle} id="loaderTitle">
                    all about photography
                </div>
            </div>
            <div className={styles.imageField}>
                <div className={styles.imageFieldInner} id="imageFieldInner">
                    <img src={img1} alt="" className={`${styles.imageFieldImage} imageAnim1`} id={styles.image1} draggable="false" />
                    <img src={img2} alt="" className={`${styles.imageFieldImage} imageAnim2`} id={styles.image2} draggable="false" />
                    <img src={img3} alt="" className={`${styles.imageFieldImage} imageAnim3`} id={styles.image3} draggable="false" />
                    <img src={img4} alt="" className={`${styles.imageFieldImage} imageAnim4`} id={styles.image4} draggable="false" />
                    <img src={img5} alt="" className={`${styles.imageFieldImage} imageAnim5`} id={styles.image5} draggable="false" />
                    <img src={img6} alt="" className={`${styles.imageFieldImage} imageAnim6`} id={styles.image6} draggable="false" />
                    <img src={img7} alt="" className={`${styles.imageFieldImage} imageAnim7`} id={styles.image7} draggable="false" />
                    <img src={img8} alt="" className={`${styles.imageFieldImage} imageAnim8`} id={styles.image8} draggable="false" />
                    <img src={img9} alt="" className={`${styles.imageFieldImage} imageAnim9`} id={styles.image9} draggable="false" />
                    <img src={img10} alt="" className={`${styles.imageFieldImage} imageAnim10`} id={styles.image10} draggable="false" />
                    <img src={img11} alt="" className={`${styles.imageFieldImage} imageAnim11`} id={styles.image11} draggable="false" />
                    <img src={img12} alt="" className={`${styles.imageFieldImage} imageAnim12`} id={styles.image12} draggable="false" />
                    <img src={img13} alt="" className={`${styles.imageFieldImage} imageAnim13`} id={styles.image13} draggable="false" />
                    <img src={img14} alt="" className={`${styles.imageFieldImage} imageAnim14`} id={styles.image14} draggable="false" />
                    <img src={img15} alt="" className={`${styles.imageFieldImage} imageAnim15`} id={styles.image15} draggable="false" />
                    <img src={img16} alt="" className={`${styles.imageFieldImage} imageAnim16`} id={styles.image16} draggable="false" />
                    <img src={img17} alt="" className={`${styles.imageFieldImage} imageAnim17`} id={styles.image17} draggable="false" />
                </div>
            </div>
        </div>
    );
}

export default Loader

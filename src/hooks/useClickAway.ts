import React, { useRef, useEffect } from "react"

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useClickAway(ref: React.RefObject<HTMLElement>, callBack: () => void) {
	useEffect(() => {
		/**
     * Alert if clicked on outside of element
     */
		function handleClickOutside(event: Event) {
			const target = event.target as HTMLElement
			if (ref.current && !ref.current.contains(target)) {
				callBack()
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside)

		// this is for when it unmounts
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [ref])
}
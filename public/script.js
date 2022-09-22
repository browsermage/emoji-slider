
// The array will have images at index values from 0 to 6
const emojis = 
[
    "ice_3d",
    "cold_face_3d",
    "anxious_face_with_sweat_3d",
    "smiling_face_3d" ,
    "smiling_face_with_sunglasses_3d",
    "hot_face_3d" ,
    "fire_3d"  
]

// Fetching the decale image and the slider
const slider_decale = document.getElementsByClassName("custom-range-slider-decale")[0]
const slider = document.getElementsByClassName("custom-range-slider")[0]

/**
 * The reason I use "input" here and not change, is that 
 * change only gets fired on release but the input 
 * gets fired on every value change
 */
slider.addEventListener("input", (event) => {
    slider_decale.src = `assets/${emojis[event.target.value]}.png`

    /**
     * For the bounce animation to be triggered again we need to 
     * do three things, remove the class, force a 
     * re-paint and add the class back again
     */
    slider_decale.classList.remove("bounce")
     // forcing a re-paint can be done by many things, I just happend to go with focus
    slider_decale.focus()
    slider_decale.classList.add("bounce")
})
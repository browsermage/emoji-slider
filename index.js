
// The array will have images at index values from 0 to 6
// const emojis = 
// [
//     "ice_3d",
//     "cold_face_3d",
//     "anxious_face_with_sweat_3d",
//     "smiling_face_3d" ,
//     "smiling_face_with_sunglasses_3d",
//     "hot_face_3d" ,
//     "fire_3d"  
// ]

const emojis = 
[
    "https://firebasestorage.googleapis.com/v0/b/github-image-hosting.appspot.com/o/ice_3d.png?alt=media&token=7fb45d32-4bb2-430b-90f6-eac2cb5a24dc",
    "https://firebasestorage.googleapis.com/v0/b/github-image-hosting.appspot.com/o/cold_face_3d.png?alt=media&token=29553620-59da-43a7-867d-fd0df73f69d9",
    "https://firebasestorage.googleapis.com/v0/b/github-image-hosting.appspot.com/o/anxious_face_with_sweat_3d.png?alt=media&token=17f84866-f7b5-422c-a457-7c20fe1b8500",
    "https://firebasestorage.googleapis.com/v0/b/github-image-hosting.appspot.com/o/smiling_face_3d.png?alt=media&token=6810a3e9-c03f-4183-bc88-0a3d548e5bb4" ,
    "https://firebasestorage.googleapis.com/v0/b/github-image-hosting.appspot.com/o/smiling_face_with_sunglasses_3d.png?alt=media&token=dc06eaf0-54e0-462a-8e23-93ad3e07a66d",
    "https://firebasestorage.googleapis.com/v0/b/github-image-hosting.appspot.com/o/hot_face_3d.png?alt=media&token=eee4b7e3-6aa7-492d-a28f-965cabf8de1d" ,
    "https://firebasestorage.googleapis.com/v0/b/github-image-hosting.appspot.com/o/fire_3d.png?alt=media&token=2e44c732-c7a3-4240-abca-ac6b8dd081f2"  
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
    // slider_decale.src = `assets/${emojis[event.target.value]}.png`
    slider_decale.src = `${emojis[event.target.value]}`

    /**
     * For the bounce animation to be triggered again we need to 
     * do three things, remove the class, force a 
     * re-paint and add the class back again
     */
    slider_decale.classList.remove("bounce")
     // forcing a re-paint can be done in many ways, I just happend to go with focus
    slider_decale.focus()
    slider_decale.classList.add("bounce")
})
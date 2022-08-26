let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePoint = 0
let guestPoint = 0

function add1HomePoint() {
    homePoint += 1
    homeScore.textContent = homePoint
}
function add2HomePoint() {
    homePoint += 2
    homeScore.textContent = homePoint
}
function add3HomePoint() {
    homePoint += 3
    homeScore.textContent = homePoint
}
function add1GuestPoint() {
    guestPoint += 1
    guestScore.textContent = guestPoint
}
function add2GuestPoint() {
    guestPoint += 2
    guestScore.textContent = guestPoint
}
function add3GuestPoint() {
    guestPoint += 3
    guestScore.textContent = guestPoint
}

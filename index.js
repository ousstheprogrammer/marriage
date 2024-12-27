const section = document.querySelector("section")
const acceptButton = document.getElementById("accept")
const declineButton = document.getElementById("decline")
var count = 0

function teleportBox() {
  const maxWidth = window.innerWidth - section.offsetWidth
  const maxHeight = window.innerHeight - section.offsetHeight
  const randomX = Math.floor(Math.random() * maxWidth)
  const randomY = Math.floor(Math.random() * maxHeight)
  const leftPos = Math.max(randomX, 0)
  const topPos = Math.max(randomY, 0)

  section.style.position = "absolute"
  section.style.left = leftPos + "px"
  section.style.top = topPos + "px"
  count++

  if (count >= 7) {
    alert('You can click on "Yes" button now, woman.')
    count = 0;
  }
}

function weAreMarried() {
  alert("We are Married!!!")
}

declineButton.addEventListener("mouseover", teleportBox)
acceptButton.addEventListener("click", weAreMarried)

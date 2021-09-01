const images = ['0.jpg', '1.jpg', '2.jpg']

const chosenImage = images[Math.floor(Math.random() * images.length)]

console.log(chosenImage)

//자바스크릅트로 html생성
const bgImage = document.createElement('img')
console.log(bgImage)
bgImage.src = `img/${chosenImage}`

//body에 추가해줌
document.body.appendChild(bgImage)

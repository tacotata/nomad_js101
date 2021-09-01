const clock = document.querySelector('#clock')

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const second = String(date.getSeconds()).padStart(2, '0')
  clock.innerText = `${hours}:${minutes}:${second}`
}

//interval 매 2초마다 무슨일이 일어나게 하는거
//첫번째 argument 호출되는 function 두번째는 function 간격을 몇ms 로 할지
//5초마다 hello
//setInterval(sayHello, 5000)

//timeout  일정 시간이 흐르고 나옴
//setTimeout(sayHello, 5000)

//1초 쉬고말고 load하고 바로 나올수 있게
getClock()
setInterval(getClock, 1000)
//ms 1000= 1초
//padStart(원하는길이,"채워넣을 문자 "")
//String(new Date().getHours() ) rmfwkfh

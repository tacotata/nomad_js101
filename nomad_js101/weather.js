const API_KEY = 'eb553b85dcd41e5e32b86650b6da698e'

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  console.log(`You live in ${lat} , ${lon}`)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}4&appid=${API_KEY}&units=metric`
  //promise
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      const name = data.name
      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}
function onGeoError() {
  alert('Sorry Not Working')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

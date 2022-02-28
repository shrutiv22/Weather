var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue')
var cityname=document.querySelector('.name')
var countryName=document.querySelector('.country')
var desc=document.querySelector('.desc')
var temp=document.querySelector('.temp')
var hum=document.querySelector('.humidity')
var press=document.querySelector('.pressure')
var windSpeed=document.querySelector('.speed')


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=773e9b59a7e4266c8b3cdf2ffcf278ba')
    .then(response => response.json())
    .then(data=> {
        var nameValue=data['name'];
        var countryNameValue=data['sys']['country']
        var tempValue=data['main']['temp']
        var descValue=data['weather'][0]['description'];
	    var humValue=data['main']['humidity']
        var pressureValue=data['main']['pressure']
        var windSpeedValue=data['wind']['speed']


        cityname.innerHTML=nameValue;
        countryName.innerHTML=countryNameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML=descValue;
        hum.innerHTML=humValue;
        press.innerHTML=pressureValue;
        windSpeed.innerHTML=windSpeedValue;

    })

    .catch(err => alert("Wrong City Name!!"))
    
})
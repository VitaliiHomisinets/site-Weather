








let city = 'london';




let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=bdf3514951039ada6376e3aa0b29a002`;


let info = {
  city:"london",
  feelsLike:0,
  humidity:0,
  pressure:0,
  temp:0,
  tempMax:0,
  tempMin:0,
  visibility:0,
  windSpeed:0,
  clouds:0,
  city,
  description:"",
  tempMax:0,
  tempMin:0,

 
}



const fetchData = async () =>{
    const result = await fetch(`${url}`);
    const data = await result.json();

    const{
      
      wind:{
        speed:windSpeed,
      },
      clouds:{
        all:clouds,
      },
      visibility,
    name:city,
    weather:[{
        main:description,
    }] ,
    }=data;

    

    const{
      main:{
        feels_like:feelsLike,
        humidity,
        pressure,
        temp,
        temp_max:tempMax,
        temp_min:tempMin,      
    },
} = data;
console.log(data);
info ={
  ...info,
  feelsLike,
  humidity,
  pressure,
  temp,
  tempMax,
  tempMin,
  visibility,
  windSpeed,
  city,
  description,
  clouds,
  tempMin,
  tempMax,
 
};
renderComponent();
};

const getImage = ( description ) => {
  const value = description.toLowerCase();
  switch (value) {
    case "clouds":
      return "cloudy.png";
    case "clear":
      return "sunny.png";
    case "rain":
      return "rain.png";
    case "haze":
      return "fog.png";
    default:
      return "thermometer.png";
      
  }
};

const markup = () =>{
  const{city,description,clouds,tempMax,tempMin, feelsLike,humidity,windSpeed,visibility,pressure,temp} = info;
  return `
  <div style="display: flex;justify-content: center;">
    <div class="baner_2">
      <h3 id="city" style="text-align:center; color: #fff ">${city}</h3>
    </div>
  </div>

  <div class="img">
    <img style="width: 100px;height: 90px;" src="png/${getImage(description)}" alt="">
    <div><p class="p" style="margin-top:30px ;" ><span class="temp">${temp.toFixed(0)}°</span> </p></div>            
      <div>
        <div class="none"></div> 
      </div>
      <div class="feelslike">
        <div class="baner_3">
          <p style="text-align:center; color: #fff;font-size: 24px;" id="description">${description}</p>
        </div> 
        <p class="p" id="feelsLike">${feelsLike.toFixed(0)}°</p>
      </div>
   </div>

   <div class="line">
            <div class="line_1">
            </div>
          </div>
          

          <div class="icons">
            <div class="icon_1">
              <img  style="padding: 10px 35px 1px 35px;" src="png/iwwa_humidity.png" alt="">
              <p style="text-align:center; color: #fff;font-size: 20px;" id="humidity">${humidity}%</p>
            </div>
            <div class="icon_1">
              <img  style="padding: 10px 35px 1px 25px;" src="png/akar-icons_cloud.png" alt="">
              <p style="text-align:center; color: #fff;font-size: 20px;" id="cloud">${clouds}%</p>
            </div>
            <div class="icon_1">
              <img style="padding: 10px 30px 1px 30px;"  src="png/bi_wind.png" alt="">
              <p style="text-align:center; color: #fff;font-size: 20px;" id="wind">${windSpeed}km/h</p>
            </div>
            <div class="icon_1">
              <img style="padding: 10px 25px 1px 25px;"  src="png/emojione-monotone_fog.png" alt="">
              <p style="text-align:center; color: #fff;font-size: 20px;" id="visibility">${visibility}%</p>
            </div>
            <div class="icon_1">
              <img style="padding: 10px 30px 1px 30px;"  src="png/Group.png" alt="">
              <p style="text-align:center; color: #fff;font-size: 20px;" id="pressure">${pressure}%</p>
            </div>
            <div class="icon_1">
            <p style="text-align:center; color: #fff;font-size: 20px; padding-top:7px" id="tempMin">Min ${tempMin.toFixed(1)}°</p>
            <p style="text-align:center; color: #fff;font-size: 20px;" id="tempMax">Max ${tempMax.toFixed(1)}°</p>
          </div>
          </div>`
};

const renderComponent = () =>{
  today.innerHTML = markup();
  
};


fetchData();



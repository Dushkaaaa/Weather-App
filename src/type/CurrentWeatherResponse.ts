export type Hours = {
  time: string;
  time_epoch: number;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  }
}

export type WeatherResponse = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    wind_mph: number;
    condition: {
      icon: string;
      text: string;
    }
  };
  forecast: {
    forecastday: Array<{
      day: {
        maxtemp_c: number;
        mintemp_c: number;
      };
      hour: Hours[];
    }>;
  };
};
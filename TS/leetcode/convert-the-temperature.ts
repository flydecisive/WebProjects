function convertTemperature(celsius: number): number[] {
  const temperatureInKelvin = celsius + 273.15;
  const temperatureInFahrenheit = celsius * 1.8 + 32;
  return [temperatureInKelvin, temperatureInFahrenheit];
}

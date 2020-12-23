# Indian city name through api call


>### get all cities name of india


```
https://api-indiancity.herokuapp.com/api/allcities
```


>### search the city name by giving city name and api responce you the state and city name of json formate

```
https://api-indiancity.herokuapp.com/api/[cityname]

```

> in place of [cityname] put the city name which you want to search

## example

```
request: type = POST

https://api-indiancity.herokuapp.com/api/rajkot

responce:

{
  "cityname": {
    "Sl. No.": 3967,
    "City": {
      "Town": "Rajkot"
    },
    "Urban Status": "M.Corp.",
    "State Code": "24",
    "State": {
      " Union territory*": "Gujarat"
    },
    "District Code": "9",
    "District": "Rajkot"
  }
}
```
> <h2 align="center">MADE BY DEEP WITH ❤️❤️</h2>


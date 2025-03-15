# Omdbapi
- 영화 관련 API, 예제로 한 번 배우면서 다른 것 학습

- http://www.omdbapi.com/?apikey=<>&s=frozen 경로로 요청
``` json
{
	"Search": [
		{
			"Title": "Frozen",
			"Year": "2013",
			"imdbID": "tt2294629",
			"Type": "movie",
			"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"
		},
		...
	],
	"totalResults": "378",
	"Response": "True"
}
```


### QueryString
- 주소?속성=값&속성=값&속성=값
  - 7035c60c : api

### axios
- 비동기적으로 http 클라이언트 연결을 도와주는 패키지 라이브러리

``` javascript
import axios from "axios";

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}

fetchMovies();
```
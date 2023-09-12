export const exerciseOptions = {
	method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
	headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': 'ed316f829cmshc610d1a93adc58cp1684c5jsnfe7c486ccf08',
	}
};

export const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

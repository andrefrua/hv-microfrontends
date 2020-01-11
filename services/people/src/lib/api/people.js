const fetchPeople = async () => {
  const res = await fetch("https://swapi.co/api/people");
  const data = await res.json();
  return data;
};

const fetchMore = async url => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const fetchDetails = async id => {
  const res = await fetch(`https://swapi.co/api/people/${id}`);
  const data = await res.json();
  return data;
};

export { fetchPeople, fetchMore, fetchDetails };

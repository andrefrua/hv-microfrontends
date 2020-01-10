const fetchPeople = async () => {
  const res = await fetch("https://swapi.co/api/people");
  const data = await res.json();
  return data.results;
};

const fetchDetails = async id => {
  const res = await fetch(`https://swapi.co/api/people/${id}`);
  const data = await res.json();
  return data;
};

export { fetchPeople, fetchDetails };

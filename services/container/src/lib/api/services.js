const views = {
  data: [
    {
      name: "people",
      host: "localhost:3001"
    },
    {
      name: "starships",
      host: "localhost:3002"
    }
  ]
};

const fetchServices = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(views), 500);
  });
};

export { fetchServices };

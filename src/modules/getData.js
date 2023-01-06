const getData = async () => {
  const array = [];
  const arrayRes = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vWsxxgUetEjhxUMototD/scores',
  ).then((resp) => resp.json());
  arrayRes.result.forEach((e) => {
    array.push(e);
  });
  return array;
};

export default getData;
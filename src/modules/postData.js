// id vWsxxgUetEjhxUMototD

const postData = async(user, score) => {
    const resp = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vWsxxgUetEjhxUMototD/scores', {
        method: 'POST',
        body: JSON.stringify({
            user,
            score
          }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const list = await resp.json();
    return list.results;
}

export default postData;
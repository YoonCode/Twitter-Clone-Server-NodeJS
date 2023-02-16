let tweets = [
  {
    id: "1",
    text: "풀스택 개발자가 되자!",
    createdAt: new Date().toString(),
    userId: "1",
  },
  {
    id: "2",
    text: "올해도 화이팅!",
    createdAt: new Date().toString(),
    userId: "1",
  },
];

export async function getAll() {
  return Promise.all(
    tweets.map(async tweet => {
      const { username, name, url } = await userRepository.findById(
        tweet.userId
      );
      return { ...tweet, username, name, url };
    })
  );
}

export async function getAllByUsername(username) {
  return tweets.filter(t => t.username === username);
}

export async function getById(id) {
  const found = tweets.find(tweet => tweet.id === id);
  if (!found) {
    return null;
  }
  const { username, name, url } = await userRepository.findById(found.userId);
  return { ...found, username, name, url };
}

export async function create(text, userId) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    userId,
  };
  tweets = [tweet, ...tweets];
  return getById(tweet.id);
}

export async function update(id, text) {
  const tweet = tweets.find(t => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return getById(tweet.id);
}

export async function remove(id) {
  tweets = tweets.filter(t => t.id !== id);
}

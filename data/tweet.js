let tweets = [
  {
    id: "1",
    text: "NodeJS 공부 화이팅",
    createdAt: new Date().toString(),
    name: "Sangjin",
    username: "sangjin",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/3d/3d0c7a38612d1fba0e91e473af6c594799b31429.jpg",
  },
  {
    id: "2",
    text: "회계 공부 화이팅",
    createdAt: new Date().toString(),
    name: "Jinsol",
    username: "jinsol",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/3d/3d0c7a38612d1fba0e91e473af6c594799b31429.jpg",
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter(t => t.username === username);
}

export async function getById(id) {
  return tweets.find(t => t.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date().toString(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweets;
}

export async function update(id, text) {
  const tweet = tweets.find(t => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter(t => t.id !== id);
}

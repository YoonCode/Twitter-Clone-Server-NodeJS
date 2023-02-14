let tweets = [
  {
    id: "1",
    text: "풀스택 개발자가 되자!",
    createdAt: Date.now().toString(),
    name: "Sangjin",
    username: "sangjin",
    url: "https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg",
  },
  {
    id: "2",
    text: "올해도 화이팅!",
    createdAt: Date.now().toString(),
    name: "Jinsol",
    username: "jinsol",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
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
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
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

// abcd1234: $2b$10$PzYifIfX2tNJ8sEHLjYwteAwmjZU1r3Rwl7WMpIud8/p3BUW.6a0a
let users = [
  {
    id: "1",
    username: "bob",
    password: "$2b$10$PzYifIfX2tNJ8sEHLjYwteAwmjZU1r3Rwl7WMpIud8/p3BUW.6a0a",
    name: "Bob",
    email: "bob@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

export async function findByUsername(username) {
  return users.find(user => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}

// abcd1234: $2b$10$XEQzmnp0/a7P4lsz705Tbe/FdyLHZMHrkd9QklwlwXH0S4pB15Tm2

let users = [
  {
    id: "1",
    username: "bob",
    password: "$2b$10$XEQzmnp0/a7P4lsz705Tbe/FdyLHZMHrkd9QklwlwXH0S4pB15Tm2",
    name: "Bob",
    email: "bob@gmail.com",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/3d/3d0c7a38612d1fba0e91e473af6c594799b31429.jpg",
  },
];

export async function findByUsername(username) {
  return users.find(user => user.username === username);
}

export async function findById(id) {
  return users.find(user => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}

const USERS_KEY = "ovs_users";
const CURRENT_USER_KEY = "ovs_current_user";

function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser({ name, email, password }) {
  const users = getUsers();
  const exists = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return { success: false, message: "Email already registered" };
  }

  const user = { id: Date.now().toString(), name, email, password };
  users.push(user);
  saveUsers(users);
  return { success: true, user };
}

export function authenticateUser(email, password) {
  const users = getUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) return { success: false, message: "Invalid email or password" };
  setCurrentUser(user);
  return { success: true, user };
}

export function setCurrentUser(user) {
  if (!user) return localStorage.removeItem(CURRENT_USER_KEY);
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function signOut() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export default {
  getUsers,
  registerUser,
  authenticateUser,
  setCurrentUser,
  getCurrentUser,
  signOut,
};

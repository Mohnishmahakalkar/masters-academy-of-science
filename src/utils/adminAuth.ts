const SESSION_KEY = "mas_admin_auth";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export const isAdminAuthed = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return sessionStorage.getItem(SESSION_KEY) === "true";
};

export const loginAdmin = (password: string) => {
  if (!ADMIN_PASSWORD) {
    return false;
  }

  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "true");
    return true;
  }

  return false;
};

export const logoutAdmin = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(SESSION_KEY);
  }
};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAdminAuthed, loginAdmin } from "../utils/adminAuth";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAdminAuthed()) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const ok = loginAdmin(password);
    if (ok) {
      navigate("/admin");
      return;
    }

    setError("Invalid password or VITE_ADMIN_PASSWORD not set.");
  };

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card">
        <h1 className="text-2xl font-semibold text-ink">Admin Login</h1>
        <p className="mt-2 text-sm text-muted">
          Use the password set in the VITE_ADMIN_PASSWORD environment variable.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter admin password"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
          />
          {error ? <p className="text-sm text-[#f2a019]">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-full bg-[#f2a019] px-4 py-3 text-sm font-semibold text-[#0b1d2a] transition hover:bg-[#ffc35d]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


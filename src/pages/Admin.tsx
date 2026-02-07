import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContent, type Content } from "../data/contentStore";
import { isAdminAuthed, logoutAdmin } from "../utils/adminAuth";

const Admin = () => {
  const navigate = useNavigate();
  const { content, setContent } = useContent();
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!isAdminAuthed()) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    setDraft(JSON.stringify(content, null, 2));
  }, [content]);

  const parsedDraft = useMemo<Content | null>(() => {
    try {
      return JSON.parse(draft) as Content;
    } catch {
      return null;
    }
  }, [draft]);

  const handleApply = () => {
    if (!parsedDraft) {
      setStatus("Invalid JSON. Fix errors before saving.");
      return;
    }
    setContent(parsedDraft);
    setStatus("Preview updated. Download JSON to persist changes.");
  };

  const handleDownload = () => {
    const blob = new Blob([draft], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "content.json";
    link.click();
    URL.revokeObjectURL(url);
    setStatus("Downloaded content.json.");
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const text = await file.text();
    setDraft(text);
    setStatus(`Loaded ${file.name}. Review and save.`);
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate("/login");
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">
            Admin Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-ink">Content Manager</h1>
          <p className="mt-2 text-sm text-muted">
            Edit content JSON and preview changes locally. Download and replace{" "}
            <span className="font-semibold text-white">src/data/content.json</span> to
            make it permanent.
          </p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
        >
          Log out
        </button>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-ink">content.json</h2>
          <div className="flex flex-wrap gap-2">
            <label className="cursor-pointer rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40">
              Import JSON
              <input type="file" accept="application/json" onChange={handleUpload} className="hidden" />
            </label>
            <button
              type="button"
              onClick={handleDownload}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Download JSON
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="rounded-full bg-[#f2a019] px-4 py-2 text-sm font-semibold text-[#0b1d2a] transition hover:bg-[#ffc35d]"
            >
              Preview Changes
            </button>
          </div>
        </div>

        <textarea
          className="mt-4 h-[420px] w-full rounded-2xl border border-white/10 bg-[#0b1d2a] p-4 font-mono text-xs text-white/80"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        {status ? <p className="mt-3 text-sm text-muted">{status}</p> : null}
      </div>
    </div>
  );
};

export default Admin;

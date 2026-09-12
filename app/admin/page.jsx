"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Plus, 
  Trash2, 
  Edit3, 
  LogOut, 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  X,
  RefreshCw,
  Eye
} from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [projects, setProjects] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  // Form Data
  const initialForm = {
    title: "",
    description: "",
    categories: ["Next.js"],
    tags: "",
    demoUrl: "",
    githubUrl: "",
    accentGradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    featuredBadge: "",
  };
  const [formData, setFormData] = useState(initialForm);

  const gradientPresets = [
    { label: "Cyan & Purple", value: "from-cyan-500/20 via-blue-500/20 to-purple-500/20" },
    { label: "Emerald & Teal", value: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20" },
    { label: "Violet & Pink", value: "from-purple-500/20 via-pink-500/20 to-indigo-500/20" },
    { label: "Amber & Rose", value: "from-amber-500/20 via-orange-500/20 to-rose-500/20" },
    { label: "Sky & Emerald", value: "from-blue-500/20 via-cyan-500/20 to-emerald-500/20" },
  ];

  const availableCategories = ["React", "Next.js", "Fullstack", "API", "Mobile", "UI/UX"];

  const showToast = (msg, type = "success") => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => setToastMessage(""), 4000);
  };

  // 1. Check Authentication on Mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth");
        const data = await res.json();
        if (res.ok && data.authenticated) {
          setIsAuthenticated(true);
          loadProjects();
        } else {
          router.push("/admin/login");
        }
      } catch (err) {
        router.push("/admin/login");
      } finally {
        setIsCheckingAuth(false);
      }
    }
    checkAuth();
  }, [router]);

  // 2. Fetch Projects
  const loadProjects = async () => {
    setIsLoadingProjects(true);
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setProjects(data.data);
      }
    } catch (err) {
      showToast("Loyihalarni yuklashda xatolik yuz berdi", "error");
    } finally {
      setIsLoadingProjects(false);
    }
  };

  // 3. Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/auth", { method: "DELETE" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  // 4. Open Modal for Create or Edit
  const openCreateModal = () => {
    setEditingProject(null);
    setFormData(initialForm);
    setIsModalOpen(true);
  };

  const openEditModal = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || "",
      description: project.description || "",
      categories: project.categories || ["Next.js"],
      tags: Array.isArray(project.tags) ? project.tags.join(", ") : "",
      demoUrl: project.demoUrl || "",
      githubUrl: project.githubUrl || "",
      accentGradient: project.accentGradient || gradientPresets[0].value,
      featuredBadge: project.featuredBadge || "",
    });
    setIsModalOpen(true);
  };

  // Toggle Category Checkbox
  const toggleCategory = (cat) => {
    const exists = formData.categories.includes(cat);
    if (exists) {
      if (formData.categories.length > 1) {
        setFormData({
          ...formData,
          categories: formData.categories.filter((c) => c !== cat),
        });
      }
    } else {
      setFormData({
        ...formData,
        categories: [...formData.categories, cat],
      });
    }
  };

  // 5. Submit Form (Create or Edit)
  const handleSubmitProject = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        categories: formData.categories,
        tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean),
        demoUrl: formData.demoUrl,
        githubUrl: formData.githubUrl,
        accentGradient: formData.accentGradient,
        featuredBadge: formData.featuredBadge,
      };

      if (editingProject) {
        // Edit existing project
        payload.id = editingProject.id;
        const res = await fetch("/api/projects", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          showToast("Loyiha muvaffaqiyatli yangilandi! ✨");
          setIsModalOpen(false);
          loadProjects();
        } else {
          showToast(data.message || "Xatolik yuz berdi", "error");
        }
      } else {
        // Create new project
        const res = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          showToast("Yangi loyiha muvaffaqiyatli qo'shildi! 🎉");
          setIsModalOpen(false);
          loadProjects();
        } else {
          showToast(data.message || "Xatolik yuz berdi", "error");
        }
      }
    } catch (err) {
      showToast("Server bilan bog'lanishda xatolik", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 6. Delete Project
  const handleDeleteProject = async (id, title) => {
    if (!confirm(`"${title}" loyihasini o'chirishni tasdiqlaysizmi?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Loyiha muvaffaqiyatli o'chirildi!");
        setProjects(projects.filter((p) => p.id !== id));
      } else {
        showToast(data.message || "O'chirishda xatolik", "error");
      }
    } catch (err) {
      showToast("O'chirishda xatolik yuz berdi", "error");
    }
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-slate-300">
        <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mb-3" />
        <p className="text-sm">Admin ruxsati tekshirilmoqda...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed top-6 right-6 z-50 p-4 rounded-xl text-sm font-medium shadow-2xl flex items-center gap-2.5 backdrop-blur-xl border transition-all ${
            toastType === "success"
              ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.3)]"
              : "bg-rose-500/20 border-rose-500/40 text-rose-300 shadow-[0_0_25px_rgba(244,63,94,0.3)]"
          }`}
        >
          {toastType === "success" ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Admin Dashboard
            </h1>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
              {projects.length} ta loyiha
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Yangi loyihalaringizni qoʻshing, tahrirlang yoki oʻchiring. Oʻzgarishlar darhol saytda aks etadi.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white glass-panel-subtle hover:border-cyan-500/30 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>Saytni koʻrish</span>
          </Link>

          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Yangi loyiha qoʻshish</span>
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-rose-400 hover:text-rose-300 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Chiqish</span>
          </button>
        </div>
      </div>

      {/* Projects List Grid */}
      {isLoadingProjects ? (
        <div className="py-20 flex flex-col items-center justify-center text-slate-400">
          <RefreshCw className="w-7 h-7 text-cyan-400 animate-spin mb-2" />
          <p className="text-sm">Loyihalar yuklanmoqda...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="py-20 rounded-3xl glass-panel border border-white/10 text-center p-8">
          <Layers className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-1">Hali loyihalar yoʻq</h3>
          <p className="text-sm text-slate-400 mb-6 max-w-sm mx-auto">
            Birinchi loyihangizni qoʻshish uchun yuqoridagi tugmani bosing.
          </p>
          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Birinchi loyihani qoʻshish</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-panel border border-white/10 p-5 flex flex-col justify-between hover:border-cyan-500/30 transition-all group"
            >
              <div>
                {/* Top preview banner */}
                <div
                  className={`w-full h-28 rounded-xl mb-4 bg-gradient-to-br ${project.accentGradient || "from-cyan-500/20 to-purple-500/20"} border border-white/10 flex items-center justify-between p-3 relative overflow-hidden`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cyan-300" />
                  </div>
                  {project.featuredBadge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/30 text-cyan-200 border border-cyan-500/40">
                      {project.featuredBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Categories & Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.categories?.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {cat}
                    </span>
                  ))}
                  {project.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      title="Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => openEditModal(project)}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-colors"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Tahrirlash</span>
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id, project.title)}
                    className="p-1.5 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/15 transition-colors"
                    title="O'chirish"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal: Add or Edit Project */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl my-8 rounded-3xl glass-panel border border-white/15 p-6 sm:p-8 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {editingProject ? "Loyihani tahrirlash" : "Yangi loyiha qoʻshish"}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Barcha maydonlarni toʻldiring va saqlang
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmitProject} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Loyiha nomi <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Masalan: AI Platform SaaS"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/[0.06]"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Loyiha tavsifi <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Loyiha nima vazifani bajarishi va asosiy imkoniyatlari haqida qisqa ma'lumot..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/[0.06] resize-none"
                />
              </div>

              {/* Categories Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Kategoriyalar (bir yoki bir nechtasini tanlang) <span className="text-cyan-400">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableCategories.map((cat) => {
                    const isSelected = formData.categories.includes(cat);
                    return (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => toggleCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          isSelected
                            ? "bg-cyan-500 text-white border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                            : "bg-white/[0.03] text-slate-400 border-white/10 hover:text-white"
                        }`}
                      >
                        {cat} {isSelected && "✓"}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Ishlatilgan texnologiyalar (vergul bilan ajrating)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="Next.js 14, Tailwind CSS, TypeScript, OpenAI API"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/[0.06]"
                />
              </div>

              {/* URLs: Live Demo & GitHub */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Live Demo havolasi
                  </label>
                  <input
                    type="url"
                    value={formData.demoUrl}
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    placeholder="https://myproject.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/[0.06]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    GitHub kodi havolasi
                  </label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    placeholder="https://github.com/user/repo"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/[0.06]"
                  />
                </div>
              </div>

              {/* Featured Badge & Gradient Accent */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Maxsus nishon (ixtiyoriy)
                  </label>
                  <input
                    type="text"
                    value={formData.featuredBadge}
                    onChange={(e) => setFormData({ ...formData, featuredBadge: e.target.value })}
                    placeholder="Featured, New, Hot, yoki bo'sh qoldiring"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/[0.06]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Karta gradient rangi
                  </label>
                  <select
                    value={formData.accentGradient}
                    onChange={(e) => setFormData({ ...formData, accentGradient: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0f17] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    {gradientPresets.map((preset) => (
                      <option key={preset.value} value={preset.value} className="bg-[#0d0f17] text-white">
                        {preset.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  Bekor qilish
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Saqlanmoqda..." : editingProject ? "Oʻzgarishlarni saqlash" : "Loyihani qoʻshish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

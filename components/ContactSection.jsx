"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Sparkles,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an async sending request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  const socialLinks = [
    {
      name: "Telegram",
      handle: "@Rashd_uz",
      url: "https://t.me/Rashd_uz",
      icon: MessageSquare,
      color: "hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10",
    },
    {
      name: "GitHub",
      handle: "rashidbekrasuljonov83-cloud",
      url: "https://github.com/rashidbekrasuljonov83-cloud",
      icon: Github,
      color:
        "hover:text-purple-400 hover:border-purple-400/40 hover:bg-purple-400/10",
    },

    {
      name: "Email",
      handle: "rashidbekrasuljonov83@gmail.com",
      url: "mailto:rashidbekrasuljonov83@gmail.com",
      icon: Mail,
      color:
        "hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Grid: Left Column Socials & Status, Right Column Glass Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Open For Freelance Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open for freelance & full-time roles</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Keling, birgalikda ajoyib loyiha yaratamiz.
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Menga yangi loyihangiz, mavjud tizimni yaxshilash yoki hamkorlik
              takliflari boʻyicha bemalol murojaat qilishingiz mumkin. Tez orada
              javob qaytaraman!
            </p>

            {/* Quick Details Badges */}
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Ferg'ona, Uzbekistan (Remote Available)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Odatda 2-4 soat ichida javob beraman</span>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="space-y-2.5">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3">
                Ijtimoiy tarmoqlar & Bogʻlanish
              </div>
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between p-3.5 rounded-xl glass-panel border border-white/[0.08] text-slate-300 transition-all duration-200 group ${item.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-inherit transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-400">
                          {item.handle}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 group-hover:text-inherit">
                      →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Modern Glassmorphic Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl glass-panel border border-white/10 p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            {/* Corner Decorative Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Xabar yuborish
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Quyidagi formani toʻldiring va xabaringizni joʻnating.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Success Banner */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 text-sm"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>
                  Rahmat! Xabaringiz muvaffaqiyatli yetib keldi. Tez orada
                  bogʻlanaman.
                </span>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Input */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Ismingiz <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masalan: Sardor Aliyev"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/[0.06] transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Email manzilingiz <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/[0.06] transition-all"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Mavzu
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Loyiha taklifi yoki savol"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/[0.06] transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Xabaringiz <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Loyihangiz tavsifi, talablari yoki savolingiz..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/[0.06] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group overflow-hidden py-3.5 px-6 rounded-xl font-semibold text-white shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {/* Gradient Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600" />

                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      <span>Xabarni yuborish</span>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

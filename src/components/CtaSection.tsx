"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/app/actions";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function CtaSection({ lang = "en" }: { lang?: string }) {
  const t = (en: string, fr: string) => lang === "fr" ? fr : en;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setStatus("idle");
    
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const result = await submitContactForm(null, formData);
      
      if (result.success) {
        setStatus("success");
        setMessage(result.message);
        reset();
      } else {
        setStatus("error");
        setMessage(result.message);
      }
    } catch (error) {
      setStatus("error");
      setMessage("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 flex items-center justify-center overflow-hidden border-t border-white/10">
      {/* Uiverse.io Background Pattern (adapted to our palette) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          '--s': '100px',
          '--c1': '#be3231', // primary
          '--c2': '#d64544', // primary-light
          '--c3': '#862423', // primary-dark
          background: `
            repeating-conic-gradient(from 30deg, #0000 0 120deg, var(--c3) 0 180deg) 
            calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
            repeating-conic-gradient(from 30deg, var(--c1) 0 60deg, var(--c2) 0 120deg, var(--c3) 0 180deg)
          `,
          backgroundSize: 'var(--s) calc(var(--s) * 0.577)'
        } as React.CSSProperties}
      />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side: Text */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white drop-shadow-md">
            {t("Ready to start your next project?", "Prêt à démarrer votre prochain projet ?")}
          </h2>
          <p className="text-lg text-white/70 mb-10 drop-shadow-sm font-light">
            {t("Let's collaborate to build something extraordinary. Our team is ready to turn your vision into reality.", "Collaborons pour construire quelque chose d'extraordinaire. Notre équipe est prête à transformer votre vision en réalité.")}
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 w-full max-w-md bg-black/95 md:bg-black/60 md:backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-16 h-16 text-[#DC143C] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{t("Message Sent!", "Message Envoyé !")}</h3>
              <p className="text-white/70">{message}</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 px-6 py-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                {t("Send another message", "Envoyer un autre message")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">{t("Name", "Nom")}</label>
                <input 
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#DC143C]/50 transition-all"
                  placeholder={t("John Doe", "Jean Dupont")}
                />
                {errors.name && <p className="text-[#DC143C] text-xs mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">{t("Email", "E-mail")}</label>
                <input 
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#DC143C]/50 transition-all"
                  placeholder={t("john@example.com", "jean@exemple.com")}
                />
                {errors.email && <p className="text-[#DC143C] text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">{t("Message", "Message")}</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#DC143C]/50 transition-all resize-none"
                  placeholder={t("Tell us about your project...", "Parlez-nous de votre projet...")}
                />
                {errors.message && <p className="text-[#DC143C] text-xs mt-1">{errors.message.message}</p>}
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-[#DC143C] bg-[#DC143C]/10 p-3 rounded-lg text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p>{message}</p>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t("Sending...", "Envoi...")}
                  </>
                ) : (
                  t("Send Message", "Envoyer le Message")
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

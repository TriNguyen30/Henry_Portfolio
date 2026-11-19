"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowRight,
  Loader2,
  MessageCircle,
  CalendarDays,
} from "lucide-react";
import {
  sectionVariants,
  fadeInUpVariants,
  SPRING_GENTLE,
} from "@/lib/animations";
import { personalData } from "@/data/personal";
import { useContent } from "@/components/providers/content-provider";

export interface ContactSectionProps {
  email?: string;
  telegram?: string;
  calLink?: string;
}

export function ContactSection({
  email = personalData.email,
  telegram,
  calLink,
}: ContactSectionProps) {
  const t = useTranslations("Contact");
  const { personal } = useContent();
  const formRef = useRef<HTMLFormElement>(null);

  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Copy email to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy email failed:", err);
      setError(t("errors.copy"));
    }
  };

  // Send contact form using EmailJS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || isSending) return;

    setIsSending(true);
    setSubmitted(false);
    setError("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
        limitRate: {
          id: "portfolio-contact",
          throttle: 10000,
        },
      });

      setSubmitted(true);
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(t("errors.generic"));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
      className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-8 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <motion.h2
          variants={fadeInUpVariants}
          className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          variants={fadeInUpVariants}
          whileHover={{ scale: 1.03, x: 2 }}
          whileTap={{ scale: 0.96 }}
          transition={SPRING_GENTLE}
        >
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:shadow-xs group shrink-0"
          >
            <span>{t("directEmail")}</span>
            <ArrowRight className="size-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Left Column: Contact Information */}
        <motion.div
          variants={fadeInUpVariants}
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
              {t("heading")}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-zinc-500 leading-relaxed">
              {t("description")}
            </p>

            {/* Email Copy Card */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              transition={SPRING_GENTLE}
              className="mt-6 flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/70 hover:border-zinc-300 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-9 rounded-xl bg-white border border-zinc-200/70 flex items-center justify-center text-zinc-700 shrink-0 shadow-2xs">
                  <Mail className="size-4" />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] text-zinc-400 font-medium">
                    {t("emailLabel")}
                  </span>

                  <span className="text-xs sm:text-sm font-semibold text-zinc-900 truncate">
                    {email}
                  </span>
                </div>
              </div>

              <motion.button
                type="button"
                onClick={handleCopy}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={SPRING_GENTLE}
                className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 transition-colors cursor-pointer shrink-0"
                title={t("copyEmail")}
                aria-label={t("copyEmail")}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Check className="size-4 text-emerald-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Copy className="size-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

            {/* Optional Social Contact */}
            {telegram && (
              <motion.div
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
                transition={SPRING_GENTLE}
              >
                <a
                  href={telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-3 p-3.5 rounded-2xl border border-zinc-200/70 hover:bg-zinc-50 transition-colors group"
                >
                  <div className="size-9 rounded-xl bg-white border border-zinc-200/70 flex items-center justify-center text-zinc-700">
                    <MessageCircle className="size-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] text-zinc-400 font-medium">
                      {t("telegramLabel")}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900">
                      {t("telegramCta")}
                    </span>
                  </div>

                  <ArrowRight className="size-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )}
          </div>

          {/* Availability */}
          <div className="mt-6 pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />

              <span className="text-xs font-medium text-zinc-600">
                {personal.availabilityNote}
              </span>
            </div>

            {calLink && (
              <a
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 hover:text-zinc-950 underline underline-offset-4"
              >
                <CalendarDays className="size-3.5" />
                {t("bookCall")}
              </a>
            )}
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.form
          variants={fadeInUpVariants}
          ref={formRef}
          onSubmit={handleSubmit}
          onChange={() => {
            setSubmitted(false);
            setError("");
          }}
          className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200/70 bg-zinc-50/50"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase mb-1"
            >
              {t("form.name")}
            </label>

            <input
              id="contact-name"
              name="from_name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              placeholder={t("form.namePlaceholder")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase mb-1"
            >
              {t("form.email")}
            </label>

            <input
              id="contact-email"
              name="from_email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder={t("form.emailPlaceholder")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contact-subject"
              className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase mb-1"
            >
              {t("form.subject")}
            </label>

            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              minLength={3}
              maxLength={150}
              placeholder={t("form.subjectPlaceholder")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase mb-1"
            >
              {t("form.message")}
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              minLength={10}
              maxLength={3000}
              placeholder={t("form.messagePlaceholder")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                role="alert"
                className="flex items-start gap-2 text-xs text-red-600 bg-red-50 border border-red-100 rounded-xl p-3 overflow-hidden"
              >
                <span className="font-semibold">!</span>
                <p>{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success Message */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                role="status"
                className="flex items-start gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl p-3 overflow-hidden"
              >
                <Check className="size-4 shrink-0" />
                <p>{t("success")}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={!isSending ? { scale: 1.015 } : {}}
            whileTap={!isSending ? { scale: 0.985 } : {}}
            transition={SPRING_GENTLE}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-sm cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isSending ? (
                <motion.span
                  key="sending"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="inline-flex items-center gap-2"
                >
                  <Loader2 className="size-4 animate-spin" />
                  <span>{t("form.sending")}</span>
                </motion.span>
              ) : submitted ? (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="inline-flex items-center gap-2"
                >
                  <Check className="size-4" />
                  <span>{t("form.sent")}</span>
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="inline-flex items-center gap-2"
                >
                  <Send className="size-3.5" />
                  <span>{t("form.send")}</span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <p className="text-[10px] text-zinc-400 text-center leading-relaxed">
            {t("form.privacy")}
          </p>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default ContactSection;

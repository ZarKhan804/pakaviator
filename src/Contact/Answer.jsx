
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaPlus,
  FaMinus,
  FaQuestionCircle,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const Contact = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I contact Pak Aviator?",
      answer:
        "You can contact the Pak Aviator team through the contact form or contact details published on the website, if available. Always verify that the contact information belongs to the genuine website before sharing personal information.",
    },
    {
      question: "Why should I contact the Pak Aviator team?",
      answer:
        "You may contact the team to share website feedback, report an issue with informational content, ask a general question, or suggest a topic for a future article.",
    },
    {
      question: "Does Pak Aviator have a contact form?",
      answer:
        "A contact form may be available depending on the website's current design and functionality. If one is provided, complete the required fields and review your message before submitting it.",
    },
    {
      question: "What information should I include in my message?",
      answer:
        "Describe your question clearly and include only the details necessary to explain the issue. Avoid sending passwords, banking information, verification codes, or other sensitive personal data.",
    },
    {
      question: "Can I contact Pak Aviator about a website problem?",
      answer:
        "If the website provides a contact channel, you can report problems such as broken links, missing content, display issues, or pages that do not work as expected.",
    },
    {
      question: "Can I ask questions about Aviator gameplay?",
      answer:
        "You may submit general questions about gameplay concepts through an available contact channel. For official game rules, account issues, or operator-specific features, consult the relevant game's official support service.",
    },
    {
      question: "Can I contact Pak Aviator about an article?",
      answer:
        "If you notice unclear information, a possible factual error, or a broken reference in an article, you can report it through the website's published contact options, if available.",
    },
    {
      question: "How long does Pak Aviator take to reply?",
      answer:
        "Response times depend on whether the site operates a support service and how frequently messages are reviewed. Unless a response timeframe is published, a reply time cannot be guaranteed.",
    },
    {
      question: "Does Pak Aviator provide 24/7 customer support?",
      answer:
        "Do not assume that round-the-clock support is available. Check the website's published contact information for any stated support hours or response expectations.",
    },
    {
      question: "Can I contact Pak Aviator by email?",
      answer:
        "Email contact is possible only if a valid email address is published by the website. Verify the address before sending a message, and do not assume an email address that is not listed on an official page.",
    },
    {
      question: "Can I contact Pak Aviator through WhatsApp?",
      answer:
        "Use WhatsApp only if the website explicitly publishes a verified WhatsApp contact. Be cautious of unofficial numbers claiming to represent the site or promising guaranteed winnings.",
    },
    {
      question: "Can I contact Pak Aviator through social media?",
      answer:
        "You may use a social media account if the website links to a verified official profile. Be careful of impersonator accounts and never share private account or payment information in public comments.",
    },
    {
      question: "What should I do if the contact form is not working?",
      answer:
        "Check your internet connection, complete any required fields, and try refreshing the page. If the issue continues, use another verified contact method if one is available.",
    },
    {
      question: "Why did I not receive a confirmation after submitting a message?",
      answer:
        "A confirmation may depend on how the contact form is configured. Check for on-screen messages and your email's spam folder if an email confirmation was expected. Do not repeatedly submit sensitive information.",
    },
    {
      question: "Can I send screenshots with my message?",
      answer:
        "If the contact form supports attachments, a relevant screenshot may help explain a technical issue. Before uploading it, hide passwords, payment details, personal identifiers, and other confidential information.",
    },
    {
      question: "Can I report a fake Pak Aviator website?",
      answer:
        "If you find a suspicious website impersonating Pak Aviator, you can report it through the site's verified contact channel, if available. You may also report suspected fraud to the relevant platform or appropriate authority.",
    },
    {
      question: "Can I report misleading Aviator advertisements?",
      answer:
        "You can share details of potentially misleading advertisements through an available contact channel. Avoid clicking suspicious links or sharing personal information with advertisers promising certain profits.",
    },
    {
      question: "Can I contact Pak Aviator about a third-party game account?",
      answer:
        "Pak Aviator cannot be assumed to manage accounts on third-party gaming platforms. For login, verification, suspension, or account recovery issues, contact the official operator of the service where you registered.",
    },
    {
      question: "Can Pak Aviator resolve a deposit or withdrawal problem?",
      answer:
        "Financial transactions are generally managed by the relevant gaming operator and payment provider. Contact their verified support service for transaction-specific issues, and never send passwords or verification codes to an unofficial contact.",
    },
    {
      question: "What should I do if someone claims to be Pak Aviator support?",
      answer:
        "Verify the person's identity using contact details published on the genuine website. Never share passwords, one-time codes, banking credentials, or remote access to your device with an unverified person.",
    },
    {
      question: "Can I suggest a new topic for the Pak Aviator website?",
      answer:
        "Yes, if a contact or feedback option is available, you can suggest subjects such as gameplay explanations, online safety, common terminology, or responsible gaming information.",
    },
    {
      question: "Can I request a correction to website content?",
      answer:
        "If you identify a possible error, provide the page title, the relevant passage, and a brief explanation of the concern. The site operator can review the information if an editorial feedback process is available.",
    },
    {
      question: "Can I request the removal of personal information?",
      answer:
        "If you believe personal information has been published on the website, contact the site operator through a verified channel and explain the issue. The available options depend on the site's policies and applicable privacy laws.",
    },
    {
      question: "How can I ask about the Pak Aviator privacy policy?",
      answer:
        "Review the website's privacy policy first. If questions remain, use its published contact details, if available, and avoid including sensitive personal information in your initial message.",
    },
    {
      question: "Can I contact Pak Aviator about copyright concerns?",
      answer:
        "If you believe content on the website infringes your rights, use a verified contact channel and provide a clear description of the material and your concern. Follow any formal reporting process the website publishes.",
    },
    {
      question: "Can I ask for help with a page that will not open?",
      answer:
        "Try checking your internet connection, refreshing the page, or opening it in another browser. If the problem persists, report the affected page and describe the device and browser you are using, without sharing private data.",
    },
    {
      question: "Does contacting Pak Aviator guarantee a solution?",
      answer:
        "No. Sending a message does not guarantee a response or a particular outcome. Resolution depends on the nature of the issue, the available support service, and whether it falls within the site's responsibilities.",
    },
    {
      question: "Is it safe to share my password with customer support?",
      answer:
        "No. Never share your password, one-time verification code, PIN, or banking credentials with anyone claiming to provide support. Legitimate support should not need your secret login credentials.",
    },
    {
      question: "What should I do if I receive no response?",
      answer:
        "Check whether your message was submitted successfully and whether the website publishes an expected response timeframe. If appropriate, send one concise follow-up through a verified contact channel.",
    },
    {
      question: "What is the main purpose of the Pak Aviator Contact page?",
      answer:
        "The Contact page is intended to provide a way for visitors to send questions, feedback, and website-related reports through available contact channels. Always verify contact details and protect your personal information.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-200 px-4 py-16 text-gray-900 sm:px-6 md:py-24 lg:px-8">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-yellow-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-amber-800">
            <FaEnvelope />
            Contact Pak Aviator
          </span>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Contact Page{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Questions & Answers
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Find answers to 30 frequently asked questions about contacting
            Pak Aviator, website feedback, technical issues, privacy, and
            support.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-5 py-4 shadow-lg shadow-gray-900/5 transition-all focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-yellow-200">
            <FaSearch className="shrink-0 text-amber-600" />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setOpenIndex(null);
              }}
              placeholder="Search Contact questions..."
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
              aria-label="Search Contact questions"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setOpenIndex(null);
                }}
                className="shrink-0 rounded-full p-2 text-gray-500 transition hover:bg-yellow-100 hover:text-amber-700"
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </motion.div>

        {/* Question Count */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-gray-600">
            Showing{" "}
            <span className="font-extrabold text-amber-700">
              {filteredFaqs.length}
            </span>{" "}
            of {faqs.length} questions
          </p>

          {openIndex !== null && (
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="text-sm font-bold text-amber-700 transition hover:text-amber-900"
            >
              Close Answer
            </button>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-amber-400 bg-white shadow-lg shadow-amber-900/5"
                      : "border-gray-300 bg-white/80 hover:border-amber-400 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200 bg-yellow-50 text-sm font-extrabold text-amber-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-base font-bold leading-7 text-gray-900 sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-200 text-sm text-amber-700 transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-yellow-100" : "bg-white"
                      }`}
                    >
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mx-5 mb-5 border-l-4 border-amber-400 pl-5 sm:mx-6 sm:mb-6 sm:pl-6">
                          <p className="text-sm leading-8 text-gray-600 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="rounded-2xl border border-gray-300 bg-white px-6 py-12 text-center">
              <FaQuestionCircle className="mx-auto text-4xl text-amber-500" />

              <h3 className="mt-4 text-xl font-extrabold text-gray-900">
                No Questions Found
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                Try another keyword to find a Contact-related answer.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setOpenIndex(null);
                }}
                className="mt-5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-6 py-3 text-sm font-extrabold text-gray-950 transition hover:brightness-105"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Bottom Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl border border-amber-200 bg-white p-7 text-center shadow-lg shadow-gray-900/5 sm:p-10"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-500 text-2xl text-gray-950">
            <FaEnvelope />
          </div>

          <h2 className="mt-5 text-2xl font-black sm:text-3xl">
            Have More Questions?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Use the verified contact details available on the website to
            share feedback or report a problem. Keep your passwords,
            verification codes, and financial information private.
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-amber-700">
            Contact Us • Stay Safe • Stay Informed
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

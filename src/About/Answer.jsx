
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaPlus,
  FaMinus,
  FaQuestionCircle,
  FaInfoCircle,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const About = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Pak Aviator?",
      answer:
        "Pak Aviator is an informational platform focused on explaining the Aviator game concept, its features, common terminology, and responsible gaming practices. Visitors can use our content to understand the topic before making their own decisions.",
    },
    {
      question: "What is the main purpose of Pak Aviator?",
      answer:
        "The main purpose of Pak Aviator is to provide clear and accessible information about the game, including how gameplay works, what multipliers mean, and why understanding risks is important.",
    },
    {
      question: "Why was Pak Aviator created?",
      answer:
        "Pak Aviator is designed to help visitors find straightforward explanations about Aviator-related topics. Our aim is to make information easier to understand without promising guaranteed winnings or certain results.",
    },
    {
      question: "Is Pak Aviator an official Aviator game provider?",
      answer:
        "Pak Aviator should not be assumed to be the official developer or operator of any Aviator game. Visitors should verify the identity of a game provider and the authenticity of a platform through its official sources.",
    },
    {
      question: "What can I learn from the Pak Aviator About page?",
      answer:
        "The About page introduces the purpose of Pak Aviator, our informational approach, the topics we cover, and the importance of making informed decisions when exploring online gaming.",
    },
    {
      question: "Who can use the Pak Aviator website?",
      answer:
        "Visitors looking for general information about Aviator-style games can explore our educational content. Any real-money gaming must comply with applicable local laws and age restrictions.",
    },
    {
      question: "Is Pak Aviator designed for beginners?",
      answer:
        "Yes. Our informational content is intended to explain common concepts in straightforward language, helping beginners understand terms such as rounds, multipliers, and cash-out options.",
    },
    {
      question: "What makes Pak Aviator useful for visitors?",
      answer:
        "Pak Aviator brings related information together in one place, including basic game explanations, common questions, safety awareness, and responsible gaming guidance.",
    },
    {
      question: "Does Pak Aviator provide information about game rules?",
      answer:
        "Our content can explain common Aviator-style gameplay concepts. However, the exact rules, features, and terms can vary between providers, so always consult the specific platform's official rules.",
    },
    {
      question: "How does Pak Aviator explain Aviator gameplay?",
      answer:
        "We describe the general gameplay concept, including a rising multiplier and the decision to cash out before a round ends. Specific mechanics depend on the provider operating the game.",
    },
    {
      question: "What is a multiplier in Aviator?",
      answer:
        "A multiplier is a value that increases during a round according to the game's mechanics. In real-money versions, the outcome and potential return depend on the rules and the player's decisions. A higher multiplier is never guaranteed.",
    },
    {
      question: "Can Pak Aviator guarantee winning results?",
      answer:
        "No. Pak Aviator cannot guarantee wins, profits, or successful predictions. Game outcomes can be unpredictable, and anyone promising certain results should be treated with caution.",
    },
    {
      question: "Does Pak Aviator offer guaranteed Aviator signals?",
      answer:
        "You should not rely on claims of guaranteed signals. No signal can reliably guarantee the outcome of an individual game round, and claims of certain profits may be misleading.",
    },
    {
      question: "Does Pak Aviator teach winning strategies?",
      answer:
        "We can explain general gameplay concepts and risk awareness, but no strategy can guarantee a win. It is important to understand the possibility of losing money before participating in real-money games.",
    },
    {
      question: "Can Pak Aviator predict the next game round?",
      answer:
        "Pak Aviator cannot guarantee or verify the result of a future round. Be cautious of websites, apps, or individuals claiming they can predict every result or provide secret winning formulas.",
    },
    {
      question: "Does Pak Aviator explain responsible gaming?",
      answer:
        "Yes. Responsible gaming means setting limits, taking breaks, avoiding attempts to recover losses, and treating gaming as entertainment rather than a reliable way to earn income.",
    },
    {
      question: "Is Pak Aviator available to visitors in Pakistan?",
      answer:
        "Visitors may be able to access informational pages depending on their internet connection and local restrictions. The legality and availability of real-money gaming depend on applicable laws and the specific service.",
    },
    {
      question: "Can I access Pak Aviator on my mobile phone?",
      answer:
        "You can generally browse a responsive website on a modern mobile browser if the website is accessible. Availability and functionality depend on your device, browser, connection, and any network restrictions.",
    },
    {
      question: "Can I visit Pak Aviator using a computer?",
      answer:
        "Yes, a standard desktop or laptop browser can be used to view a website when it is available. A larger screen may make reading guides and answers more convenient.",
    },
    {
      question: "Does Pak Aviator require an account to read information?",
      answer:
        "Reading informational content may not require an account, depending on the pages and features available on the website. Avoid sharing personal information unless there is a clear and legitimate reason.",
    },
    {
      question: "Does Pak Aviator handle deposits or withdrawals?",
      answer:
        "Do not assume that Pak Aviator processes financial transactions. Deposits and withdrawals, where offered, are handled according to the policies of the relevant gaming operator or payment provider.",
    },
    {
      question: "How can I check whether an Aviator website is legitimate?",
      answer:
        "Verify the operator's identity, licensing information where applicable, official domain, terms and conditions, privacy policy, and support details. Avoid suspicious links, copied websites, and promises of guaranteed returns.",
    },
    {
      question: "How does Pak Aviator approach online safety?",
      answer:
        "Our informational approach encourages visitors to protect passwords, avoid suspicious downloads, verify website addresses, and never share banking details or verification codes with untrusted people.",
    },
    {
      question: "Does Pak Aviator collect personal information?",
      answer:
        "Personal data practices depend on the website's actual implementation and published privacy policy. Review that policy to understand what information may be collected, how it is used, and how to contact the site operator.",
    },
    {
      question: "How can I contact the Pak Aviator team?",
      answer:
        "Use the contact details or contact form published on the website, if available. Check that the contact information is authentic before sharing private information or account-related details.",
    },
    {
      question: "Does Pak Aviator provide customer support for third-party games?",
      answer:
        "Pak Aviator may provide general information through its own available contact channels, but it cannot be assumed to control third-party games or resolve their account, payment, or technical issues. Contact the relevant operator for those matters.",
    },
    {
      question: "Why should visitors read the Pak Aviator guides?",
      answer:
        "Guides can help visitors understand common terminology, gameplay mechanics, potential risks, and online safety considerations. Reading information can improve understanding, but it cannot remove the uncertainty of game outcomes.",
    },
    {
      question: "Can Aviator be used as a reliable source of income?",
      answer:
        "No game should be treated as a dependable source of income. Real-money gaming involves financial risk, and you should never spend money needed for food, education, bills, savings, or other essential expenses.",
    },
    {
      question: "What should I do if I lose money while gaming?",
      answer:
        "Avoid chasing losses or increasing your stakes to recover money. Stop playing, take a break, and seek help from a trusted person or appropriate support service if gaming is affecting your finances or well-being.",
    },
    {
      question: "What is the future goal of Pak Aviator?",
      answer:
        "Our goal is to keep the website's informational content clear, useful, and easy to navigate. Visitors should always verify important details with official providers and make responsible decisions based on their circumstances.",
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
            <FaInfoCircle />
            About Pak Aviator
          </span>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            About Page{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Questions & Answers
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Find answers to 30 frequently asked questions about Pak Aviator,
            our purpose, game information, online safety, and responsible
            gaming.
          </p>
        </motion.div>

        {/* Search */}
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
              placeholder="Search About page questions..."
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
              aria-label="Search About page questions"
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

        {/* FAQ Count */}
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

        {/* Questions */}
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
                        isOpen
                          ? "rotate-180 bg-yellow-100"
                          : "bg-white"
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
                Try another keyword to find an answer about Pak Aviator.
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

        {/* Bottom Help Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl border border-amber-200 bg-white p-7 text-center shadow-lg shadow-gray-900/5 sm:p-10"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-500 text-2xl text-gray-950">
            <FaQuestionCircle />
          </div>

          <h2 className="mt-5 text-2xl font-black sm:text-3xl">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Explore the information available on Pak Aviator and always
            verify game rules, website authenticity, and legal requirements
            through appropriate official sources.
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-amber-700">
            Stay Informed • Stay Safe • Play Responsibly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

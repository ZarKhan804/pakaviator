
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaPlus,
  FaMinus,
  FaQuestionCircle,
  FaBookOpen,
  FaTimes,
} from "react-icons/fa";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Pak Aviator Blog?",
      answer:
        "The Pak Aviator Blog is an informational section intended to share articles, guides, explanations, and general information related to Aviator-style games, gameplay concepts, and responsible gaming.",
    },
    {
      question: "What type of articles can I find on the Blog page?",
      answer:
        "The Blog page can feature educational articles about game mechanics, multipliers, cash-out concepts, online safety, common gaming terms, and responsible gaming practices.",
    },
    {
      question: "Who should read Pak Aviator Blog articles?",
      answer:
        "Anyone looking for general information about Aviator-style games may find these articles useful. Beginners can use them to learn common terms, while experienced readers can review general concepts and safety information.",
    },
    {
      question: "Are Pak Aviator Blog articles beginner-friendly?",
      answer:
        "The articles are intended to explain topics in straightforward language so readers can understand the basic concepts without needing advanced gaming knowledge.",
    },
    {
      question: "Can I learn how Aviator gameplay works from the Blog?",
      answer:
        "Articles can explain the general gameplay concept, including the rising multiplier and the decision to cash out before a round ends. Exact rules and features vary by game provider.",
    },
    {
      question: "Does the Blog explain Aviator multipliers?",
      answer:
        "Yes, informational articles may explain what a multiplier represents and how it relates to a game's displayed results. A multiplier does not predict the outcome of a future round.",
    },
    {
      question: "Can Blog articles help me understand cash-out?",
      answer:
        "A cash-out guide can explain the general concept of collecting a displayed return before a round ends. The available options and consequences depend on the rules of the specific game.",
    },
    {
      question: "Does the Pak Aviator Blog provide winning tricks?",
      answer:
        "The Blog may discuss common strategies and player approaches for educational purposes, but no trick or strategy can guarantee a win. Be cautious of claims promising certain profits.",
    },
    {
      question: "Can I use Blog articles to predict future Aviator rounds?",
      answer:
        "No. Reading an article cannot guarantee a prediction of a future round. Be careful with websites or individuals claiming that their formulas or signals can reveal every result.",
    },
    {
      question: "Does the Blog publish Aviator tips?",
      answer:
        "Articles may cover general gameplay considerations and risk awareness. Any tips should be treated as information rather than a promise of success or a way to eliminate the risk of losing money.",
    },
    {
      question: "Are Pak Aviator Blog articles free to read?",
      answer:
        "Whether articles are freely accessible depends on the website's current setup. If an article is available publicly on the Blog page, you can read it through your browser without assuming that other services are included.",
    },
    {
      question: "How can I find a specific article on the Blog?",
      answer:
        "Browse the available article titles and categories, if provided. If the Blog includes a search feature, enter a relevant keyword to help locate the topic you are looking for.",
    },
    {
      question: "How often are new Blog articles published?",
      answer:
        "Publishing frequency depends on the website's editorial schedule. Check the Blog page for the latest available posts and their publication dates rather than assuming that new articles appear every day.",
    },
    {
      question: "Are the Blog articles updated regularly?",
      answer:
        "Article updates depend on the site's publishing process. For important details such as game rules, operator policies, or legal requirements, always verify the latest information with the appropriate official source.",
    },
    {
      question: "Can I read Pak Aviator Blog articles on my phone?",
      answer:
        "You can read the Blog on a mobile browser if the website is accessible and its pages support your device. A responsive layout can make articles easier to read on different screen sizes.",
    },
    {
      question: "Can I access the Blog from a computer?",
      answer:
        "Yes, you can browse a website's Blog page on a desktop or laptop using a compatible browser, provided the website is accessible on your network.",
    },
    {
      question: "Does the Blog cover online gaming safety?",
      answer:
        "Safety-related articles can explain how to recognize suspicious websites, protect passwords, avoid unsafe downloads, and be careful when sharing personal or financial information online.",
    },
    {
      question: "Can the Blog help me identify fake Aviator websites?",
      answer:
        "Safety guides can explain warning signs such as suspicious domains, missing operator information, unrealistic promises, and requests for sensitive details. Always verify a platform through reliable official sources.",
    },
    {
      question: "Does the Blog explain responsible gaming?",
      answer:
        "Responsible gaming articles can discuss setting spending limits, taking breaks, avoiding chasing losses, and recognizing when gaming begins to affect your finances or well-being.",
    },
    {
      question: "Does Pak Aviator Blog guarantee accurate predictions?",
      answer:
        "No. Articles cannot guarantee game predictions or outcomes. Treat claims about guaranteed signals, secret algorithms, or certain profits with caution.",
    },
    {
      question: "Can Blog articles help me earn money from Aviator?",
      answer:
        "Blog articles should not be treated as a way to earn guaranteed income. Real-money games involve financial risk, and there is no reliable article or strategy that can ensure a profit.",
    },
    {
      question: "Does the Blog explain demo or practice modes?",
      answer:
        "Articles may explain the general purpose of demo or practice modes when a provider offers them. Availability and features vary by platform, so check the specific provider's information.",
    },
    {
      question: "Can Blog articles explain deposits and withdrawals?",
      answer:
        "An article may explain general payment terminology and what questions to ask about payment policies. Actual deposits, withdrawals, fees, and processing times depend on the relevant operator and payment provider.",
    },
    {
      question: "Does the Blog provide official game downloads?",
      answer:
        "Do not assume that a Blog article provides an official download. Only download software from a verified provider or trusted app store, and avoid suspicious files or unofficial installation links.",
    },
    {
      question: "Can I share Pak Aviator Blog articles?",
      answer:
        "You may be able to share publicly available article links with others. Follow the website's terms and respect applicable copyright rules when reproducing any article content.",
    },
    {
      question: "Can I suggest a topic for a new Blog article?",
      answer:
        "If the website provides a contact form or feedback channel, you can use it to suggest a topic. Whether a suggestion becomes a published article depends on the site's editorial decisions.",
    },
    {
      question: "How can I tell when a Blog article was published?",
      answer:
        "Look for a publication date or updated date displayed with the article, if available. For time-sensitive topics, confirm details with the relevant official provider because older information may no longer apply.",
    },
    {
      question: "Does the Blog provide information about gaming laws in Pakistan?",
      answer:
        "Articles may discuss general legal-awareness topics, but they are not a substitute for current legal advice. Laws and restrictions can change, so consult authoritative sources to understand the rules that apply to you.",
    },
    {
      question: "What should I do if I disagree with a Blog article?",
      answer:
        "Compare the information with trustworthy, current sources and the official rules of the relevant provider. If the website offers a contact or feedback option, you can use it to report a possible error.",
    },
    {
      question: "What is the main goal of the Pak Aviator Blog?",
      answer:
        "The goal is to make relevant information easier to understand through useful articles and guides. Readers should use the content to build their understanding, verify important details, and make responsible decisions.",
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
            <FaBookOpen />
            Pak Aviator Blog
          </span>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Blog{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Questions & Answers
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Explore 30 frequently asked questions about Pak Aviator Blog
            articles, gaming guides, online safety, and responsible gaming.
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
              placeholder="Search Blog questions..."
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
              aria-label="Search Blog questions"
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
                Try another keyword to find a Blog-related answer.
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
            <FaBookOpen />
          </div>

          <h2 className="mt-5 text-2xl font-black sm:text-3xl">
            Keep Exploring Our Blog
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Learn about gameplay concepts, explore useful guides, verify
            important information, and always make responsible decisions.
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-amber-700">
            Learn More • Stay Informed • Play Responsibly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

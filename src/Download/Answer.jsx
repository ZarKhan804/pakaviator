
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaPlus,
  FaMinus,
  FaQuestionCircle,
  FaDownload,
  FaTimes,
} from "react-icons/fa";

const Download = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Pak Aviator Download page?",
      answer:
        "The Pak Aviator Download page is intended to provide information about accessing the website and understanding safe download practices. Actual app availability depends on whether an official application is offered by a verified provider.",
    },
    {
      question: "Can I download the Pak Aviator app?",
      answer:
        "Only download an app if a genuine provider offers it through an official and verifiable source. Do not assume that an official Pak Aviator application exists simply because a website displays a download button.",
    },
    {
      question: "Is Pak Aviator available for Android?",
      answer:
        "Availability depends on whether a verified Android version is provided by the relevant operator. Check an official app store or the provider's verified website before installing anything.",
    },
    {
      question: "Is Pak Aviator available for iPhone?",
      answer:
        "An iPhone app is available only if the relevant provider publishes a legitimate iOS version. Check the Apple App Store and verify the developer's identity before downloading.",
    },
    {
      question: "Can I use Pak Aviator on a computer?",
      answer:
        "You may be able to access the website using a compatible desktop or laptop browser. Whether a separate computer application exists depends on the verified provider.",
    },
    {
      question: "How can I download an app safely?",
      answer:
        "Use a trusted official app store or a download page verified through the provider's genuine website. Check the developer, permissions, reviews, and requested access before installing the application.",
    },
    {
      question: "Is it safe to download an APK file?",
      answer:
        "APK files from unknown websites can contain harmful software or steal personal information. Avoid unfamiliar download links, verify the source carefully, and prefer trusted official distribution channels.",
    },
    {
      question: "Where should I find the official download link?",
      answer:
        "Start with the provider's verified website or official app-store listing. Confirm that the domain and developer match the genuine service, and avoid links shared by unknown people or suspicious advertisements.",
    },
    {
      question: "Why is the download button not working?",
      answer:
        "The link may be broken, the file may no longer be available, or your browser or network may be blocking the request. Verify the source and try again only if the destination is legitimate.",
    },
    {
      question: "Why is the app download taking so long?",
      answer:
        "Download speed can depend on your internet connection, server availability, file size, and device performance. Check your connection and available storage before trying again.",
    },
    {
      question: "What should I do if a download fails?",
      answer:
        "Check your connection, confirm that your device has enough storage, and verify that the source is still available. Do not try alternative files from suspicious websites just to complete the download.",
    },
    {
      question: "How much storage does the Pak Aviator app require?",
      answer:
        "The storage requirement depends on the actual application and its version. Check the size shown by the official store or verified provider instead of relying on an unverified estimate.",
    },
    {
      question: "What Android version is required?",
      answer:
        "The minimum Android version depends on the application being offered. Review the compatibility information on the official listing before downloading or installing it.",
    },
    {
      question: "What iOS version is required?",
      answer:
        "The required iOS version depends on the specific app and its current release. Check the compatibility details displayed in the official App Store listing.",
    },
    {
      question: "Can I download Pak Aviator without an account?",
      answer:
        "Viewing a public website may not require an account. App downloads and registration requirements depend on the specific service, so check its official instructions and privacy policy.",
    },
    {
      question: "Do I need to install an app to access Pak Aviator?",
      answer:
        "If the website works in your browser, a separate app may not be necessary for browsing its informational pages. Available features depend on the website's design and the provider's services.",
    },
    {
      question: "Can I use Pak Aviator in a mobile browser?",
      answer:
        "You may be able to access the website through a modern mobile browser if it is available on your network. Use the verified website address and avoid redirects to unfamiliar download pages.",
    },
    {
      question: "Why does my phone block an app installation?",
      answer:
        "Your device may block an installation because the source is untrusted, permissions are restricted, or the app is incompatible. Do not bypass security warnings unless the application's legitimacy has been independently verified.",
    },
    {
      question: "Is it safe to allow every app permission?",
      answer:
        "No. Review each permission carefully and allow only access that is necessary and reasonable for the app's stated purpose. Be cautious if an app requests contacts, messages, accessibility access, or other sensitive permissions without a clear explanation.",
    },
    {
      question: "What should I do if my antivirus flags a download?",
      answer:
        "Stop the installation and do not ignore the warning. Verify the file with the official provider and a trusted security tool. If you cannot establish that the file is safe, delete it.",
    },
    {
      question: "Can I update the app after downloading it?",
      answer:
        "Updates depend on the distribution method and whether the provider continues to support the app. Prefer updates delivered through a verified official store or the provider's authenticated update process.",
    },
    {
      question: "How can I uninstall an unwanted app?",
      answer:
        "Use your device's normal application-management settings to uninstall the app. If you suspect it is harmful, review your device's security guidance and consider changing passwords from a trusted device.",
    },
    {
      question: "What if the downloaded app crashes?",
      answer:
        "Confirm that your device meets the app's requirements, restart the device, and check for a verified update. If the problem continues, uninstall the app if appropriate and contact the genuine provider for help.",
    },
    {
      question: "Can I download Pak Aviator from a third-party website?",
      answer:
        "Third-party download sites may distribute modified, outdated, or harmful files. Prefer official app stores and verified provider websites, and avoid downloads whose origin cannot be confirmed.",
    },
    {
      question: "Is a download link shared on social media trustworthy?",
      answer:
        "Not necessarily. Social media links can lead to fake websites or harmful downloads. Verify the destination independently through the provider's official channels before opening or installing anything.",
    },
    {
      question: "Why does a download website ask for personal information?",
      answer:
        "Be cautious if a download page requests unnecessary personal details, passwords, banking information, or verification codes. Review the privacy policy and leave the page if the request appears suspicious.",
    },
    {
      question: "Can I download an older version of an app?",
      answer:
        "Older versions may lack security updates or be incompatible with your device. Use an older version only when the verified provider makes it available and explains that it is supported.",
    },
    {
      question: "Is downloading the app a guarantee of winning?",
      answer:
        "No. Installing an application cannot guarantee winnings, profits, or successful predictions. Be wary of download pages that promise guaranteed returns or claim to provide certain winning signals.",
    },
    {
      question: "What should I do if I downloaded a suspicious file?",
      answer:
        "Do not open or install it. Delete the file if safe to do so, run a trusted security scan, and follow your device's security recommendations. If you entered a password, change it using a trusted device.",
    },
    {
      question: "What is the main purpose of the Pak Aviator Download page?",
      answer:
        "Its purpose is to help visitors understand app availability, device compatibility, and safe download practices. Always verify the provider and remember that installing software should never require you to compromise your device security.",
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
            <FaDownload />
            Pak Aviator Download
          </span>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Download Page{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Questions & Answers
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Find answers to 30 frequently asked questions about downloads,
            device compatibility, installation, app security, and
            troubleshooting.
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
              placeholder="Search Download questions..."
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
              aria-label="Search Download questions"
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
                Try another keyword to find a Download-related answer.
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
            <FaDownload />
          </div>

          <h2 className="mt-5 text-2xl font-black sm:text-3xl">
            Need Help With a Download?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Verify the source before downloading, review app permissions,
            and protect your device and personal information. Never install
            files from suspicious links.
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-amber-700">
            Download Safely • Protect Your Device • Stay Informed
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;

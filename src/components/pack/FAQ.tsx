import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-radial-gradient">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="section-label mb-3 sm:mb-4">Questions</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            FAQ
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="card-glass overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
              >
                <span className="font-semibold text-sm sm:text-base text-foreground pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

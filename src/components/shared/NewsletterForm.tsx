import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface NewsletterFormProps {
  compact?: boolean;
}

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Placeholder: log email for now
    console.log("Newsletter signup:", email);
    
    setSubmitted(true);
    toast({
      title: "You're in!",
      description: "Thanks for subscribing to the newsletter.",
    });
  };

  if (submitted) {
    return (
      <div className={`text-center ${compact ? "py-4" : "py-8"}`}>
        <div className="inline-flex items-center gap-2 text-emerald-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">You're subscribed!</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Check your inbox for a welcome message.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${compact ? "flex-col sm:flex-row gap-3" : "flex-col sm:flex-row gap-4"}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={`flex-1 px-4 ${compact ? "py-2.5" : "py-3"} bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all`}
      />
      <button
        type="submit"
        className={`btn-primary whitespace-nowrap ${compact ? "py-2.5" : ""}`}
      >
        Join the newsletter
      </button>
    </form>
  );
}

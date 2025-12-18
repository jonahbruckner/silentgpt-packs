import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  gumroadUrl: string;

  title?: string; // e.g., "FastAPI Backend Pack #1"
  headline?: string; // big headline
  intro?: string;

  whoFor: string[];
  whoNotFor: string[];

  /** Any element that should open the dialog (button/link/etc.) */
  children: React.ReactNode;
};

function CheckIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-rose-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrePurchaseDialog({
  gumroadUrl,
  title = "Pack fit-check",
  headline = "Make sure this pack is a fit.",
  intro = "Quick filter before you buy. If it matches, continue to Gumroad.",
  whoFor,
  whoNotFor,
  children,
}: Props) {
  const onContinue = React.useCallback(() => {
    window.open(gumroadUrl, "_blank", "noopener,noreferrer");
  }, [gumroadUrl]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent className="max-w-3xl bg-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-0 overflow-hidden">
        {/* Top header band */}
        <div className="relative px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-border/40">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-emerald-500/10" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-3 py-1 text-xs font-semibold text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
              {title}
            </div>

            <AlertDialogHeader className="mt-4 space-y-2">
              <AlertDialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  {headline}
                </span>
              </AlertDialogTitle>
              <AlertDialogDescription className="text-muted-foreground">
                {intro}
              </AlertDialogDescription>
            </AlertDialogHeader>
          </div>
        </div>

        {/* Two columns */}
        <div className="px-6 sm:px-8 py-6 sm:py-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* FOR */}
            <section className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-foreground">
                  Who this is for
                </div>
                <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                  Good fit
                </span>
              </div>

              <ul className="space-y-2.5">
                {whoFor.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckIcon />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* NOT FOR */}
            <section className="rounded-2xl border border-rose-500/20 bg-gradient-to-b from-rose-500/10 to-transparent p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-foreground">
                  Who this is not for
                </div>
                <span className="text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-full px-2.5 py-1">
                  Not a fit
                </span>
              </div>

              <ul className="space-y-2.5">
                {whoNotFor.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <XIcon />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-5 sm:mt-6 rounded-2xl border border-border/40 bg-card/40 px-4 py-3 text-xs text-muted-foreground">
            Tip: if you’re unsure, click Cancel and skim the free articles first. Then come back.
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-7">
          <AlertDialogFooter className="gap-2 sm:gap-3">
            <AlertDialogCancel className="rounded-xl">
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-background hover:from-cyan-400 hover:to-emerald-400"
              onClick={(e) => {
                e.preventDefault();
                onContinue();
              }}
            >
              Continue to Gumroad
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

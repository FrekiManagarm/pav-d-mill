"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarBlank,
  CheckCircle,
  EnvelopeSimple,
  WarningCircle,
} from "@phosphor-icons/react";

type Status = "idle" | "loading" | "success" | "error";

export default function Reservation({ bookingUrl }: { bookingUrl: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [email, setEmail] = useState("");

  const error = useMemo(() => {
    if (status !== "error") return "";
    if (!arrival || !departure || !email) {
      return "Ajoutez vos dates et votre e-mail pour préparer la demande.";
    }
    if (arrival >= departure) {
      return "La date de départ doit être après la date d'arrivée.";
    }
    return "Impossible de préparer la demande pour l'instant. Le lien direct reste disponible.";
  }, [arrival, departure, email, status]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!arrival || !departure || !email || arrival >= departure) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
    }, 850);
  }

  return (
    <section
      id="contact"
      className="bg-porcelain px-5 pb-20 pt-6 text-ink sm:px-8 lg:px-10 lg:pb-28"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 rounded-[2.25rem] bg-[linear-gradient(135deg,#4f443b_0%,#2e332d_100%)] p-5 text-porcelain shadow-[0_36px_100px_-70px_rgba(23,24,20,0.78)] sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <p className="text-xs font-semibold uppercase text-sage tracking-[0.22em]">
              Dernière étape
            </p>
            <h2 className="mt-5 max-w-[11ch] font-heading text-4xl leading-none sm:text-5xl lg:text-6xl">
              Réserver le calme.
            </h2>
            <p className="mt-7 max-w-[58ch] text-base leading-8 text-porcelain/68">
              Le Pavillon se prépare mieux en direct: dates, table, SPA,
              privatisation, coffret. Vous arrivez déjà attendus.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-porcelain/70">
            <a
              href="mailto:contact@pavillon-des-millesimes.fr"
              className="inline-flex min-w-0 items-start gap-3"
            >
              <EnvelopeSimple size={19} weight="duotone" className="mt-0.5 shrink-0" />
              <span className="min-w-0 break-all">
                contact@pavillon-des-millesimes.fr
              </span>
            </a>
            <a
              href="tel:+33760567734"
              className="inline-flex min-w-0 items-start gap-3"
            >
              <CalendarBlank size={19} weight="duotone" className="mt-0.5 shrink-0" />
              <span>3 rue de Lincent, 33570 Lussac</span>
            </a>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/12 bg-porcelain p-4 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] sm:p-6">
          <form onSubmit={onSubmit} className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-ink">Arrivée</span>
                <input
                  type="date"
                  value={arrival}
                  onChange={(event) => setArrival(event.target.value)}
                  className="h-12 rounded-2xl border border-ink/12 bg-white px-4 text-sm outline-none transition-colors focus:border-wine"
                />
                <span className="text-xs text-ink/46">Date souhaitée de début de séjour.</span>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-ink">Départ</span>
                <input
                  type="date"
                  value={departure}
                  onChange={(event) => setDeparture(event.target.value)}
                  className="h-12 rounded-2xl border border-ink/12 bg-white px-4 text-sm outline-none transition-colors focus:border-wine"
                />
                <span className="text-xs text-ink/46">Date de libération de la chambre.</span>
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink">Votre e-mail</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="vous@exemple.fr"
                className="h-12 rounded-2xl border border-ink/12 bg-white px-4 text-sm outline-none transition-colors placeholder:text-ink/32 focus:border-wine"
              />
              <span className="text-xs text-ink/46">
                Sert uniquement à préparer votre demande de séjour.
              </span>
            </label>

            {status === "loading" ? (
              <div className="grid gap-3 rounded-2xl bg-mist p-4" aria-live="polite">
                <div className="h-3 w-2/3 animate-pulse rounded-full bg-ink/10" />
                <div className="h-3 w-1/2 animate-pulse rounded-full bg-ink/10" />
              </div>
            ) : null}

            {status === "error" ? (
              <p className="inline-flex items-start gap-2 rounded-2xl bg-wine/8 p-4 text-sm leading-6 text-wine" aria-live="polite">
                <WarningCircle size={19} weight="duotone" className="mt-0.5 shrink-0" />
                {error}
              </p>
            ) : null}

            {status === "success" ? (
              <div className="rounded-2xl bg-sage/28 p-4 text-sm leading-7 text-ink" aria-live="polite">
                <p className="inline-flex items-center gap-2 font-semibold">
                  <CheckCircle size={19} weight="duotone" />
                  Votre demande est prête.
                </p>
                <p className="mt-1 text-ink/62">
                  Ouvrez la réservation directe pour finaliser avec les tarifs à jour.
                </p>
              </div>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-white transition-transform duration-300 active:scale-[0.98]"
              >
                Préparer mon séjour
                <ArrowRight size={17} weight="bold" />
              </button>
              <a
                href={bookingUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/12 px-6 py-3 text-center text-sm font-semibold transition-transform duration-300 active:scale-[0.98]"
              >
                Voir les disponibilités
                <ArrowRight size={17} weight="bold" />
              </a>
            </div>
          </form>
        </div>
      </div>

      <footer className="mx-auto mt-16 flex max-w-[1400px] flex-col gap-4 border-t border-ink/10 pt-6 text-sm text-ink/58 md:flex-row md:items-center md:justify-between">
        <p>Pavillon des Millésimes & SPA - Lussac-Saint-Émilion</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="https://www.instagram.com/pavillonmillesimes/">Instagram</a>
          <a href="https://www.facebook.com/pavillondesmillesimes/">Facebook</a>
          <a href="https://www.pavillon-des-millesimes.fr/fr/contact">Contact officiel</a>
          <span>Photos: Pavillon des Millésimes</span>
        </div>
      </footer>
    </section>
  );
}

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
      className="bg-porcelain px-5 py-20 text-ink sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase text-wine tracking-[0.22em]">
            Réservation
          </p>
          <h2 className="mt-5 max-w-[12ch] font-heading text-4xl leading-none sm:text-5xl">
            Composer votre séjour en direct.
          </h2>
          <p className="mt-7 max-w-[58ch] text-base leading-8 text-ink/64">
            Pour le meilleur tarif disponible, passez par la réservation directe.
            Vous pouvez aussi écrire à la maison pour une privatisation, un
            séminaire ou une table.
          </p>
          <div className="mt-10 grid gap-3 text-sm text-ink/68">
            <a href="mailto:contact@pavillon-des-millesimes.fr" className="inline-flex items-center gap-3">
              <EnvelopeSimple size={19} weight="duotone" />
              contact@pavillon-des-millesimes.fr
            </a>
            <a href="tel:+33760567734" className="inline-flex items-center gap-3">
              <CalendarBlank size={19} weight="duotone" />
              3 rue de Lincent, 33570 Lussac
            </a>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-ink/10 bg-white p-4 shadow-[0_28px_80px_-58px_rgba(23,24,20,0.55)] sm:p-6">
          <form onSubmit={onSubmit} className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-ink">Arrivée</span>
                <input
                  type="date"
                  value={arrival}
                  onChange={(event) => setArrival(event.target.value)}
                  className="h-12 rounded-2xl border border-ink/12 bg-porcelain px-4 text-sm outline-none transition-colors focus:border-wine"
                />
                <span className="text-xs text-ink/46">Date souhaitée de début de séjour.</span>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-ink">Départ</span>
                <input
                  type="date"
                  value={departure}
                  onChange={(event) => setDeparture(event.target.value)}
                  className="h-12 rounded-2xl border border-ink/12 bg-porcelain px-4 text-sm outline-none transition-colors focus:border-wine"
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
                className="h-12 rounded-2xl border border-ink/12 bg-porcelain px-4 text-sm outline-none transition-colors placeholder:text-ink/32 focus:border-wine"
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
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white transition-transform duration-300 active:scale-[0.98]"
              >
                Vérifier ma demande
                <ArrowRight size={17} weight="bold" />
              </button>
              <a
                href={bookingUrl}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/12 px-6 text-sm font-semibold transition-transform duration-300 active:scale-[0.98]"
              >
                Réservation directe
                <ArrowRight size={17} weight="bold" />
              </a>
            </div>
          </form>
        </div>
      </div>

      <footer className="mx-auto mt-20 flex max-w-[1400px] flex-col gap-4 border-t border-ink/10 pt-6 text-sm text-ink/58 md:flex-row md:items-center md:justify-between">
        <p>Pavillon des Millésimes & SPA - Lussac-Saint-Émilion</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="https://www.instagram.com/pavillonmillesimes/">Instagram</a>
          <a href="https://www.facebook.com/pavillondesmillesimes/">Facebook</a>
          <a href="https://www.pavillon-des-millesimes.fr/fr/contact">Contact officiel</a>
          <span>Photos: Wikimedia Commons</span>
        </div>
      </footer>
    </section>
  );
}

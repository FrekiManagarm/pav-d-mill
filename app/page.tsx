import Image from "next/image";
import type { CSSProperties } from "react";
import MagneticLink from "@/components/MagneticLink";
import Navigation from "@/components/Navigation";
import Reservation from "@/components/Reservation";

const bookingUrl = "https://www.pavillon-des-millesimes.fr/fr/booking/room";

const images = {
  facade: "/Pavillon-71.jpg",
  terrace: "/Pavillon-70.jpg",
  pool: "/Pavillon-73.jpg",
  lounge: "/Pavillon-49.jpg",
  staircase: "/Pavillon-37.jpg",
  tableClose: "/_DSC2220.jpg",
  tableLight: "/_DSC2447.jpg",
  tableWide: "/_DSC2699.JPG",
};

const proofPoints = [
  "Meilleur tarif en direct",
  "SPA privatisable",
  "Table sur réservation",
  "Piscine chauffée en saison",
  "9 km de Saint-Émilion",
];

const arrivalSequence = [
  {
    step: "01",
    title: "Entrer dans le silence",
    text: "La grille, les arbres, la pierre claire. On quitte la route pour retrouver une maison qui ralentit tout de suite le rythme.",
  },
  {
    step: "02",
    title: "Choisir son refuge",
    text: "Cinq chambres, deux studios, des matières douces et la possibilité de privatiser la demeure pour vivre le Pavillon comme une maison de famille.",
  },
  {
    step: "03",
    title: "Garder la soirée sur place",
    text: "La table d’hôtes permet de rester dans l’atmosphère du lieu: cuisine de saison, vins du territoire et conversation tranquille.",
  },
  {
    step: "04",
    title: "Fermer la journée au SPA",
    text: "Sauna, hammam, jacuzzi et soins sur demande. Une parenthèse que l’on réserve pour deux, après les châteaux et les vignes.",
  },
];

const sanctuaries = [
  {
    kicker: "Maison",
    title: "Une demeure de 1882, tenue comme une confidence.",
    text: "Pas un hôtel impersonnel: une adresse à taille humaine, avec la précision d’un lieu de séjour exigeant.",
    image: images.terrace,
  },
  {
    kicker: "Salon",
    title: "Un intérieur qui garde la chaleur de la pierre.",
    text: "On s’installe dans une vraie maison: lumière, fauteuils profonds, plantes et murs bordelais.",
    image: images.lounge,
  },
  {
    kicker: "Bien-être",
    title: "Le luxe discret d’avoir le temps.",
    text: "SPA privatif, piscine, terrasse et chambres calmes: tout ramène à une sensation de refuge.",
    image: images.pool,
  },
];

const gallery = [
  {
    title: "La terrasse",
    image: images.facade,
    className: "md:col-span-2",
  },
  {
    title: "L’escalier",
    image: images.staircase,
    className: "",
  },
  {
    title: "La table",
    image: images.tableLight,
    className: "",
  },
  {
    title: "Le salon",
    image: images.lounge,
    className: "md:col-span-2",
  },
];

const bookingReasons = [
  "Tarifs directs et disponibilité à jour",
  "Conseil pour organiser le séjour",
  "Offres coffrets et privatisations",
];

export default function Home() {
  return (
    <>
      <Navigation bookingUrl={bookingUrl} />
      <main>
        <section
          id="accueil"
          className="relative isolate overflow-hidden bg-porcelain text-ink"
        >
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_12%,rgba(183,200,173,0.42)_0%,transparent_28%),linear-gradient(135deg,#faf8f2_0%,#f2efe6_47%,#e9eee4_100%)]" />
          <div className="absolute right-0 top-0 -z-10 hidden h-full w-[42vw] bg-sage/20 lg:block" />

          <div className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 gap-10 px-5 pb-10 pt-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pt-30">
            <div className="flex flex-col justify-center">
              <p className="reveal max-w-full rounded-full border border-ink/10 bg-white/58 px-4 py-2 text-xs font-semibold uppercase leading-5 text-wine tracking-[0.14em] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:w-fit sm:tracking-[0.2em]">
                Maison d’hôtes & SPA à Lussac-Saint-Émilion
              </p>
              <h1 className="reveal mt-8 max-w-[10.8ch] text-balance font-heading text-5xl font-medium leading-[0.92] text-ink sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
                Partir sans aller loin.
              </h1>
              <p className="reveal mt-7 max-w-[60ch] text-lg leading-8 text-ink/66">
                Le Pavillon des Millésimes transforme un séjour près de
                Saint-Émilion en havre de tranquillité: une demeure de 1882, une
                table attentive, un SPA privatif et le vignoble autour.
              </p>

              <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticLink
                  href={bookingUrl}
                  className="inline-flex h-13 w-full items-center justify-center rounded-full bg-wine px-7 text-center text-sm font-semibold text-white shadow-[0_22px_54px_-30px_rgba(101,38,51,0.85)] transition-colors hover:bg-[#743040] sm:w-auto"
                >
                  <p className="text-white">Choisir mes dates</p>
                </MagneticLink>
                <MagneticLink
                  href="#experiences"
                  className="inline-flex h-13 w-full items-center justify-center rounded-full border border-ink/12 bg-white/58 px-7 text-center text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md sm:w-auto"
                >
                  Sentir l’atmosphère
                </MagneticLink>
              </div>

              <div className="reveal mt-12 grid max-w-2xl grid-cols-3 gap-3 border-y border-ink/10 py-5">
                {[
                  ["1882", "demeure"],
                  ["7", "refuges"],
                  ["50", "convives"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-heading text-4xl leading-none text-ink">
                      {value}
                    </p>
                    <p className="mt-2 text-[0.67rem] font-semibold uppercase text-ink/46 tracking-[0.18em]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-125 sm:min-h-145 lg:min-h-190">
              <div className="reveal absolute right-0 top-4 h-[72%] w-[86%] overflow-hidden rounded-[2.25rem] bg-sage/20 shadow-[0_42px_90px_-66px_rgba(23,24,20,0.7)]">
                <Image
                  src={images.facade}
                  alt="Demeure et parc à Lussac-Saint-Émilion"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,244,237,0.05)_0%,rgba(23,24,20,0.14)_100%)]" />
              </div>

              <div className="reveal absolute bottom-10 left-0 h-[42%] w-[54%] overflow-hidden rounded-[1.6rem] border-10 border-porcelain bg-mist shadow-[0_28px_80px_-58px_rgba(23,24,20,0.72)]">
                <Image
                  src={images.pool}
                  alt="Piscine et jardin du Pavillon des Millésimes"
                  fill
                  sizes="(min-width: 1024px) 28vw, 72vw"
                  className="object-cover"
                />
              </div>

              <aside className="reveal absolute bottom-0 right-0 w-[84%] max-w-102.5 rounded-[1.75rem] border border-white/55 bg-porcelain/76 p-5 text-ink shadow-[0_26px_72px_-48px_rgba(23,24,20,0.65),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl sm:w-[78%] sm:p-6">
                <p className="text-xs font-semibold uppercase text-wine tracking-[0.2em]">
                  Invitation directe
                </p>
                <p className="mt-3 font-heading text-3xl leading-[1.02]">
                  Offrir deux jours au calme.
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/62">
                  Réservez en direct pour garder la meilleure disponibilité et
                  préparer le séjour avec la maison.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-porcelain py-4 text-ink">
          <div className="soft-marquee flex w-max gap-4 whitespace-nowrap text-xs font-semibold uppercase text-ink/48 tracking-[0.18em]">
            {[...proofPoints, ...proofPoints].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="border-y border-ink/10 px-8 py-4"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section
          id="experiences"
          className="bg-porcelain px-5 py-20 text-ink sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:pt-14">
              <p className="text-xs font-semibold uppercase text-wine tracking-[0.22em]">
                L’expérience
              </p>
              <h2 className="mt-5 max-w-[12ch] text-balance font-heading text-4xl leading-none sm:text-5xl lg:text-6xl">
                Ici, le calme devient le programme.
              </h2>
              <p className="mt-7 max-w-[62ch] text-base leading-8 text-ink/62">
                Les photos du Pavillon donnent le ton: pierre blonde, jardin,
                terrasse, salons habités et grandes tablées. La page laisse
                cette atmosphère guider naturellement vers la réservation.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.08fr_0.92fr]">
              {sanctuaries.map((item, index) => (
                <article
                  key={item.title}
                  className={`group reveal ${index === 0 ? "md:row-span-2" : ""}`}
                  style={{ "--delay": `${index * 80}ms` } as CSSProperties}
                >
                  <div
                    className={`relative overflow-hidden rounded-[1.75rem] bg-sage/18 ${
                      index === 0 ? "aspect-4/5" : "aspect-[1.22/1]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="mt-5 max-w-xl">
                    <p className="text-xs font-semibold uppercase text-wine tracking-[0.2em]">
                      {item.kicker}
                    </p>
                    <h3 className="mt-2 text-balance font-heading text-3xl leading-[1.02]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink/62">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-porcelain px-5 pb-20 text-ink sm:px-8 lg:px-10 lg:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase text-wine tracking-[0.22em]">
                  Aperçus du lieu
                </p>
                <h2 className="mt-5 max-w-[12ch] text-balance font-heading text-4xl leading-none sm:text-5xl">
                  Quelques images suffisent à ralentir.
                </h2>
              </div>
              <p className="max-w-[60ch] text-base leading-8 text-ink/62">
                Plutôt qu’un catalogue, la galerie propose des fragments: un
                escalier, une table, un salon, une terrasse. De quoi se projeter
                sans tout dévoiler.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {gallery.map((item, index) => (
                <figure
                  key={item.title}
                  className={`group reveal ${item.className}`}
                  style={{ "--delay": `${index * 70}ms` } as CSSProperties}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-sage/14">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                  <figcaption className="mt-4 text-xs font-semibold uppercase text-ink/46 tracking-[0.18em]">
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="chambres"
          className="bg-mist px-5 py-20 text-ink sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase text-wine tracking-[0.22em]">
                  Chambres & privatisation
                </p>
                <h2 className="mt-5 max-w-[12ch] text-balance font-heading text-4xl leading-none sm:text-5xl lg:text-6xl">
                  Une maison entière, ou juste votre chambre.
                </h2>
              </div>
              <p className="max-w-[58ch] text-base leading-8 text-ink/62">
                Cinq chambres, deux studios, des espaces communs généreux et une
                privatisation possible pour venir à deux, en famille ou avec un
                cercle choisi.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-[0.74fr_1.26fr]">
              <div className="grid content-between gap-6 border-y border-ink/10 py-6">
                {arrivalSequence.map((item) => (
                  <article
                    key={item.step}
                    className="grid grid-cols-[2.4rem_1fr] gap-4 sm:grid-cols-[3.5rem_1fr] sm:gap-5"
                  >
                    <p className="font-heading text-2xl text-wine sm:text-3xl">
                      {item.step}
                    </p>
                    <div>
                      <h3 className="text-balance font-heading text-2xl leading-none sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-ink/62">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-sage/18 sm:min-h-[520px] lg:min-h-[620px]">
                <Image
                  src={images.terrace}
                  alt="Terrasse et façade du Pavillon des Millésimes"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <div className="max-w-xl rounded-[1.5rem] border border-white/40 bg-porcelain/76 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase text-wine tracking-[0.2em]">
                      Le bon format
                    </p>
                    <p className="mt-3 text-balance font-heading text-2xl leading-none sm:text-3xl">
                      Week-end, coffret, séjour long ou maison privatisée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="table"
          className="bg-ink px-5 py-20 text-porcelain sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-sage tracking-[0.22em]">
                Table du Pavillon
              </p>
              <h2 className="mt-5 max-w-[12ch] text-balance font-heading text-4xl leading-none sm:text-5xl lg:text-6xl">
                Rester le soir, sans rompre le charme.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-[1fr_0.72fr]">
              <p className="text-base leading-8 text-porcelain/68">
                Menu unique selon la saison, le marché et l’inspiration du chef:
                bouchées apéritives, entrée, plat, dessert. La table d’hôtes
                prolonge le sentiment de maison et évite de repartir chercher
                ailleurs ce que l’on vient de trouver ici.
              </p>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <p className="font-heading text-6xl leading-none">59€</p>
                <p className="mt-3 text-xs font-semibold uppercase text-porcelain/52 tracking-[0.18em]">
                  menu hors boissons
                </p>
                <p className="mt-5 text-sm leading-7 text-porcelain/66">
                  Sur réservation, du vendredi au lundi, à partir de 4 couverts.
                </p>
              </div>
              <div className="relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] md:col-span-2 lg:min-h-[420px]">
                <Image
                  src={images.tableClose}
                  alt="Table dressée au Pavillon des Millésimes"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="bien-etre"
          className="bg-porcelain px-5 py-20 text-ink sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-sage/10 sm:min-h-[520px] lg:min-h-[560px]">
              <Image
                src={images.pool}
                alt="Piscine et jardin à l’abri des murs de pierre"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,244,237,0.02)_0%,rgba(247,244,237,0.78)_100%)]" />
            </div>
            <div className="self-center lg:-ml-24">
              <div className="rounded-[2rem] border border-ink/8 bg-porcelain/84 p-6 shadow-[0_32px_90px_-62px_rgba(23,24,20,0.58),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl sm:p-8">
                <p className="text-xs font-semibold uppercase text-wine tracking-[0.22em]">
                  SPA Vinésime
                </p>
                <h2 className="mt-5 max-w-[12ch] text-balance font-heading text-4xl leading-none sm:text-5xl">
                  La parenthèse qui décide du séjour.
                </h2>
                <p className="mt-7 text-base leading-8 text-ink/64">
                  Le SPA se privatise pour deux personnes: jacuzzi, hammam,
                  sauna, douche et soins sur demande. C’est la promesse la plus
                  concrète du havre de tranquillité.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "60€ pour deux",
                    "1 heure privative",
                    "Massages sur demande",
                    "Piscine en saison",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border-t border-ink/12 pt-4 text-sm text-ink/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="receptions"
          className="relative isolate overflow-hidden bg-clay px-5 py-20 text-porcelain sm:px-8 lg:px-10 lg:py-28"
        >
          <Image
            src={images.tableWide}
            alt="Salle de réception dressée au Pavillon des Millésimes"
            fill
            sizes="100vw"
            className="absolute inset-0 -z-20 object-cover opacity-[0.24]"
          />
          <div className="absolute inset-0 -z-10 bg-clay/88" />
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-sage tracking-[0.22em]">
                Séminaires & mariages
              </p>
              <h2 className="mt-5 max-w-[13ch] text-balance font-heading text-4xl leading-none sm:text-5xl">
                Un lieu pour réunir sans disperser.
              </h2>
            </div>
            <div className="grid gap-x-8 gap-y-0 md:grid-cols-2">
              {[
                "Week-end romantique avec SPA privatif",
                "Escapade oenologique entre amis",
                "Séminaire confidentiel près de Bordeaux",
                "Mariage intime et dîner assis jusqu’à 50 personnes",
              ].map((path) => (
                <p
                  key={path}
                  className="border-t border-white/12 py-6 text-lg leading-7 text-porcelain/78"
                >
                  {path}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-porcelain px-5 py-[4.5rem] text-ink sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1400px] gap-8 rounded-[2rem] border border-ink/8 bg-white/62 p-6 shadow-[0_30px_90px_-70px_rgba(23,24,20,0.6)] sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase text-wine tracking-[0.22em]">
                Pourquoi réserver en direct
              </p>
              <h2 className="mt-4 text-balance font-heading text-4xl leading-none sm:text-5xl">
                Le séjour commence avant l’arrivée.
              </h2>
            </div>
            <div className="grid gap-3">
              {bookingReasons.map((reason) => (
                <p
                  key={reason}
                  className="border-t border-ink/10 py-4 text-base leading-7 text-ink/66"
                >
                  {reason}
                </p>
              ))}
            </div>
          </div>
        </section>

        <Reservation bookingUrl={bookingUrl} />
      </main>
    </>
  );
}

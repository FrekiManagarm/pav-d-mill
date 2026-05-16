import Image from "next/image";
import type { CSSProperties } from "react";
import Navigation from "@/components/Navigation";
import Reservation from "@/components/Reservation";

const bookingUrl = "https://www.pavillon-des-millesimes.fr/fr/booking/room";
const images = {
  chateau:
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Chateau_de_Lussac_%28Lussac-Saint_Emilion%29.jpg",
  vineyard:
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Vineyards_of_St_Emilion.jpg",
  village:
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Vineyards_of_St_Emilion.jpg",
};

const signatureMoments = [
  {
    kicker: "Maison",
    title: "Hôtel particulier de 1882",
    text: "Une demeure en pierre bordelaise, restaurée pour accueillir des séjours intimes à 9 km de Saint-Émilion.",
    image: images.chateau,
  },
  {
    kicker: "Table",
    title: "Dîner bistronomique",
    text: "David cuisine un menu de saison, pensé autour du marché, des produits locaux et des vins du territoire.",
    image: images.vineyard,
  },
  {
    kicker: "Spa",
    title: "Parenthèse privatisée",
    text: "Hammam, sauna, jacuzzi et massages se réservent comme un moment calme, à votre rythme.",
    image: images.village,
  },
];

const rooms = [
  {
    name: "Chambres & suites",
    meta: "5 chambres, 2 studios",
    text: "Des volumes clairs, des lits généreux, des salles d'eau lumineuses et le calme d'une maison tenue avec soin.",
  },
  {
    name: "Privatisation",
    meta: "Jusqu'à 16 personnes",
    text: "Le Pavillon devient une maison de famille pour un séjour oenotouristique, une réunion ou un temps de célébration.",
  },
  {
    name: "Matins au jardin",
    meta: "Petit-déjeuner inclus",
    text: "Terrasse, produits locaux, pâtisseries de saison et le temps de composer la journée autour des châteaux voisins.",
  },
];

const pathways = [
  "Week-end romantique avec spa privatif",
  "Escapade oenologique entre amis",
  "Séminaire confidentiel pres de Bordeaux",
  "Mariage intime et dîner assis jusqu'à 50 personnes",
];

export default function Home() {
  return (
    <>
      <Navigation bookingUrl={bookingUrl} />
      <main>
        <section
          id="accueil"
          className="relative isolate min-h-[100dvh] overflow-hidden bg-ink text-porcelain"
        >
          <Image
            src={images.chateau}
            alt="Château et jardin à Lussac-Saint-Émilion"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-20 object-cover opacity-[0.72]"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(22,24,22,0.9)_0%,rgba(22,24,22,0.66)_44%,rgba(22,24,22,0.22)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 -z-10 h-44 bg-[linear-gradient(0deg,var(--color-porcelain)_0%,rgba(247,244,237,0)_100%)]" />

          <div className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 px-5 pb-12 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-32">
            <div className="flex max-w-3xl flex-col justify-end pb-8 lg:pb-20">
              <p className="reveal text-xs font-medium uppercase text-sage tracking-[0.24em]">
                Lussac-Saint-Émilion · Maison d’hôtes & SPA
              </p>
              <h1 className="reveal mt-7 max-w-[12ch] font-heading text-5xl font-medium leading-[0.94] text-porcelain sm:text-6xl lg:text-7xl">
                Pavillon des Millésimes
              </h1>
              <p className="reveal mt-7 max-w-[58ch] text-base leading-8 text-porcelain/78 sm:text-lg">
                Un hôtel particulier de 1882 pour s’émerveiller, s’attabler,
                se ressourcer et explorer les vignobles de Saint-Émilion.
              </p>
              <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingUrl}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-wine px-6 text-sm font-semibold text-white shadow-[0_18px_42px_-24px_rgba(101,38,51,0.8)] transition-transform duration-300 active:scale-[0.98]"
                >
                  Réserver en direct
                </a>
                <a
                  href="#experiences"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/22 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur-md transition-transform duration-300 active:scale-[0.98]"
                >
                  Découvrir le lieu
                </a>
              </div>
            </div>

            <aside className="reveal self-end justify-self-start rounded-[1.75rem] border border-white/14 bg-white/10 p-4 text-porcelain shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl sm:p-5 lg:mb-20 lg:justify-self-end">
              <dl className="grid grid-cols-3 gap-4">
                {[
                  ["1882", "demeure"],
                  ["9 km", "Saint-Émilion"],
                  ["16", "couchages"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-heading text-3xl leading-none">{value}</dt>
                    <dd className="mt-2 text-[0.68rem] uppercase text-porcelain/62 tracking-[0.18em]">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="bg-porcelain px-5 py-5 text-ink sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1400px] gap-3 border-y border-ink/10 py-4 text-sm uppercase text-ink/58 tracking-[0.16em] md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <span className="text-ink">Meilleur tarif en direct</span>
            <span>SPA privatisable</span>
            <span>Table d’hôtes</span>
            <span>Piscine chauffée</span>
          </div>
        </section>

        <section
          id="experiences"
          className="bg-porcelain px-5 py-20 text-ink sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:pt-20">
              <p className="text-xs font-semibold uppercase text-wine tracking-[0.22em]">
                L’art de recevoir
              </p>
              <h2 className="mt-5 max-w-[11ch] font-heading text-4xl leading-none sm:text-5xl">
                Une maison pensée comme un souvenir.
              </h2>
              <p className="mt-7 max-w-[62ch] text-base leading-8 text-ink/64">
                Nathalie compose les séjours, David signe la cuisine. Le Pavillon
                garde l’intimité d’une maison, avec la précision d’un boutique
                hôtel: chambres, studios, spa, jardin, billard, terrasse et
                conseils pour découvrir le vignoble.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
              {signatureMoments.map((moment, index) => (
                <article
                  key={moment.title}
                  className={`group reveal ${
                    index === 0 ? "md:row-span-2" : ""
                  }`}
                  style={{ "--delay": `${index * 90}ms` } as CSSProperties}
                >
                  <div
                    className={`relative overflow-hidden rounded-[1.5rem] bg-stone/12 ${
                      index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase text-wine tracking-[0.2em]">
                    {moment.kicker}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl leading-tight">
                    {moment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/62">{moment.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="chambres"
          className="bg-mist px-5 py-20 text-ink sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <h2 className="font-heading text-4xl leading-none sm:text-5xl lg:text-6xl">
                Chambres, studios et privatisation.
              </h2>
              <p className="max-w-[58ch] text-base leading-8 text-ink/64">
                Le site actuel présente 5 chambres et 2 studios, avec une
                privatisation possible. La nouvelle page clarifie cette offre
                sans perdre la chaleur de la maison.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[460px] overflow-hidden rounded-[1.5rem] bg-stone/10">
                <Image
                  src={images.vineyard}
                  alt="Vignes de Saint-Émilion"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4">
                {rooms.map((room) => (
                  <article
                    key={room.name}
                    className="border-t border-ink/12 py-6 first:border-t-0"
                  >
                    <p className="text-xs font-semibold uppercase text-wine tracking-[0.2em]">
                      {room.meta}
                    </p>
                    <h3 className="mt-3 font-heading text-3xl">{room.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/62">{room.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="table"
          className="bg-ink px-5 py-20 text-porcelain sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-sage tracking-[0.22em]">
                Table du Pavillon
              </p>
              <h2 className="mt-5 font-heading text-4xl leading-none sm:text-5xl">
                Le soir, la maison passe à table.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
              <p className="text-base leading-8 text-porcelain/68">
                Menu unique selon la saison, le marché et l’inspiration du chef:
                bouchées apéritives, entrée, plat, dessert. Une cuisine simple
                dans l’intention, précise dans l’assiette.
              </p>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <p className="font-heading text-5xl">59€</p>
                <p className="mt-3 text-sm uppercase text-porcelain/52 tracking-[0.18em]">
                  par personne, hors boissons
                </p>
                <p className="mt-5 text-sm leading-7 text-porcelain/66">
                  Sur réservation, du vendredi au lundi, à partir de 4 couverts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="bien-etre"
          className="bg-porcelain px-5 py-20 text-ink sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] bg-sage/10">
              <Image
                src={images.chateau}
                alt="Maison et jardin à Lussac-Saint-Émilion"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="self-center lg:pl-10">
              <p className="text-xs font-semibold uppercase text-wine tracking-[0.22em]">
                SPA Vinésime
              </p>
              <h2 className="mt-5 max-w-[12ch] font-heading text-4xl leading-none sm:text-5xl">
                Un calme que l’on réserve pour soi.
              </h2>
              <p className="mt-7 max-w-[60ch] text-base leading-8 text-ink/64">
                L’espace bien-être se privatise pour deux personnes: jacuzzi,
                hammam, sauna, douche et soins sur demande. Une vraie respiration
                après les châteaux, les galeries souterraines et les chemins de
                vignes.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["60€ pour deux", "1 heure privative", "Massages sur demande", "Piscine de mai à septembre"].map(
                  (item) => (
                    <div key={item} className="border-t border-ink/12 pt-4 text-sm text-ink/70">
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          id="receptions"
          className="bg-clay px-5 py-20 text-porcelain sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-sage tracking-[0.22em]">
                Séminaires & mariages
              </p>
              <h2 className="mt-5 font-heading text-4xl leading-none sm:text-5xl">
                Réunir sans perdre l’intimité.
              </h2>
            </div>
            <div className="grid gap-x-8 gap-y-0 md:grid-cols-2">
              {pathways.map((path) => (
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

        <Reservation bookingUrl={bookingUrl} />
      </main>
    </>
  );
}

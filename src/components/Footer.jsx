import { useState } from "react";
import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaTwitch,
  FaInstagram,
  FaSteam,
  FaGithub,
} from "react-icons/fa";
import { TiLocationArrow, TiArrowUp } from "react-icons/ti";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord />, label: "Discord" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://twitch.tv", icon: <FaTwitch />, label: "Twitch" },
  { href: "https://store.steampowered.com", icon: <FaSteam />, label: "Steam" },
  { href: "https://medium.com", icon: <FaMedium />, label: "Medium" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://github.com", icon: <FaGithub />, label: "GitHub" },
];

const exploreLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

const gameLinks = [
  "Elden Ring",
  "Cyberpunk 2077",
  "Red Dead Redemption 2",
  "The Witcher 3",
  "Sekiro",
  "God of War",
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Settings"];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative w-screen overflow-hidden bg-black text-blue-50">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-purple-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/img/RamyRxr.png"
                alt="GameZone logo"
                className="h-11 w-11 rounded-full ring-1 ring-white/15"
              />
              <span className="font-zentry text-2xl font-black uppercase tracking-wide">
                Game<span className="text-purple-300">Zone</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm font-circular-web text-sm leading-relaxed text-blue-50/60">
              A game discovery platform for the metagame layer. Explore worlds,
              unleash the play economy, and find your next adventure.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-50/70 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/60 hover:bg-yellow-300 hover:text-black"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-zentry text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-general text-sm text-blue-50/70 transition-colors duration-300 hover:text-blue-50"
                  >
                    <span className="h-px w-0 bg-yellow-300 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-zentry text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
              Featured Games
            </h3>
            <ul className="mt-5 space-y-3">
              {gameLinks.map((game) => (
                <li key={game}>
                  <a
                    href="#features"
                    className="group inline-flex items-center gap-2 font-general text-sm text-blue-50/70 transition-colors duration-300 hover:text-blue-50"
                  >
                    <span className="h-px w-0 bg-purple-300 transition-all duration-300 group-hover:w-4" />
                    {game}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-zentry text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
              Join the Play Economy
            </h3>
            <p className="mt-5 font-circular-web text-sm text-blue-50/60">
              Get the latest drops, trailers and beta invites in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="mt-5">
              <div className="flex items-center overflow-hidden rounded-full border border-white/15 bg-white/5 p-1 transition-colors duration-300 focus-within:border-yellow-300/70">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full bg-transparent px-4 py-2 font-general text-sm text-blue-50 placeholder:text-blue-50/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-black transition-transform duration-300 hover:scale-110"
                >
                  <TiLocationArrow />
                </button>
              </div>
              {subscribed && (
                <p className="mt-3 font-general text-xs text-yellow-300">
                  You&apos;re in! Welcome to the GameZone.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-general text-xs text-blue-50/50">
            © {new Date().getFullYear()} GameZone. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-general text-xs text-blue-50/50 transition-colors duration-300 hover:text-blue-50"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-general text-xs uppercase text-blue-50/70 transition-all duration-300 hover:border-yellow-300/60 hover:text-blue-50"
          >
            Back to top
            <TiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

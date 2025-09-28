import ImageLinks from "../features/contact/ImageLinks";
import Map from "../features/contact/Map";
import SocialLogo from "../ui/SocialLogo";
import TextDecoration from "../ui/TextDecoration";
import { Field } from "../ui/Field";

const HOURS = [
  { day: "Monday", time: "16:00 - 22:30" },
  { day: "Tuesday", time: "16:00 - 22:30" },
  { day: "Wednesday", time: "16:00 - 22:30" },
  { day: "Thursday", time: "16:00 - 22:30" },
  { day: "Friday", time: "16:00 - 22:30" },
  { day: "Saturday & Sunday", time: "16:00 - 22:30" },
];

export default function Contact() {
  return (
    <div className="h-full min-h-0">
      <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
          <h2 className="mt-3 font-forum text-2xl tracking-wide text-orange-100 text-center">
            <TextDecoration variant="text">
              OPENING <br /> HOURS
            </TextDecoration>
          </h2>

          <ul className="mt-8 space-y-4">
            {HOURS.map((row) => (
              <li
                key={row.day}
                className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg bg-white/5 px-4 py-3"
              >
                <span className="text-orange-100/90 font-jost">{row.day}</span>
                <span className="text-orange-100/80 font-jost">{row.time}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <ImageLinks img="/contact-images/inst-link-1.jpg" alt="inst-link-1" />
          <ImageLinks img="/contact-images/inst-link-2.jpg" alt="inst-link-2" />
          <ImageLinks img="/contact-images/inst-link-3.jpg" alt="inst-link-3" />
          <ImageLinks img="/contact-images/inst-link-4.jpg" alt="inst-link-4" />
        </section>

        <section className="relative rounded-2xl overflow-hidden border border-white/10">
          <Map />
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8 flex flex-col justify-between">
          <h2 className="mt-3 font-forum text-2xl tracking-wide text-orange-100 text-center">
            <TextDecoration variant="text">
              GET IN <br /> TOUCH
            </TextDecoration>
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex flex-col gap-4">
              <Field
                label="ADDRESS"
                text="23 Greenfield Avenue, Prague 120 00"
              />
              <Field label="PHONE" text="+491234567890" />
              <Field label="EMAIL" text="email@example.com" />
              <Field
                label="FOLLOW"
                text={
                  <div className="flex items-center justify-end gap-4 px-4">
                    <SocialLogo
                      img="/icons/instagram-logo.svg"
                      to="https://www.instagram.com/"
                    />
                    <SocialLogo
                      img="/icons/facebook-logo.svg"
                      to="https://www.facebook.com/"
                    />
                    <SocialLogo
                      img="/icons/twitter-logo.svg"
                      to="https://x.com/"
                    />
                  </div>
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

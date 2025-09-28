import { useEffect, useMemo, useState } from "react";
import Button from "../../ui/Button";
import TextDecoration from "../../ui/TextDecoration";

type FormState = {
  name: string;
  phone: string;
  email: string;
  guests: string;
  date: string;
  time: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function todayISO() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

export default function ReservationForm() {
  const [data, setData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    guests: "2",
    date: "",
    time: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (success) {
      const id = setTimeout(() => setSuccess(null), 5000);
      return () => clearTimeout(id);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const id = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(id);
    }
  }, [error]);

  const set = (k: keyof FormState, v: string) =>
    setData((s) => ({ ...s, [k]: v }));

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!data.name.trim()) e.name = "Enter your name";
    if (!data.phone.trim()) e.phone = "Enter a phone number";
    if (!isEmail(data.email)) e.email = "Enter a valid email";
    if (!data.date) e.date = "Pick a date";
    if (!data.time) e.time = "Pick a time";
    return e;
  }, [data]);

  const isValid = Object.keys(errors).length === 0;

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setTouched({
      name: true,
      phone: true,
      email: true,
      guests: true,
      date: true,
      time: true,
    });
    if (!isValid) return;

    try {
      setSubmitting(true);
      setSuccess(null);
      setError(null);
      await new Promise((r) => setTimeout(r, 800));
      setSuccess("Reservation request sent. We’ll contact you soon.");

      setData({
        name: "",
        phone: "",
        email: "",
        guests: "2",
        date: "",
        time: "",
      });
      setTouched({});
    } catch (e) {
      console.error("Reservation error:", e);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-full min-h-0 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-10 text-orange-100">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="mt-4 font-forum text-3xl tracking-wide">
          <TextDecoration variant="text">RESERVATION </TextDecoration>
        </h2>
        <p className="mt-3 text-base text-orange-100/90 font-jost max-w-xl mx-auto">
          Secure your spot at Qitchen, where exceptional sushi and a remarkable
          dining experience await.
        </p>
      </div>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-4">
        <div>
          <input
            type="text"
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            placeholder="Your Name"
            className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30 placeholder-white/40"
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-xs text-red-300">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            placeholder="Phone Number"
            className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30 placeholder-white/40"
          />
          {touched.phone && errors.phone && (
            <p className="mt-1 text-xs text-red-300">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            placeholder="Email"
            className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30 placeholder-white/40"
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-red-300">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <select
              value={data.guests}
              onChange={(e) => set("guests", e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, guests: true }))}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-3 outline-none focus:border-white/30"
            >
              {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="date"
              min={todayISO()}
              value={data.date}
              onChange={(e) => set("date", e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, date: true }))}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-3 outline-none focus:border-white/30 [color-scheme:dark]"
            />
            {touched.date && errors.date && (
              <p className="mt-1 text-xs text-red-300">{errors.date}</p>
            )}
          </div>

          <div>
            <input
              type="time"
              value={data.time}
              onChange={(e) => set("time", e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, time: true }))}
              step={60 * 15}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-3 outline-none focus:border-white/30 [color-scheme:dark]"
            />
            {touched.time && errors.time && (
              <p className="mt-1 text-xs text-red-300">{errors.time}</p>
            )}
          </div>
        </div>

        {success && (
          <div className="mt-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-200 text-sm">
            {success}
          </div>
        )}
        {error && (
          <div className="mt-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200 text-sm">
            {error}
          </div>
        )}
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid || submitting}
          full={true}
          rounded="md"
        >
          {submitting ? "SENDING..." : "SUBMIT"}
        </Button>

        <p className="mt-3 text-base text-center text-orange-100/90 font-jost">
          By submitting, you consent to being contacted to confirm your
          reservation.
        </p>
      </form>
    </div>
  );
}

import HomeNavList from "../features/home/HomeNavList";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import SocialLogo from "../ui/SocialLogo";

export default function Home() {
  return (
    <div
      className="
        bg-neutral-950 font-forum
        min-h-screen
        xl:h-screen 
        flex
        p-4 xl:p-6
      "
    >
      <div
        className="
          grid flex-1 min-h-0  
          gap-4
          grid-cols-1
          xl:grid-cols-[3fr_1fr] 
        "
      >
        <aside
          className="
            relative overflow-hidden rounded-2xl
            min-h-[320px] md:min-h-[420px] xl:h-full
          "
        >
          <video
            src="/video-home.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/home-images/home-menu.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70" />
          <div className="absolute left-0 right-0 top-0 z-10">
            <NavBar />
          </div>

          <h1
            className="
              absolute left-6 bottom-8 text-orange-100 font-forum
              text-5xl leading-[0.95]
              md:text-7xl
              xl:text-9xl
            "
          >
            SUSHI <br />
            SENSATION
          </h1>
          <div className="md:visible">
            <div
              className="
                absolute right-0 bottom-0 z-10
                hidden md:inline-flex items-start gap-6
                bg-neutral-950 rounded-tl-3xl
                px-5 py-3 md:px-6 md:py-4
                 "
            >
              <SocialLogo
                img="/icons/instagram-logo.svg"
                to="https://www.instagram.com/"
              />
              <SocialLogo
                img="/icons/facebook-logo.svg"
                to="https://www.facebook.com/"
              />
              <SocialLogo img="/icons/twitter-logo.svg" to="https://x.com/" />
            </div>
            <img
              src="/icons/helper-svg.svg"
              alt="helper"
              className="
              absolute z-10 w-5 h-5 md:w-6 md:h-6
              right-[140px] md:right-[156px] bottom-0 hidden md:block
            "
            />
            <img
              src="/icons/helper-svg.svg"
              alt="helper"
              className="
              absolute z-10 w-5 h-5 md:w-6 md:h-6
              right-0 bottom-[44px] md:bottom-[52px] hidden md:block
            "
            />
          </div>
        </aside>

        <main
          className="
            rounded-2xl flex flex-col gap-4 min-h-0 
            overflow-visible
            xl:h-full xl:overflow-y-auto
          "
        >
          <div className="flex-1 min-h-0">
            <HomeNavList />
          </div>
          <div className="block xl:hidden">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

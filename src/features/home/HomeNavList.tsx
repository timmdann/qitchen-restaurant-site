import NavCard from "./NavCard";

function HomeNavList() {
  return (
    <div
      className="
        h-full max-w-full gap-4 bg-neutral-950
        grid
        xl:grid-rows-3 xl:grid-cols-1
        md:grid-cols-3 md:grid-rows-1
        grid-cols-1 grid-rows-3
      "
    >
      <NavCard
        img="/home-images/home-menu.jpg"
        title="MENU"
        to="/menu"
        size={"129"}
      />
      <NavCard
        img="/home-images/home-reservation.jpg"
        title="RESERVATION"
        to="/reservation"
        size={"178"}
      />
      <NavCard
        img="/home-images/home-about.jpg"
        title="OUR RESTAURANT"
        to="/about"
        size={"207"}
      />
    </div>
  );
}

export default HomeNavList;

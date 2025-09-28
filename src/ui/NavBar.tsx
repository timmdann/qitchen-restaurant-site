import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import MergeBarsButton from "./MergeBarsButton";
import FullScreenMenu from "./FullScreenMenu";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="
        w-full flex justify-center mt-4
        xl:mt-12 xl:ml-12 xl:w-auto xl:justify-start
      "
    >
      <div className="inline-flex h-14 items-center rounded-xl bg-neutral-950 px-2 gap-3 w-fit font-jost">
        <MergeBarsButton onClick={() => setOpen(true)} />

        <Link to="/" className="min-w-0">
          <Logo className="h-6" />
        </Link>
        <div
          className="hidden md:flex items-center gap-3"
          aria-hidden={!/xl/.test("xl")}
        >
          <Button kind="link" to="/menu" variant="text" size="md" rounded="md">
            MENU
          </Button>
          <Button kind="link" to="/about" variant="text" size="md" rounded="md">
            ABOUT
          </Button>
        </div>

        <Button
          kind="link"
          to="/reservation"
          variant="solid"
          size="md"
          rounded="md"
          className="px-6"
        >
          BOOK A TABLE
        </Button>
      </div>

      <FullScreenMenu open={open} onClose={() => setOpen(false)} />
    </nav>
  );
}

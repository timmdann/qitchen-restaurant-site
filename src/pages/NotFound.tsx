import TextDecoration from "../ui/TextDecoration";
import NavBar from "../ui/NavBar";
import Button from "../ui/Button";

export default function NotFound() {
  return (
    <div className="absolute inset-0 p-6">
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="relative h-full w-full rounded-2xl bg-neutral-900 border border-white/10">
        <div className="absolute left-0 right-0 top-0 z-10">
          <NavBar />
        </div>
        <div className="h-full w-full flex flex-col items-center justify-center px-6">
          <h1 className="text-6xl md:text-8xl font-forum mb-6 text-orange-50">
            <TextDecoration variant="text">404</TextDecoration>
          </h1>
          <p className="text-lg text-center md:text-xl font-jost mb-8 text-orange-50">
            Unfortunately the page you are looking for could not be found.
          </p>
          <Button kind="link" to="/" variant="primary" rounded="md" size="lg">
            Back to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}

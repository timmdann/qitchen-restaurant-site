import ReservationForm from "../features/reservation/ReservationForm";

function Reservation() {
  return (
    <div className="h-full min-h-0 flex flex-col">
      <div className="flex-1 min-h-0">
        <ReservationForm />
      </div>
    </div>
  );
}

export default Reservation;

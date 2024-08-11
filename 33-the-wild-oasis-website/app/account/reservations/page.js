import ReservationList from "21-the-wild-oasis-website/final-6-after-server-actions/app/_components/ReservationList";
import { auth } from "21-the-wild-oasis-website/final-6-after-server-actions/app/_lib/auth";
import { getBookings } from "21-the-wild-oasis-website/final-6-after-server-actions/app/_lib/data-service";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}

import { getMapUrl } from "../config";
import { useWedding, useT } from "../lang";
import Reveal from "./Reveal";

/** Venue card with a "Get Direction" button. */
export default function Venue() {
  const wedding = useWedding();
  const ui = useT();
  const { venue } = wedding;

  return (
    <section className="venue">
      <Reveal className="wrap">
        <h2 className="sect-head">{ui.venueHeading}</h2>

        <div className="venue-card">
          <p className="venue-name">{venue.name}</p>
          {venue.address && <p className="venue-addr">{venue.address}</p>}

          <a
            className="btn"
            href={getMapUrl(wedding)}
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">📍</span> {ui.getDirection}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

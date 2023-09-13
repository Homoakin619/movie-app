import SideNavbar from "@/components/SideNavbar";
import React from "react";

type Props = {};

export default function page() {
  return (
    <main className="main-container">
      <SideNavbar />
      <div className="detail-container">
        {/* <div className="player"> */}
        <img id="player" src="/poster.png" alt="" />
        <img id="play-btn" src="/assets/icons/player.svg" alt="" />
        {/* </div> */}

        <div className="labels">
          <div className="left-label">
            <span className="vid-title bolder">
              Top Gun: Maverick • 2022 • PG-13 • 2h 10m
            </span>
            <span className="genre-btn medium">Action</span>
            <span className="genre-btn medium">Drama</span>
          </div>
          <div className="right-label">
            <img src="/assets/icons/star.svg" alt="" />
            <span className="l-grey medium">8.5</span>
            <span className="d-grey medium"> | 350k</span>
          </div>
        </div>
        <div className="details-segment">
          <div className="left-segment">
            <span className="description">
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
            </span>
            <div className="about-section">
              <p className="about-item">
                Directors : <span className="red-text">&nbsp;Joseph Kosinski</span>{" "}
              </p>
              <p className="about-item">
                Writers :
                <span className="red-text">
                &nbsp;Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p className="about-item">
                Stars :
                <span className="red-text">
                &nbsp;Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
            </div>
            <div className="top-rated">
              <button className="rated-btn white bold">Top rated movie #65</button>
              <input className="rating-input" placeholder="Awards 9 nominations" type="text" />
            </div>
          </div>
          <div className="right-segment">
            <div className="ticket white">
              <img src="/assets/icons/ticket.svg" alt="" />
              <span>See Showtimes</span>
            </div>
            <div className="more-opt">
              <img src="/assets/icons/list.svg" alt="" />
              <span>More watch options </span>
            </div>

            <div className="more-movies">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

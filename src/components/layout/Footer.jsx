import React from "react";

function Footer() {
  return (
    <footer className="footer p-6 bg-primary footer-center">
      <div className="text-xs">
        <div className="text-blue-500 grid  grid-cols-2 ">
          <div>
            <a href="https://www.freepik.com/free-vector/adopt-pet-concept_7851422.htm#query=pet%20adoption&position=0&from_view=keyword">
              Freepik{" "}
            </a>
            <a href="https://www.freepik.com/free-vector/background-seamless-pattern-vector-with-cute-memphis_15841841.htm#query=paw&position=14&from_view=search&track=sph">
              Freepik{" "}
            </a>
          </div>
          <div>
            {" "}
            <a href="https://www.freepik.com/free-vector/friend-walking-with-pets-meeting-waving-hello-women-with-dog-cat-outside-flat-illustration_11235428.htm#page=2&query=pet%20adoption&position=15&from_view=search&track=sph">
              Image by pch.vector
            </a>
          </div>
          <div className="">
            <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
              Dog - Flaticon{" "}
            </a>
            <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">
              Cat Smashicons - Flaticon{" "}
            </a>
          </div>

          <div>
            <a
              href="https://www.flaticon.com/free-icons/horse"
              title="horse icons"
            >
              Horse- Flaticon{" "}
            </a>
            <a
              href="https://www.flaticon.com/free-icons/rabbit"
              title="rabbit icons"
            >
              Rabbit - Flaticon{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer1">
          <div className="names">
            <div className="logo2">
              Student <span style={{ color: "white" }}>Bazaar</span>
            </div>

            <div className="content1">
              <div className="item10">
                <div className="text-red-500">Categories</div>
                <div>
                  <Link
                    to="books"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Books
                  </Link>
                </div>
                <div>
                  <Link
                    to="electronics"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Electronics
                  </Link>
                </div>
                <div>
                  <Link
                    to="furniture"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Furniture
                  </Link>
                </div>
                <div>
                  <Link
                    to="other"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Other
                  </Link>
                </div>
              </div>
              <div className="item10">
                <div className="text-red-500">Contact no.</div>
                <div>+91 9027378938</div>
                <div>+91 6398538022</div>
                <div className="text-red-500">Email</div>
                <div>chhayanktarkar@gmail.com</div>
                <div className="text-red-500">Location</div>
                <div>Near IET college,</div>
                <div>Jankipuram , Sitapur Road</div>
              </div>
            </div>
          </div>

          <div className="line-lower-footer">
            <hr id="line" />
          </div>

          <div className="LinksBelow">
            <div className="copyrights">
              <h1 className="text-below-footer">
                &copy;Copyright_student_bazaar
              </h1>
            </div>

            <div className="handles">
              <Link
                to="https://chat.whatsapp.com/DLf9wlGi7T7LQCDGrHllcS"
                className="fa fa-whatsapp"
              ></Link>
              <Link
                to="https://t.me/storeiet"
                className="fa fa-telegram"
              ></Link>
              <Link
                to="https://www.linkedin.com/in/student-bazaar-1b68b92a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="fa fa-linkedin"
              ></Link>
              <Link
                to="https://instagram.com/student.bazaar?igshid=YWYwM2I1ZDdmOQ=="
                className="fa fa-instagram"
              ></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

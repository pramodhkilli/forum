import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import defaultThreads from "./data";
import Thread from "./thread";

// Define your components

function ThreadList({ threads }) {
  return (
    <>
      <ol>
        {threads.map((thread) => (
          <li key={thread.id} style={{ padding: "5px" }}>
            <Link
              to={"/thread"}
              id={thread.id}
              threads={defaultThreads}
              style={{ textDecoration: "none" }}
            >
              <h4 style={{ color: "black" }}>{thread.title}</h4>
              <div style={{ display: "flex", color: "grey", fontSize: "12px" }}>
                <p style={{ paddingRight: "10px" }}>
                  {new Date(thread.date).toLocaleString()}
                </p>
                <p className="comment-count">
                  {thread.comments.length} comments
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
const About = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <p>
          This website is to brush up my react skills, i have further plans to
          modify this website, but currently the sole purpose of this
          application is to remember the lost knowledge i had on React
        </p>
        <br></br>
        <p>
          I am following a bootcamp, where we get to learn new things by doing
          project. i am currently enjoying my progress
        </p>
      </div>
    </>
  );
};
const Contact = () => <h1>Contact us</h1>;
const NotFound = () => <h1>404 - Page not found</h1>;

function App() {
  return (
    <Router>
      <nav style={{ backgroundColor: "black", color: "white", margin: "0px" }}>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <li
            style={{
              listStyle: "none",
              padding: "1em",
              paddingTop: "0.5em",
              paddingBottom: "0.5em",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Post
            </Link>
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "1em",
              paddingTop: "0.5em",
              paddingBottom: "0.5em",
            }}
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "1em",
              paddingTop: "0.5em",
              paddingBottom: "0.5em",
            }}
          >
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ThreadList threads={defaultThreads} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/thread"
          element={<Thread threads={defaultThreads} id={1} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import '../Styles/Components.scss';
import React, { useState } from "react";
import "../Styles/App.scss";
import Navbar from "../Components/Navbar";

// Header component
function Header(props) {
  return (
    <div className="header-container">
      <div className="intro-image">
        <div className="header-text-box">
          <h1 className="header-text">
            <a
              href="/"
              style={{ color: "#697D30" }}
              onClick={(event) => {
                event.preventDefault();
                props.onChangeMode();
              }}
            >
              {props.title}
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

//     {/* // <header>
//     //   <h1><a href="/" onClick={(event)=>{ */}
//     {/* //     event.preventDefault();
//     //     props.onChangeMode();
//     //   }}>{props.title}</a></h1>
//     // </header> */}
//   {/* } */}

// Nav component
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          className="listingTitle"
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

// Article component
function Article(props) {
  return (
    <article>
      <h2 className="listingTitle">{props.title}</h2>
      <p>{props.body}</p>
    </article>
  );
}

// Create cpmponent
function Create(props) {
  return (
    <article>
      <h2>Details</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="Name of the plant" />
        </p>
        <p>
          <textarea name="body" placeholder="Description"></textarea>
        </p>
        <p>
          <input
            style={{
              backgroundColor: "#809543",
              fontFamily: "skolar-pe, sans-serif",
              color: "#FFE9C0",
              fontWeight: "600",
              fontSize: "17px",
            }}
            type="submit"
            value="Upload"
          ></input>
        </p>
      </form>
    </article>
  );
}

// Update cpmponent

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Edit</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input
            style={{
              backgroundColor: "#809543",
              fontFamily: "skolar-pe, sans-serif",
              color: "#FFE9C0",
              fontWeight: "600",
              fontSize: "17px",
            }}
            type="submit"
            value="Edit"
          ></input>
        </p>
      </form>
    </article>
  );
}

// Test

function CrudTest() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "Plant1", body: "Plant 1 is ..." },
    { id: 2, title: "Plant2", body: "Plant 2 is ..." },
    { id: 3, title: "Plant3", body: "Plant 3 is ..." },
  ]);
  let content = null;
  let contextControl = null;
  if (mode === "WELCOME") {
    content = <Article title="Description" body=""></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl = (
      <>
        <li style={{ listStyleType: "none", marginTop:"30px"}}>
          <a style={{
                backgroundColor: "#809543",
                fontFamily: "skolar-pe, sans-serif",
                color: "#FFE9C0",
                fontWeight: "400",
                fontSize: "17px",
                padding: "10px",
                borderRadius: "3px",
                textDecoration: "none"
              }}
            href={"/update/" + id}
            onClick={(event) => {
              event.preventDefault();
              setMode("UPDATE");
            }}
          >
            Edit your listing
          </a>
        </li>
        <li style={{ listStyleType: "none" }}>
          <input
            style={{
              backgroundColor: "#809543",
              fontFamily: "skolar-pe, sans-serif",
              color: "#FFE9C0",
              fontWeight: "600",
              fontSize: "17px",
              marginTop: "20px",
              width: "150px",
              padding:"8px 10px"
              
            }}
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = [];
              for (let i = 0; i < topics.length; i++) {
                if (topics[i].id !== id) {
                  newTopics.push(topics[i]);
                }
              }
              setTopics(newTopics);
              setMode("WELCOME");
            }}
          />
        </li>
      </>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          console.log(title, body);
          const newTopics = [...topics];
          const updatedTopic = { id: id, title: title, body: body };
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode("READ");
        }}
      ></Update>
    );
  }
  return (
    <div>
      <Navbar />
      <Header
        title="Listings"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      <hr />
      {content}
      <hr />
      <ul>
        <li style={{ listStyleType: "none" }}>
          <a
            style={{
                backgroundColor: "#809543",
                fontFamily: "skolar-pe, sans-serif",
                color: "#FFE9C0",
                fontWeight: "400",
                fontSize: "17px",
                padding: "10px 20px",
                borderRadius: "3px",
                textDecoration: "none"
              }}
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            Upload a plant
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default CrudTest;

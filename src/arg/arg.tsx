import { useState } from "react";
import "./styles.css";

export function ARG() {
  let command: string = "";

  const [content, setContent] = useState(<></>);
  const [inputDisabled, setInputDisabled] = useState(false);

  return (
    <div className="content">
      <p>"POLAB" SYSTEM</p>
      <p>© EVO Ind. 1889. ALL RIGHTS PRESERVED</p>
      <br></br>
      <div className="flex-row">
        <p>~ $</p>
        <input
          type="text"
          onChange={(e) => {
            command = e.target.value;
          }}
          disabled={inputDisabled}
        ></input>
      </div>
      <button
        className="sendBtn"
        onClick={() => {
          setInputDisabled(true);
          switch (command) {
            case "info": {
              const date = new Date();
              const finalDate = `1889.${date.getMonth()}.${date.getDate()}`;
              setContent(
                <div className="content">
                  <p>
                    "POLAB" Laboratory monitoring system
                    <br></br>
                    By "EVO Ind."
                    <br></br>
                    Current state: Working.
                    <br></br>
                    Current Date. {finalDate}.
                  </p>
                  <p className="red-text">
                    Unexpected error occurred in system. PANIC-ID:
                    3-6-25-15-16-19-20-30
                  </p>
                  <></>
                </div>
              );
              break;
            }
            case "help":
            case "?": {
              setContent(
                <div className="content">
                  <p>
                    "POLAB" Laboratory monitoring system actions
                    <br></br>
                    By "EVO Ind."
                    <br></br>
                  </p>
                  <p className="red-text">
                    Unexpected error occurred in system while getting actions.
                    PANIC-ID: 1f2u7n4e5q1f
                  </p>
                  <></>
                </div>
              );
              break;
            }
            case "access db": {
              setContent(
                <div className="content">
                  <p>
                    "POLAB" Laboratory monitoring system's DB
                    <br></br>
                    By "EVO Ind."
                    <br></br>
                    Poor Orlen:
                    <br></br> Farolinn
                    <br></br> Gold Orlen:
                    <p className="red-text">UNAVAIBLE</p>
                    <p className="red-text">
                      ???
                      <br></br> DimkaShow
                      <br></br> UNPREDICTED CITIZEN FOUND. RETRYING...
                    </p>
                  </p>
                  <p className="red-text">
                    Unexpected error occurred in system while getting actions.
                    PANIC-ID: UNKNOWN. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR. ERROR.
                    ERROR. ERROR. ERROR. ERROR. ERROR.
                  </p>
                  <></>
                </div>
              );
              break;
            }
          }
        }}
      >
        Send action
      </button>
      {content}
    </div>
  );
}

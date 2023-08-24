//importing css & js of BootStrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BsCloudCheck } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";

import "./App.css";
import { useState } from "react";

const Required = (props) => {
  return (
    <>
      <p className="text-danger mt-2" style={{ fontSize: "14px" }}>
        <span>
          <BsExclamationCircle className="me-2" style={{ fontSize: "20px" }} />
        </span>{" "}
        <span>{props.errorTxt}</span>
      </p>
    </>
  );
};

const handleFocus = () => {};

function App() {
  const [isMCQ, setIsMCQ] = useState(true);

  return (
    <div className="App d-flex justify-content-center ">
      <div
        style={{
          backgroundColor: "transparent",
          border: "1px solid transparent",
          width: "590px",
        }}
      >
        <div
          className="rounded-3 bg-white card p-0 "
          style={{ border: "1px solid rgb(239, 239, 240)" }}
        >
          <div
            className="p-0  m-0 "
            style={{
              height: "10px",
              background: "#673AB7",
              border: "0px solid transparent",
              borderRadius: "8px 8px 0px 0px",
            }}
          ></div>
          <h1 className="px-3 ">Assignment Task</h1>
          <hr />
          <p className="d-flex justify-content-between px-3 ">
            <span>
              {" "}
              vikassahani1110@gmail.com{" "}
              <span style={{ color: "blue" }}>Switch accounts</span>
            </span>
            <BsCloudCheck />
          </p>
          <p className="px-3 ">
            The name and photo associated with your Google Account will be
            recorded when you upload files and submit this form. Your email
            address is not part of your response.
          </p>
          <hr />
          <p className="text-danger px-3">* Indicates required question</p>
        </div>

        {/* MCQ */}
        <div className="card mcq">
          <h6>
            MCQ <span className="text-danger">*</span>
          </h6>
          <label htmlFor="1stMCQOption">
            <input type="radio" id="1stMCQOption" name="mcq" />
            &nbsp; Option 1
          </label>
          <label htmlFor="2ndMCQOption">
            <input type="radio" id="2ndMCQOption" name="mcq" />
            &nbsp; Option 2
          </label>
          <label htmlFor="3rdMCQOption">
            <input type="radio" id="3rdMCQOption" name="mcq" />
            &nbsp; Option 3
          </label>
          {isMCQ ? "" : <Required errorTxt="This is a required question" />}
        </div>

        {/* Checkbox */}
        <div className=" card mcq">
          <h6>
            Checkbox <span className="text-danger">*</span>
          </h6>
          <label htmlFor="1stMCQOption">
            <input type="checkbox" id="1stMCQOption" name="mcq" />
            &nbsp; Option 1
          </label>
          <label htmlFor="2ndMCQOption">
            <input type="checkbox" id="2ndMCQOption" name="mcq" />
            &nbsp; Option 2
          </label>
          <label htmlFor="3rdMCQOption">
            <input type="checkbox" id="3rdMCQOption" name="mcq" />
            &nbsp; Option 3
          </label>
          {isMCQ ? "" : <Required />}
        </div>

        {/* Short Answer */}
        <div className="card">
          <h6>
            Short Answer <span className="text-danger">*</span>
          </h6>

          <input type="text" placehoder="Your Answer" />
          {isMCQ ? "" : <Required errorTxt="This is a required question" />}
        </div>

        {/* ParaGrap */}
        <div className="card">
          <h6>
            ParaGrap <span className="text-danger">*</span>
          </h6>
          <input type="text" placehoder="Your Answer" />
          {isMCQ ? "" : <Required errorTxt="This is a required question" />}
        </div>

        {/* Drop down */}
        <div className="card">
          <h6>
            Drop down <span className="text-danger">*</span>
          </h6>
          <select className="w-25 m-3 px-2 py-2 rounded-2 text-secondary border-secondary">
            <option>Choose</option>
            <hr />
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          {isMCQ ? "" : <Required errorTxt="This is a required question" />}
        </div>

        {/* File Upload */}
        <div className="card">
          <h6>
            File Upload <span className="text-danger">*</span>
          </h6>
          <label
            htmlFor="file"
            className="text-primary w-25 m-2 px-2 py-2 rounded-2 border-1 border border-secondary fw-bold "
          >
            <input
              type="file"
              value=""
              id="file"
              placeholder="Add Value"
              style={{ width: "0px" }}
              className=""
            />
            <BsUpload />
            &nbsp; &nbsp; Add Value
          </label>
          {isMCQ ? "" : <Required errorTxt="This is a required question" />}
        </div>

        {/* Linear Scale */}
        <div className="card">
          <table className="table caption-top">
            <caption>
              Linear Scale <span className="text-danger">*</span>
            </caption>
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Worst</th>
                <td>
                  <input type="radio" />
                </td>
                <td>
                  <input type="radio" />
                </td>
                <td>
                  <input type="radio" />
                </td>
                <td>
                  <input type="radio" />
                </td>
                <td>
                  <input type="radio" />
                </td>
                <td>best</td>
              </tr>
            </tbody>
          </table>
          {isMCQ ? "" : <Required errorTxt="This is a required question" />}
        </div>

        {/* Multi choice Grid */}
        <div className="card">
          <table class="table caption-top">
            <caption>
              Multi choice Grid <span className="text-danger">*</span>
            </caption>
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Column 1</th>
                <th scope="col">Column 2</th>
                <th scope="col">Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Row 1</th>
                <td>
                  <input type="radio" name="radioBoxGridR1" />
                </td>
                <td>
                  <input type="radio" name="radioBoxGridR1" />
                </td>
                <td>
                  <input type="radio" name="radioBoxGridR1" />
                </td>
              </tr>
              <tr>
                <th scope="row">Row 2</th>
                <td>
                  <input type="radio" name="radioBoxGridR2" />
                </td>
                <td>
                  <input type="radio" name="radioBoxGridR2" />
                </td>
                <td>
                  <input type="radio" name="radioBoxGridR2" />
                </td>
              </tr>
              <tr>
                <th scope="row">Row 2</th>
                <td>
                  <input type="radio" name="radioBoxGridR3" />
                </td>
                <td>
                  <input type="radio" name="radioBoxGridR3" />
                </td>
                <td>
                  <input type="radio" name="radioBoxGridR3" />
                </td>
              </tr>
            </tbody>
          </table>
          {isMCQ ? (
            ""
          ) : (
            <Required errorTxt="This question requires at least one response per row" />
          )}
        </div>

        {/*Tick box Grid  */}
        <div className="card">
          <table class="table caption-top">
            <caption>
              Tick box Grid <span className="text-danger">*</span>
            </caption>
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Column 1</th>
                <th scope="col">Column 2</th>
                <th scope="col">Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Row 1</th>
                <td>
                  <input type="checkbox" name="tickBoxGr" />
                </td>
                <td>
                  <input type="checkbox" name="tickBoxGr" />
                </td>
                <td>
                  <input type="checkbox" name="tickBoxGr" />
                </td>
              </tr>
              <tr>
                <th scope="row">Row 2</th>
                <td>
                  <input type="checkbox" name="tickBoxGr" />
                </td>
                <td>
                  <input type="checkbox" name="tickBoxGr" />
                </td>
                <td>
                  <input type="checkbox" name="tickBoxGr" />
                </td>
              </tr>
              <tr>
                <th scope="row">Row 2</th>
                <td>
                  <input type="checkbox" name="tickBoxGr" />
                </td>
                <td>
                  <input type="checkbox" name="tickBoxGr" />
                </td>
                <td>
                  <input type="checkbox" name="tickBoxGr" />
                </td>
              </tr>
            </tbody>
          </table>
          {isMCQ ? (
            ""
          ) : (
            <Required errorTxt="This question requires at least one response per row" />
          )}
        </div>

        {/* Submit */}
        <div className="d-flex justify-content-between align-items-center submitBtn">
          <button className="btn btn-primary ">Submit</button>
          <label for="points">
            <input
              type="range"
              id="points"
              name="points"
              min="0"
              max="10"
              // disabled
            />
            &nbsp; &nbsp; Page 1 of 1
          </label>
          <button className="btn btn-danger">clear form</button>
        </div>

        {/* footer */}
        <footer>
          <p>Never submit passwords through Google Forms.</p>
          <p className="text-end ">
            This content is neither created nor endorsed by Google.{" "}
            <a href="#">Report Abuse </a>- <a href="#">Terms of Service</a> -{" "}
            <a href="#">Privacy Policy</a>
          </p>
          <h4 className="text-center ">
            <a
              href="https://www.google.com/forms/about/?utm_source=product&utm_medium=forms_logo&utm_campaign=forms"
              className="text-secondary text-decoration-none "
            >
              <span className="fw-bold">Google</span> Forms
            </a>
          </h4>
        </footer>
      </div>
    </div>
  );
}

export default App;

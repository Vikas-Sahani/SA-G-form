import "./App.css";

//importing css & js of BootStrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Required = () => {
  return (
    <>
      <span className="text-danger">*</span>
    </>
  );
};

function App() {
  return (
    <div className="App d-flex justify-content-center ">
      <div className="w-25 ">
        <div>
          <h1>Assignment Task</h1>
          <hr />
          <p>
            The name and photo associated with your Google Account will be
            recorded when you upload files and submit this form. Your email
            address is not part of your response.
          </p>
          <hr />
          <p className="text-danger "> Indicates required question</p>
        </div>

        {/* MCQ */}
        <div className="mb-3 p-3 card mcq">
          <h5>
            MCQ <Required />
          </h5>
          <label>
            <input type="radio" />
            Option 1
          </label>
          <label>
            <input type="radio" />
            Option 2
          </label>
          <label>
            <input type="radio" />
            Option 3
          </label>
        </div>

        {/* Checkbox */}
        <div className="mb-3 p-3 card checkBox">
          <h5>
            Checkbox <Required />
          </h5>
          <label>
            <input type="checkBox" />
            Option 1
          </label>
          <label>
            <input type="checkBox" />
            Option 2
          </label>
          <label>
            <input type="checkBox" />
            Option 3
          </label>
        </div>

        {/* Short Answer */}
        <div>
          <h5>
            Short Answer <Required />
          </h5>
          <input type="text" placehoder="Your Answer" />
        </div>

        {/* ParaGrap */}
        <div>
          <h5>
            ParaGrap <Required />
          </h5>
          <input type="text" placehoder="Your Answer" />
        </div>

        {/* Drop down */}
        <div>
          <h5>
            Drop down <Required />
          </h5>
          <select>
            <option>Choose</option>
            <hr />
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        {/* File Upload */}
        <div>
          <h5>
            File Upload <Required />
          </h5>
          <input type="file" values="Add Value" />
        </div>

        {/* Linear Scale */}
        <table class="table caption-top">
          <caption>
            Linear Scale <Required />
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

        {/* Multi choice Grid */}
        <table class="table caption-top">
          <caption>
            Multi choice Grid <Required />
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
                <input type="radio" />
              </td>
              <td>
                <input type="radio" />
              </td>
              <td>
                <input type="radio" />
              </td>
            </tr>
            <tr>
              <th scope="row">Row 2</th>
              <td>
                <input type="radio" />
              </td>
              <td>
                <input type="radio" />
              </td>
              <td>
                <input type="radio" />
              </td>
            </tr>
            <tr>
              <th scope="row">Row 2</th>
              <td>
                <input type="radio" />
              </td>
              <td>
                <input type="radio" />
              </td>
              <td>
                <input type="radio" />
              </td>
            </tr>
          </tbody>
        </table>

        {/*Tick box Grid  */}
        <table class="table caption-top">
          <caption>
            Tick box Grid <Required />
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
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th scope="row">Row 2</th>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th scope="row">Row 2</th>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

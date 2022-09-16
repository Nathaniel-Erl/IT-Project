import React from "react";
import NavBar from "../components/NavBar/NavBar";

function Signup() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <form>
          <label>
            First Name:
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>
            Last Name:
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>
            Username:
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>
            Email:
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>
            Password:
            <input type="text" name="name" />
          </label>
        </form>
        <input type="submit" value="Submit" />
      </div>
    </>
  );
}

export default Signup;

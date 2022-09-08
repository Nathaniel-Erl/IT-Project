import "./login.css";

function App() {
  return (
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
  );
}

export default App;

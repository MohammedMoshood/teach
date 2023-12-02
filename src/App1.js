import "./App.css";
import Nav from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
// function useInterval(timeout, getValue) {
//   const [value, setValue] = useState(getValue);
//   useEffect(() => {
//     const intervalID = setInterval(() => setValue(getValue()), timeout);
//     return function () {
//       clearInterval(intervalID);
//     };
//   }, [getValue, timeout]);
//   return value;
// }
// const getCurrentDate = () => new Date();

function App() {
  // const [count, setCount] = useState(0);
  // const date = useInterval(1000, getCurrentDate);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  const submitForm = (event) => {
    event?.preventDefault();
    alert("sign up successful");
  };

  return (
    <div>
      <Nav />
      <form onSubmit={() => submitForm()}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
   
      {/* <div>
        <p>Count the number clicks in your page : </p>
        <button onClick={() => setCount(count + 1)}>Click here</button>
        <p>Nous sommes le {date.toLocaleString("fr-FR")}</p>
      </div> */}
    </div>
  );
}

export default App;

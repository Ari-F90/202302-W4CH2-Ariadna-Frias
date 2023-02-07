import "./form.css";
export function Form2() {
  return (
    <form className="form">
      <h2>Access Data</h2>
      <div className="form-fields">
        <label htmlFor="Username">Username</label>
        <input
          id="username"
          name="username"
          type="username"
          value=""
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value=""
          placeholder="Password"
        />
        <label htmlFor="repeat-password">Repeat password</label>
        <input
          id="repeat-password"
          name="repeat-password"
          type="repeat-password"
          value=""
          placeholder="Repeat password"
        />
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}

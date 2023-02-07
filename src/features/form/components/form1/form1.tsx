import "../form.css";
export function Form1() {
  return (
    <form className="form">
      <h2>Personal Data</h2>
      <div className="form-fields">
        <label htmlFor="Name">Name</label>
        <input id="name" name="name" type="name" value="" placeholder="Name" />
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          name="last-name"
          type="last-name"
          value=""
          placeholder="Last name"
        />
        <label htmlFor="birth-date">Birth Date</label>
        <input
          id="birth-date"
          name="birth-date"
          type="birth-date"
          value=""
          placeholder="Birth date"
        />
        <div>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
          <input type="radio" value="not-mention" name="gender" />
          Prefer no to mention
        </div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value=""
          placeholder="Email"
        />
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            Do you want to receive our newsletter?
          </label>
        </div>
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}

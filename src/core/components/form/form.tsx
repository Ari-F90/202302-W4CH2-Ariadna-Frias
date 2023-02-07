export function Form() {
  return (
    <form>
      <h2>Personal Data</h2>
      <label htmlFor="Name">Name</label>
      <input id="name" name="name" type="name" value="" />
      <label htmlFor="last-name">Last Name</label>
      <input id="last-name" name="last-name" type="last-name" value="" />
      <label htmlFor="birth-date">Birth Date</label>
      <input id="birth-date" name="birth-date" type="birth-date" value="" />
      <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
        <input type="radio" value="not-mention" name="gender" />
        Prefer no to mention
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

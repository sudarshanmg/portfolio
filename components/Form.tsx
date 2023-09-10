"use client";

const Form = () => {
  return (
    <form action={"api/add-note"} method="POST">
      <input type="text" name="note" id="note" placeholder="Type anything..." />
      <input type="text" name="user" id="user" placeholder="Your name..." />
    </form>
  );
};

export default Form;

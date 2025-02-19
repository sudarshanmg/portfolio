"use client";

const Form = () => {
  return (
    <form action={"api/data/notes"} method="POST">
      <input type="text" name="note" id="note" placeholder="Type anything..." />
      <input type="text" name="name" id="name" placeholder="Your name..." />
    </form>
  );
};

export default Form;

import { Button, Checkbox, Input } from "@nextui-org/react";
import React from "react";
import "./NewsLetter.css";
function NewsLetter() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form class="news__container">
        <div>
          <h2>Subscribe to our Newsletter</h2>
        </div>

        <div class="newsletter__input">
          <Input type="text" placeholder="Name" name="name" required />
          <Input type="text" placeholder="Email address" name="mail" required />
        </div>

        <div class="container">
          <Button
            type="submit"
            value="Subscribe"
            onClick={formSubmitHandler}
            css={{ color: "#D9580D", bg: "$white", fontSize: "1rem" }}
          >
            Subscribe
          </Button>
        </div>
      </form>
    </>
  );
}

<Input color="warning" />;
export default NewsLetter;

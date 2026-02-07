import React from "react";

export const Jumbotron = () => {
  const jumbotronTitle = "A Warm Welcome"
  const jumbotronDescription = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  const jumbrotronButtonName = "Call to action!"
  return (
    <div>
      <div class="container-fluid py-5 bg-secondary-subtle mb-4">{" "}
        {" "}
        <h1 class="display-5 fw-bold">{jumbotronTitle}</h1>
        <p class="col-md-8 fs-4">
          {jumbotronDescription}
        </p>{" "}
        <button class="btn btn-primary btn-lg" type="button">
          {jumbrotronButtonName}
        </button>{" "}
      </div>
    </div>
  );
};

import React from "react";

import Button from "../../components/Button/Button";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Button>Submit</Button>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button
        class="sc-bdfBwQ gwwGmF"
      >
        Submit
      </button>
    </DocumentFragment>
  `);
});

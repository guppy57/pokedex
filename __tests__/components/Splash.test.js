import react from "react";
import { render, screen } from "@testing-library/react";
import Splash from "../../components/Splash";

describe("Splash - dumb component", () => {
  it("should render heading", () => {
    render(<Splash />);
    const heading = screen.getByText("Find every Pok&eacute;mon, ever.");
    expect(heading).toBeInTheDocument();
  });
});
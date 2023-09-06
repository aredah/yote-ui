import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import Description from '.';

describe('Description', () => {
    it('should render the description', () => {
        const plaintextDescription = "This is a description";
        const { container } = render(<Description description={plaintextDescription} />);
        expect(container.textContent).toBe(plaintextDescription);
    });

    it('should render the description with HTML', () => {
        const htmlDescription = <span data-testid="html-check">This is a description</span>;
        const { getByTestId } = render(<Description description={htmlDescription} />);
        expect(getByTestId("html-check")).toBeInTheDocument();
        expect(getByTestId("html-check")).toHaveTextContent("This is a description");
    });

    it('should render the description with whitespace preserved', () => {
        const plaintextDescription = "This is a description\nwith a newline";
        const { container } = render(<Description description={plaintextDescription} />);
        expect(container.textContent).toBe(plaintextDescription);
    });

});
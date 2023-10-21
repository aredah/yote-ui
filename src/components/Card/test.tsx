import { render } from "@testing-library/react";
import Card, { Thing } from ".";

const example: Thing = {
    name: "The Thing's Name",
    description: "This is the thing's description",
    actions: [
        { label: "Action Label", onClick: vi.fn() }
    ],
    url: "https://example.com/thing"
}

describe("<Card />", () => {
    it("should render the title", () => {
        const { container } = render(<Card {...example} />);
        expect(container.textContent).toContain(example.name);
    });

    it("should render the subtitle", () => {
        const { container } = render(<Card {...example} />);
        expect(container.textContent).toContain(example.description);
    });

    it("should render the actions", () => {
        const { getByText } = render(<Card {...example} />);
        expect(getByText(example.actions[0].label)).toBeInTheDocument();
    });
});
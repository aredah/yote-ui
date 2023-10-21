import { render } from "@testing-library/react";
import BaseCard from ".";
import { Action } from "../../Actions";

describe("BaseCard", () => {

    it("should render the title", () => {
        const title = "Title";
        const { container } = render(<BaseCard title={title} />);
        expect(container.textContent).toBe(title);
    });

    it("should render the title as an element", () => {
        const title = <span data-testid="title-check">Title</span>;
        const { getByTestId } = render(<BaseCard title={title} />);
        expect(getByTestId("title-check")).toBeInTheDocument();
        expect(getByTestId("title-check")).toHaveTextContent("Title");
    });

    it("should render the subtitle", () => {
        const subtitle = "Subtitle";
        const { container } = render(<BaseCard title="Title" subtitle={subtitle} />);
        expect(container.textContent).toContain(subtitle);
    });

    it("should render the subtitle as an element", () => {
        const subtitle = <span data-testid="subtitle-check">Subtitle</span>;
        const { getByTestId } = render(<BaseCard title="Title" subtitle={subtitle} />);
        expect(getByTestId("subtitle-check")).toBeInTheDocument();
        expect(getByTestId("subtitle-check")).toHaveTextContent("Subtitle");
    });

    it("should render the description", () => {
        const description = "Description";
        const { container } = render(<BaseCard title="Title" description={description} />);
        expect(container.textContent).toContain(description);
    });

    it("should render the description as an element", () => {
        const description = <span data-testid="description-check">Description</span>;
        const { getByTestId } = render(<BaseCard title="Title" description={description} />);
        expect(getByTestId("description-check")).toBeInTheDocument();
        expect(getByTestId("description-check")).toHaveTextContent("Description");
    });

    it("should render the image", () => {
        const imageSrc = "https://via.placeholder.com/150";
        const { getByAltText } = render(<BaseCard title="Title" imageSrc={imageSrc} />);
        expect(getByAltText("Title")).toBeInTheDocument();
    });

    it("should render the image with a title", () => {
        const imageSrc = "https://via.placeholder.com/150";
        const { getByAltText } = render(<BaseCard title="Title" imageSrc={imageSrc} />);
        expect(getByAltText("Title")).toBeInTheDocument();
    });

    it("should render the actions", () => {
        const action: Action = { label: "Action", onClick: vi.fn() };
        const actions = [action];
        const { getByText } = render(<BaseCard title="Title" actions={actions} />);
        expect(getByText("Action")).toBeInTheDocument();
    });

    it("should render the actions with multiple actions", () => {
        const action1: Action = { label: "Action1", onClick: vi.fn() };
        const action2: Action = { label: "Action2", onClick: vi.fn() };
        const actions = [action1, action2];
        const { getByText } = render(<BaseCard title="Title" actions={actions} />);
        expect(getByText("Action1")).toBeInTheDocument();
        expect(getByText("Action2")).toBeInTheDocument();
    });
});
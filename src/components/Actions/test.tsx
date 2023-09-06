import { render, fireEvent } from '@testing-library/react';
import Actions, { Action } from '.';

describe('Actions component', () => {
    it('renders a button for ClickAction and calls onClick when clicked', () => {
        const mockClick = vi.fn();

        const actions: Action[] = [
            { label: 'Click Me', onClick: mockClick }
        ];

        const { getByRole } = render(<Actions actions={actions} />);

        // Assert that the button is rendered
        const button = getByRole('button', { name: 'Click Me' });
        expect(button).toBeInTheDocument();

        // Simulate a button click and assert that onClick was called
        fireEvent.click(button);
        expect(mockClick).toHaveBeenCalledTimes(1);
    });

    it('renders an anchor link for LinkAction and has the correct href', () => {
        const actions: Action[] = [
            { label: 'Visit Google', href: 'https://www.google.com' }
        ];

        const { getByRole } = render(<Actions actions={actions} />);

        // Assert that the link is rendered with the correct href
        const link = getByRole('link', { name: 'Visit Google' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://www.google.com');
    });

    it('renders multiple actions', () => {
        const actions: Action[] = [
            { label: 'Click Me', onClick: vi.fn() },
            { label: 'Visit Google', href: 'https://www.google.com' }
        ];

        const { getByRole } = render(<Actions actions={actions} />);

        // Assert that both actions are rendered
        const button = getByRole('button', { name: 'Click Me' });
        const link = getByRole('link', { name: 'Visit Google' });
        expect(button).toBeInTheDocument();
        expect(link).toBeInTheDocument();
    });

    it('renders no actions', () => {
        const actions: Action[] = [];

        const { queryByRole } = render(<Actions actions={actions} />);

        // Assert that no actions are rendered
        const button = queryByRole('button');
        const link = queryByRole('link');
        expect(button).not.toBeInTheDocument();
        expect(link).not.toBeInTheDocument();
    });
});

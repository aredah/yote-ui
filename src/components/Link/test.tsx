import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link, LinkContext } from '.';

describe('Link component', () => {
    it('renders an anchor tag with the correct label and URL', () => {
        const label = 'Google';
        const url = 'https://www.google.com';
        render(<Link href={url} >{label}</Link>);
        const linkElement = screen.getByRole('link', { name: label });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', url);
    });

    it('renders a custom link component when provided via context', () => {
        const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
            <a href={href} className="custom-link">
                {children}
            </a>
        );
        const label = 'Google';
        const url = 'https://www.google.com';
        render(
            <LinkContext.Provider value={{ LinkComponent: CustomLink }}>
                <Link href={url} >{label}</Link>
            </LinkContext.Provider>
        );
        const linkElement = screen.getByRole('link', { name: label });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass('custom-link');
    });
});
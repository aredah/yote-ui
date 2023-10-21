import React, { useContext } from 'react';

interface DefaultLinkProps {
    href: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

interface LinkContextProps {
    LinkComponent?: React.ElementType;
}

const LinkContext = React.createContext<LinkContextProps>({});

const DefaultLink: React.FC<DefaultLinkProps> = ({ href, className, style, children }) => (
    <a href={href} className={className} style={style} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const Link: React.FC<DefaultLinkProps> = (props) => {
    const { LinkComponent } = useContext(LinkContext);

    if (LinkComponent) {
        return React.cloneElement(<LinkComponent />, {
            ...props,
        });
    }

    return <DefaultLink {...props} />;
};

export { Link, LinkContext };

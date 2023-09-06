type ClickAction = {
    label: string;
    onClick: () => void;
};

type LinkAction = {
    label: string;
    href: string;
};

export type Action = ClickAction | LinkAction;

export default function Actions({ actions }: { actions: Action[] }) {
    return actions.map((action, index) => {
        const hasOnClick = Object.prototype.hasOwnProperty.call(action, "onClick");
        if (hasOnClick) {
            const clickAction = action as ClickAction;
            return <button key={index} className="btn btn-primary" role="button" onClick={clickAction.onClick}>{clickAction.label}</button>
        } else {
            const linkAction = action as LinkAction;
            return <a key={index} className="btn btn-primary" target="_blank" href={linkAction.href}>{linkAction.label}</a>
        }
    });
}
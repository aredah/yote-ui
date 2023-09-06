export default function Description({ description }: { description: string | React.ReactNode }) {
    if (typeof description === 'string') {
        return (
            <p className="whitespace-pre-wrap" >{description}</p>
        );
    }
    return description;
}
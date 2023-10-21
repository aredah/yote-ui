import React from "react";
import Description from "../../Description";
import Actions, { Action } from "../../Actions";


type BaseCardProps = {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    description?: string | React.ReactNode;
    imageSrc?: string;
    actions?: Action[];
};

function CardImage({ imageSrc, altText }: { imageSrc?: string; altText: string }) {
    return imageSrc && <figure className="aspect-w-16 aspect-h-9">
        <img className="object-cover" src={imageSrc} alt={altText} />
    </figure>;
}

function Title({ title }: { title: string | React.ReactNode }) {
    return typeof title === "string" ? <h2 className="card-title">{title}</h2> : title;
}

function Subtitle({ subtitle }: { subtitle: string | React.ReactNode }) {
    return typeof subtitle === "string" ? <span className="text-secondary-focus">{subtitle}</span> : subtitle;
}

function CardActions({ actions }: { actions?: Action[] }) {
    return actions && <div className="card-actions justify-end">
        <Actions actions={actions} />
    </div>
}

function BaseCard({ title, subtitle, description, imageSrc, actions }: BaseCardProps) {
    const altText = typeof title === "string" ? title : "";
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <CardImage imageSrc={imageSrc} altText={altText} />
                <div className="card-body">
                    <Title title={title} />
                    <Subtitle subtitle={subtitle} />
                    <Description description={description} />
                    <CardActions actions={actions} />
                </div>
            </div>
        </>
    );
}

export default BaseCard;
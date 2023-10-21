import { Action } from "../Actions";
import BaseCard from "./BaseCard";

export type Thing = {
    name: string;
    description: string;
    image?:{
        contentUrl: string;
    }
    actions: Action[];
    url?: string;
};

function ThingCard({ ...thing }: Thing) {
    return <BaseCard 
        title={thing.name}
        description={thing.description}
        imageSrc={thing.image?.contentUrl}
        actions={thing.actions}
    />
}

export default ThingCard;
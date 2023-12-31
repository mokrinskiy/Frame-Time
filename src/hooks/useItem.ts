import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { cameras } from "../utils/constants";

export function useItem() {
    const [item, setItem] = useState<Array<any>>([]);
    const { id } = useParams();

    useEffect(() => {
        const item = cameras.filter((item) => item.id == Number(id));
        setItem(item);
    }, [id]);

    return item;
}

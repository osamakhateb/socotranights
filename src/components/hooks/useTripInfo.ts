import { useEffect, useState } from 'react';
import type { TripInfoData } from '../../data/tripInfo.types';
import { tripInfoStaticData } from '../../data/tripInfo.data';

interface UseTripInfoProps {
    apiUrl?: string;
}

export const useTripInfo = ({ apiUrl }: UseTripInfoProps = {}) => {
    const [data, setData] = useState<TripInfoData | null>(null);

    useEffect(() => {
        if (!apiUrl) {
            setData(tripInfoStaticData);
            return;
        }

        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const json = await res.json();
                setData(json.data);
            } catch {
                setData(tripInfoStaticData);
            }
        };

        fetchData();
    }, [apiUrl]);

    return { data };
};

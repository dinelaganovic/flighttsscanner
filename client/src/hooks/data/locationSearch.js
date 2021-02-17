import fetcher from "../../services/fetcher";
import useSWR from "swr";

const useLocationSearch = (value) => {
    const isValid = value && value.length > 2 && value !== "Near Me";
    const url = isValid ?
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${"pk.eyJ1IjoiZGluZWxhZ2Fub3ZpYyIsImEiOiJja2tneTljODEwOGd5MzJyanRrNzc2NDUxIn0.ZqhQMnhpz_n9Xx8y-k3A9g"}` :
        null;

    const { data, error } = useSWR(url, fetcher, {
        dedupingInterval: 20000,
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {

            if (error.status === 429) return;
        },
    });

    return {
        locations: data && data.features ?
            data.features
            .map((d) => ({
                id: d.id,
                name: d.text,
                fullName: d.place_name,
                lon: d.geometry.coordinates[0],
                lat: d.geometry.coordinates[1],
            })) :
            [],
        isLoading: !error && !data,
        isError: error,
    };
};

export default useLocationSearch;
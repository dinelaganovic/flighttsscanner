import fetcher from "../../services/fetcher";
import { useSWRInfinite } from "swr";
import { useRecoilValue } from "recoil";
import { zoomState } from "../state/viewport";
import { searchOptionsState } from "../state/searchOptions";

const fixedNumber = (value, decimals) => Number(value.toFixed(decimals));

const useHotelSearch = () => {
    const zoom = useRecoilValue(zoomState);
    let {
        lat,
        lon,
        checkin,
        checkout,
        local = "en_US",
        cur = "USD",
        rooms,
        limitLatLong = true,
    } = useRecoilValue(searchOptionsState);

    const isValid = lat > 0 && lon > 0 && zoom > 10;

    if (limitLatLong) {
        lat = fixedNumber(lat, 1);
        lon = fixedNumber(lon, 1);
    }

    const url = `https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com?lat=${lat}&lon=${lon}&checkIn=${checkin}&checkOut=${checkout}&rooms=${rooms}&locale=${local}&currency=${cur}`;

    const getKey = (pageIndex, previousPageData) => {
        const key =
            pageIndex === 0 ?
            `${url}&pageNumber=1` :
            previousPageData ?
            `${url}&pageNumber=${pageIndex + 1}` :
            null;
        return key;
    };

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "c4a3898189msh3c358be423e4e5cp181799jsn399697e6eef8",
            "x-rapidapi-host": "hotels-com-free.p.rapidapi.com",
        },
    };
    const { data, size, setSize, error } = useSWRInfinite(
        isValid ? getKey : null,
        (url) => fetcher(url, options), {
            initialSize: 1,
            revalidateAll: false,
            persistSize: true,
            onErrorRetry: (error, key, config, revalidate, { retryCount }) => {

                if (error.status === 429) return;
            },
        }
    );

    return {
        data:
            !error && data && data.length ?
            data.flatMap((x) =>
                x && x.data ? x.data.body.searchResults.results : []
            ) : [],
        isLoading: !error && !data && isValid,
        isError: error,
        setSize,
        size,
    };
};
export default useHotelSearch;
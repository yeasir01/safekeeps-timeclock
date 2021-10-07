import { useEffect, useState } from 'react';

function useFetch(initialUrl = "", initialOptions = {}) {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState(initialUrl);
    const [options, setOptions] = useState(initialOptions);

    const request = {
        get: (url = "", config = {}) => {
            setUrl(url)
            setOptions(config)
        },
        post: (url = "", data = [], config = {}) => {
            const defaults = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },   
                body: JSON.stringify(data)
            }

            const opt = {
                ...defaults,
                ...config
            }

            setUrl(url)
            setOptions(opt)
        },
        put: (url = "", data = [], config = {}) => {
            const defaults = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },   
                body: JSON.stringify(data)
            }

            const opt = {
                ...defaults,
                ...config
            }

            setUrl(url)
            setOptions(opt)
        },
        delete: (url = "", config = {}) => {
            const defaults = {
                method: "DELETE",
            }

            const opt = {
                ...defaults,
                ...config
            }

            setUrl(url)
            setOptions(opt)
        }
    }

    useEffect(() => {
        if (!url) return;

        const controller = new AbortController();
        const signal = controller.signal;
        
        const handleFetch = async () => {
            try {
                options.signal = signal;
                setIsLoading(true);
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
                setError(null);
            } catch (err) {
                setError(err);
                setResponse([]);
            } finally {
                setIsLoading(false);
            }
        };

        handleFetch();

        return () => controller.abort();
        
    }, [options, url]);

    return [response, error, isLoading, request];
}

export default useFetch;
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Truseen Construction Ltd.`;
    }, [title]);
}

export default useTitle;
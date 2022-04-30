function Pagination({ setPageNumber }) {
    const nextFn = () => {
        setPageNumber((x) => x + 1)
    }
    const prevtFn = () => {

    }
    return (
        <>
            <div className="flex w-48 p-5 mx-auto my-0">
                <button
                    onClick={prevtFn}
                    className="bg-slate-500 text-white py-1 px-7 border-none rounded-md mx-5"
                >Prev</button>
                <button
                    onClick={nextFn}
                    className="bg-slate-500 text-white py-1 px-7  border-none rounded-md mx-5"
                >Next</button>
            </div>
        </>
    );
}

export default Pagination;

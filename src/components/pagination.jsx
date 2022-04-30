function Pagination({ setPageNumber }) {
    const nextFn = () => {
        setPageNumber((x) => x + 1)
    }
    const prevtFn = () => {

    }
    return (
        <>
            <button onClick={prevtFn}>Prev</button>
            <button onClick={nextFn}>Next</button>
        </>
    );
}

export default Pagination;

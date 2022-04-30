function Search({ setSearch }) {
    return (
        <>
            <div className="p-10 flex justify-center">
                <input
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    type="text"
                    placeholder="Введите название персонажа"
                    className="w-full border rounded-md p-3 text-lg"
                />
            </div>
        </>
    );
}

export default Search;

function Spinner() {
    return (
        <button
            type="button"
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center p-2"
            disabled
        >
            <svg
                className="animate-spin h-5 w-5 mr-3 bg-white ..."
                viewBox="0 0 24 24"
            ></svg>
        </button>
    );
}
export default Spinner;

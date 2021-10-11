export const debounce = (fn, delay = 300) => {
    let timeout;

    return function() {
        const functionCall = () => {
            fn.apply(this, arguments);
        }

        clearTimeout(timeout);

        timeout = setTimeout(functionCall, delay)
    };
}


 
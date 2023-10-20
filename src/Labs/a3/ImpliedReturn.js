const multiply = (a, b) => {
    return a * b;
}
 

function ImpliedReturn() {
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
            <h3>Implied return </h3>
            fourTimesFive = {fourTimesFive} <br />
            multiply(4, 5) = {multiply(4, 5)} <br />
        </>
    );
}

export default ImpliedReturn;
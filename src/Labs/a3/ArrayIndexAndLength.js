let numberArray1 = [1, 2, 3, 4, 5];

function ArrayIndexAndLength() {
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);


    return (
        <div>
            <h2>Array index and length</h2>
            length1 = {length1}<br/>
            index1 = {index1}
        </div>
    );
        
}
export default ArrayIndexAndLength;
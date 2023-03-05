import React, { useState } from 'react'

export function Example(): JSX.Element {
    
const [count, setCount] = useState<number>(0);

if (count === 3) {
    console.log(3);
} else {
    console.log('count is not 3');
}

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
         </div>
            );
              }
            // nsdjfcnsdncvjn
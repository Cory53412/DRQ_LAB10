import React from 'react';
//class that holds the content of the app
export class Content extends React.Component {
//method to return output to the user
//there are 2 headers that display output
//1 = hello world
//2 gets the exact time and date
    render() {
        return (
            <div>
                <h1>
                    Hello World
     </h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

/* const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"Hello World From Rect Js");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */

/*
    <div id="parent">
        <div id ="child">
            <h1>I'm h1 tag</h1>
        </div>
    </div>

const heading = React.createElement("div",{id:"parent"},
    React.createElement("h1",{},"I'm h1 tag"));
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/*
    <div id="parent">
        <div id ="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>

const heading = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")]),
    );
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/*
    <div id="parent">
        <div id ="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
            <div id ="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
*/

const heading = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")]),
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")])
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

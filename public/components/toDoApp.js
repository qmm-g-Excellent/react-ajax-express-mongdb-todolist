const App = React.createClass({
    getInitialState:function(){
        return {
            input:""
        }
    },
    render:function(){
        return <div>
            {console.log("jjjjj")}
            你好
        </div>
    }
})

ReactDOM.render(<App />, document.getElementById("content"));

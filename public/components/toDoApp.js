const App = React.createClass({
    getInitialState:function(){
        return {
            input:"",
            items:[],
            parms:[]
        }
    },
    change:function(event){
        this.setState({input:event.target.value});
    },
    addItem:function(event){
        if(event.keyCode === 13 && event.target.value != ''){
            const items = this.state.items;
            const item = {};
            item.text = event.target.value;
            item.isChoose = false;
            items.push(item);
            this.setState({items});
            this.setState({parms:this.state.items}); // ????? 可以就用items
            this.setState({input:""});
        }
    },
    deleteItem:function(index){
        const items = this.state.items;
        items.splice(index,1);
        this.setState({items});
        this.setState({parms:items});
    },
    exchange:function(index){
        const item = this.state.items[index];
        item.isChoose = !item.isChoose;
        this.setState({items:this.state.items});
        this.setState({parms:this.state.items});
    },
    render:function(){

        return <div className="col-md-4 col-md-offset-4 wrap">
                <div className="header">
                    <h1>todos</h1>
                    <span onClick={this.chooseAll} className="glyphicon glyphicon-chevron-down">
                    </span>
                    <input type="text"
                           className="form-control"
                           value={this.state.input}
                           placeholder="What needs to be done?"
                           onChange={this.change}
                           onKeyDown={this.addItem}/>
                </div>

               <div>
                   <Item items={this.state.parms}
                         onRemove={this.deleteItem}
                         onExchange={this.exchange}/>
               </div>
        </div>
    }
});





ReactDOM.render(<App />, document.getElementById("content"));

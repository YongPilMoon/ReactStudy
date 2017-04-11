import React, {Component} from 'react';

class PostCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
        }
    }
    render(){
        return (
            <div>
                <div>
                    <input type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.handleChange.bind(this)}/>
                </div>
                <textarea name="content"
                          placeholder="content"
                          value={this.state.content}
                          onChange={this.handleChange.bind(this)}/>

                <button onClick={this.handleClick.bind(this)}>Create</button>
            </div>
        );
    }

    handleChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        this.props.onInsert(this.state.title, this.state.content);
        this.setState({
            title:"",
            content:""
        });
    }
}

export default PostCreate
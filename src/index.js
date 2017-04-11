import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PostList from './components/post_list';
import PostDetail from './components/post_detail';
import PostCreate from './components/post_create';
import update from 'react-addons-update';

let blog_data = [
    {
        "pk":1,
        "title": "my first post",
        "content": "첫 번째 포스트",
    },
    {
        "pk":2,
        "title": "react is difficult",
        "content": "now it's beginning",
    },
    {
        "pk":3,
        "title": "but i can do it",
        "content": "크리스토퍼 놀란",
    }
];

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: blog_data,
            selectedPost: null
        };
    }

    render() {
        return (
            <div>
                <h5>hello world</h5>
                <PostDetail post={this.state.selectedPost}/>
                <PostList
                    onPostSelect={selectedPost => this.setState({selectedPost}) }
                    posts={this.state.posts}/>
                <PostCreate
                    onInsert={this._insertPost.bind(this)}/>
            </div>
        );
    }

    _insertPost(title, content){
        let newState = update(this.state, {
            posts: {
                $push: [{"title": title, "content": content}]
            }
        });
        this.setState(newState);
    }
};

const rootElement  = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
import React from "react";
import Popup from "reactjs-popup";

export default class AddDetail extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    changeTitle(e) {
        console.log(e.target.value);
        this.setState({ title: e.target.value });
    }

    changeContent(e) {
        this.setState({ content: e.target.value });
    }

    updateData() {
        this.props.updateData(this.state.title, this.state.content);
    }
    render() {
        return <Popup trigger={<div className="addContainer"><span> {this.props.text} </span></div>} modal
        closeOnDocumentClick>
            {close => (
                <div className="modal">
                    <div className="header"><h1> Add Details </h1></div>
                    <div className="content">
                        <div className="input">
                            <div><label htmlFor="title">Title</label></div>
                            <input id="title" type="text" value={this.state.title} onChange={this.changeTitle.bind(this)} />
                        </div>
                        <div className="input">
                            <div><label htmlFor="content">Content</label></div>
                            <input id="content" type="text" value={this.state.content} onChange={this.changeContent.bind(this)} />
                        </div>
                    </div>
                    <div className="footer" >
                        <button
                            className="button"
                            onClick={() => {
                                this.updateData();
                                close();
                            }}
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}

        </Popup>
    }
}
const PopupExample = (props) => (
    <Popup trigger={<button> {props.text} </button>} position="right center">
        <div>Popup content here !!</div>
    </Popup>
)
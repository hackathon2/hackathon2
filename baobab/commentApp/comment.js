
var data = [
  {author: "Nick Nolte", text: "I was in Blue Chips"},
  {author: "Shaq", text: "Hey so was I! I played Neon Boudreaux remember?"},
  {author: "Little Penny", text: "What up, Diesel? Have you seen Tyra Banks?"}
];




var Commentbox = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.setState({data: data});
	},
	addComment: function(comment) {
    this.setState({data: data});
  },
	render: function(){
		return(
			<div className="commentBox">
				<CommentList data={this.props.data} />
				<CommentForm onCommentSubmit={this.addComment} />
			</div>
		);
	}
});
var CommentList = React.createClass({
	render: function(){
		var commentNode = this.props.data.map(function(comment){
		  return(
			<Comment author={comment.author}>
				{comment.text}
			</Comment>
		  );
		});
	
		return(
			<div className="commentList">
				{commentNode}
			</div>
		);
	}
});
var CommentForm = React.createClass({
	addComment: function(e){
		e.preventDefault();
		var author = React.findDOMNode(this.refs.author).value.trim();
		var text = React.findDOMNode(this.refs.text).value.trim();
		if (!text || !author) {
			return;
		}
		var formData = {};
        $(".commentForm").serializeArray().map(function(x){formData[x.name] = x.value;}); 
		data.push(formData);
		
		this.props.onCommentSubmit({author: formData.author, text: formData.text});
		
		React.findDOMNode(this.refs.author).value = '';
		React.findDOMNode(this.refs.text).value = '';
		
		return;
		
	},
	render: function(){		
		return(
			<form className="commentForm" onSubmit={this.addComment}>
				<input type="text" name="author" ref="author" placeholder="Your Name" />
				<textarea name="text" ref="text" placeholder="Comments" />
				<input type="submit" value="Add" />
			</form>
		);
	}
});
var Comment = React.createClass({
	render: function(){
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return(
			<div className="comment">
				<h2 className="commentAuthor">{this.props.author}</h2>
				<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
			</div>
		);
	}
});
React.render(
	<Commentbox data={data} />,
	document.getElementById("content")
);

import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const ListTask = (props) => {
    return (
        <div>
            {props.posts.map((post) => <div id={post.id} className="body">
                <h3 style={{color:"rgb(214, 150, 11)"}}>{post.task} :</h3>
                <p style={{color:"white", fontSize: "calc(10px + 2vmin)"}}>{post.description}</p>
            </div>)}
        </div>
    )
}

export default connect(mapStateToProps)(ListTask)

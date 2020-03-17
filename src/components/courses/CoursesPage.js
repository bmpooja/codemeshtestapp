import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import PropType from 'prop-types'
import { bindActionCreators } from 'redux'


class CoursesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {
                title: ""
            }
        }
        // bind it in the constructor 
        // so now function has bound only once so it won't be reallocated on each render

        // since we wrote arrow function handlechange we don't need this binding
        //this.handleChange = this.handleChange.bind(this);
    }
    // handleChange(event) {
    //     const course = { ...this.state.course, title: event.target.value }
    //     this.setState({ course: course })
    //     // you can even omit right side since both sides are same 
    //     //this.setState({course})
    // }
    // OR you can bind handlechange function by writing arrow function instead above 
    handleChange = (event) => {
        const course = { ...this.state.course, title: event.target.value }
        this.setState({ course })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //debugger;
        // now we are calling below dispatch method from dispatchToProp method 
        // this.props.dispatch(courseActions.createCourse(this.state.course))
        //alert(this.state.course.title)
        // just write
        this.props.actions.createCourse(this.state.course);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Courses </h2>
                <h3>Add Course </h3>
                <input type="text"
                    // you can bind function this way but the problem is each time using bind
                    //within render causes new function to be unnecessary created  on each render
                    // onChange={this.handleChange.bind(this)}
                    onChange={this.handleChange}
                    value={this.state.course.title} />

                <input type="submit" value="save" />
                {this.props.courses.map(course => (
                    <div key={course.title}>
                        {course.title}
                    </div>
                ))}
            </form>
        )
    }
}

CoursesPage.proptype = {
    courses: PropType.array.isRequired,
    // this now got replace with actions 
    //createCourse: PropType.func.isRequired
    actions: PropType.object.isRequired
}


function mapStateToProp(state) {
    // debugger;
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // we can replace this with bindActionCreators where we can call our 
        // all actions
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)

    }
}

// const connectedStateAndProps =connect(mapStateToProp,mapDispatchToProp);
// export default connectedStateAndProps(CoursesPage)

// Above can replace with below


export default connect(
    mapStateToProp,
    mapDispatchToProps
)(CoursesPage);
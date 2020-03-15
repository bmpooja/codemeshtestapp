import React, { Component } from 'react'

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
        alert(this.state.course.title)
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
            </form>
        )
    }
}

export default CoursesPage
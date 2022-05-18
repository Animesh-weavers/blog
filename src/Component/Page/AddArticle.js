import React, { Component, createRef } from "react";
import { Form, Button } from "react-bootstrap";

export default class AddArticle extends Component {
  constructor() {
    super();
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();
    const time = newDate.toLocaleTimeString();
    const initStartDate = `${month}/${date}/${year}`;
    this.state = {
      Date: initStartDate,
      title: "",
      desc: "",
      time,
    };
    this.titleRef = createRef();
    this.descRef = createRef();
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }
  formSubmitHandler(e) {
    e.preventDefault();
    this.titleRef.current.value = "";
    this.descRef.current.value = "";
    console.log("submit");
    const enteredTitle = this.titleRef.current.value;
    const enteredDesc = this.descRef.current.value;
    this.setState({
      title: enteredTitle,
      desc: enteredDesc,
    });
    
  }
  render() {
    // const { title, desc, time, Date } = this.state;
    // console.log(title);
    // console.log(desc);
    // console.log(Date);
    // console.log(time);
    return (
      <div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form style={{ width: "50%" }} onSubmit={this.formSubmitHandler}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  required
                  ref={this.titleRef}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                  required
                  ref={this.descRef}
                />
              </Form.Group>
              <Form.Group style={{ marginTop: "1rem" }}>
                <Button variant="secondary" type="submit">
                  Publish
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

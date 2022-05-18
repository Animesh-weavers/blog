import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class AddArticle extends Component {
  constructor() {
    super();
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();
    const time = newDate.toLocaleTimeString();
    const initStartDate = `${month}.${date}.${year}`;
    this.state = {
      Date: initStartDate,
      title: "",
      desc: "",
      time,
      isShowLoading: false,
    };
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.descChangeHandler = this.descChangeHandler.bind(this);
  }
  formSubmitHandler(e) {
    e.preventDefault();
    this.setState({
      isShowLoading: true,
    });
    let headersList = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    let bodyContent = {
      title: this.state.title,
      description: this.state.desc,
      date: this.state.Date,
      time: this.state.time,
    };

    let reqOptions = {
      url: "https://blogging-d1952-default-rtdb.firebaseio.com/blogs.json",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    axios(reqOptions)
      .then(() => {
        this.setState({
          isShowLoading: false,
        });
        alert("Succesfully Published!!");
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      title: "",
      desc: "",
    });
  }
  titleChangeHandler(e) {
    this.setState({
      title: e.target.value,
    });
  }
  descChangeHandler(e) {
    this.setState({
      desc: e.target.value,
    });
  }
  render() {
    const { title, desc, isShowLoading } = this.state;
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
                  onChange={this.titleChangeHandler}
                  value={title}
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
                  onChange={this.descChangeHandler}
                  value={desc}
                />
              </Form.Group>
              <Form.Group style={{ marginTop: "1rem" }}>
                {!isShowLoading && (
                  <Button variant="secondary" type="submit">
                    Publish
                  </Button>
                )}
                {isShowLoading && 'Loading...' }
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

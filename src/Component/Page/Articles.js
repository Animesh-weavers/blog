import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export default class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    const load = [];
    let reqOptions = {
      url: "https://blogging-d1952-default-rtdb.firebaseio.com/blogs.json",
      method: "GET",
    };

    axios(reqOptions)
      .then((res) => {
        // console.log(res.data);
        for (let key in res.data) {
          load.push({
            id: key,
            title: res.data[key].title,
            desc: res.data[key].description,
            date: res.data[key].date,
          });
        }

        this.setState({
          articles: [...load],
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { articles } = this.state;
    // if (articles.length === 0) {
    //   return <h1>Not found</h1>;
    // }
    // console.log(articles);
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            {articles.length !== 0 &&
              articles.map((item, index) => (
                <Card style={{ width: "40rem", margin: "1rem" }} key={index}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle>{item.date}</Card.Subtitle>
                    <br />
                    <Card.Text>{item.desc}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            {articles.length === 0 && <h1>Not Found</h1>}
          </div>
        </div>
      </>
    );
  }
}

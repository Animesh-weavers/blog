import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export default class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      isShowLoading: false,
      res:[]
    };
  }
  componentDidMount() {
    this.setState({ isShowLoading: true });
    const load = [];
    let reqOptions = {
      url: "https://blogging-d1952-default-rtdb.firebaseio.com/blogs.json",
      method: "GET",
    };

    axios(reqOptions)
      .then((res) => {
        this.setState({ isShowLoading: false });
        this.setState({res:res.request.response})
        for (let key in res.data) {
          load.push({
            id: key,
            title: res.data[key].title,
            desc: res.data[key].description,
            date: res.data[key].date,
            time: res.data[key].time,
          });
        }

        this.setState({
          articles: [...load],
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { articles, isShowLoading,res } = this.state;

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
              articles?.map((item, index) => (
                <Card style={{ width: "40rem", margin: "1rem" }} key={index}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle>
                      {item.date} {"  "} {"   "}
                      {item.time}
                    </Card.Subtitle>
                    {/* <Card.Subtitle>{item.time}</Card.Subtitle> */}
                    <br />
                    <Card.Text>{item.desc}</Card.Text>
                  </Card.Body>
                </Card>
              ))
            }
            {isShowLoading && 'Loading...'}
          </div>
        </div>
      </>
    );
  }
}

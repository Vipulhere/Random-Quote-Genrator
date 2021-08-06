import React from "react";
import TwitterApi from "./social";
import "./quote.css";

let textColors = [
  "red",
  "black",
  "blue",
  "purple",
  "darkMagenta",
  "rgb(08,2004,72)",
  "darkGreen",
  "brown",
  "orange",
  "violet",
  "indigo",
  "darkTurquoise",
];

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          name: "Gloria Steinem",
          quote: "Dreaming, after all, is a form of planning",
        },
        {
          name: "Aristotle",
          quote:
            "There is only one way to avoid criticism: do nothing, say nothing, and be nothing",
        },
        {
          name: "Zig Ziglar",
          quote: "If you can dream it, you can achieve it",
        },
        {
          quote:
            "A website without visitors is like a ship lost in the horizon",
          name: "Dr. Christopher Dayagdag",
        },
        {
          quote:
            "If debugging is the process of removing software bugs, then programming must be the process of putting them in",
          name: "Trish Parr",
        },
        {
          quote:
            "Measuring programming progress by lines of code is like measuring aircraft building progress by weight",
          name: "Bill Gates",
        },
        {
          quote: "Intuitive design is how we give the user new superpowers.",
          name: "Jared Spool",
        },
        {
          quote:
            "Great web design without functionality is like a sports car with no engine",
          name: "Paul Cookson",
        },
        {
          quote: "One man’s crappy software is another man’s full time job",
          name: "Jessica Gaston",
        },
      ],
      message: "",
      author: "",
      color: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const newQuote =
      this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    this.setState({
      message: newQuote.quote + ".",
      author: newQuote.name,
      color: textColors[Math.floor(Math.random() * textColors.length)],
    });
  }

  componentWillMount() {
    this.handleClick();
  }

  render() {
    const styles = {
      // color:this.state.color,
      // backgroundColor:this.state.color,

      backgroundImage: `linear-gradient(to right, ${this.state} , yellow)`,

      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      transition: "2s",
      p: {
        // backgroundColor:'whiteSmoke',

        backGround: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        webkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",

        width: "40%",
        padding: "40px",
        fontSize: "1.6rem",
        fontWeight: "bold",
        // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.2)',
      },
      name: {
        fontSize: "1rem",
        fontWeight: "lighter",
        textAlign: "right",
      },
      button: {
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "center",
      },
      btn: {
        color: "white",
        backgroundColor: this.state.color,
        padding: "10px",
        justifySelf: "right",
        borderRadius: "5px",
        outline: "none",
        transition: "1.7s",
      },
      tweet: {
        color: this.state.color,
      },
    };
    return (
      <div style={styles}>
        <div style={styles.p}>
          <p>
            <sup>
              <i class="fas fa-quote-left"></i>
            </sup>{" "}
            {this.state.message}
          </p>
          <p style={styles.name}>-{this.state.author}</p>
          <div style={styles.button}>
            <TwitterApi
              message={this.state.message}
              author={this.state.author}
              styling={styles.tweet.color}
            />
            <button
              onClick={this.handleClick}
              style={styles.btn}
              className="btn"
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Quotes;

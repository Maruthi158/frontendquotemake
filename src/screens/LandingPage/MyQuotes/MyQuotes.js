import MainScreen from "../../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Myquotes = () => {
  const [quotes, setQuotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete the quote?")) {
    }
  };

  const fetchQuotes = async () => {
    const { data } = await axios.get("https://quotemakerbackendprod.herokuapp.com/api/quotes");
    setQuotes(data);
  };

  console.log(quotes);

  useEffect(() => {
    fetchQuotes();
  });
  // console.log(quotes);
  // useEffect(() => {
  //   fetchQuotes();
  // }, []);
  return (
    <MainScreen title="Welcome Back Priyanka Maruthi.">
      <Link to="createquote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Quote
        </Button>
      </Link>
      {quotes.map((quote) => (
        <Accordion key={quote._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Header as={Card.Text} variant="link" eventKey="0">
                  {quote.quote}
                </Accordion.Header>
              </span>

              <div>
                <Button href={`/quote/${quote._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(quote._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="sucess">Category - {quote.category}</Badge>
                </h4>
                <Card>
                  <Card.Header>Quote</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>Author name : {quote.author}</p>
                      <p>Source : {quote.url}</p>
                      {/* <footer className="blockquote-footer">
                        Created on - date
                      </footer> */}
                    </blockquote>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default Myquotes;

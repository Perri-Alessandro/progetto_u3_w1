import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

class Film extends Component {
  state = {
    movies: [],
  };

  getFilm = (endpoint) =>
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b84970d1&s=" + endpoint)
      .then((response) => {
        if (response.ok) {
          console.log("IL SERVER è STATO CONTATTATO CORRETTAMENTE", response);
          return response.json();
        } else {
          throw new Error("ERRORE NEL RECUPERO DEI DATI");
        }
      })
      .then((oggettoData) => {
        console.log("OGGETTO RICEVUTO", oggettoData);
        const array = oggettoData.Search;
        console.log("ARRAY RICEVUTO", array);
        this.setState({ movies: array });
      })
      .catch((err) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER", err);
      });

  componentDidMount() {
    this.getFilm(this.props.endpoint);
  }

  render() {
    const { movies } = this.state;
    return (
      // ...

      <Row className="text-white">
        {movies &&
          movies.map((movie) => (
            <Col key={movie.imdbID} sm={6} md={4} lg={3} xl={2}>
              <Card className="rounded-5">
                <Card.Img
                  className="rounded-top-5"
                  style={{ height: "18vh" }}
                  variant="top"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <Card.Body>
                  <p>{movie.Type}</p>
                  <Card.Title>{movie.Title}</Card.Title>
                  <p>{movie.Year}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>

      // ...
    );
  }
}

export default Film;

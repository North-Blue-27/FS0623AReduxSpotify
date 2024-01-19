import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const ArtistPage = () => {
  const [artist, setArtist] = useState(null);
  const [tracklist, setTracklist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const artistId = new URLSearchParams(window.location.search).get('id');

      const headers = new Headers({
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20',
      });

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`,
          {
            method: 'GET',
            headers,
          }
        );

        if (response.ok) {
          const artistData = await response.json();

          setArtist(artistData);

          const playButton = document.querySelector('#playButton');
          playButton.classList.remove('d-none');
          playButton.classList.add('d-inline');

          const followButton = document.querySelector('#followButton');
          followButton.classList.remove('d-none');
          followButton.classList.add('d-inline');

          const titleMain = document.querySelector('.titleMain');
          titleMain.innerHTML = artistData.name;

          const followers = document.querySelector('#followers');
          followers.innerText = `${artistData.nb_fan} followers`;

          const tracksResponse = await fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistData.name}`,
            {
              method: 'GET',
              headers,
            }
          );

          if (tracksResponse.ok) {
            const tracklistData = await tracksResponse.json();
            setTracklist(tracklistData.data);
          }
        } else {
          console.error('Error fetching artist data');
        }
      } catch (exception) {
        console.error('Exception:', exception);
      }
    };

    fetchData();
  }, []);

  const albumCard = (songInfo) => {
    return (
      <Col sm="auto" md="auto" className="text-center mb-5" key={songInfo.id}>
        <Link to={`/album_page.html?id=${songInfo.album.id}`}>
          <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
        </Link>
        <p>
          <Link to={`/album_page.html?id=${songInfo.album.id}`}>
            Track: {songInfo.title.length < 16 ? songInfo.title : `${songInfo.title.substring(0, 16)}...`}
          </Link>
          <br />
          <Link to={`/album_page.html?id=${songInfo.album.id}`}>
            Album: {songInfo.album.title.length < 16 ? songInfo.album.title : `${songInfo.album.title.substring(0, 16)}...`}
          </Link>
        </p>
      </Col>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col md={12} className="col-md-10 col-lg-10 mt-5">
          <h2 className="titleMain" aria-label="Artist Name">
            {artist && artist.name}
          </h2>
          <div id="followers">{artist && `${artist.nb_fan} followers`}</div>
          <div className="d-flex justify-content-center" id="button-container">
            <Button className="btn btn-success mr-2 mainButton d-none" id="playButton">
              PLAY
            </Button>
            <Button className="btn btn-outline-light mainButton d-none" id="followButton">
              FOLLOW
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={10} offset={1} className="col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <Row id="apiLoaded">
              {tracklist.map((track) => albumCard(track))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtistPage;
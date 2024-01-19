import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

const AlbumPage = () => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const albumId = new URLSearchParams(window.location.search).get('id');
      const headers = new Headers({
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': 'c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387',
      });

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`,
          {
            method: 'GET',
            headers,
          }
        );

        if (response.ok) {
          const albumData = await response.json();
          setAlbum(albumData);
        } else {
          console.error('Error fetching album data');
        }
      } catch (exception) {
        console.error('Exception:', exception);
      }
    };

    fetchData();
  }, []);

  const albumArt = () => {
    if (!album) return null;

    return (
      <>
        <Image src={album.cover} className="card-img img-fluid" alt="Album" />
        <div className="mt-4 text-center">
          <p className="album-title">{album.title}</p>
        </div>
        <div className="text-center">
          <p className="artist-name">{album.artist.name}</p>
        </div>
        <div className="mt-4 text-center">
          <Button id="btnPlay" className="btn btn-success" type="button">
            Play
          </Button>
        </div>
      </>
    );
  };

  const song = (track) => {
    return (
      <div key={track.id} className="py-3 trackHover">
        <Link to="#" className="card-title trackHover px-3" style={{ color: 'white' }}>
          {track.title}
        </Link>
        <small className="duration" style={{ color: 'white' }}>
          {`${Math.floor(parseInt(track.duration) / 60)}:${
            parseInt(track.duration) % 60 < 10
              ? '0' + (parseInt(track.duration) % 60)
              : parseInt(track.duration) % 60
          }`}
        </small>
      </div>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container">
          {albumArt()}
        </Col>
        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5" id="trackList">
              {album && album.tracks.data.map((track) => song(track))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AlbumPage;
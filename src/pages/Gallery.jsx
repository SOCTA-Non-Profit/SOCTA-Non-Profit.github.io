import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Modal, Badge, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";
import { BackToTop } from "../components/globalStyledComponents";

const StyledGalleryPage = styled.div`
  min-height: 100vh;
  padding-top: var(--nav-height);
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const PageHeader = styled.div`
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--bs-primary) 100%);
  color: white;
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  button {
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
  }
`;

const GalleryCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card-img-top {
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover .card-img-top {
    transform: scale(1.1);
  }
`;

const AlbumCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  .album-cover {
    height: 200px;
    object-fit: cover;
    position: relative;
  }

  .photo-count {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
  }
`;

const LightboxModal = styled(Modal)`
  .modal-dialog {
    max-width: 90vw;
    margin: 1.75rem auto;
  }

  .modal-content {
    background: rgba(0, 0, 0, 0.95);
    border: none;
  }

  .modal-body {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
  }

  img {
    max-width: 100%;
    max-height: 85vh;
    object-fit: contain;
  }
`;

const NavigationButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  background: rgba(255, 255, 255, 0.2) !important;
  border: none !important;
  color: white !important;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3) !important;
  }

  ${props => props.$position === 'left' ? 'left: 20px;' : 'right: 20px;'}
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.2) !important;
  border: none !important;
  color: white !important;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3) !important;
  }
`;

const ImageInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  z-index: 1001;
`;

// Sample gallery data - Replace with your actual photos
const galleryData = [
  {
    id: 1,
    title: "Sri Rama Navami 2025",
    category: "festivals",
    date: "April 2025",
    thumbnail: "/SRK_2025_Flyer.jpg",
    images: [
      { url: "/SRK_2025_Flyer.jpg", caption: "Sri Rama Navami Celebrations" }
    ]
  },
  {
    id: 2,
    title: "Bathukamma Festival 2024",
    category: "festivals",
    date: "October 2024",
    thumbnail: "/Bathukamma_Flyer.jpg",
    images: [
      { url: "/Bathukamma_Flyer.jpg", caption: "Bathukamma Festival" },
      { url: "/Bathukamma_Flyer_1.jpg", caption: "Traditional Bathukamma" }
    ]
  },
  {
    id: 3,
    title: "Community Gathering",
    category: "social",
    date: "September 2024",
    thumbnail: "/1.png",
    images: [
      { url: "/1.png", caption: "Community Members" },
      { url: "/2.png", caption: "Group Photo" }
    ]
  },
  {
    id: 4,
    title: "Cultural Programs",
    category: "cultural",
    date: "August 2024",
    thumbnail: "/4.png",
    images: [
      { url: "/4.png", caption: "Dance Performance" },
      { url: "/5.png", caption: "Cultural Event" },
      { url: "/6.png", caption: "Traditional Music" }
    ]
  },
  {
    id: 5,
    title: "Youth Activities",
    category: "youth",
    date: "July 2024",
    thumbnail: "/7.png",
    images: [
      { url: "/7.png", caption: "Youth Program" },
      { url: "/18.png", caption: "Kids Activities" }
    ]
  },
  {
    id: 6,
    title: "Special Events",
    category: "events",
    date: "June 2024",
    thumbnail: "/21.png",
    images: [
      { url: "/21.png", caption: "Special Celebration" },
      { url: "/26.png", caption: "Community Event" },
      { url: "/30.png", caption: "Festival Celebration" }
    ]
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState("albums"); // albums or photos

  const categories = [
    { value: "all", label: "All Photos", icon: "mdi:image-multiple" },
    { value: "festivals", label: "Festivals", icon: "mdi:festival" },
    { value: "cultural", label: "Cultural", icon: "mdi:music" },
    { value: "social", label: "Social", icon: "mdi:account-group" },
    { value: "youth", label: "Youth", icon: "mdi:school" },
    { value: "events", label: "Events", icon: "mdi:calendar-star" }
  ];

  const getFilteredAlbums = () => {
    if (filter === "all") return galleryData;
    return galleryData.filter(album => album.category === filter);
  };

  const getAllPhotos = () => {
    const filtered = getFilteredAlbums();
    return filtered.flatMap(album => 
      album.images.map(img => ({
        ...img,
        albumTitle: album.title,
        date: album.date
      }))
    );
  };

  const openLightbox = (album, imageIndex = 0) => {
    setSelectedAlbum(album);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAlbum && currentImageIndex < selectedAlbum.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleKeyPress = React.useCallback((e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  }, [currentImageIndex, selectedAlbum]);

  React.useEffect(() => {
    document.title = "Photo Gallery - SOCTA";
  }, []);

  React.useEffect(() => {
    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [lightboxOpen, handleKeyPress]);

  return (
    <>
      <StyledGalleryPage>
        <PageHeader>
          <Container>
            <Icon icon="mdi:camera" className="mb-3" style={{ fontSize: "4rem" }} />
            <h1>Photo Gallery</h1>
            <p>Capturing memories of our vibrant Telugu community</p>
          </Container>
        </PageHeader>

        <Container className="mb-5">
          {/* View Mode Toggle */}
          <div className="text-center mb-4">
            <Button
              variant={viewMode === "albums" ? "primary" : "outline-primary"}
              onClick={() => setViewMode("albums")}
              className="me-2"
            >
              <Icon icon="mdi:folder-image" className="me-2" />
              Albums
            </Button>
            <Button
              variant={viewMode === "photos" ? "primary" : "outline-primary"}
              onClick={() => setViewMode("photos")}
            >
              <Icon icon="mdi:image-multiple" className="me-2" />
              All Photos
            </Button>
          </div>

          {/* Filter Buttons */}
          <FilterButtons>
            {categories.map(cat => (
              <Button
                key={cat.value}
                variant={filter === cat.value ? "primary" : "outline-primary"}
                onClick={() => setFilter(cat.value)}
              >
                <Icon icon={cat.icon} className="me-2" />
                {cat.label}
              </Button>
            ))}
          </FilterButtons>

          {/* Albums View */}
          {viewMode === "albums" && (
            <Row>
              {getFilteredAlbums().map(album => (
                <Col key={album.id} md={6} lg={4} className="mb-4">
                  <AlbumCard onClick={() => openLightbox(album, 0)}>
                    <div style={{ position: 'relative' }}>
                      <Card.Img 
                        variant="top" 
                        src={album.thumbnail} 
                        alt={album.title}
                        className="album-cover"
                      />
                      <div className="photo-count">
                        <Icon icon="mdi:image" className="me-1" />
                        {album.images.length} {album.images.length === 1 ? 'photo' : 'photos'}
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title>{album.title}</Card.Title>
                      <Card.Text>
                        <Icon icon="mdi:calendar" className="me-2 text-primary" />
                        {album.date}
                      </Card.Text>
                      <Badge bg="primary">{album.category}</Badge>
                    </Card.Body>
                  </AlbumCard>
                </Col>
              ))}
            </Row>
          )}

          {/* All Photos View */}
          {viewMode === "photos" && (
            <Row>
              {getAllPhotos().map((photo, index) => (
                <Col key={index} md={6} lg={4} xl={3} className="mb-4">
                  <GalleryCard>
                    <Card.Img 
                      variant="top" 
                      src={photo.url} 
                      alt={photo.caption}
                      onClick={() => {
                        // Find the album and image index for lightbox
                        const album = galleryData.find(a => a.title === photo.albumTitle);
                        const imgIndex = album.images.findIndex(img => img.url === photo.url);
                        openLightbox(album, imgIndex);
                      }}
                    />
                    <Card.Body>
                      <Card.Text className="mb-1">
                        <small className="text-muted">{photo.albumTitle}</small>
                      </Card.Text>
                      <Card.Text>
                        <small>{photo.caption}</small>
                      </Card.Text>
                    </Card.Body>
                  </GalleryCard>
                </Col>
              ))}
            </Row>
          )}

          {getFilteredAlbums().length === 0 && (
            <div className="text-center py-5">
              <Icon icon="mdi:image-off" style={{ fontSize: "4rem", opacity: 0.3 }} />
              <p className="text-muted mt-3">No photos found in this category.</p>
            </div>
          )}
        </Container>

        <BackToTop home="Home" />
      </StyledGalleryPage>
      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal 
        show={lightboxOpen} 
        onHide={closeLightbox}
        centered
        size="xl"
      >
        <CloseButton onClick={closeLightbox}>
          <Icon icon="mdi:close" />
        </CloseButton>
        
        {selectedAlbum && (
          <>
            {currentImageIndex > 0 && (
              <NavigationButton $position="left" onClick={prevImage}>
                <Icon icon="mdi:chevron-left" />
              </NavigationButton>
            )}
            
            <Modal.Body>
              <img 
                src={selectedAlbum.images[currentImageIndex].url} 
                alt={selectedAlbum.images[currentImageIndex].caption}
              />
            </Modal.Body>

            {currentImageIndex < selectedAlbum.images.length - 1 && (
              <NavigationButton $position="right" onClick={nextImage}>
                <Icon icon="mdi:chevron-right" />
              </NavigationButton>
            )}

            <ImageInfo>
              <strong>{selectedAlbum.images[currentImageIndex].caption}</strong>
              <div className="text-muted">
                {currentImageIndex + 1} / {selectedAlbum.images.length}
              </div>
            </ImageInfo>
          </>
        )}
      </LightboxModal>
    </>
  );
}

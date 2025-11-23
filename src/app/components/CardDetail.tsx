import { useParams } from 'react-router-dom';
import { useState } from 'react';


export interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  backgroundImage: string;
  director: string;
  releaseDate: string;
  genre: string;
  videoUrl: string;
}

interface CardDetailProps {
  cards: CardItem[];
}

const CardDetail: React.FC<CardDetailProps> = ({ cards }) => {
  const { id } = useParams<{ id: string }>();
  const cardId = Number(id);
  const card = cards.find((c) => c.id === cardId);

  if (!card) {
    return <p className="text-center text-white text-lg">Film introuvable 😢</p>;
  }
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `url(${card.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '3rem',
        color: 'white',
      }}
    >
      {!showVideo ? (
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '2rem',
            borderRadius: '10px',
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            maxWidth: '900px',
            margin: 'auto',
          }}
        >
          <img
            src={card.image}
            alt={card.title}
            style={{
              width: '300px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />

          <div>
            <h1>{card.title}</h1>
            <p><strong>Description :</strong> {card.description}</p>
            {card.director && <p><strong>Réalisateur :</strong> {card.director}</p>}
            {card.releaseDate && <p><strong>Date de sortie :</strong> {card.releaseDate}</p>}
            {card.genre && <p><strong>Genre :</strong> {card.genre}</p>}

            {/* Bouton Regarder */}
            {card.videoUrl && (
              <button
                onClick={() => setShowVideo(true)}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Regarder
              </button>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            zIndex: 9999,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`${card.videoUrl}?autoplay=1`}
            title="Vidéo"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default CardDetail;

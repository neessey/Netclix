import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// 🧩 Définition du type de données d'une carte
export type CardItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  backgroundImage: string;
  director: string;
  releaseDate: string;
  genre: string;
  videoUrl: string;
};

// 🧩 Définition du type des props du composant
type CardListProps = {
  cards: CardItem[];
};

// 🧠 Composant principal
const CardList: React.FC<CardListProps> = ({ cards }) => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap bg-dark py-5 bg-black">
      {cards.map((card) => (
        <Card
          key={card.id}
          onClick={() => handleCardClick(card.id)}
          style={{
            width: "18rem",
            backgroundColor: "#000",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          className="shadow-lg transition-transform hover:scale-105"
        >
          <Card.Img
            variant="top"
            src={card.image}
            style={{ height: "250px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title style={{ fontWeight: "normal", fontSize: "1rem" }}>
              {card.title}
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardList;

"use client";

import { useParams } from "next/navigation";
import { cards } from "../../../data/cards";
import CardDetail from "../../../components/CardDetail";

export default function DetailsPage() {
  const params = useParams();
  const id = Number(params?.id);

  return (
    <main>
      <CardDetail id={id} cards={cards} />
    </main>
  );
}

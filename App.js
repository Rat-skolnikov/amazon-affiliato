import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const products = [
  {
    title: "Organizer da scrivania minimal",
    description: "Perfetto per spazi piccoli e design pulito. Ideale per home office.",
    image: "https://images.unsplash.com/photo-1587614382346-4ecb722d7f5f",
    link: "https://www.amazon.it/dp/B08XYC5Y4K?tag=matildeselfca-21"
  },
  {
    title: "Tazza in ceramica con scritta vintage",
    description: "Per colazioni cozy o foto super Pinterest-ready.",
    image: "https://images.unsplash.com/photo-1606312619349-1acbbba3bc8b",
    link: "https://www.amazon.it/dp/B07W4C4VQ5?tag=matildeselfca-21"
  },
  {
    title: "Luci LED da camera calde e decorative",
    description: "Crea un'atmosfera perfetta per il tuo angolo relax.",
    image: "https://images.unsplash.com/photo-1606813903277-028617e1e29d",
    link: "https://www.amazon.it/dp/B08D6X2Y7K?tag=matildeselfca-21"
  }
];

export default function AffiliateGallery() {
  return (
    <div style={{ padding: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
      {products.map((product, idx) => (
        <Card key={idx}>
          <img src={product.image} alt={product.title} style={{ width: "100%", height: 200, objectFit: "cover" }} />
          <CardContent>
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{product.title}</h2>
            <p style={{ fontSize: "0.9rem", marginBottom: 8 }}>{product.description}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <Button>Compra su Amazon</Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

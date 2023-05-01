import Carousel from "./components/Carousel";

interface ImageProps {
  src: string;
  alt: string;
  thumbnail: string;
  details: string;
}

export default function App() {
  const images: ImageProps[] = [
    {
      src: "https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*",
      alt: "Cute Dog in garden",
      thumbnail:
        "https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat voluptatem doloribus cum, voluptatum laboriosam temporibus! Modi vel repellendus optio sint laboriosam in, aperiam velit quaerat molestiae, officiis reiciendis beatae repellat dignissimos ex autem cumque, earum exercitationem ipsum eligendi? Minus quae blanditiis consequuntur aut deleniti est inventore adipisci, reprehenderit vitae, placeat atque eaque sint. Aliquid accusamus sequi cumque nesciunt mollitia tempore sit autem accusantium porro et modi enim iure sapiente quisquam deserunt voluptatem consectetur, vero veritatis error. Tempora et inventore quisquam aliquid, at delectus libero voluptatum culpa enim! At saepe eaque recusandae debitis laboriosam libero obcaecati quaerat sed provident vel.",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      alt: "Tree in sunset",
      thumbnail:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat voluptatem doloribus cum, voluptatum laboriosam temporibus! Modi vel repellendus optio sint laboriosam in, aperiam velit quaerat molestiae, officiis reiciendis beatae repellat dignissimos ex autem cumque, earum exercitationem ipsum eligendi? Minus quae blanditiis consequuntur aut deleniti est inventore adipisci, reprehenderit vitae, placeat atque eaque sint. Aliquid accusamus sequi cumque nesciunt mollitia tempore sit autem accusantium porro et modi enim iure sapiente quisquam deserunt voluptatem consectetur, vero veritatis error. Tempora et inventore quisquam aliquid, at delectus libero voluptatum culpa enim! At saepe eaque recusandae.",
    },
    {
      src: "https://media.istockphoto.com/id/1370593424/vector/vector-mountains-with-silhouettes-of-deers.jpg?s=612x612&w=0&k=20&c=0bv0tSKRhFcUnx3bg_dZN8p38Smt6pvDBaxoJUD6fZI=",
      alt: "Random image 3",
      thumbnail:
        "https://media.istockphoto.com/id/1370593424/vector/vector-mountains-with-silhouettes-of-deers.jpg?s=612x612&w=0&k=20&c=0bv0tSKRhFcUnx3bg_dZN8p38Smt6pvDBaxoJUD6fZI=",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatum laboriosam temporibus! Modi vel repellendus optio sint laboriosam in, aperiam velit quaerat molestiae, officiis reiciendis beatae repellat dignissimos ex autem cumque, earum exercitationem ipsum eligendi? Minus quae blanditiis consequuntur aut deleniti est inventore adipisci, reprehenderit vitae, placeat atque eaque sint. Aliquid accusamus sequi cumque nesciunt mollitia tempore sit autem accusantium porro et modi enim iure sapiente quisquam deserunt voluptatem consectetur, vero veritatis error. Tempora et inventore quisquam aliquid, at delectus libero voluptatum culpa enim! At saepe eaque recusandae debitis laboriosam libero obcaecati quaerat sed provident vel.",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/02/05/15/47/natural-4821583__340.png",
      alt: "Random image 4",
      thumbnail:
        "https://cdn.pixabay.com/photo/2020/02/05/15/47/natural-4821583__340.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat voluptatem doloribus cum, voluptatum laboriosam temporibus! Modi vel repellendus optio sint laboriosam in, aperiam velit quaerat molestiae, officiis reiciendis beatae repellat dignissimos ex autem cumque, earum exercitationem ipsum eligendi? Minus quae blanditiis consequuntur aut deleniti est inventore adipisci, reprehenderit vitae, placeat atque eaque sint. Porro et modi enim iure sapiente quisquam deserunt voluptatem consectetur, vero veritatis error. Tempora et inventore quisquam aliquid, at delectus libero voluptatum culpa enim! At saepe eaque recusandae debitis laboriosam libero obcaecati quaerat sed provident vel.",
    },
  ];

  return <Carousel images={images} />;
}

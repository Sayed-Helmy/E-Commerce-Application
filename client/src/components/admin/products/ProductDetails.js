import React from "react";

const ProductDetails = () => {
  const Product = {
    _id: "625566594ef84e43925deab0",
    title: "Beats Solo3 Wireless On-Ear",
    description:
      "The Beats Watch Series 7 has a bigger, brighter, and tougher display that extends to the edge of the device. There isn't any flashy new gimmick or headlining health feature in this model, but there are still a handful of changes worth exploring.",
    richDescription:
      "The Beats Watch Series 7 has a bigger, brighter, and tougher display that extends to the edge of the device. There isn't any flashy new gimmick or headlining health feature in this model, but there are still a handful of changes worth exploring. New colors, faster charging, and exclusive edge-to-edge watch faces add up to an iterative yet desirable upgrade.",
    images: {
      mainImage: "/uploads/mainImage-1649763929028.png",
      image2: "/uploads/image2-1649763929031.png",
      image3: "/uploads/image3-1649763929034.png",
      image4: "/uploads/image4-1649763929037.png",
    },
    brand: "Beats",
    price: 200,
    onSalePrice: 190,
    isFeatured: true,
    onSale: false,
    stock: 100,
    rating: 3.3,
    reviews: [
      {
        user: "62553649775afd5a2dc8b839",
        message: "cc",
        rating: 5,
        _id: "62553649775afd5a2dc8b839",
        createdAt: "2022-04-18T15:11:29.786Z",
        updatedAt: "2022-04-18T15:11:29.786Z",
        name: "mohamed",
        email: "mrokam@gmail.com",
        avatar: "/uploads/Default-avatar.jpg",
      },
      {
        name: "mohamed",
        avatar: "/uploads/Default-avatar.jpg",
        email: "mrokam@gmail.com",
        message: "zzz",
        rating: 1,
        _id: "62553649775afd5a2dc8b839",
        createdAt: "2022-04-18T14:19:54.391Z",
        updatedAt: "2022-04-18T14:19:54.391Z",
      },
      {
        user: "625527eead07d2917e9bb7fa",
        message: "good Product!",
        rating: 4,
        _id: "625527eead07d2917e9bb7fa",
        createdAt: "2022-04-18T14:19:18.452Z",
        updatedAt: "2022-04-18T14:19:18.452Z",
        name: "Sayed Helmy",
        email: "Master5@gmail.com",
        avatar: "/uploads/avatar-1650471380548.jpg",
      },
    ],
    createdAt: "2022-04-12T11:45:29.049Z",
    category: "Headphones",
  };
  return <div>ProductDetails</div>;
};

export default ProductDetails;

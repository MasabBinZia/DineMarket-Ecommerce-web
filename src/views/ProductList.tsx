"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/components/ProductCard";
import { products } from "@/ultils/productMockData";

const Product = products.slice(0, 8);

export class ProductList extends Component {
  render() {
    const settings = {
      dots: true,
      customPaging: function () {
        return (
          <a className="">
            <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
          </a>
        );
      },
      dotsClass: "slick-dots w-max absolute mt-20  ",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    };

    return (
      <section className="lg:px-24 py-32  ">
        <header className="text-center mx-auto mb-6 lg:px-20">
          <p className="text-blue-800 text-sm font-bold">PROMOTIONS</p>
          <h1 className="text-3xl text-gray-800 font-bold">
            Our Promotions Events
          </h1>
        </header>
        <Slider
          {...settings}
          arrows={false}
          className="flex items-stretch justify-items-stretch px-12 "
        >
          {Product.map((pro) => (
            <ProductCard
              key={pro.id}
              tittle={pro.name}
              price={pro.price}
              img={pro.image}
              category={pro.category}
              id={pro.id}
            />
          ))}
        </Slider>
      </section>
    );
  }
}

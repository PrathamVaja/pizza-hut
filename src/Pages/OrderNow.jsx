import React from "react";
import Header from "../Components/Header";

import Footer from "../Components/Footer";
import ItemCard from "../Components/OrederNowComponents/ItemCard";
import { Helmet } from "react-helmet";

const OrderNow = () => {
  return (
    <>
      <Helmet>
        <title>Oreder now</title>
        <meta name="description" content="Oreder now" />
        <meta name="keywords" content="Oreder now Page,awesome website,react" />
        <meta name="author" content="Pratham Vaja" />
      </Helmet>
      <div>
        <Header />

        <ItemCard />

        <Footer />
      </div>
    </>
  );
};

export default OrderNow;

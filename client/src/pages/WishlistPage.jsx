import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import WishListSection from "../components/WishListSection";
import useWishStore from "../store/useWishlistStore";
import PageTitle from "../components/utilityComponents/PageTitle";

function WishlistPage() {
  PageTitle("Wishlist");
  const { WishListRequest, WishList } = useWishStore();

  useEffect(() => {
    (async () => {
      WishList === null && (await WishListRequest());
    })();
  }, []);

  return (
    <Layout>
      <WishListSection Doctors={WishList?.map((item) => item.doctor)} />
    </Layout>
  );
}

export default WishlistPage;

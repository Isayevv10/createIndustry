import React from "react";
import "@/styles/pages/_productsClothes.scss";
import Link from "next/link";
import { client, urlFor } from "../lib/sanity";
import { groq } from "next-sanity";
import { IProduct } from "@/types/ProductTypes";
import Image from "next/image";
import { v4 } from "uuid";

const getSpecialClothesQueries = `
                  *[_type == "specialClothes" && category->name == 'SpecialCloth'] {
                    name,
                    "id": _id,
                    "image":images,
                    "slug": slug.current,
                  }`;

const getSpecialClothesItem = () => {
  return client.fetch(groq`${getSpecialClothesQueries}`);
};

export const revalidate = 60;

export default async function Products() {
  const allDatas: IProduct[] = await getSpecialClothesItem();

  return (
    <div>
      <div className="products">
        <div className="products__cloth">
          {allDatas?.map((item) => {
            return (
              <div className="list" key={v4()}>
                <Link href={`/clothes/${item?.slug}`}>
                  <div className="list__image">
                    <Image
                      src={urlFor(item?.image[0]).url()}
                      width={0}
                      height={0}
                      alt="productPic"
                      unoptimized={true}
                    />
                  </div>
                  <div className="list__desc">
                    <h5>{item?.name}</h5>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

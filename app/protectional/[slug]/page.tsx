import { client } from "@/app/lib/sanity";
import { IProduct, RelatedProdacts } from "@/types/ProductTypes";
import { groq } from "next-sanity";
import React from "react";
import "@/styles/pages/_details.scss";
import "@/styles/components/_details.scss";
import Details from "@/components/DetailsPage/Details";
import Slider from "@/components/Slider/Slider";

type Props = {
  params: {
    slug: string;
  };
};

const query: string = groq`
      *[_type == "protectional" && slug.current == $slug][0] {
        name,
        description,
        "image":images,
        "id": _id
      }
  `;

const getRelatedItemsQuery = `
  *[_type == "protectional" && category->name == 'PPE'] {
    "mainImage": mainImage.asset->url,
    "slug": slug.current,
    name
  }`;

const getRelatedItemsQueries = () => {
  return client.fetch(groq`${getRelatedItemsQuery}`);
};

export const revalidate = 60;

export default async function ProductDetails({ params: { slug } }: Props) {
  const products: IProduct = await client.fetch(query, { slug });
  const relatedProducts: RelatedProdacts[] = await getRelatedItemsQueries();

  const [related] = (await Promise.allSettled([
    relatedProducts,
  ])) as unknown as RelatedProdacts[];

  const { size, standart, weight, material, desc } = products?.description;

  return (
    <div className="details__container">
      <div className="details__info">
        <div className="details__info--item-1">
          <Details products={products} />
        </div>
        <div className="details__info--item-2">
          <div className="details__info--item-2-name">{products?.name}</div>
          <div className="details__info--item-2-desc">
            {weight ? (
              <div className="weight">
                <span>Çəki: </span>
                {weight}
              </div>
            ) : (
              <></>
            )}
            {standart ? (
              <div className="standart">
                <span>Standart: </span>
                {standart}
              </div>
            ) : (
              <></>
            )}

            {size ? (
              <div className="size">
                <span>Ölçü: </span>
                {size}
              </div>
            ) : (
              <></>
            )}

            {material ? (
              <div className="material">
                <span>Material: </span>
                {material}
              </div>
            ) : (
              <></>
            )}

            {desc ? (
              <div className="desc">
                <span>Təsviri: </span>
                {desc}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="title">
        <p>Əlaqəli Məhsullar</p>
      </div>

      <div className="related__products">
        <Slider relatedItems={related} />
      </div>
    </div>
  );
}

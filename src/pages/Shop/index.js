import Head from "next/head.js"
import Image from "next/image"
import Link from "next/link.js"
import { productsList } from "__mockups__/products.mockup.js"
import { HeaderNotification } from "../../components/Notification"
import css from "./shop.module.css"

function Shop(props) {
  return (
    <>
      <Head>
        <title>Shop | RakaZone</title>
        <meta name="description" content="RakaZone Cool Merchandise" />
        <meta name="keywords" content="merchandise, merch, raka, rakazone, rakazonegaming, cool, rakazone cool, rakazone gaming merchandise, youtube gaming, gamer tees." />
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta property="og:title" content={"Merchandise | RakaZone"} />
        <meta property="og:description" content="RakaZone Cool Merchandise" />
        <meta property="og:image" content="https://raka.zone/internal_api/assets/img/RakaZoneLogo.png" />
      </Head>
      <HeaderNotification
        notificationText={"Checkout is currently disabled as we are not accepting any payments from any user and we do not manufacture any of these products nor we have these products in stock."}
      />
      <div className="pd-bottom-high" />
      {/* <div className="pd-bottom-high" /> */}
      <div className="container-default">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <div className={css.shop_main}>
            <div className={css.shop_title}>My Merch Shop</div>
            <div className={css.shop_subtitle}>All these products are for showcase only and do not represent the actual product, We maybe come up with something real soon. Sign up for that</div>
          </div>
        </div>
        <div className={css.shop_grid}>
          {props.products_list.map((product, index) => {
            return (
              <Link prefetch={false} href={`/Product/${product.seo_title}`} passHref key={index}>
                <div>
                  <div className={css.shop_item}>
                    <div className={css.shop_item_image}>
                      <Image src={product.image} alt="" width={300} height={300} />
                      <div className={css.shop_item_product_price}>{product.discount}</div>
                    </div>
                    <div className={css.shop_item_product_content}>
                      <div className={css.shop_item_details}>
                        <div className={css.shop_item_product_title}>{product.name}</div>
                        <div className={css.shop_item_price}>{product.price}</div>
                      </div>
                      <div className={css.shop_item_product_description}>{product.description.length > 30 ? product.description.substring(0, 80) + "..." : product.description}</div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
          <div className="pd-bottom-high" />
        </div>
      </div>
    </>
  )
}

export default Shop

export function getServerSideProps(context) {
  return {
    props: { products_list: productsList },
  }
}

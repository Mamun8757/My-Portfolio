import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "lp9txfdc",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skvasKq1s76uLd9S7tfdv2IpsiYUAT05t7XDJvwgK4y4PCv8ID0trVf3oaroLXFgktsj3EerNGBEk8fIBjtfEbY97fZsBvm2RCAUX5ZlxqKuC5t1tLdY3S53qdteP6F1HnPGXyGfMXVCr8xC17ugsp7ZtzxeMqNu96ZKanV2bWHX6tfdNuu7",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

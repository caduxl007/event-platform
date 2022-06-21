import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4nkl6s706n601ywc7xedl3u/master",
  cache: new InMemoryCache(),
});

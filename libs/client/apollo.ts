import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Set `RestLink` with your endpoint
// const restLink = new RestLink({ uri: "http://localhost:3000/api/" });
const restLink = new RestLink({
  uri: "https://devseller.goqual.com/api/v1/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZ2phbmciLCJleHAiOjE2OTExNjEyMDAsImlhdCI6MTY5MTEzMDEzNn0.4N939aEhZ5ndcKHzKSz8wWbpmfnKB6boTYN8pwawLptS2_Mux4ePxMKDmXOqbSODwCaUnyMxY05Pj_vI6lu_6A",
  },
  endpoints: {
    container: "https://devseller.goqual.com/api/v1/container/",
    local: "http://localhost:3000/api/",
  },
});

const apollo = new ApolloClient({
  //   uri: "http://localhost:3000/api/users",
  cache: new InMemoryCache(),
  link: from([restLink, errorLink]),
});

export default apollo;

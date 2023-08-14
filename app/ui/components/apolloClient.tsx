"use client";
import { ApolloProvider } from "@apollo/client";

import apollo from "@libs/client/apollo";

type Props = {
  children: React.ReactNode;
};

export default function ApolloClient({ children }: Props) {
  return <ApolloProvider client={apollo}>{children}</ApolloProvider>;
}

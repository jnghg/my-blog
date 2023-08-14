"use client";

import { useQuery, gql, useMutation } from "@apollo/client";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserData {
  user: User[];
}

const GET_USERS = gql`
  query Users {
    user @rest(type: "User", path: "users", endpoint: "local") {
      id
      name
      email
    }
  }
`;

interface Category {
  categoryId: number;
  categoryName: string;
  categoryClassification: string;
}
interface Partner {
  partnerId: number;
  businessName: string;
}

interface CategoryData {
  category: {
    data: Category[];
  };
  partner: {
    data: {
      content: Partner[];
    };
  };
}

const GET_CATEGORY_DATA = gql`
  query Categories($categoryId: String, $partnerId: String) {
    category(categoryId: $categoryId)
      @rest(type: "Category", path: "category", endpoint: "container") {
      data
    }
    partner(partnerId: $partnerId)
      @rest(type: "Partner", path: "partner?{args}", endpoint: "container") {
      data {
        content {
          partnerId
          businessName
        }
      }
    }
  }
`;

export default function Text() {
  const { data, loading, error } = useQuery<CategoryData>(GET_CATEGORY_DATA, {
    variables: {
      // categoryId: 6,
      partnerId: "4028dc23875aefc70187db3e1d5b0015",
    },
    errorPolicy: "all",
  });

  // const {
  //   data: userData,
  //   loading: userLoading,
  //   error: userError,
  // } = useQuery<UserData>(GET_USERS);

  // console.log(userData);
  // console.log("error : ", userError);

  return (
    <>
      <div className="text-white">
        <ul>
          {data?.category?.data?.map((row) => (
            <div key={row.categoryId}>
              <li>
                {row.categoryId} / {row.categoryName}
              </li>
            </div>
          ))}
        </ul>
        <br />
        <ul>
          {data?.partner?.data?.content
            .filter((r) => r.partnerId + "" !== "0")
            .map((row) => (
              <div key={row.partnerId}>
                <li>
                  {row.partnerId} / {row.businessName}
                </li>
              </div>
            ))}
        </ul>
      </div>

      {/* <div className="mt-20">
        <div className="mb-5">Users</div>
        <ul>
          {userData?.user?.map((row) => (
            <div key={row.id}>
              <li>{row.name}</li>
            </div>
          ))}
        </ul>
      </div> */}
    </>
  );
}

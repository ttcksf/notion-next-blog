import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BreadCrumb = () => {
  const router = useRouter();
  let joinedPath = "";
  return (
    <>
      {router.asPath.split("/").map((path, index) => {
        if (path) {
          joinedPath += path + "/";

          return (
            <Link
              className="text-gray-500 hover:text-gray-600"
              key={index}
              href={`/${joinedPath}`}
            >
              <span className="text-gray-500 mx-2">/</span> {path}
            </Link>
          );
        }
      })}
    </>
  );
};

export default BreadCrumb;

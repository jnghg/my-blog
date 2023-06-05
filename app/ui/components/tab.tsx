"use client";

import type { Item } from "../components/tab-group";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  const segment = useSelectedLayoutSegment();
  const href = item.slug ? path + "/" + item.slug : path;
  const isActive =
    (!item.slug && segment === null) ||
    segment === item.segment ||
    segment === item.slug;

  return (
    <Link
      href={href}
      className={clsx("rounded-lg px-3 py-1 text-sm font-medium", {
        "bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white":
          !isActive,
        "bg-blue-500 text-white": isActive,
      })}
    >
      {item.text}
    </Link>
  );
};

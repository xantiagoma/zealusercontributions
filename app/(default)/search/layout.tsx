import { PropsWithChildren } from "react";

export default async function SearchLayout({
  children,
}: PropsWithChildren<{}>) {
  return (
    <>
      Search Layout
      {children}
    </>
  );
}

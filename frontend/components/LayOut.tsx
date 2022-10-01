import type { NextComponentType } from "Next";

export default function Layout({ children }: any): JSX.Element {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

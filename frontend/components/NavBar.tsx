import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next";

export default function NavBar(): JSX.Element {
  const router = useRouter();
  // console.log(router);
  return (
    <nav className="flex gap-2 text-2xl justify-center text-purple-200">
      <Image src="/favicon.ico" width="30" height="30" />
      <Link href="/">
        <a
          className={
            router.pathname === "/" ? "text-yellow-300" : "text-purple-400"
          }
        >
          Main
        </a>
      </Link>
      <Link href="/waiting/waiter">
        <a
          className={
            router.pathname === "/waiting/waiter"
              ? "text-yellow-300"
              : "text-purple-400"
          }
        >
          Wainting
        </a>
      </Link>
    </nav>
  );
}

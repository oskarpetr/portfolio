import { menuItemsTitles } from "@/data/menuItems";
import { cn } from "@/utils/cn";
import { List } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu({ showMenu = true }: { showMenu?: boolean }) {
  // router
  const router = useRouter();

  // current route
  const currentRoute = router.asPath.slice(1);

  return (
    <div className="mb-32 flex items-center justify-between gap-16">
      <Link href="/">
        <h1 className="text-xl uppercase tracking-wide font-semibold">
          Oskar Petr.
        </h1>
      </Link>

      {showMenu && (
        <>
          <div className="items-center gap-12 hidden lg:flex">
            {menuItemsTitles.map((item) => {
              return (
                <Link key={item} href={item.toLowerCase()} className="group">
                  <p className="tracking-wide">{item}</p>
                  <div
                    className={cn(
                      "h-[2px] bg-neutral-300 rounded-full w-0 group-hover:w-full transition-all duration-500",
                      currentRoute === item.toLocaleLowerCase()
                        ? "w-full"
                        : "group-hover:w-full"
                    )}
                  ></div>
                </Link>
              );
            })}
          </div>

          <div className="block lg:hidden cursor-pointer">
            <List className="text-2xl" />
          </div>
        </>
      )}
    </div>
  );
}

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className=" md:px-16 p-4 flex  items-center gap-6 flex-col md:flex-row justify-between">
      <div className="flex gap-6 flex-col-reverse md:flex-row items-center">
        <p className="text-white-100 font-satoshi text-base font-normal">
          © Creon 2023. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="px-0">
            {" "}
            <Icons.Telegram />{" "}
          </Button>

          <Button variant="ghost" className="px-0">
            {" "}
            <Icons.Discord />{" "}
          </Button>
          <Button variant="ghost" className="px-0">
            {" "}
            <Icons.Twitter />{" "}
          </Button>
        </div>
      </div>
      <div className="items-center flex justify-center gap-2">
        <p className="text-white-100 whitespace-nowrap font-satoshi text-base font-normal">
          Powered by{" "}
        </p>
        <Icons.LogoFooter />{" "}
      </div>
    </footer>
  );
}

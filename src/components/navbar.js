import { useRouter } from "next/navigation";
import { Button } from "./button";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className='mt-10 flex gap-x-4'>
      <Button type={"secondary"} className={""} size={"large"} onClick={() => { router.push("/") }}>
        Main Page
      </Button>
      <Button type={"rainbow"} className={""} size={"large"} onClick={() => { router.push("/colors?order=0") }}>
        Colors 🎨
      </Button>
      <Button type={"warning"} className={"text-white"} size={"large"} onClick={() => { router.push("/animals?order=0") }}>
        Animals 🐿️
      </Button>
      <Button type={"purp"} className={"text-white"} size={"large"} onClick={() => { router.push("/foods?order=0") }}>
        Foods 🍣
      </Button>
      <Button type={"secondary"} className={"text-white"} size={"large"} onClick={() => { router.push("/school?order=0") }}>
        School 🏫
      </Button>
    </div>
  );
}

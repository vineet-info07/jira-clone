import { Button } from "@/components/ui/button";
import Test from "@/features/test";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <p className="text-red font-semibold">Krunal</p>
      <Test />
    </div>
  );
}

import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Readmore = ({ id }: { id: string }) => {
  return (
    <Link href={`berita/read-more/${id}`} className="p-5">
      <InteractiveHoverButton>Baca Selengkapnya</InteractiveHoverButton>
    </Link>
  );
};

export default Readmore;

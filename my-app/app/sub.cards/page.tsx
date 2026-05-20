import Badge from "./_component/Badge";
import Button from "./_component/Button";
import Cards from "./_component/cards";

export default function CardPage() {
  return (
    <div className="flex gap-2 justify-center items-center text-gray-800 h-screen">
      <Cards
        title="Web Design"
        description="web design friendly"
        type="Explore"
      />
      <Cards
        title="UI/UX Design"
        description="user-friendly interfaces"
        type="Explore"
      />
      <Cards
        title="Digital Marketing"
        description="strategies for online growth"
        type="Learn"
      />
    </div>
  );
}
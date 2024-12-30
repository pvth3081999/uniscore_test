import MacthList from "@/components/ui/contents/MacthList";
import PlayerInfo from "../components/ui/contents/PlayerInfo";

export default function Home() {
  return (
    <div className="px-4 md:px-8">
      <PlayerInfo />
      <MacthList />
    </div>
  );
}

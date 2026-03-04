import StatsCard from "../components/StatsCard"

const cardData = [
  { titleCard: "Total Balance", valueCard: "10,000", percentage: "2.5" },
  { titleCard: "Monthly Income", valueCard: "5,000", percentage: "-15" },
  { titleCard: "Monthly Expenses", valueCard: "3,000", percentage: "8" }
]

const Dashboard = () => {
  return (
    <>
    <div className="flex items-center justify-center">
      {cardData.map((card, index) => (
        <StatsCard key={index} card={card} />
      ))}
    </div>
    </>
  );
};

export default Dashboard;

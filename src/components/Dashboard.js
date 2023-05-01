import DataCard from "./DataCard";

const Dashboard = ({ coins }) => {
    return (
        <div className="dashboard">
            {
                coins
                    &&
                coins.map((item) => <DataCard key={item.id} coin={item} />)
            }
        </div>
    );
};

export default Dashboard;
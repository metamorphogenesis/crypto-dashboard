import DataCard from "./DataCard";

const Dashboard = ({ items }) => {
    return (
        <div className="dashboard">
            {
                items
                    &&
                items.map((item) => <DataCard key={item.id} item={item} />)
            }
        </div>
    );
};

export default Dashboard;
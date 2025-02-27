import { FaUsers, FaCalendarAlt, FaMoneyBillWave, FaDollarSign, FaUserCog, FaFileAlt, FaShoppingBag, FaWallet } from "react-icons/fa";

const ProductFeatures = () => {
  const features = [
    { icon: <FaUsers size={60} />, title: "Employees", bg: "bg-blue-50", circle: "bg-blue-200" },
    { icon: <FaCalendarAlt size={60} />, title: "Leave", bg: "bg-yellow-50", circle: "bg-yellow-200" },
    { icon: <FaMoneyBillWave size={60} />, title: "Reimbursement", bg: "bg-red-50", circle: "bg-red-200" },
    { icon: <FaDollarSign size={60} />, title: "Compensation", bg: "bg-green-50", circle: "bg-green-200" },
    { icon: <FaUserCog size={60} />, title: "User Management", bg: "bg-pink-50", circle: "bg-pink-200" },
    { icon: <FaFileAlt size={60} />, title: "Document Management", bg: "bg-green-50", circle: "bg-green-200" },
    { icon: <FaShoppingBag size={60} />, title: "Expense Management", bg: "bg-blue-50", circle: "bg-blue-200" },
    { icon: <FaWallet size={60} />, title: "Payroll Management", bg: "bg-yellow-50", circle: "bg-yellow-200" },
  ];

  return (
    <div className="text-center my-20">
      <h2 className="text-5xl font-bold mb-6">Our Product Features</h2>
      <div className="grid grid-cols-4 gap-8 px-40 py-8">
        {features.map((feature, index) => (
          <div key={index} className={`p-10 rounded-lg shadow-lg ${feature.bg} flex flex-col items-center`}>
            <div className={`p-4 rounded-full ${feature.circle} flex items-center justify-center mb-4`}>{feature.icon}</div>
            <p className="font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;

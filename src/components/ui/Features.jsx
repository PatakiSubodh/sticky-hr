import feature1 from '../../assets/images/features-img/feature1.gif';
import feature2 from '../../assets/images/features-img/feature2.gif';
import feature3 from '../../assets/images/features-img/feature3.gif';
import feature4 from '../../assets/images/features-img/feature4.gif';
import feature5 from '../../assets/images/features-img/feature5.gif';
import feature6 from '../../assets/images/features-img/feature6.gif';
import feature7 from '../../assets/images/features-img/feature7.gif';
import feature8 from '../../assets/images/features-img/feature8.gif';

const ProductFeatures = () => {
  const features = [
    { image: feature1, title: "Employees", bg: "bg-[#F3F9FF]", circle: "bg-[#CCE7FF]", borderRadius: "border-2 border-[#CCE7FF]" },
    { image: feature2, title: "Leave", bg: "bg-[#FEF6EC]", circle: "bg-[#FEEAD0]", borderRadius: "border-2 border-[#FEEAD0]" },
    { image: feature3, title: "Reimbursement", bg: "bg-[#FCEEEF]", circle: "bg-[#FFD7DA]", borderRadius: "border-2 border-[#FFD7DA]" },
    { image: feature4, title: "Compensation", bg: "bg-[#EEF9F2]", circle: "bg-[#C4F8D6]", borderRadius: "border-2 border-[#C4F8D6]" },
    { image: feature5, title: "User Management", bg: "bg-[#FCEEEF]", circle: "bg-[#FFD7DA]", borderRadius: "border-2 border-[#FFD7DA]" },
    { image: feature6, title: "Document Management", bg: "bg-[#EEF9F2]", circle: "bg-[#C4F8D6]", borderRadius: "border-2 border-[#C4F8D6]" },
    { image: feature7, title: "Expense Management", bg: "bg-[#F3F9FF]", circle: "bg-[#CCE7FF]", borderRadius: "border-2 border-[#CCE7FF]" },
    { image: feature8, title: "Payroll Management", bg: "bg-[#FEF6EC]", circle: "bg-[#FEEAD0]", borderRadius: "border-2 border-[#FEEAD0]" },
  ];

  return (
    <div className="text-center py-16">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Product Features</h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-4 gap-8 px-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-10 rounded-2xl shadow-md ${feature.bg} ${feature.borderRadius} flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:scale-105`}
          >
            {/* Image Circle */}
            <div className={`w-20 h-20 flex items-center justify-center rounded-full ${feature.circle} mb-4`}>
              <img src={feature.image} alt={feature.title} className="w-14 h-14 object-contain bg-transparent" />
            </div>

            {/* Feature Title */}
            <p className="text-lg font-medium text-gray-700">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;

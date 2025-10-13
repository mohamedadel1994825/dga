"use client";
// @ts-nocheck

import dynamic from "next/dynamic";
import { guid } from "@/utils/guid";

const DgaFeaturedIcon = dynamic(() => import("platformscode-new-react").then(m => m.DgaFeaturedIcon), { ssr: false });
const DgaCard = dynamic(() => import("platformscode-new-react").then(m => m.DgaCard), { ssr: false });

const ScientificResearchSection = () => {
  const stats = [
    {
      icon: "link-external-01",
      number: "100",
      label: "بحث علمي منشور في 2024"
    },
    {
      icon: "lightbulb-05",
      number: "30",
      label: "ابتكاراً طلبناً في مجالات الثقبة"
    },
    {
      icon: "award-02",
      number: "5",
      label: "جوائز دولية في مجال البحث العلمي"
    },
    {
      icon: "users-01",
      number: "250",
      label: "ورشة عمل علمية وابتكارية"
    }
  ];

  const newsCards = [
    {
      title: "شفرات الوطن... الباحثات يبدعن حلاً رقمياً يضيع حداً لضياع الوقت بين فرق العمل الثقبة",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
    },
    {
      title: "الجامعة على خارطة الابتكار العالمي... بشهادة تصنيف صحيفة تايمز",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
    },
    {
      title: "بين أنابيب المختبر.. عقول الباحثين تنتج أملاً جديداً لمرضى الكبد",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="pt-[40px] px-[16px] md:px-[80px] bg-[#F9FAFB]">
      {/* Header */}
      <div className="text-right mb-[40px]">
        <h1 className="display-sm-bold text-[#161616] mb-4">
          البحث العلمي
        </h1>
        <p className="text-md-regular text-[#6C737F] max-w-[800px] mr-auto">
          البحث العلمي هو استعمال لـ سؤال قد فهم معنى الأمة، شبكة تنهي الطريق للإبتكار، وجسر يُعبر بنا من
          واقعنا إلى مستقبل نضعه بأيدينا ومعقولنا.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] mb-[40px]">
        {stats.map((stat) => (
          <div
            key={guid()}
            className="flex flex-col items-center justify-center bg-white rounded-[16px] p-[32px] text-center"
          >
            <DgaFeaturedIcon 
              icon={{
                name: stat.icon,
                variant: "stroke",
                type: "rounded"
              }} 
              variant="light" 
              color="brand" 
              size="lg" 
            />
            <h3 className="display-lg-regular text-[#14573A] mt-[24px]">
              {stat.number}
            </h3>
            <p className="text-md-regular text-[#1F2A37] mt-[8px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] pb-[40px]">
        {newsCards.map((card) => (
          <DgaCard
            key={guid()}
            cardTitle={card.title}
            image={card.image}
            showFeaturedIcon={false}
            showSecondaryAction={false}
          />
        ))}
      </div>

      {/* Link to more research */}
      <div className="text-left pb-[40px]">
        <a href="#" className="text-sm-regular text-[#1B8354] hover:underline inline-flex items-center gap-2">
          المزيد من الأبحاث العلمية
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ScientificResearchSection;


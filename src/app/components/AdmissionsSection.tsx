"use client";
// @ts-nocheck

import dynamic from "next/dynamic";
const DgaButton = dynamic(() => import("platformscode-new-react").then(m => m.DgaButton), { ssr: false });
const DgaCard = dynamic(() => import("platformscode-new-react").then(m => m.DgaCard), { ssr: false });
const DgaDivider = dynamic(() => import("platformscode-new-react").then(m => m.DgaDivider), { ssr: false });
const DgaFeaturedIcon = dynamic(() => import("platformscode-new-react").then(m => m.DgaFeaturedIcon), { ssr: false });
const DgaCarousel = dynamic(() => import("platformscode-new-react").then(m => m.DgaCarousel), { ssr: false });
const DgaCarouselItem = dynamic(() => import("platformscode-new-react").then(m => m.DgaCarouselItem), { ssr: false });
import { guid } from "@/utils/guid";

const AdmissionsSection: React.FC = () => {
  // Service cards data
  const serviceCards = [
    {
      icon: "file-check-02",
      title: "دليل القبول في الجامعة",
    },
    {
      icon: "book-open-01",
      title: "الخدمات الذاتية للطلاب",
    },
    {
      icon: "notebook-01",
      title: "الخدمات الذاتية لأعضاء هيئة التدريس",
    },
    {
      icon: "message-chat-circle",
      title: "نظام تواصل",
    },
    {
      icon: "graduation-hat-01",
      title: "برنامج خريج",
    },
    {
      icon: "dots-horizontal",
      title: "المزيد من الخدمات...",
    },
  ];

  return (
    <section className="pt-[40px] px-[16px] md:px-[80px]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-[24px]">
        {/* Button on the left */}
        <DgaButton
          label="عرض كل الخدمات والأخبار"
          variant="secondary"
          size="md"
        />
        
        {/* Title and subtitle on the right */}
        <div className="flex flex-col items-end text-right flex-1">
          <h2 className="display-sm-bold text-[#161616] mb-2">
            عمادة القبول والتسجيل
          </h2>
          <p className="text-md-regular text-[#6C737F]">
            هنا تجد كل ما يتعلق بمتطلبات التسجيل للدراسة بالجامعة.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-[32px] flex justify-end">
        <div className="w-[192px]">
          <DgaDivider color="primary" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        {/* Left: Hero Story Card */}
        <div className="relative h-[336px] rounded-[16px] overflow-hidden bg-gradient-to-br from-[#1B8354] to-[#14573A]">
          <DgaCarousel>
            <DgaCarouselItem>
              <div className="relative h-[336px] w-full">
                <img 
                  src="https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg"
                  alt="لقاء تعريفي يخص الطريق للطالبات المستجدات"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-[24px]">
                  <h3 className="text-white text-xl-bold text-right">
                    لقاء تعريفي يخص الطريق للطالبات المستجدات
                  </h3>
                  <p className="text-white text-sm-regular text-right mt-2">
                    عمادة القبول والتسجيل
                  </p>
                </div>
              </div>
            </DgaCarouselItem>
            <DgaCarouselItem>
              <div className="relative h-[336px] w-full">
                <img 
                  src="https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg"
                  alt="معلومات عن التسجيل"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-[24px]">
                  <h3 className="text-white text-xl-bold text-right">
                    معلومات عن التسجيل والقبول
                  </h3>
                  <p className="text-white text-sm-regular text-right mt-2">
                    عمادة القبول والتسجيل
                  </p>
                </div>
              </div>
            </DgaCarouselItem>
          </DgaCarousel>
        </div>

        {/* Right: Service Cards Grid */}
        <div className="grid grid-cols-3 gap-[16px]">
          {serviceCards.map((card) => (
            <div
              key={guid()}
              className="flex flex-col items-center justify-center p-[16px] bg-white border border-[#E5E7EB] rounded-[12px] hover:shadow-md transition-shadow cursor-pointer h-[160px]"
            >
              <DgaFeaturedIcon
                icon={{
                  name: card.icon,
                  variant: "stroke",
                  type: "rounded"
                }}
                variant="light"
                color="brand"
                size="lg"
              />
              <p className="text-sm-medium text-[#161616] text-center mt-[12px]">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;


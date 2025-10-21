"use client";
// @ts-nocheck

import dynamic from "next/dynamic";
import { Trans, t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
const DgaButton = dynamic(() => import("platformscode-new-react").then(m => m.DgaButton), { ssr: false });
const DgaCard = dynamic(() => import("platformscode-new-react").then(m => m.DgaCard), { ssr: false });
const DgaCarousel = dynamic(() => import("platformscode-new-react").then(m => m.DgaCarousel), { ssr: false });
const DgaCarouselItem = dynamic(() => import("platformscode-new-react").then(m => m.DgaCarouselItem), { ssr: false });
const DgaDivider = dynamic(() => import("platformscode-new-react").then(m => m.DgaDivider), { ssr: false });
const DgaFeaturedIcon = dynamic(() => import("platformscode-new-react").then(m => m.DgaFeaturedIcon), { ssr: false });
import Image from "next/image";

export default function StudentAffairsSection() {
  const { _ } = useLingui();
  
  // Service cards data
  const serviceCards = [
    {
      id: "volunteer",
      icon: "users-02",
      title: <Trans>العمل التطوعي</Trans>
    },
    {
      id: "scouting",
      icon: "book-open-01",
      title: <Trans>النشاط الكشفي</Trans>
    },
    {
      id: "sports",
      icon: "award-01",
      title: <Trans>النشاط الرياضي</Trans>
    },
    {
      id: "more-services",
      icon: "grid-01",
      title: <Trans>المزيد من الخدمات...</Trans>
    },
    {
      id: "support-services",
      icon: "shield-tick",
      title: <Trans>الخدمات المساندة للطالب</Trans>
    },
    {
      id: "housing",
      icon: "building-04",
      title: <Trans>الإسكان الجامعي</Trans>
    }
  ];

  // Carousel images for hero story
  const carouselItems = [
    {
      id: "event-1",
      image: "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
      title: <Trans>طالبات كلية الطب بالجامعة يتطلقن الأضواء بمعرض ITEX 2025 بمداليةٍ ذهبية</Trans>,
      alt: _(t`طالبات كلية الطب بالجامعة يتطلقن الأضواء بمعرض ITEX 2025 بمداليةٍ ذهبية`)
    },
    {
      id: "event-2", 
      image: "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
      title: <Trans>فعاليات الجامعة</Trans>,
      alt: _(t`فعاليات الجامعة`)
    },
    {
      id: "event-3",
      image: "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
      title: <Trans>أنشطة الطلاب</Trans>,
      alt: _(t`أنشطة الطلاب`)
    }
  ];

  return (
    <section className="pt-[40px] px-[16px] md:px-[80px]">
      <div className="mt-[24px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[24px]">
          {/* Left side - Button/Link */}
          <div className="order-2 md:order-1">
            <DgaButton
              label={_(t`عرض كل الخدمات والأخبار`)}
              variant="transparent"
              iconType="arrow-left-01"
              iconProps={{ variant: "stroke", type: "rounded" }}
              size="md"
            />
          </div>

          {/* Right side - Title and Subtitle */}
          <div className="text-right order-1 md:order-2 mb-4 md:mb-0">
            <h2 className="display-sm-bold text-[#161616] mb-2">
              <Trans>عمادة شؤون الطلبة</Trans>
            </h2>
            <p className="text-md-regular text-[#6C737F]">
              <Trans>كل ما يتعلق بالشؤون الإدارية للطلبة.</Trans>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-[32px] flex justify-end">
          <div className="w-[192px]">
            <DgaDivider color="primary" />
          </div>
        </div>

        {/* Main Content - Cards and Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
          {/* Service Cards Grid - Left Side */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#F9FAFB] rounded-[12px] p-[24px] flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow cursor-pointer min-h-[160px]"
              >
                <DgaFeaturedIcon
                  icon={{
                    name: card.icon,
                    variant: "stroke",
                    type: "rounded"
                  }}
                  variant="light"
                  color="brand"
                  size="md"
                />
                <h3 className="text-md-semibold text-[#161616] mt-[16px]">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Hero Story Carousel - Right Side */}
          <div className="relative rounded-[12px] overflow-hidden h-[336px]">
            <DgaCarousel>
              {carouselItems.map((item) => (
                <DgaCarouselItem key={item.id}>
                  <div className="relative w-full h-[336px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-[24px]">
                      <p className="text-lg-semibold text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </DgaCarouselItem>
              ))}
            </DgaCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}


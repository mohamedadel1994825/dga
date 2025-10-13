"use client";
// @ts-nocheck
import dynamic from "next/dynamic";
import Image from "next/image";

const DgaIcon = dynamic(() => import("platformscode-new-react").then(m => m.DgaIcon), { ssr: false });
const DgaButton = dynamic(() => import("platformscode-new-react").then(m => m.DgaButton), { ssr: false });
const DgaLabel = dynamic(() => import("platformscode-new-react").then(m => m.DgaLabel), { ssr: false });

type EventCardProps = {
  day: string;
  date: string;
  title: string;
  category: string;
  categoryLabel: string;
  ctaLabel: string;
};

function EventCard({ day, date, title, category, categoryLabel, ctaLabel }: EventCardProps) {
  return (
    <div className="rounded-[16px] border border-[#D2D6DB] bg-white p-[24px] flex flex-col gap-[16px] h-full">
      {/* Calendar icon and date */}
      <div className="flex items-start gap-[12px]">
        <div className="flex-shrink-0 w-[40px] h-[40px] rounded-[8px] bg-[#F3F4F6] flex items-center justify-center">
          <DgaIcon size={24} icon="calendar-04" variant="stroke" type="rounded" />
        </div>
        <div className="text-right flex-1">
          <div className="text-[14px] leading-[20px] font-semibold text-[#1F2A37]">{day}</div>
          <div className="text-[12px] leading-[18px] text-[#6C737F]">{date}</div>
        </div>
      </div>

      {/* Event title */}
      <h3 className="text-[16px] leading-[24px] font-bold text-[#1F2A37] text-right flex-1">
        {title}
      </h3>

      {/* Category and CTA */}
      <div className="flex items-center justify-between gap-[12px]">
        <button className="bg-[#1B8354] hover:bg-[#14573A] text-white rounded-[8px] py-[8px] px-[16px] text-[12px] leading-[18px] font-semibold transition-colors">
          {ctaLabel}
        </button>
        <div className="flex items-center gap-[8px]">
          <span className="text-[12px] leading-[18px] text-[#6C737F]">{category}</span>
          <span className="bg-[#F3F4F6] text-[#1F2A37] rounded-[6px] py-[4px] px-[8px] text-[12px] leading-[16px] font-medium">
            {categoryLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const events = [
    {
      day: "الثلاثاء",
      date: "م04-03-2026 / هـ21-08-1446",
      title: "مشروع ريادة الأعمال.. عندما تتحول المشروع دورة إلى فرصة حقيقية كيف أثمر تحويل الأفكار إلى مشاريع ناجحة",
      category: "كلية إدارة الأعمال",
      categoryLabel: "كلية الحاسب",
    },
    {
      day: "الأحد",
      date: "م28-03-2026 / هـ19-08-1446",
      title: "مشروع ريادة الأعمال.. عندما تتحول المشروع دورة إلى فرصة حقيقية كيف أثمر تحويل الأفكار إلى مشاريع ناجحة",
      category: "عمادة شؤون الطلاب",
      categoryLabel: "الطلبة الدوليين",
    },
    {
      day: "الخميس",
      date: "م25-03-2026 / هـ16-08-1446",
      title: "رحلة حول العالم الإسلامي.. داخل جرو صحبة عبر ثقافات المسلمين المتنوعة كيف تجمع المحاضرة بين الجغرافيا والحضارة",
      category: "الطلبة الدوليين",
      categoryLabel: "الطلبة",
    },
    {
      day: "الأربعاء",
      date: "م15-08-1446 / هـ19-08-1446",
      title: "مرحب شباب الوطن.. وأفق حوار نقاش بين الطلاب والمشاركين كيفي حيث يجول حوار منتدى القيادة والتأثير واحتواؤه على محاور إلهامية تلهم الطلاب المشتركين",
      category: "نقاشات",
      categoryLabel: "كلية الحاسب",
    },
  ];

  return (
    <section className="px-[16px] md:px-[80px] py-[40px] bg-[#F9FAFB]">
      {/* Header */}
      <div className="mb-[32px] text-right">
        <div className="flex items-start justify-between mb-[8px] gap-[16px] flex-wrap">
          <div className="flex-1">
            <h2 className="text-[32px] leading-[40px] font-bold text-[#1F2A37] mb-[8px]">
              الأحداث والفعاليات القادمة
            </h2>
            <p className="text-[14px] leading-[22px] text-[#6C737F]">
              بوابة أنشطتك الجامعية.. تابع بكل ما يتعلق بالمؤتمرات والفعاليات والأنشطة القادمة والتي تجري حالياً بتوسيع آفاقك.
            </p>
          </div>
          <button className="text-[14px] leading-[20px] text-[#6C737F] border border-[#D2D6DB] rounded-[8px] py-[8px] px-[16px] hover:bg-white transition-colors whitespace-nowrap">
            عرض كل الأحداث
          </button>
        </div>
        <div className="w-full h-[1px] bg-[#D2D6DB]"></div>
      </div>

      {/* Featured event and events grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
        {/* Featured Event Card */}
        <div className="rounded-[16px] border border-[#D2D6DB] bg-white p-[32px] flex flex-col justify-between">
          <div className="mb-[24px]">
            <div className="text-[12px] leading-[18px] text-[#6C737F] mb-[8px]">
              مؤتمر بتاريخ الأحد م19-06-1446 / هـ28-01-2026
            </div>
            <h3 className="text-[24px] leading-[32px] font-bold text-[#1F2A37] mb-[16px] text-right">
              التأثير المتبادل بين العلوم الاجتماعية والإنسانية والتقنيات الرقمية
            </h3>
            <div className="flex items-center gap-[8px] text-right justify-end flex-wrap">
              <span className="text-[14px] leading-[20px] text-[#6C737F]">جلسات علمية</span>
              <span className="text-[14px] leading-[20px] text-[#6C737F]">-</span>
              <span className="text-[14px] leading-[20px] text-[#6C737F]">ورش عمل</span>
              <span className="text-[14px] leading-[20px] text-[#6C737F]">-</span>
              <span className="text-[14px] leading-[20px] text-[#6C737F]">نقاشات</span>
            </div>
          </div>

          {/* 3D Illustration */}
          <div className="relative w-full h-[240px] mb-[24px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Placeholder for 3D illustration - you can replace with actual image */}
              <div className="w-[300px] h-[240px] bg-gradient-to-br from-[#1B8354] to-[#14573A] rounded-[16px] opacity-20"></div>
            </div>
          </div>

          <button className="self-end bg-[#1B8354] hover:bg-[#14573A] text-white rounded-[8px] py-[10px] px-[24px] text-[14px] leading-[20px] font-semibold transition-colors">
            تفاصيل المؤتمر
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
          {events.map((event, index) => (
            <EventCard
              key={index}
              day={event.day}
              date={event.date}
              title={event.title}
              category={event.category}
              categoryLabel={event.categoryLabel}
              ctaLabel="تفاصيل المؤتمر"
            />
          ))}
        </div>
      </div>

      {/* Carousel dots indicator */}
      <div className="flex justify-center items-center gap-[8px] mt-[24px]">
        <div className="w-[8px] h-[8px] rounded-full bg-[#1B8354]"></div>
        <div className="w-[8px] h-[8px] rounded-full bg-[#D2D6DB]"></div>
        <div className="w-[8px] h-[8px] rounded-full bg-[#D2D6DB]"></div>
        <div className="w-[8px] h-[8px] rounded-full bg-[#D2D6DB]"></div>
      </div>
    </section>
  );
}


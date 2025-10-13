"use client";
// @ts-nocheck
import Image from "next/image";

type UniversityLifeCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  ctaLabel: string;
};

function UniversityLifeCard({ imageSrc, title, description, ctaLabel }: UniversityLifeCardProps) {
  return (
    <div className="rounded-[16px] border border-[#D2D6DB] overflow-hidden bg-white flex flex-col h-full">
      <div className="relative w-full h-[240px]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-[24px] flex flex-col gap-[16px] flex-1">
        <h3 className="text-[18px] leading-[28px] font-bold text-[#1F2A37] text-right">
          {title}
        </h3>
        <p className="text-[14px] leading-[22px] text-[#6C737F] text-right flex-1">
          {description}
        </p>
        <button className="self-end mt-auto bg-[#1B8354] hover:bg-[#14573A] text-white rounded-[8px] py-[10px] px-[20px] text-[14px] leading-[20px] font-semibold transition-colors">
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

export default function UniversityLifeSection() {
  const cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      title: "خلف كواليس الاحتفال.. فريق طلابي يروح وطنية واحدة يصنع ذكرى لا تُنسى في يوم التأسيس",
      description: "عبر مبادرة جامعية تحمل اسم عهد، يجود مشاركة فعّالة في إحياء يوم التأسيس الذي ينبض بالحماس خلف كواليس الاحتفال... من تنسيق الفعاليات إلى تصميم العروض، كانت كل تفصيلة تحمل بصمة طلابية... فكيف تحوّلت روحة الجامعة إلى احتفالية طلابية السعودية؟",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
      title: "ليست مجرد تسلية.. كيف حوّل الطلاب شغفهم الإلكتروني إلى صحة نفسية وإبداع وتوازن",
      description: "من سباقات الإنسان الاقتصادية حيث تتصارع الأفكار بدلاً من قدراتهم، إلى فضاء هادئ منظّمة، في مبادرة LAG بالرياضيات الإلكترونية، جمعة اللعب إلى أبعد مختلف. كيف أصبحت نقاط قوة الداخلية وجزء من الداخلية. كيف أصبحت نقاط صحتنا النفسية... كيف حدث هذا؟",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop",
      title: "من فرشاتهم انطلقت قصص الوطن.. طلاب يروون حب المملكة بلوحات تنبض الفن محمد الجديد",
      description: "لم تكن مجرد ألوان بل رسالة عميقة انطلقت بلوحات مثلج تنفذ يوسف أمام بوحات البصاء يحمل فرشاته ليحوّل لوحات من تاريخ المملكة إلى نوافذ على الفخر... فكيف كانت رحلته من الفكرة إلى اللوحة المكتوبة",
    },
  ];

  return (
    <section className="px-[16px] md:px-[80px] py-[40px] bg-white">
      <div className="mb-[24px] text-right">
        <div className="flex items-center justify-end gap-[16px] mb-[8px]">
          <h2 className="text-[32px] leading-[40px] font-bold text-[#1F2A37]">
            الحياة الجامعية
          </h2>
          <button className="text-[14px] leading-[20px] text-[#6C737F] border border-[#D2D6DB] rounded-[8px] py-[6px] px-[12px] hover:bg-[#F9FAFB] transition-colors">
            المزيد من أنشطة الطلبة
          </button>
        </div>
        <div className="w-full h-[1px] bg-[#1B8354] mb-[8px]"></div>
        <p className="text-[16px] leading-[24px] text-[#6C737F]">
          قصص ملهمة من حياة الطلبة اليومية بالجامعة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {cards.map((card, index) => (
          <UniversityLifeCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            ctaLabel="اقرأ المزيد"
          />
        ))}
      </div>
    </section>
  );
}


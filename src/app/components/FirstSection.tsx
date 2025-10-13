"use client";
// @ts-nocheck
import Image from "next/image";

type SmallCardProps = {
  imageSrc: string;
  title: string;
  bullets: string[];
  cta: string;
};

function SmallCard({ imageSrc, title, bullets, cta }: SmallCardProps) {
  return (
    <div className="rounded-[16px] border border-[#D2D6DB] overflow-hidden bg-white flex flex-col h-full">
      <div className="relative w-full h-[196px]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-[16px] flex flex-col gap-[8px]">
        <h3 className="text-[14px] leading-[20px] font-bold text-[#1F2A37] text-right">{title}</h3>
        <ul className="flex items-center gap-[8px] justify-end">
          {bullets.map((_, idx) => (
            <li key={idx} className="w-[6px] h-[6px] rounded-full bg-[#D2D6DB]"></li>
          ))}
        </ul>
        <button className="self-end mt-[8px] text-[12px] leading-[16px] text-[#6C737F] border border-[#D2D6DB] rounded-[8px] py-[6px] px-[12px]">
          {cta}
        </button>
      </div>
    </div>
  );
}

export default function FirstSection() {
  return (
    <section className="px-[16px] md:px-[80px] py-[24px]">
      <div className="grid grid-cols-1 lg:grid-cols-[308px_308px_1fr] gap-[24px] items-stretch">
        <SmallCard
          imageSrc="https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1887&auto=format&fit=crop"
          title="ليسوا مجرد خريجين.. بمعامل كلية الطب بجامعة الإمام نصنع أطباء المستقبل برؤية وطنية"
          bullets={["", "", "", ""]}
          cta="كلية الطب"
        />
        <SmallCard
          imageSrc="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1887&auto=format&fit=crop"
          title="يحظى مركزٌ مميزٌ برابطة العالم الإسلامي بتأييدٍ بإنجازات جامعة الإمام في الشعر الورقي والإلكتروني"
          bullets={["", "", "", ""]}
          cta="مكتبة الجامعة"
        />

        <div className="relative rounded-[16px] overflow-hidden min-h-[300px] lg:min-h-[482px]">
          <Image
            src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Story"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,36,23,0.85)_0%,rgba(8,36,23,0.6)_40%,rgba(8,36,23,0.2)_75%,rgba(8,36,23,0)_100%)]"></div>
          <div className="absolute inset-0 flex items-end p-[24px] lg:p-[32px]">
            <div className="text-right text-white max-w-[600px] ml-auto">
              <h2 className="text-[30px] leading-[38px] font-bold mb-[12px]">
                حين يتحول المر من فعل عابر إلى قيمةٍ راسخة
              </h2>
              <p className="text-[14px] leading-[22px] opacity-90">
                بينما كانت حكايات الماضي تروى بزبرة مماثلها بشغف لأزمن كان الحبر والورقة هما نافذة العلم الوحيدة؛ لم تكن مجرد كلماتٍ تتبادل...
              </p>
              <ul className="flex items-center gap-[8px] justify-end mt-[16px]">
                {new Array(6).fill(0).map((_, idx) => (
                  <li key={idx} className="w-[8px] h-[8px] rounded-full bg-white/40"></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



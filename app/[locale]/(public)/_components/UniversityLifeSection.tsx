'use client';
// @ts-nocheck
import Image from 'next/image';
import { Trans } from '@lingui/macro';

type UniversityLifeCardProps = {
  imageSrc: string;
  title: React.ReactNode;
  description: React.ReactNode;
  ctaLabel: React.ReactNode;
};

function UniversityLifeCard({
  imageSrc,
  title,
  description,
  ctaLabel,
}: UniversityLifeCardProps) {
  return (
    <div className='rounded-2xl border border-border-primary overflow-hidden bg-background-primary flex flex-col h-full'>
      <div className='relative w-full h-[240px]'>
        <Image
          src={imageSrc}
          alt={typeof title === 'string' ? title : ''}
          fill
          className='object-cover'
        />
      </div>
      <div className='p-6 flex flex-col gap-4 flex-1'>
        <h3 className='text-lg leading-7 font-bold text-text-primary text-right'>
          {title}
        </h3>
        <p className='text-sm leading-[22px] text-text-tertiary text-right flex-1'>
          {description}
        </p>
        <button className='self-end mt-auto bg-primary-600 hover:bg-primary-800 text-white rounded-lg py-[10px] px-5 text-sm leading-5 font-semibold transition-colors'>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

export default function UniversityLifeSection() {
  const cards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
      title: (
        <Trans>
          خلف كواليس الاحتفال.. فريق طلابي يروح وطنية واحدة يصنع ذكرى لا تُنسى
          في يوم التأسيس
        </Trans>
      ),
      description: (
        <Trans>
          عبر مبادرة جامعية تحمل اسم عهد، يجود مشاركة فعّالة في إحياء يوم
          التأسيس الذي ينبض بالحماس خلف كواليس الاحتفال... من تنسيق الفعاليات
          إلى تصميم العروض، كانت كل تفصيلة تحمل بصمة طلابية... فكيف تحوّلت روحة
          الجامعة إلى احتفالية طلابية السعودية؟
        </Trans>
      ),
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop',
      title: (
        <Trans>
          ليست مجرد تسلية.. كيف حوّل الطلاب شغفهم الإلكتروني إلى صحة نفسية
          وإبداع وتوازن
        </Trans>
      ),
      description: (
        <Trans>
          من سباقات الإنسان الاقتصادية حيث تتصارع الأفكار بدلاً من قدراتهم، إلى
          فضاء هادئ منظّمة، في مبادرة LAG بالرياضيات الإلكترونية، جمعة اللعب إلى
          أبعد مختلف. كيف أصبحت نقاط قوة الداخلية وجزء من الداخلية. كيف أصبحت
          نقاط صحتنا النفسية... كيف حدث هذا؟
        </Trans>
      ),
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop',
      title: (
        <Trans>
          من فرشاتهم انطلقت قصص الوطن.. طلاب يروون حب المملكة بلوحات تنبض الفن
          محمد الجديد
        </Trans>
      ),
      description: (
        <Trans>
          لم تكن مجرد ألوان بل رسالة عميقة انطلقت بلوحات مثلج تنفذ يوسف أمام
          بوحات البصاء يحمل فرشاته ليحوّل لوحات من تاريخ المملكة إلى نوافذ على
          الفخر... فكيف كانت رحلته من الفكرة إلى اللوحة المكتوبة
        </Trans>
      ),
    },
  ];

  return (
    <section className='px-4 md:px-20 py-10 bg-background-primary'>
      <div className='mb-6 text-right'>
        <div className='flex items-center justify-end gap-4 mb-2'>
          <h2 className='text-3xl leading-10 font-bold text-text-primary'>
            <Trans>الحياة الجامعية</Trans>
          </h2>
          <button className='text-sm leading-5 text-text-tertiary border border-border-primary rounded-lg py-1.5 px-3 hover:bg-background-secondary transition-colors'>
            <Trans>المزيد من أنشطة الطلبة</Trans>
          </button>
        </div>
        <div className='w-full h-px bg-primary-600 mb-2'></div>
        <p className='text-base leading-6 text-text-tertiary'>
          <Trans>قصص ملهمة من حياة الطلبة اليومية بالجامعة.</Trans>
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cards.map((card, index) => (
          <UniversityLifeCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            ctaLabel={<Trans>اقرأ المزيد</Trans>}
          />
        ))}
      </div>
    </section>
  );
}

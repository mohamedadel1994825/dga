"use client";
// @ts-nocheck

import dynamic from "next/dynamic";
const DgaBreadcrumbs = dynamic(() => import("platformscode-new-react").then(m => m.DgaBreadcrumbs), { ssr: false });
const DgaButton = dynamic(() => import("platformscode-new-react").then(m => m.DgaButton), { ssr: false });
const DgaCard = dynamic(() => import("platformscode-new-react").then(m => m.DgaCard), { ssr: false });
const DgaDivider = dynamic(() => import("platformscode-new-react").then(m => m.DgaDivider), { ssr: false });
const DgaFeaturedIcon = dynamic(() => import("platformscode-new-react").then(m => m.DgaFeaturedIcon), { ssr: false });
const DgaFooter = dynamic(() => import("platformscode-new-react").then(m => m.DgaFooter), { ssr: false });
const DgaHeaderActionBtn = dynamic(() => import("platformscode-new-react").then(m => m.DgaHeaderActionBtn), { ssr: false });
const DgaIcon = dynamic(() => import("platformscode-new-react").then(m => m.DgaIcon), { ssr: false });
const DgaNavHeader = dynamic(() => import("platformscode-new-react").then(m => m.DgaNavHeader), { ssr: false });
const DgaNavHeaderActions = dynamic(() => import("platformscode-new-react").then(m => m.DgaNavHeaderActions), { ssr: false });
const DgaNavHeaderLink = dynamic(() => import("platformscode-new-react").then(m => m.DgaNavHeaderLink), { ssr: false });
const DgaNavHeaderLogos = dynamic(() => import("platformscode-new-react").then(m => m.DgaNavHeaderLogos), { ssr: false });
const DgaNavHeaderMain = dynamic(() => import("platformscode-new-react").then(m => m.DgaNavHeaderMain), { ssr: false });
const DgaNavHeaderMenu = dynamic(() => import("platformscode-new-react").then(m => m.DgaNavHeaderMenu), { ssr: false });
const DgaSecondNavHeader = dynamic(() => import("platformscode-new-react").then(m => m.DgaSecondNavHeader), { ssr: false });
const DgaSecondNavHeaderActions = dynamic(() => import("platformscode-new-react").then(m => m.DgaSecondNavHeaderActions), { ssr: false });
const DgaSecondNavHeaderContent = dynamic(() => import("platformscode-new-react").then(m => m.DgaSecondNavHeaderContent), { ssr: false });
const DgaSecondNavHeaderItem = dynamic(() => import("platformscode-new-react").then(m => m.DgaSecondNavHeaderItem), { ssr: false });
const DgaLabel = dynamic(() => import("platformscode-new-react").then(m => m.DgaLabel), { ssr: false });
import { guid } from "../utils/guid";
//   import Feedback from "../Feedback";
// import "platformscode-new-react/dist/style.css";
import { useEffect, useState } from "react";
import { useLanguage } from "./i18n/LanguageProvider";
import DigitalSignatureBanner from "./components/DigitalSignatureBanner";
  
  function Slider() {
    const numberInView = 3;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inView, setinView] = useState<number[]>([]);
    const [inLeftView, setInLeftView] = useState<number[]>([]);
    const [inRightView, setInRightView] = useState<number[]>([]);
    const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    useEffect(() => {
      if (currentIndex === 0) {
        setinView(() => card.slice(currentIndex * numberInView, numberInView));
        setInLeftView(() => {
          return card.slice(-numberInView);
        });
        setInRightView(() => {
          return card.slice(
            currentIndex * numberInView + numberInView,
            numberInView
          );
        });
      }
    }, [currentIndex]);
  
    return (
      <div>
        <div className="flex gap-[16px] md:-translate-x-[calc(100%/4-16px+(16px/4))] xl:-translate-x-[calc(100%/4-16px+(16px/4))/2] ">
          {card.map((_, i) => {
            return (
              // <div
              //   key={i.toString()}
              //   className="w-[calc(100%/1-16px+(16px/1))] md:w-[calc(100%/2-16px+(16px/2))] xl:w-[calc(100%/4-16px+(16px/4))] flex-shrink-0 flex-grow-0"
              // >
              <DgaCard
                key={i.toString()}
                cardTitle={"title"}
                description={"description"}
                primaryActionLabel={"action"}
                secondaryActionLabel={"action"}
              />
  
              // </div>
            );
          })}
        </div>
        <div className="dots mt-[36px] flex justify-center items-center gap-[8px]">
          <span className="size-[16px] inline-block rounded-full bg-[var(--stepper-button-completed,#1B8354)] cursor-pointer"></span>
          <span className="size-[16px] inline-block rounded-full bg-[var(--background-neutral-200,#E5E7EB)] cursor-pointer"></span>
          <span className="size-[16px] inline-block rounded-full bg-[var(--background-neutral-200,#E5E7EB)] cursor-pointer"></span>
        </div>
      </div>
    );
  }
  
  const Home: React.FC = () => {
  const { lang, dict, toggle } = useLanguage();

  // Localized banner items (weather, date, time, location)
  const currentLang: 'ar' | 'en' = lang;

  const locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';
  const now = new Date();
  const dateStr = new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(now);
  const timeStr = new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit', hour12: true }).format(now);
  const weatherStr = currentLang === 'ar' ? 'غائم' : 'Cloudy';
  const cityStr = currentLang === 'ar' ? 'الرياض' : 'Riyadh';
  const t = {
    menu: dict.header.menu.map((label) => ({ label })),
    actions: dict.header.actions,
  };
  const menuLabels = dict.header.menu;
  const newsIdx = menuLabels.findIndex(l => l === (currentLang === 'ar' ? 'الأخبار' : 'News'));
  const servicesIdx = menuLabels.findIndex(l => l === (currentLang === 'ar' ? 'الخدمات' : 'Services'));
    return (
      <div >
        <div >
        <DigitalSignatureBanner  className="max-md:hidden"  />
        <DgaSecondNavHeader
          key={currentLang}
          variant="gray"
          hideDivider
        >
          <DgaSecondNavHeaderActions>
          <DgaButton
              label="Button"
              variant="transparent"
              iconType="view"
              size="sm"
              iconOnly
            ></DgaButton>

           
             <DgaButton
              label="Button"
              variant="transparent"
              iconType="zoom-in-area"
              size="sm"
              iconOnly
            ></DgaButton>
            <DgaButton
              label="Button"
              variant="transparent"
              iconType="zoom-out-area"
              size="sm"
              iconOnly
            ></DgaButton>
                        <DgaButton
              label="Button"
              variant="transparent"
              iconType="mic-01"
              size="sm"
              iconOnly
            ></DgaButton>
          </DgaSecondNavHeaderActions>
          <DgaSecondNavHeaderContent>
            <DgaSecondNavHeaderItem label={weatherStr}>
              <DgaIcon icon="cloud" variant="stroke" type="rounded" />
            </DgaSecondNavHeaderItem>
            <DgaSecondNavHeaderItem label={dateStr}>
              <DgaIcon icon="calendar-04" variant="stroke" type="rounded" />
            </DgaSecondNavHeaderItem>
            <DgaSecondNavHeaderItem label={timeStr}>
              <DgaIcon icon="time-04" variant="stroke" type="rounded" />
            </DgaSecondNavHeaderItem>
            <DgaSecondNavHeaderItem label={cityStr}>
              <DgaIcon icon="location-01" variant="stroke" type="rounded" />
            </DgaSecondNavHeaderItem>
          </DgaSecondNavHeaderContent>
        </DgaSecondNavHeader>
        </div>
        <DgaNavHeader key={currentLang} fullWidth divider  >
          <DgaNavHeaderMain  collapsed> 
            <div className="flex items-center gap-3">
              <div className="w-11 h-16">
                <img src="https://imamu.edu.sa/_layouts/15/2016/Portal/img/logo.png" alt="logo" className="w-full h-full" />
              </div>
              <div className="flex flex-col leading-tight">
                <DgaLabel label={dict.header.brand} size="md" variant="default" />
              </div>
            {/* <DgaNavHeaderLogos
              logoSrc="https://imamu.edu.sa/_layouts/15/2016/Portal/img/logo.png"
              //   govSrc="https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg"
              logoLink="#"
              govLink="#"
          

            ></DgaNavHeaderLogos> */}
            </div>
          
            <DgaNavHeaderMenu>
              {t.menu.map(({ label }: { label: string }, idx: number) => (
                <DgaNavHeaderLink
                  key={label}
                  label={label}
                  icon={(idx === servicesIdx || idx === newsIdx - 1) ? "arrow-down-01" : undefined}
                  subMenuBackground="brand"
                >
                </DgaNavHeaderLink>
              ))}
            </DgaNavHeaderMenu>
          </DgaNavHeaderMain>
           <DgaNavHeaderActions  >
            <DgaHeaderActionBtn  icon="search-01"/>
            <DgaHeaderActionBtn  label={t.actions.langToggle}  onClick={() => toggle()}></DgaHeaderActionBtn>
            <DgaHeaderActionBtn label={t.actions.login} icon="user"></DgaHeaderActionBtn>
          </DgaNavHeaderActions>
        </DgaNavHeader>
  
        {/* <section
          className="max-h-[491px] h-[491px]"
          style={{
            background: `linear-gradient(0deg, rgba(9, 42, 30, 0.80) 0%, rgba(9, 42, 30, 0.80) 100%), url(https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1938189982v2.jpg) lightgray 0px -189.624px / 100% 195.723% no-repeat`,
          }}
        >
          <div className="px-[196px] pt-[130px]">
            <h1 className="display-xl-semibold text-[#FFF]">Hero Section</h1>
            <p className="text-xl-regular text-[#FFF] mt-[24px] mb-[32px]">
              Here you can add a brief description about the purpose of the portal
              followed with a call to action button and an image or an
              illustration on the left hand side.
            </p>
            <DgaButton label="Primary Button" variant="secondary" size="lg" />
          </div>
        </section>
  
        <div className="pt-[40px] px-[16px] md:px-[80px]">
          <section className="mt-[24px]">
            <h1 className="display-sm-bold text-[#161616] mb-4">
              About us Section
            </h1>
            <p className="text-md-regular text-[#161616] mb-8">
              Here you can add a brief description about the purpose of the portal
              followed with a call to action button and an image or an
              illustration on the left hand side.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-[32px]">
              {[
                {
                  showFeaturedIcon: false,
                  title: "The Title of the News Card in two Lines",
                  description:
                    "Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.",
                  image:
                    "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
                  primaryActionLabel: "Read More",
                  showSecondaryAction: false,
                },
                {
                  showFeaturedIcon: false,
                  title: "The Title of the News Card in two Lines",
                  description:
                    "Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.",
                  image:
                    "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
                  primaryActionLabel: "Read More",
                  showSecondaryAction: false,
                },
                {
                  showFeaturedIcon: false,
                  title: "The Title of the News Card in two Lines",
                  description:
                    "Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.",
                  image:
                    "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
                  primaryActionLabel: "Read More",
                  showSecondaryAction: false,
                },
              ].map(({}) => (
                <div
                  key={guid()}
                  className="flex flex-col justify-center items-center"
                >
                  <DgaFeaturedIcon icon={{
                    name:"user-group",
                    variant:"stroke",
                    type:"rounded"
                  }} variant="light" color="brand" size="xl" />
                  <h3 className="display-lg-regular text-[#14573A] mt-[24px]">
                    1.5M
                  </h3>
                  <p className="text-md-regular text-[#1F2A37] mt-[8px]">
                    Person
                  </p>
                </div>
              ))}
            </div>
          </section>
  
          <section className="mt-[24px] bg-[#F9FAFB] py-[40px]">
            <h1 className="display-sm-bold text-[#161616] mb-4">
              Services Section
            </h1>
            <p className="text-md-regular text-[#161616] mb-8">
              Here you can add a brief description about the purpose of the portal
              followed with a call to action button and an image or an
              illustration on the left hand side.
            </p>
            <Slider />
          </section>
          <section className="mt-[24px]">
            <h1 className="display-sm-bold text-[#161616] mb-4">
              Articles and News Section
            </h1>
            <p className="text-md-regular text-[#161616] mb-8">
              Here you can add a brief description about the purpose of the
              portal.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  showFeaturedIcon: false,
                  title: "The Title of the News Card in two Lines",
                  description:
                    "Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.",
                  image:
                    "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
                  primaryActionLabel: "Read More",
                  showSecondaryAction: false,
                },
                {
                  showFeaturedIcon: false,
                  title: "The Title of the News Card in two Lines",
                  description:
                    "Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.",
                  image:
                    "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
                  primaryActionLabel: "Read More",
                  showSecondaryAction: false,
                },
                {
                  showFeaturedIcon: false,
                  title: "The Title of the News Card in two Lines",
                  description:
                    "Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.",
                  image:
                    "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
                  primaryActionLabel: "Read More",
                  showSecondaryAction: false,
                },
              ].map(
                ({
                  showFeaturedIcon,
                  title,
                  description,
                  image,
                  primaryActionLabel,
                  showSecondaryAction,
                }) => (
                  <DgaCard
                    key={guid()}
                    cardTitle={title}
                    description={description}
                    image={image}
                    showFeaturedIcon={showFeaturedIcon}
                    primaryActionLabel={primaryActionLabel}
                    showSecondaryAction={showSecondaryAction}
                    // featuredIcon={<DgaIcon icon="mail-02" size={24} variant="stroke" type="rounded" color="#1B8354" />}
                  />
                )
              )}
            </div>
  
            <p className="text-sm-regular text-right text-[#161616] py-[16px] mt-[40px]">
              Last Modified Date: 04/12/2020 - 4:13 PM Saudi Arabia Time
            </p>
          </section>
  
          <section className="py-[40px]">
            <h1 className="display-sm-bold text-[#161616] mb-4">
              Partner Section
            </h1>
            <div className="flex justify-between items-center">
              <DgaButton
                iconOnly
                iconType="arrow-left-01"
                iconProps={{ variant: "stroke", type: "standard" }}
                variant="secondary"
                size="lg"
              />
              <div className="rounded-[16px] border-[1px] border-[#D2D6DB] p-[16px]">
                <svg
                  width="86"
                  height="68"
                  viewBox="0 0 86 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="85"
                    height="68"
                    transform="translate(0.699951)"
                    fill="white"
                  />
                  <path
                    d="M59.1772 25.4111C58.8041 25.1856 58.1241 24.8055 57.1853 24.4898C55.8313 24.0259 53.9417 23.678 51.7031 24.0581C50.9509 24.187 50.1565 24.3996 49.3321 24.7153C49.2538 24.7475 49.1756 24.7733 49.0974 24.8055C48.6762 24.973 48.2609 25.1792 47.8397 25.4047C47.4786 25.598 47.1236 25.8106 46.7685 26.0425C45.9561 26.5644 45.1557 27.1572 44.3794 27.8014C43.4948 22.0737 43.9281 16.7583 44.1327 14.1489C44.1327 14.136 44.1508 14.1296 44.1628 14.136C46.0584 15.4117 45.5288 18.9747 45.1256 19.9991C45.1196 20.0184 45.1437 20.0313 45.1618 20.0184C47.5207 17.0353 46.3713 13.7366 45.8839 12.9054C45.8719 12.8861 45.8959 12.8668 45.914 12.8797C46.257 13.176 46.5338 13.4917 46.7685 13.8139C47.4967 14.8125 47.7675 15.8885 47.8397 16.8421C47.8758 17.3446 47.8638 17.8085 47.8397 18.208C47.8337 18.3175 47.8276 18.4141 47.8156 18.5108C47.8156 18.5237 47.8276 18.5301 47.8397 18.5237C47.8457 18.5237 47.8517 18.5237 47.8517 18.5172C48.4896 17.1771 48.7965 15.154 47.8397 13.1889C47.5809 12.6542 47.2319 12.1258 46.7685 11.6169C46.6361 11.4687 46.4917 11.3269 46.3412 11.1787C46.3292 11.1659 46.3412 11.1401 46.3593 11.1465C46.5037 11.1852 46.6361 11.2303 46.7685 11.2754C47.1717 11.4236 47.5268 11.6297 47.8397 11.881C48.5558 12.448 49.0432 13.2211 49.3321 14.0329C49.5728 14.703 49.6811 15.3924 49.6811 16.0045C49.6811 16.0302 49.7112 16.0303 49.7172 16.0109C50.1625 14.2649 49.8917 12.9441 49.3321 11.9841C48.9349 11.2947 48.3873 10.7922 47.8397 10.4378C47.4666 10.1994 47.0935 10.0319 46.7685 9.92882C46.5759 9.86439 46.4074 9.82573 46.257 9.8064C46.2329 9.8064 46.2389 9.76775 46.263 9.76775C46.4375 9.74842 46.606 9.74197 46.7685 9.73553C47.1657 9.72909 47.5207 9.76775 47.8397 9.82573C48.4715 9.95459 48.965 10.1865 49.3321 10.4571C49.9339 10.8888 50.2348 11.3978 50.3371 11.604C50.3431 11.6233 50.3732 11.6104 50.3732 11.5911C50.2889 10.6698 49.8917 9.94815 49.3381 9.43271C48.9108 9.03325 48.3873 8.75621 47.8457 8.58869C47.4906 8.48561 47.1296 8.42763 46.7745 8.42118C46.2931 8.41474 45.8297 8.49849 45.4386 8.67889C45.4205 8.68534 45.4085 8.66601 45.4145 8.64668C45.7635 8.11192 46.257 7.78978 46.7745 7.61582C47.1356 7.49985 47.5027 7.45474 47.8457 7.48051C48.1767 7.49984 48.4776 7.57715 48.7243 7.69957C48.7424 7.70601 48.7544 7.68669 48.7423 7.66736C48.4715 7.33878 48.1646 7.08105 47.8457 6.88777C47.5027 6.68159 47.1416 6.55918 46.7745 6.51408C45.8177 6.39811 44.8428 6.83623 44.1929 7.88642C44.1869 7.89931 44.1688 7.89931 44.1628 7.88642C44.0364 7.64803 43.9161 7.38387 43.8077 7.10682C43.549 6.46253 43.3384 5.74093 43.224 5.01933C43.218 4.99356 43.1939 4.99356 43.1939 5.01933C43.0796 5.74093 42.863 6.46898 42.6042 7.11327C42.4898 7.39032 42.3755 7.64804 42.2491 7.87998C42.2431 7.89287 42.2251 7.89287 42.219 7.87998C41.0877 6.04375 38.9634 6.08241 37.6696 7.66736C37.6576 7.68025 37.6696 7.70601 37.6876 7.69957C38.5482 7.26145 40.179 7.39031 40.9974 8.64668C41.0095 8.66601 40.9914 8.68534 40.9734 8.67889C39.7156 8.11192 37.7659 8.47916 36.7248 9.8064C36.3517 10.2767 36.0989 10.8759 36.0327 11.5911C36.0327 11.6104 36.0568 11.6233 36.0689 11.604C36.1471 11.4429 36.3517 11.095 36.7248 10.7406C37.3326 10.1672 38.3917 9.58735 40.1429 9.76131C40.167 9.76775 40.167 9.79996 40.1489 9.79996C39.2523 9.91594 37.4048 10.7728 36.7248 12.7315C36.4239 13.5948 36.3457 14.6772 36.6827 16.0045C36.6887 16.0238 36.7188 16.0238 36.7188 15.998C36.7188 15.9658 36.7188 15.9401 36.7248 15.9078C36.7428 14.1296 37.6937 11.7457 40.0466 11.1401C40.0647 11.1336 40.0767 11.1594 40.0647 11.1723C37.4349 13.6464 37.6937 16.7003 38.5542 18.5043C38.5662 18.5237 38.5903 18.5172 38.5903 18.4979C38.476 17.132 38.3857 14.703 40.4919 12.8668C40.51 12.8539 40.5341 12.8732 40.522 12.8926C40.0346 13.7301 38.8852 17.0225 41.2442 20.0055C41.2562 20.0249 41.2863 20.012 41.2803 19.9862C40.8831 18.9682 40.3535 15.3988 42.2431 14.1231C42.2551 14.1167 42.2732 14.1232 42.2732 14.136C42.4778 16.7454 42.9111 22.0608 42.0265 27.7886C40.504 26.5386 38.8972 25.4433 37.3085 24.799C37.1099 24.7217 36.9174 24.6509 36.7308 24.58C35.088 24.0001 33.5835 23.8391 32.2716 23.9035C30.1654 24.0001 28.5526 24.6766 27.668 25.147C27.4875 25.2436 27.337 25.3338 27.2227 25.4047C27.1745 25.4369 27.2106 25.5078 27.2588 25.4884C27.3972 25.4433 27.5296 25.3982 27.668 25.3596C29.2868 24.8699 30.8213 24.7411 32.2716 24.8764C33.8543 25.0245 35.3407 25.4884 36.7308 26.1585C38.6806 27.0992 40.4438 28.4393 42.0385 29.8567C39.7879 31.9571 37.8862 33.9995 36.7308 34.7147C36.6706 34.7469 36.6165 34.7856 36.5623 34.8178C36.2855 34.4119 35.8041 34.1799 35.2805 34.3023C34.8232 34.4119 34.4501 34.8049 34.3478 35.2881C34.2575 35.7198 34.3598 36.1901 34.5885 36.4349C35.2023 37.0921 35.9124 37.1372 36.7308 36.77C38.2894 36.0677 40.2272 33.8642 42.6042 31.5319C42.8028 31.3386 43.0014 31.1389 43.206 30.9456C43.4106 31.1389 43.6092 31.3322 43.8077 31.5254C44.8849 32.5821 45.8718 33.6129 46.7745 34.4892C47.1476 34.85 47.5027 35.185 47.8457 35.4814C48.3753 35.9453 48.8747 36.3254 49.3381 36.5896C50.2468 37.105 51.0351 37.1694 51.7091 36.5316C51.7452 36.4994 51.7813 36.4672 51.8174 36.4285C51.9739 36.261 52.1544 35.7133 52.0581 35.2817C52.004 35.0304 51.8776 34.8049 51.7031 34.6309C51.5466 34.4698 51.342 34.3474 51.1254 34.2959C50.6018 34.1735 50.1204 34.4054 49.8436 34.8113C49.6871 34.7276 49.5186 34.6116 49.3321 34.4763C48.9048 34.1606 48.4054 33.716 47.8397 33.1877C47.5027 32.872 47.1476 32.5241 46.7685 32.1568C46.0343 31.4417 45.2279 30.6556 44.3734 29.8503C45.1317 29.1738 45.932 28.5166 46.7685 27.911C47.1175 27.6597 47.4726 27.4149 47.8397 27.1829C48.3271 26.8737 48.8206 26.5902 49.3321 26.326C50.0963 25.933 50.8847 25.6044 51.7031 25.3531C53.4001 24.8313 55.2235 24.6573 57.1853 24.9923C57.8232 25.1019 58.4731 25.2629 59.1411 25.482C59.1893 25.5142 59.2254 25.4433 59.1772 25.4111Z"
                    fill="#9DA4AE"
                  />
                  <path
                    d="M7.50592 58H6.14992V49.624H9.74992C11.2859 49.624 12.1859 50.62 12.1859 52.144C12.1859 53.668 11.2859 54.664 9.74992 54.664H7.50592V58ZM7.50592 50.812V53.476H9.66592C10.3499 53.476 10.7579 53.104 10.7579 52.432V51.856C10.7579 51.184 10.3499 50.812 9.66592 50.812H7.50592ZM15.7494 58H14.9094C14.0214 58 13.5774 57.508 13.5774 56.704V49.12H14.8854V56.932H15.7494V58ZM22.3032 58H21.5712C20.8872 58 20.5272 57.568 20.4432 56.956H20.3832C20.1432 57.736 19.4712 58.144 18.5592 58.144C17.2752 58.144 16.5432 57.412 16.5432 56.284C16.5432 55.048 17.4672 54.412 19.2072 54.412H20.3352V53.884C20.3352 53.128 19.9272 52.684 19.0512 52.684C18.3192 52.684 17.8752 53.044 17.5632 53.536L16.7832 52.828C17.1912 52.132 17.9232 51.616 19.1352 51.616C20.7432 51.616 21.6432 52.408 21.6432 53.8V56.932H22.3032V58ZM18.9312 57.148C19.7352 57.148 20.3352 56.764 20.3352 56.152V55.252H19.2312C18.3192 55.252 17.8752 55.552 17.8752 56.092V56.308C17.8752 56.86 18.2832 57.148 18.9312 57.148ZM26.418 58H25.278C24.378 58 23.898 57.496 23.898 56.644V52.828H22.926V51.76H23.454C23.886 51.76 24.03 51.58 24.03 51.148V50.056H25.206V51.76H26.514V52.828H25.206V56.932H26.418V58ZM28.1865 58V52.828H27.2385V51.76H28.1865V50.728C28.1865 49.72 28.7265 49.12 29.7705 49.12H30.8025V50.188H29.4945V51.76H30.8025V52.828H29.4945V58H28.1865ZM34.3418 58.144C32.6018 58.144 31.4738 56.872 31.4738 54.88C31.4738 52.888 32.6018 51.616 34.3418 51.616C36.0818 51.616 37.2098 52.888 37.2098 54.88C37.2098 56.872 36.0818 58.144 34.3418 58.144ZM34.3418 57.064C35.2298 57.064 35.8298 56.512 35.8298 55.408V54.352C35.8298 53.248 35.2298 52.696 34.3418 52.696C33.4538 52.696 32.8538 53.248 32.8538 54.352V55.408C32.8538 56.512 33.4538 57.064 34.3418 57.064ZM39.9752 58H38.6672V51.76H39.9752V52.96H40.0352C40.2152 52.324 40.7552 51.76 41.7512 51.76H42.0992V53.02H41.5832C40.5512 53.02 39.9752 53.368 39.9752 54.016V58ZM44.569 58H43.261V51.76H44.569V52.792H44.629C44.881 52.144 45.349 51.616 46.297 51.616C47.137 51.616 47.845 52.024 48.145 52.888H48.181C48.409 52.192 49.057 51.616 50.065 51.616C51.301 51.616 52.033 52.504 52.033 54.04V58H50.725V54.196C50.725 53.236 50.365 52.744 49.573 52.744C48.913 52.744 48.301 53.092 48.301 53.812V58H46.993V54.196C46.993 53.224 46.621 52.744 45.853 52.744C45.205 52.744 44.569 53.092 44.569 53.812V58ZM61.5389 58H56.7749V49.624H58.1309V56.8H61.5389V58ZM65.1621 58.144C63.4221 58.144 62.2941 56.872 62.2941 54.88C62.2941 52.888 63.4221 51.616 65.1621 51.616C66.9021 51.616 68.0301 52.888 68.0301 54.88C68.0301 56.872 66.9021 58.144 65.1621 58.144ZM65.1621 57.064C66.0501 57.064 66.6501 56.512 66.6501 55.408V54.352C66.6501 53.248 66.0501 52.696 65.1621 52.696C64.2741 52.696 63.6741 53.248 63.6741 54.352V55.408C63.6741 56.512 64.2741 57.064 65.1621 57.064ZM74.9595 58.588C74.9595 59.884 74.0355 60.544 71.7915 60.544C69.7515 60.544 68.9595 59.992 68.9595 59.044C68.9595 58.36 69.3675 57.988 70.0275 57.844V57.712C69.5715 57.568 69.3195 57.22 69.3195 56.752C69.3195 56.104 69.8235 55.792 70.4235 55.648V55.6C69.6915 55.252 69.2835 54.592 69.2835 53.752C69.2835 52.48 70.1835 51.616 71.7675 51.616C72.1875 51.616 72.5715 51.676 72.8955 51.808V51.64C72.8955 51.088 73.1595 50.752 73.7115 50.752H74.6715V51.808H73.3995V52.06C73.9635 52.432 74.2755 53.032 74.2755 53.752C74.2755 55.012 73.3635 55.864 71.7795 55.864C71.4795 55.864 71.1915 55.828 70.9635 55.768C70.6515 55.876 70.3635 56.08 70.3635 56.392C70.3635 56.728 70.6875 56.86 71.2395 56.86H72.7755C74.3115 56.86 74.9595 57.508 74.9595 58.588ZM73.7355 58.732C73.7355 58.3 73.4475 58.024 72.5955 58.024H70.4835C70.1955 58.192 70.0515 58.444 70.0515 58.744C70.0515 59.248 70.4235 59.596 71.3955 59.596H72.2115C73.2315 59.596 73.7355 59.308 73.7355 58.732ZM71.7795 54.916C72.5475 54.916 72.9915 54.568 72.9915 53.86V53.62C72.9915 52.912 72.5475 52.564 71.7795 52.564C71.0115 52.564 70.5675 52.912 70.5675 53.62V53.86C70.5675 54.568 71.0115 54.916 71.7795 54.916ZM78.3105 58.144C76.5705 58.144 75.4425 56.872 75.4425 54.88C75.4425 52.888 76.5705 51.616 78.3105 51.616C80.0505 51.616 81.1785 52.888 81.1785 54.88C81.1785 56.872 80.0505 58.144 78.3105 58.144ZM78.3105 57.064C79.1985 57.064 79.7985 56.512 79.7985 55.408V54.352C79.7985 53.248 79.1985 52.696 78.3105 52.696C77.4225 52.696 76.8225 53.248 76.8225 54.352V55.408C76.8225 56.512 77.4225 57.064 78.3105 57.064Z"
                    fill="#6C737F"
                  />
                </svg>
              </div>
              <div className="rounded-[16px] border-[1px] border-[#D2D6DB] p-[16px]">
                <svg
                  width="86"
                  height="68"
                  viewBox="0 0 86 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="85"
                    height="68"
                    transform="translate(0.699951)"
                    fill="white"
                  />
                  <path
                    d="M59.1772 25.4111C58.8041 25.1856 58.1241 24.8055 57.1853 24.4898C55.8313 24.0259 53.9417 23.678 51.7031 24.0581C50.9509 24.187 50.1565 24.3996 49.3321 24.7153C49.2538 24.7475 49.1756 24.7733 49.0974 24.8055C48.6762 24.973 48.2609 25.1792 47.8397 25.4047C47.4786 25.598 47.1236 25.8106 46.7685 26.0425C45.9561 26.5644 45.1557 27.1572 44.3794 27.8014C43.4948 22.0737 43.9281 16.7583 44.1327 14.1489C44.1327 14.136 44.1508 14.1296 44.1628 14.136C46.0584 15.4117 45.5288 18.9747 45.1256 19.9991C45.1196 20.0184 45.1437 20.0313 45.1618 20.0184C47.5207 17.0353 46.3713 13.7366 45.8839 12.9054C45.8719 12.8861 45.8959 12.8668 45.914 12.8797C46.257 13.176 46.5338 13.4917 46.7685 13.8139C47.4967 14.8125 47.7675 15.8885 47.8397 16.8421C47.8758 17.3446 47.8638 17.8085 47.8397 18.208C47.8337 18.3175 47.8276 18.4141 47.8156 18.5108C47.8156 18.5237 47.8276 18.5301 47.8397 18.5237C47.8457 18.5237 47.8517 18.5237 47.8517 18.5172C48.4896 17.1771 48.7965 15.154 47.8397 13.1889C47.5809 12.6542 47.2319 12.1258 46.7685 11.6169C46.6361 11.4687 46.4917 11.3269 46.3412 11.1787C46.3292 11.1659 46.3412 11.1401 46.3593 11.1465C46.5037 11.1852 46.6361 11.2303 46.7685 11.2754C47.1717 11.4236 47.5268 11.6297 47.8397 11.881C48.5558 12.448 49.0432 13.2211 49.3321 14.0329C49.5728 14.703 49.6811 15.3924 49.6811 16.0045C49.6811 16.0302 49.7112 16.0303 49.7172 16.0109C50.1625 14.2649 49.8917 12.9441 49.3321 11.9841C48.9349 11.2947 48.3873 10.7922 47.8397 10.4378C47.4666 10.1994 47.0935 10.0319 46.7685 9.92882C46.5759 9.86439 46.4074 9.82573 46.257 9.8064C46.2329 9.8064 46.2389 9.76775 46.263 9.76775C46.4375 9.74842 46.606 9.74197 46.7685 9.73553C47.1657 9.72909 47.5207 9.76775 47.8397 9.82573C48.4715 9.95459 48.965 10.1865 49.3321 10.4571C49.9339 10.8888 50.2348 11.3978 50.3371 11.604C50.3431 11.6233 50.3732 11.6104 50.3732 11.5911C50.2889 10.6698 49.8917 9.94815 49.3381 9.43271C48.9108 9.03325 48.3873 8.75621 47.8457 8.58869C47.4906 8.48561 47.1296 8.42763 46.7745 8.42118C46.2931 8.41474 45.8297 8.49849 45.4386 8.67889C45.4205 8.68534 45.4085 8.66601 45.4145 8.64668C45.7635 8.11192 46.257 7.78978 46.7745 7.61582C47.1356 7.49985 47.5027 7.45474 47.8457 7.48051C48.1767 7.49984 48.4776 7.57715 48.7243 7.69957C48.7424 7.70601 48.7544 7.68669 48.7423 7.66736C48.4715 7.33878 48.1646 7.08105 47.8457 6.88777C47.5027 6.68159 47.1416 6.55918 46.7745 6.51408C45.8177 6.39811 44.8428 6.83623 44.1929 7.88642C44.1869 7.89931 44.1688 7.89931 44.1628 7.88642C44.0364 7.64803 43.9161 7.38387 43.8077 7.10682C43.549 6.46253 43.3384 5.74093 43.224 5.01933C43.218 4.99356 43.1939 4.99356 43.1939 5.01933C43.0796 5.74093 42.863 6.46898 42.6042 7.11327C42.4898 7.39032 42.3755 7.64804 42.2491 7.87998C42.2431 7.89287 42.2251 7.89287 42.219 7.87998C41.0877 6.04375 38.9634 6.08241 37.6696 7.66736C37.6576 7.68025 37.6696 7.70601 37.6876 7.69957C38.5482 7.26145 40.179 7.39031 40.9974 8.64668C41.0095 8.66601 40.9914 8.68534 40.9734 8.67889C39.7156 8.11192 37.7659 8.47916 36.7248 9.8064C36.3517 10.2767 36.0989 10.8759 36.0327 11.5911C36.0327 11.6104 36.0568 11.6233 36.0689 11.604C36.1471 11.4429 36.3517 11.095 36.7248 10.7406C37.3326 10.1672 38.3917 9.58735 40.1429 9.76131C40.167 9.76775 40.167 9.79996 40.1489 9.79996C39.2523 9.91594 37.4048 10.7728 36.7248 12.7315C36.4239 13.5948 36.3457 14.6772 36.6827 16.0045C36.6887 16.0238 36.7188 16.0238 36.7188 15.998C36.7188 15.9658 36.7188 15.9401 36.7248 15.9078C36.7428 14.1296 37.6937 11.7457 40.0466 11.1401C40.0647 11.1336 40.0767 11.1594 40.0647 11.1723C37.4349 13.6464 37.6937 16.7003 38.5542 18.5043C38.5662 18.5237 38.5903 18.5172 38.5903 18.4979C38.476 17.132 38.3857 14.703 40.4919 12.8668C40.51 12.8539 40.5341 12.8732 40.522 12.8926C40.0346 13.7301 38.8852 17.0225 41.2442 20.0055C41.2562 20.0249 41.2863 20.012 41.2803 19.9862C40.8831 18.9682 40.3535 15.3988 42.2431 14.1231C42.2551 14.1167 42.2732 14.1232 42.2732 14.136C42.4778 16.7454 42.9111 22.0608 42.0265 27.7886C40.504 26.5386 38.8972 25.4433 37.3085 24.799C37.1099 24.7217 36.9174 24.6509 36.7308 24.58C35.088 24.0001 33.5835 23.8391 32.2716 23.9035C30.1654 24.0001 28.5526 24.6766 27.668 25.147C27.4875 25.2436 27.337 25.3338 27.2227 25.4047C27.1745 25.4369 27.2106 25.5078 27.2588 25.4884C27.3972 25.4433 27.5296 25.3982 27.668 25.3596C29.2868 24.8699 30.8213 24.7411 32.2716 24.8764C33.8543 25.0245 35.3407 25.4884 36.7308 26.1585C38.6806 27.0992 40.4438 28.4393 42.0385 29.8567C39.7879 31.9571 37.8862 33.9995 36.7308 34.7147C36.6706 34.7469 36.6165 34.7856 36.5623 34.8178C36.2855 34.4119 35.8041 34.1799 35.2805 34.3023C34.8232 34.4119 34.4501 34.8049 34.3478 35.2881C34.2575 35.7198 34.3598 36.1901 34.5885 36.4349C35.2023 37.0921 35.9124 37.1372 36.7308 36.77C38.2894 36.0677 40.2272 33.8642 42.6042 31.5319C42.8028 31.3386 43.0014 31.1389 43.206 30.9456C43.4106 31.1389 43.6092 31.3322 43.8077 31.5254C44.8849 32.5821 45.8718 33.6129 46.7745 34.4892C47.1476 34.85 47.5027 35.185 47.8457 35.4814C48.3753 35.9453 48.8747 36.3254 49.3381 36.5896C50.2468 37.105 51.0351 37.1694 51.7091 36.5316C51.7452 36.4994 51.7813 36.4672 51.8174 36.4285C51.9739 36.261 52.1544 35.7133 52.0581 35.2817C52.004 35.0304 51.8776 34.8049 51.7031 34.6309C51.5466 34.4698 51.342 34.3474 51.1254 34.2959C50.6018 34.1735 50.1204 34.4054 49.8436 34.8113C49.6871 34.7276 49.5186 34.6116 49.3321 34.4763C48.9048 34.1606 48.4054 33.716 47.8397 33.1877C47.5027 32.872 47.1476 32.5241 46.7685 32.1568C46.0343 31.4417 45.2279 30.6556 44.3734 29.8503C45.1317 29.1738 45.932 28.5166 46.7685 27.911C47.1175 27.6597 47.4726 27.4149 47.8397 27.1829C48.3271 26.8737 48.8206 26.5902 49.3321 26.326C50.0963 25.933 50.8847 25.6044 51.7031 25.3531C53.4001 24.8313 55.2235 24.6573 57.1853 24.9923C57.8232 25.1019 58.4731 25.2629 59.1411 25.482C59.1893 25.5142 59.2254 25.4433 59.1772 25.4111Z"
                    fill="#9DA4AE"
                  />
                  <path
                    d="M7.50592 58H6.14992V49.624H9.74992C11.2859 49.624 12.1859 50.62 12.1859 52.144C12.1859 53.668 11.2859 54.664 9.74992 54.664H7.50592V58ZM7.50592 50.812V53.476H9.66592C10.3499 53.476 10.7579 53.104 10.7579 52.432V51.856C10.7579 51.184 10.3499 50.812 9.66592 50.812H7.50592ZM15.7494 58H14.9094C14.0214 58 13.5774 57.508 13.5774 56.704V49.12H14.8854V56.932H15.7494V58ZM22.3032 58H21.5712C20.8872 58 20.5272 57.568 20.4432 56.956H20.3832C20.1432 57.736 19.4712 58.144 18.5592 58.144C17.2752 58.144 16.5432 57.412 16.5432 56.284C16.5432 55.048 17.4672 54.412 19.2072 54.412H20.3352V53.884C20.3352 53.128 19.9272 52.684 19.0512 52.684C18.3192 52.684 17.8752 53.044 17.5632 53.536L16.7832 52.828C17.1912 52.132 17.9232 51.616 19.1352 51.616C20.7432 51.616 21.6432 52.408 21.6432 53.8V56.932H22.3032V58ZM18.9312 57.148C19.7352 57.148 20.3352 56.764 20.3352 56.152V55.252H19.2312C18.3192 55.252 17.8752 55.552 17.8752 56.092V56.308C17.8752 56.86 18.2832 57.148 18.9312 57.148ZM26.418 58H25.278C24.378 58 23.898 57.496 23.898 56.644V52.828H22.926V51.76H23.454C23.886 51.76 24.03 51.58 24.03 51.148V50.056H25.206V51.76H26.514V52.828H25.206V56.932H26.418V58ZM28.1865 58V52.828H27.2385V51.76H28.1865V50.728C28.1865 49.72 28.7265 49.12 29.7705 49.12H30.8025V50.188H29.4945V51.76H30.8025V52.828H29.4945V58H28.1865ZM34.3418 58.144C32.6018 58.144 31.4738 56.872 31.4738 54.88C31.4738 52.888 32.6018 51.616 34.3418 51.616C36.0818 51.616 37.2098 52.888 37.2098 54.88C37.2098 56.872 36.0818 58.144 34.3418 58.144ZM34.3418 57.064C35.2298 57.064 35.8298 56.512 35.8298 55.408V54.352C35.8298 53.248 35.2298 52.696 34.3418 52.696C33.4538 52.696 32.8538 53.248 32.8538 54.352V55.408C32.8538 56.512 33.4538 57.064 34.3418 57.064ZM39.9752 58H38.6672V51.76H39.9752V52.96H40.0352C40.2152 52.324 40.7552 51.76 41.7512 51.76H42.0992V53.02H41.5832C40.5512 53.02 39.9752 53.368 39.9752 54.016V58ZM44.569 58H43.261V51.76H44.569V52.792H44.629C44.881 52.144 45.349 51.616 46.297 51.616C47.137 51.616 47.845 52.024 48.145 52.888H48.181C48.409 52.192 49.057 51.616 50.065 51.616C51.301 51.616 52.033 52.504 52.033 54.04V58H50.725V54.196C50.725 53.236 50.365 52.744 49.573 52.744C48.913 52.744 48.301 53.092 48.301 53.812V58H46.993V54.196C46.993 53.224 46.621 52.744 45.853 52.744C45.205 52.744 44.569 53.092 44.569 53.812V58ZM61.5389 58H56.7749V49.624H58.1309V56.8H61.5389V58ZM65.1621 58.144C63.4221 58.144 62.2941 56.872 62.2941 54.88C62.2941 52.888 63.4221 51.616 65.1621 51.616C66.9021 51.616 68.0301 52.888 68.0301 54.88C68.0301 56.872 66.9021 58.144 65.1621 58.144ZM65.1621 57.064C66.0501 57.064 66.6501 56.512 66.6501 55.408V54.352C66.6501 53.248 66.0501 52.696 65.1621 52.696C64.2741 52.696 63.6741 53.248 63.6741 54.352V55.408C63.6741 56.512 64.2741 57.064 65.1621 57.064ZM74.9595 58.588C74.9595 59.884 74.0355 60.544 71.7915 60.544C69.7515 60.544 68.9595 59.992 68.9595 59.044C68.9595 58.36 69.3675 57.988 70.0275 57.844V57.712C69.5715 57.568 69.3195 57.22 69.3195 56.752C69.3195 56.104 69.8235 55.792 70.4235 55.648V55.6C69.6915 55.252 69.2835 54.592 69.2835 53.752C69.2835 52.48 70.1835 51.616 71.7675 51.616C72.1875 51.616 72.5715 51.676 72.8955 51.808V51.64C72.8955 51.088 73.1595 50.752 73.7115 50.752H74.6715V51.808H73.3995V52.06C73.9635 52.432 74.2755 53.032 74.2755 53.752C74.2755 55.012 73.3635 55.864 71.7795 55.864C71.4795 55.864 71.1915 55.828 70.9635 55.768C70.6515 55.876 70.3635 56.08 70.3635 56.392C70.3635 56.728 70.6875 56.86 71.2395 56.86H72.7755C74.3115 56.86 74.9595 57.508 74.9595 58.588ZM73.7355 58.732C73.7355 58.3 73.4475 58.024 72.5955 58.024H70.4835C70.1955 58.192 70.0515 58.444 70.0515 58.744C70.0515 59.248 70.4235 59.596 71.3955 59.596H72.2115C73.2315 59.596 73.7355 59.308 73.7355 58.732ZM71.7795 54.916C72.5475 54.916 72.9915 54.568 72.9915 53.86V53.62C72.9915 52.912 72.5475 52.564 71.7795 52.564C71.0115 52.564 70.5675 52.912 70.5675 53.62V53.86C70.5675 54.568 71.0115 54.916 71.7795 54.916ZM78.3105 58.144C76.5705 58.144 75.4425 56.872 75.4425 54.88C75.4425 52.888 76.5705 51.616 78.3105 51.616C80.0505 51.616 81.1785 52.888 81.1785 54.88C81.1785 56.872 80.0505 58.144 78.3105 58.144ZM78.3105 57.064C79.1985 57.064 79.7985 56.512 79.7985 55.408V54.352C79.7985 53.248 79.1985 52.696 78.3105 52.696C77.4225 52.696 76.8225 53.248 76.8225 54.352V55.408C76.8225 56.512 77.4225 57.064 78.3105 57.064Z"
                    fill="#6C737F"
                  />
                </svg>
              </div>
              <div className="rounded-[16px] border-[1px] border-[#D2D6DB] p-[16px]">
                <svg
                  width="86"
                  height="68"
                  viewBox="0 0 86 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="85"
                    height="68"
                    transform="translate(0.699951)"
                    fill="white"
                  />
                  <path
                    d="M59.1772 25.4111C58.8041 25.1856 58.1241 24.8055 57.1853 24.4898C55.8313 24.0259 53.9417 23.678 51.7031 24.0581C50.9509 24.187 50.1565 24.3996 49.3321 24.7153C49.2538 24.7475 49.1756 24.7733 49.0974 24.8055C48.6762 24.973 48.2609 25.1792 47.8397 25.4047C47.4786 25.598 47.1236 25.8106 46.7685 26.0425C45.9561 26.5644 45.1557 27.1572 44.3794 27.8014C43.4948 22.0737 43.9281 16.7583 44.1327 14.1489C44.1327 14.136 44.1508 14.1296 44.1628 14.136C46.0584 15.4117 45.5288 18.9747 45.1256 19.9991C45.1196 20.0184 45.1437 20.0313 45.1618 20.0184C47.5207 17.0353 46.3713 13.7366 45.8839 12.9054C45.8719 12.8861 45.8959 12.8668 45.914 12.8797C46.257 13.176 46.5338 13.4917 46.7685 13.8139C47.4967 14.8125 47.7675 15.8885 47.8397 16.8421C47.8758 17.3446 47.8638 17.8085 47.8397 18.208C47.8337 18.3175 47.8276 18.4141 47.8156 18.5108C47.8156 18.5237 47.8276 18.5301 47.8397 18.5237C47.8457 18.5237 47.8517 18.5237 47.8517 18.5172C48.4896 17.1771 48.7965 15.154 47.8397 13.1889C47.5809 12.6542 47.2319 12.1258 46.7685 11.6169C46.6361 11.4687 46.4917 11.3269 46.3412 11.1787C46.3292 11.1659 46.3412 11.1401 46.3593 11.1465C46.5037 11.1852 46.6361 11.2303 46.7685 11.2754C47.1717 11.4236 47.5268 11.6297 47.8397 11.881C48.5558 12.448 49.0432 13.2211 49.3321 14.0329C49.5728 14.703 49.6811 15.3924 49.6811 16.0045C49.6811 16.0302 49.7112 16.0303 49.7172 16.0109C50.1625 14.2649 49.8917 12.9441 49.3321 11.9841C48.9349 11.2947 48.3873 10.7922 47.8397 10.4378C47.4666 10.1994 47.0935 10.0319 46.7685 9.92882C46.5759 9.86439 46.4074 9.82573 46.257 9.8064C46.2329 9.8064 46.2389 9.76775 46.263 9.76775C46.4375 9.74842 46.606 9.74197 46.7685 9.73553C47.1657 9.72909 47.5207 9.76775 47.8397 9.82573C48.4715 9.95459 48.965 10.1865 49.3321 10.4571C49.9339 10.8888 50.2348 11.3978 50.3371 11.604C50.3431 11.6233 50.3732 11.6104 50.3732 11.5911C50.2889 10.6698 49.8917 9.94815 49.3381 9.43271C48.9108 9.03325 48.3873 8.75621 47.8457 8.58869C47.4906 8.48561 47.1296 8.42763 46.7745 8.42118C46.2931 8.41474 45.8297 8.49849 45.4386 8.67889C45.4205 8.68534 45.4085 8.66601 45.4145 8.64668C45.7635 8.11192 46.257 7.78978 46.7745 7.61582C47.1356 7.49985 47.5027 7.45474 47.8457 7.48051C48.1767 7.49984 48.4776 7.57715 48.7243 7.69957C48.7424 7.70601 48.7544 7.68669 48.7423 7.66736C48.4715 7.33878 48.1646 7.08105 47.8457 6.88777C47.5027 6.68159 47.1416 6.55918 46.7745 6.51408C45.8177 6.39811 44.8428 6.83623 44.1929 7.88642C44.1869 7.89931 44.1688 7.89931 44.1628 7.88642C44.0364 7.64803 43.9161 7.38387 43.8077 7.10682C43.549 6.46253 43.3384 5.74093 43.224 5.01933C43.218 4.99356 43.1939 4.99356 43.1939 5.01933C43.0796 5.74093 42.863 6.46898 42.6042 7.11327C42.4898 7.39032 42.3755 7.64804 42.2491 7.87998C42.2431 7.89287 42.2251 7.89287 42.219 7.87998C41.0877 6.04375 38.9634 6.08241 37.6696 7.66736C37.6576 7.68025 37.6696 7.70601 37.6876 7.69957C38.5482 7.26145 40.179 7.39031 40.9974 8.64668C41.0095 8.66601 40.9914 8.68534 40.9734 8.67889C39.7156 8.11192 37.7659 8.47916 36.7248 9.8064C36.3517 10.2767 36.0989 10.8759 36.0327 11.5911C36.0327 11.6104 36.0568 11.6233 36.0689 11.604C36.1471 11.4429 36.3517 11.095 36.7248 10.7406C37.3326 10.1672 38.3917 9.58735 40.1429 9.76131C40.167 9.76775 40.167 9.79996 40.1489 9.79996C39.2523 9.91594 37.4048 10.7728 36.7248 12.7315C36.4239 13.5948 36.3457 14.6772 36.6827 16.0045C36.6887 16.0238 36.7188 16.0238 36.7188 15.998C36.7188 15.9658 36.7188 15.9401 36.7248 15.9078C36.7428 14.1296 37.6937 11.7457 40.0466 11.1401C40.0647 11.1336 40.0767 11.1594 40.0647 11.1723C37.4349 13.6464 37.6937 16.7003 38.5542 18.5043C38.5662 18.5237 38.5903 18.5172 38.5903 18.4979C38.476 17.132 38.3857 14.703 40.4919 12.8668C40.51 12.8539 40.5341 12.8732 40.522 12.8926C40.0346 13.7301 38.8852 17.0225 41.2442 20.0055C41.2562 20.0249 41.2863 20.012 41.2803 19.9862C40.8831 18.9682 40.3535 15.3988 42.2431 14.1231C42.2551 14.1167 42.2732 14.1232 42.2732 14.136C42.4778 16.7454 42.9111 22.0608 42.0265 27.7886C40.504 26.5386 38.8972 25.4433 37.3085 24.799C37.1099 24.7217 36.9174 24.6509 36.7308 24.58C35.088 24.0001 33.5835 23.8391 32.2716 23.9035C30.1654 24.0001 28.5526 24.6766 27.668 25.147C27.4875 25.2436 27.337 25.3338 27.2227 25.4047C27.1745 25.4369 27.2106 25.5078 27.2588 25.4884C27.3972 25.4433 27.5296 25.3982 27.668 25.3596C29.2868 24.8699 30.8213 24.7411 32.2716 24.8764C33.8543 25.0245 35.3407 25.4884 36.7308 26.1585C38.6806 27.0992 40.4438 28.4393 42.0385 29.8567C39.7879 31.9571 37.8862 33.9995 36.7308 34.7147C36.6706 34.7469 36.6165 34.7856 36.5623 34.8178C36.2855 34.4119 35.8041 34.1799 35.2805 34.3023C34.8232 34.4119 34.4501 34.8049 34.3478 35.2881C34.2575 35.7198 34.3598 36.1901 34.5885 36.4349C35.2023 37.0921 35.9124 37.1372 36.7308 36.77C38.2894 36.0677 40.2272 33.8642 42.6042 31.5319C42.8028 31.3386 43.0014 31.1389 43.206 30.9456C43.4106 31.1389 43.6092 31.3322 43.8077 31.5254C44.8849 32.5821 45.8718 33.6129 46.7745 34.4892C47.1476 34.85 47.5027 35.185 47.8457 35.4814C48.3753 35.9453 48.8747 36.3254 49.3381 36.5896C50.2468 37.105 51.0351 37.1694 51.7091 36.5316C51.7452 36.4994 51.7813 36.4672 51.8174 36.4285C51.9739 36.261 52.1544 35.7133 52.0581 35.2817C52.004 35.0304 51.8776 34.8049 51.7031 34.6309C51.5466 34.4698 51.342 34.3474 51.1254 34.2959C50.6018 34.1735 50.1204 34.4054 49.8436 34.8113C49.6871 34.7276 49.5186 34.6116 49.3321 34.4763C48.9048 34.1606 48.4054 33.716 47.8397 33.1877C47.5027 32.872 47.1476 32.5241 46.7685 32.1568C46.0343 31.4417 45.2279 30.6556 44.3734 29.8503C45.1317 29.1738 45.932 28.5166 46.7685 27.911C47.1175 27.6597 47.4726 27.4149 47.8397 27.1829C48.3271 26.8737 48.8206 26.5902 49.3321 26.326C50.0963 25.933 50.8847 25.6044 51.7031 25.3531C53.4001 24.8313 55.2235 24.6573 57.1853 24.9923C57.8232 25.1019 58.4731 25.2629 59.1411 25.482C59.1893 25.5142 59.2254 25.4433 59.1772 25.4111Z"
                    fill="#9DA4AE"
                  />
                  <path
                    d="M7.50592 58H6.14992V49.624H9.74992C11.2859 49.624 12.1859 50.62 12.1859 52.144C12.1859 53.668 11.2859 54.664 9.74992 54.664H7.50592V58ZM7.50592 50.812V53.476H9.66592C10.3499 53.476 10.7579 53.104 10.7579 52.432V51.856C10.7579 51.184 10.3499 50.812 9.66592 50.812H7.50592ZM15.7494 58H14.9094C14.0214 58 13.5774 57.508 13.5774 56.704V49.12H14.8854V56.932H15.7494V58ZM22.3032 58H21.5712C20.8872 58 20.5272 57.568 20.4432 56.956H20.3832C20.1432 57.736 19.4712 58.144 18.5592 58.144C17.2752 58.144 16.5432 57.412 16.5432 56.284C16.5432 55.048 17.4672 54.412 19.2072 54.412H20.3352V53.884C20.3352 53.128 19.9272 52.684 19.0512 52.684C18.3192 52.684 17.8752 53.044 17.5632 53.536L16.7832 52.828C17.1912 52.132 17.9232 51.616 19.1352 51.616C20.7432 51.616 21.6432 52.408 21.6432 53.8V56.932H22.3032V58ZM18.9312 57.148C19.7352 57.148 20.3352 56.764 20.3352 56.152V55.252H19.2312C18.3192 55.252 17.8752 55.552 17.8752 56.092V56.308C17.8752 56.86 18.2832 57.148 18.9312 57.148ZM26.418 58H25.278C24.378 58 23.898 57.496 23.898 56.644V52.828H22.926V51.76H23.454C23.886 51.76 24.03 51.58 24.03 51.148V50.056H25.206V51.76H26.514V52.828H25.206V56.932H26.418V58ZM28.1865 58V52.828H27.2385V51.76H28.1865V50.728C28.1865 49.72 28.7265 49.12 29.7705 49.12H30.8025V50.188H29.4945V51.76H30.8025V52.828H29.4945V58H28.1865ZM34.3418 58.144C32.6018 58.144 31.4738 56.872 31.4738 54.88C31.4738 52.888 32.6018 51.616 34.3418 51.616C36.0818 51.616 37.2098 52.888 37.2098 54.88C37.2098 56.872 36.0818 58.144 34.3418 58.144ZM34.3418 57.064C35.2298 57.064 35.8298 56.512 35.8298 55.408V54.352C35.8298 53.248 35.2298 52.696 34.3418 52.696C33.4538 52.696 32.8538 53.248 32.8538 54.352V55.408C32.8538 56.512 33.4538 57.064 34.3418 57.064ZM39.9752 58H38.6672V51.76H39.9752V52.96H40.0352C40.2152 52.324 40.7552 51.76 41.7512 51.76H42.0992V53.02H41.5832C40.5512 53.02 39.9752 53.368 39.9752 54.016V58ZM44.569 58H43.261V51.76H44.569V52.792H44.629C44.881 52.144 45.349 51.616 46.297 51.616C47.137 51.616 47.845 52.024 48.145 52.888H48.181C48.409 52.192 49.057 51.616 50.065 51.616C51.301 51.616 52.033 52.504 52.033 54.04V58H50.725V54.196C50.725 53.236 50.365 52.744 49.573 52.744C48.913 52.744 48.301 53.092 48.301 53.812V58H46.993V54.196C46.993 53.224 46.621 52.744 45.853 52.744C45.205 52.744 44.569 53.092 44.569 53.812V58ZM61.5389 58H56.7749V49.624H58.1309V56.8H61.5389V58ZM65.1621 58.144C63.4221 58.144 62.2941 56.872 62.2941 54.88C62.2941 52.888 63.4221 51.616 65.1621 51.616C66.9021 51.616 68.0301 52.888 68.0301 54.88C68.0301 56.872 66.9021 58.144 65.1621 58.144ZM65.1621 57.064C66.0501 57.064 66.6501 56.512 66.6501 55.408V54.352C66.6501 53.248 66.0501 52.696 65.1621 52.696C64.2741 52.696 63.6741 53.248 63.6741 54.352V55.408C63.6741 56.512 64.2741 57.064 65.1621 57.064ZM74.9595 58.588C74.9595 59.884 74.0355 60.544 71.7915 60.544C69.7515 60.544 68.9595 59.992 68.9595 59.044C68.9595 58.36 69.3675 57.988 70.0275 57.844V57.712C69.5715 57.568 69.3195 57.22 69.3195 56.752C69.3195 56.104 69.8235 55.792 70.4235 55.648V55.6C69.6915 55.252 69.2835 54.592 69.2835 53.752C69.2835 52.48 70.1835 51.616 71.7675 51.616C72.1875 51.616 72.5715 51.676 72.8955 51.808V51.64C72.8955 51.088 73.1595 50.752 73.7115 50.752H74.6715V51.808H73.3995V52.06C73.9635 52.432 74.2755 53.032 74.2755 53.752C74.2755 55.012 73.3635 55.864 71.7795 55.864C71.4795 55.864 71.1915 55.828 70.9635 55.768C70.6515 55.876 70.3635 56.08 70.3635 56.392C70.3635 56.728 70.6875 56.86 71.2395 56.86H72.7755C74.3115 56.86 74.9595 57.508 74.9595 58.588ZM73.7355 58.732C73.7355 58.3 73.4475 58.024 72.5955 58.024H70.4835C70.1955 58.192 70.0515 58.444 70.0515 58.744C70.0515 59.248 70.4235 59.596 71.3955 59.596H72.2115C73.2315 59.596 73.7355 59.308 73.7355 58.732ZM71.7795 54.916C72.5475 54.916 72.9915 54.568 72.9915 53.86V53.62C72.9915 52.912 72.5475 52.564 71.7795 52.564C71.0115 52.564 70.5675 52.912 70.5675 53.62V53.86C70.5675 54.568 71.0115 54.916 71.7795 54.916ZM78.3105 58.144C76.5705 58.144 75.4425 56.872 75.4425 54.88C75.4425 52.888 76.5705 51.616 78.3105 51.616C80.0505 51.616 81.1785 52.888 81.1785 54.88C81.1785 56.872 80.0505 58.144 78.3105 58.144ZM78.3105 57.064C79.1985 57.064 79.7985 56.512 79.7985 55.408V54.352C79.7985 53.248 79.1985 52.696 78.3105 52.696C77.4225 52.696 76.8225 53.248 76.8225 54.352V55.408C76.8225 56.512 77.4225 57.064 78.3105 57.064Z"
                    fill="#6C737F"
                  />
                </svg>
              </div>
              <div className="rounded-[16px] border-[1px] border-[#D2D6DB] p-[16px]">
                <svg
                  width="86"
                  height="68"
                  viewBox="0 0 86 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="85"
                    height="68"
                    transform="translate(0.699951)"
                    fill="white"
                  />
                  <path
                    d="M59.1772 25.4111C58.8041 25.1856 58.1241 24.8055 57.1853 24.4898C55.8313 24.0259 53.9417 23.678 51.7031 24.0581C50.9509 24.187 50.1565 24.3996 49.3321 24.7153C49.2538 24.7475 49.1756 24.7733 49.0974 24.8055C48.6762 24.973 48.2609 25.1792 47.8397 25.4047C47.4786 25.598 47.1236 25.8106 46.7685 26.0425C45.9561 26.5644 45.1557 27.1572 44.3794 27.8014C43.4948 22.0737 43.9281 16.7583 44.1327 14.1489C44.1327 14.136 44.1508 14.1296 44.1628 14.136C46.0584 15.4117 45.5288 18.9747 45.1256 19.9991C45.1196 20.0184 45.1437 20.0313 45.1618 20.0184C47.5207 17.0353 46.3713 13.7366 45.8839 12.9054C45.8719 12.8861 45.8959 12.8668 45.914 12.8797C46.257 13.176 46.5338 13.4917 46.7685 13.8139C47.4967 14.8125 47.7675 15.8885 47.8397 16.8421C47.8758 17.3446 47.8638 17.8085 47.8397 18.208C47.8337 18.3175 47.8276 18.4141 47.8156 18.5108C47.8156 18.5237 47.8276 18.5301 47.8397 18.5237C47.8457 18.5237 47.8517 18.5237 47.8517 18.5172C48.4896 17.1771 48.7965 15.154 47.8397 13.1889C47.5809 12.6542 47.2319 12.1258 46.7685 11.6169C46.6361 11.4687 46.4917 11.3269 46.3412 11.1787C46.3292 11.1659 46.3412 11.1401 46.3593 11.1465C46.5037 11.1852 46.6361 11.2303 46.7685 11.2754C47.1717 11.4236 47.5268 11.6297 47.8397 11.881C48.5558 12.448 49.0432 13.2211 49.3321 14.0329C49.5728 14.703 49.6811 15.3924 49.6811 16.0045C49.6811 16.0302 49.7112 16.0303 49.7172 16.0109C50.1625 14.2649 49.8917 12.9441 49.3321 11.9841C48.9349 11.2947 48.3873 10.7922 47.8397 10.4378C47.4666 10.1994 47.0935 10.0319 46.7685 9.92882C46.5759 9.86439 46.4074 9.82573 46.257 9.8064C46.2329 9.8064 46.2389 9.76775 46.263 9.76775C46.4375 9.74842 46.606 9.74197 46.7685 9.73553C47.1657 9.72909 47.5207 9.76775 47.8397 9.82573C48.4715 9.95459 48.965 10.1865 49.3321 10.4571C49.9339 10.8888 50.2348 11.3978 50.3371 11.604C50.3431 11.6233 50.3732 11.6104 50.3732 11.5911C50.2889 10.6698 49.8917 9.94815 49.3381 9.43271C48.9108 9.03325 48.3873 8.75621 47.8457 8.58869C47.4906 8.48561 47.1296 8.42763 46.7745 8.42118C46.2931 8.41474 45.8297 8.49849 45.4386 8.67889C45.4205 8.68534 45.4085 8.66601 45.4145 8.64668C45.7635 8.11192 46.257 7.78978 46.7745 7.61582C47.1356 7.49985 47.5027 7.45474 47.8457 7.48051C48.1767 7.49984 48.4776 7.57715 48.7243 7.69957C48.7424 7.70601 48.7544 7.68669 48.7423 7.66736C48.4715 7.33878 48.1646 7.08105 47.8457 6.88777C47.5027 6.68159 47.1416 6.55918 46.7745 6.51408C45.8177 6.39811 44.8428 6.83623 44.1929 7.88642C44.1869 7.89931 44.1688 7.89931 44.1628 7.88642C44.0364 7.64803 43.9161 7.38387 43.8077 7.10682C43.549 6.46253 43.3384 5.74093 43.224 5.01933C43.218 4.99356 43.1939 4.99356 43.1939 5.01933C43.0796 5.74093 42.863 6.46898 42.6042 7.11327C42.4898 7.39032 42.3755 7.64804 42.2491 7.87998C42.2431 7.89287 42.2251 7.89287 42.219 7.87998C41.0877 6.04375 38.9634 6.08241 37.6696 7.66736C37.6576 7.68025 37.6696 7.70601 37.6876 7.69957C38.5482 7.26145 40.179 7.39031 40.9974 8.64668C41.0095 8.66601 40.9914 8.68534 40.9734 8.67889C39.7156 8.11192 37.7659 8.47916 36.7248 9.8064C36.3517 10.2767 36.0989 10.8759 36.0327 11.5911C36.0327 11.6104 36.0568 11.6233 36.0689 11.604C36.1471 11.4429 36.3517 11.095 36.7248 10.7406C37.3326 10.1672 38.3917 9.58735 40.1429 9.76131C40.167 9.76775 40.167 9.79996 40.1489 9.79996C39.2523 9.91594 37.4048 10.7728 36.7248 12.7315C36.4239 13.5948 36.3457 14.6772 36.6827 16.0045C36.6887 16.0238 36.7188 16.0238 36.7188 15.998C36.7188 15.9658 36.7188 15.9401 36.7248 15.9078C36.7428 14.1296 37.6937 11.7457 40.0466 11.1401C40.0647 11.1336 40.0767 11.1594 40.0647 11.1723C37.4349 13.6464 37.6937 16.7003 38.5542 18.5043C38.5662 18.5237 38.5903 18.5172 38.5903 18.4979C38.476 17.132 38.3857 14.703 40.4919 12.8668C40.51 12.8539 40.5341 12.8732 40.522 12.8926C40.0346 13.7301 38.8852 17.0225 41.2442 20.0055C41.2562 20.0249 41.2863 20.012 41.2803 19.9862C40.8831 18.9682 40.3535 15.3988 42.2431 14.1231C42.2551 14.1167 42.2732 14.1232 42.2732 14.136C42.4778 16.7454 42.9111 22.0608 42.0265 27.7886C40.504 26.5386 38.8972 25.4433 37.3085 24.799C37.1099 24.7217 36.9174 24.6509 36.7308 24.58C35.088 24.0001 33.5835 23.8391 32.2716 23.9035C30.1654 24.0001 28.5526 24.6766 27.668 25.147C27.4875 25.2436 27.337 25.3338 27.2227 25.4047C27.1745 25.4369 27.2106 25.5078 27.2588 25.4884C27.3972 25.4433 27.5296 25.3982 27.668 25.3596C29.2868 24.8699 30.8213 24.7411 32.2716 24.8764C33.8543 25.0245 35.3407 25.4884 36.7308 26.1585C38.6806 27.0992 40.4438 28.4393 42.0385 29.8567C39.7879 31.9571 37.8862 33.9995 36.7308 34.7147C36.6706 34.7469 36.6165 34.7856 36.5623 34.8178C36.2855 34.4119 35.8041 34.1799 35.2805 34.3023C34.8232 34.4119 34.4501 34.8049 34.3478 35.2881C34.2575 35.7198 34.3598 36.1901 34.5885 36.4349C35.2023 37.0921 35.9124 37.1372 36.7308 36.77C38.2894 36.0677 40.2272 33.8642 42.6042 31.5319C42.8028 31.3386 43.0014 31.1389 43.206 30.9456C43.4106 31.1389 43.6092 31.3322 43.8077 31.5254C44.8849 32.5821 45.8718 33.6129 46.7745 34.4892C47.1476 34.85 47.5027 35.185 47.8457 35.4814C48.3753 35.9453 48.8747 36.3254 49.3381 36.5896C50.2468 37.105 51.0351 37.1694 51.7091 36.5316C51.7452 36.4994 51.7813 36.4672 51.8174 36.4285C51.9739 36.261 52.1544 35.7133 52.0581 35.2817C52.004 35.0304 51.8776 34.8049 51.7031 34.6309C51.5466 34.4698 51.342 34.3474 51.1254 34.2959C50.6018 34.1735 50.1204 34.4054 49.8436 34.8113C49.6871 34.7276 49.5186 34.6116 49.3321 34.4763C48.9048 34.1606 48.4054 33.716 47.8397 33.1877C47.5027 32.872 47.1476 32.5241 46.7685 32.1568C46.0343 31.4417 45.2279 30.6556 44.3734 29.8503C45.1317 29.1738 45.932 28.5166 46.7685 27.911C47.1175 27.6597 47.4726 27.4149 47.8397 27.1829C48.3271 26.8737 48.8206 26.5902 49.3321 26.326C50.0963 25.933 50.8847 25.6044 51.7031 25.3531C53.4001 24.8313 55.2235 24.6573 57.1853 24.9923C57.8232 25.1019 58.4731 25.2629 59.1411 25.482C59.1893 25.5142 59.2254 25.4433 59.1772 25.4111Z"
                    fill="#9DA4AE"
                  />
                  <path
                    d="M7.50592 58H6.14992V49.624H9.74992C11.2859 49.624 12.1859 50.62 12.1859 52.144C12.1859 53.668 11.2859 54.664 9.74992 54.664H7.50592V58ZM7.50592 50.812V53.476H9.66592C10.3499 53.476 10.7579 53.104 10.7579 52.432V51.856C10.7579 51.184 10.3499 50.812 9.66592 50.812H7.50592ZM15.7494 58H14.9094C14.0214 58 13.5774 57.508 13.5774 56.704V49.12H14.8854V56.932H15.7494V58ZM22.3032 58H21.5712C20.8872 58 20.5272 57.568 20.4432 56.956H20.3832C20.1432 57.736 19.4712 58.144 18.5592 58.144C17.2752 58.144 16.5432 57.412 16.5432 56.284C16.5432 55.048 17.4672 54.412 19.2072 54.412H20.3352V53.884C20.3352 53.128 19.9272 52.684 19.0512 52.684C18.3192 52.684 17.8752 53.044 17.5632 53.536L16.7832 52.828C17.1912 52.132 17.9232 51.616 19.1352 51.616C20.7432 51.616 21.6432 52.408 21.6432 53.8V56.932H22.3032V58ZM18.9312 57.148C19.7352 57.148 20.3352 56.764 20.3352 56.152V55.252H19.2312C18.3192 55.252 17.8752 55.552 17.8752 56.092V56.308C17.8752 56.86 18.2832 57.148 18.9312 57.148ZM26.418 58H25.278C24.378 58 23.898 57.496 23.898 56.644V52.828H22.926V51.76H23.454C23.886 51.76 24.03 51.58 24.03 51.148V50.056H25.206V51.76H26.514V52.828H25.206V56.932H26.418V58ZM28.1865 58V52.828H27.2385V51.76H28.1865V50.728C28.1865 49.72 28.7265 49.12 29.7705 49.12H30.8025V50.188H29.4945V51.76H30.8025V52.828H29.4945V58H28.1865ZM34.3418 58.144C32.6018 58.144 31.4738 56.872 31.4738 54.88C31.4738 52.888 32.6018 51.616 34.3418 51.616C36.0818 51.616 37.2098 52.888 37.2098 54.88C37.2098 56.872 36.0818 58.144 34.3418 58.144ZM34.3418 57.064C35.2298 57.064 35.8298 56.512 35.8298 55.408V54.352C35.8298 53.248 35.2298 52.696 34.3418 52.696C33.4538 52.696 32.8538 53.248 32.8538 54.352V55.408C32.8538 56.512 33.4538 57.064 34.3418 57.064ZM39.9752 58H38.6672V51.76H39.9752V52.96H40.0352C40.2152 52.324 40.7552 51.76 41.7512 51.76H42.0992V53.02H41.5832C40.5512 53.02 39.9752 53.368 39.9752 54.016V58ZM44.569 58H43.261V51.76H44.569V52.792H44.629C44.881 52.144 45.349 51.616 46.297 51.616C47.137 51.616 47.845 52.024 48.145 52.888H48.181C48.409 52.192 49.057 51.616 50.065 51.616C51.301 51.616 52.033 52.504 52.033 54.04V58H50.725V54.196C50.725 53.236 50.365 52.744 49.573 52.744C48.913 52.744 48.301 53.092 48.301 53.812V58H46.993V54.196C46.993 53.224 46.621 52.744 45.853 52.744C45.205 52.744 44.569 53.092 44.569 53.812V58ZM61.5389 58H56.7749V49.624H58.1309V56.8H61.5389V58ZM65.1621 58.144C63.4221 58.144 62.2941 56.872 62.2941 54.88C62.2941 52.888 63.4221 51.616 65.1621 51.616C66.9021 51.616 68.0301 52.888 68.0301 54.88C68.0301 56.872 66.9021 58.144 65.1621 58.144ZM65.1621 57.064C66.0501 57.064 66.6501 56.512 66.6501 55.408V54.352C66.6501 53.248 66.0501 52.696 65.1621 52.696C64.2741 52.696 63.6741 53.248 63.6741 54.352V55.408C63.6741 56.512 64.2741 57.064 65.1621 57.064ZM74.9595 58.588C74.9595 59.884 74.0355 60.544 71.7915 60.544C69.7515 60.544 68.9595 59.992 68.9595 59.044C68.9595 58.36 69.3675 57.988 70.0275 57.844V57.712C69.5715 57.568 69.3195 57.22 69.3195 56.752C69.3195 56.104 69.8235 55.792 70.4235 55.648V55.6C69.6915 55.252 69.2835 54.592 69.2835 53.752C69.2835 52.48 70.1835 51.616 71.7675 51.616C72.1875 51.616 72.5715 51.676 72.8955 51.808V51.64C72.8955 51.088 73.1595 50.752 73.7115 50.752H74.6715V51.808H73.3995V52.06C73.9635 52.432 74.2755 53.032 74.2755 53.752C74.2755 55.012 73.3635 55.864 71.7795 55.864C71.4795 55.864 71.1915 55.828 70.9635 55.768C70.6515 55.876 70.3635 56.08 70.3635 56.392C70.3635 56.728 70.6875 56.86 71.2395 56.86H72.7755C74.3115 56.86 74.9595 57.508 74.9595 58.588ZM73.7355 58.732C73.7355 58.3 73.4475 58.024 72.5955 58.024H70.4835C70.1955 58.192 70.0515 58.444 70.0515 58.744C70.0515 59.248 70.4235 59.596 71.3955 59.596H72.2115C73.2315 59.596 73.7355 59.308 73.7355 58.732ZM71.7795 54.916C72.5475 54.916 72.9915 54.568 72.9915 53.86V53.62C72.9915 52.912 72.5475 52.564 71.7795 52.564C71.0115 52.564 70.5675 52.912 70.5675 53.62V53.86C70.5675 54.568 71.0115 54.916 71.7795 54.916ZM78.3105 58.144C76.5705 58.144 75.4425 56.872 75.4425 54.88C75.4425 52.888 76.5705 51.616 78.3105 51.616C80.0505 51.616 81.1785 52.888 81.1785 54.88C81.1785 56.872 80.0505 58.144 78.3105 58.144ZM78.3105 57.064C79.1985 57.064 79.7985 56.512 79.7985 55.408V54.352C79.7985 53.248 79.1985 52.696 78.3105 52.696C77.4225 52.696 76.8225 53.248 76.8225 54.352V55.408C76.8225 56.512 77.4225 57.064 78.3105 57.064Z"
                    fill="#6C737F"
                  />
                </svg>
              </div>
  
              <DgaButton
                iconOnly
                iconType="arrow-right-01"
                iconProps={{ variant: "stroke", type: "standard" }}
                variant="secondary"
                size="lg"
              />
            </div>
          </section>
        </div>
        <DgaDivider color="primary" />
   */}
        {/* <Feedback /> */}
  
        {/* <DgaFooter
          background="DarkGreen"
          NavLinks={true}
          groupLinks={[
            {
              title: "Overview",
              links: [
                { name: "About [name of the portal]", target: "" },
                { name: "Privacy and terms of use", target: "" },
                { name: "How to use [name of the portal]", target: "" },
                { name: "News and events", target: "" },
                { name: "Service level agreement statistics", target: "" },
              ],
            },
            {
              title: "Important links",
              links: [
                { name: "National service portal", target: "" },
                { name: "Open government data", target: "" },
                {
                  name: "National strategy for data & Artificial intelligence",
                  target: "",
                },
                { name: "Open data portal", target: "" },
                { name: "E-Participation portal", target: "" },
              ],
            },
            {
              title: "Contact & support",
              links: [
                { name: "Customer hub", target: "" },
                { name: "Contact us", target: "" },
                { name: "Engage with Us", target: "" },
                { name: "Submit complaint", target: "" },
                { name: "Report corruption", target: "" },
              ],
            },
          ]}
          socialMediaTitle="Social Media"
          accessibilityTitle="accessibility Tools"
          socialMediaLinks={[
            { title: "LinkedIn", target: "#", icon: { name: "linkedin-02", variant: "stroke", type: "rounded" } },
            { title: "Twitter", target: "#", icon: { name: "twitter-01", variant: "stroke", type: "rounded" } },
            { title: "YouTube", target: "#", icon: { name: "youtube", variant: "stroke", type: "rounded" } },
            { title: "Facebook", target: "#", icon: { name: "facebook-02", variant: "stroke", type: "rounded" } },
          ]}
          accessibilityLinks={[
            { title: "Increase text", target: "#", icon: { name: "zoom-in-area", variant: "stroke", type: "rounded" } },
            { title: "Decrease text", target: "#", icon: { name: "zoom-out-area", variant: "stroke", type: "rounded" } },
            { title: "Site map", target: "#", icon: { name: "grid-dots-outer", variant: "stroke", type: "rounded" } },
          ]}
          copyright="All Right Reserved For Digital Government Authority © 2024"
          basicLinks={[
            {
              name: "Sitemap",
              target: "#",
            },
            {
              name: "RSS",
              target: "#",
            },
            {
              name: "Mobile App",
              target: "#",
            },
          ]}
          extraLinks={[
            {
              name: "Developed and Maintained by [insert the name of the entity]",
              target: "#",
            },
          ]}
          bottomImages={[
            "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg",
            "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg",
          ]}
        /> */}
      </div>
    );
  };
  
  export default Home;
  
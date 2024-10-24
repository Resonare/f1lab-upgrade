import Section from "../../layout/Section";
import SectionTitle from "../SectionTitle";
import ContentCard from "../cards/ContentCard";
import BackgroundGrid from "../BackgroundGrid";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-f1-light h-full w-[100svw] -z-[9] absolute left-1/2 translate-x-[-50%]">
        <BackgroundGrid
          className="-z-[9] absolute left-1/2 translate-x-[-50%] h-full"
          customLinesColor="border-gray-250"
          hFull={false}
        />
      </div>

      <Section className="py-60">
        <div className="col-start-1 col-end-5 flex max-lg:flex-col gap-15 items-stretch">
          <div className="flex lg:flex-col gap-60 xl:basis-1/3 basis-1/2 justify-between">
            <SectionTitle className="md:pb-60">
              Передать задачи
              <br />
              <span className="text-f1-dark">
                по обслуживанию <br /> и модернизации IT инфраструктуры
              </span>
              <br />
              выгодно
            </SectionTitle>

            <img
              className="w-[160px]"
              src="/images/misc/dollar-icon.svg"
              alt=""
            />
          </div>

          <div className="flex items-stretch xl:basis-2/3 basis-1/2 [&>div>div]:h-full">
            <div className="flex flex-col basis-1/2 justify-between">
              <ContentCard className="bg-gray-400 rounded-[15px]">
                <div className="flex flex-col gap-15 text-gray-100">
                  <p className="text-[28px] font-extrabold font-expanded leading-loose">
                    6 месяцев
                  </p>
                  <p className="text-xl font-light font-text leading-relaxed">
                    До 6 месяцев может длиться поиск сотрудников
                  </p>
                  <div className="w-15">
                    <svg
                      width="25"
                      height="100%"
                      viewBox="0 0 30 296"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15H16ZM14.2929 281.707C14.6834 282.098 15.3166 282.098 15.7071 281.707L22.0711 275.343C22.4616 274.953 22.4616 274.319 22.0711 273.929C21.6805 273.538 21.0474 273.538 20.6569 273.929L15 279.586L9.34315 273.929C8.95262 273.538 8.31946 273.538 7.92893 273.929C7.53841 274.319 7.53841 274.953 7.92893 275.343L14.2929 281.707ZM14 15L14 281H16V15H14Z"
                        fill="#F1F1F1"
                      />
                    </svg>
                  </div>
                  <p className="text-[28px] font-extrabold font-expanded leading-loose">
                    1 день
                  </p>
                  <p className="text-xl font-light font-text leading-relaxed">
                    Мы закроем потребность в специалистах за один день
                  </p>
                </div>
              </ContentCard>
            </div>

            <div className="flex flex-col basis-1/2 gap-[3px] justify-between">
              <ContentCard className="bg-gray-400 rounded-[15px]">
                <div className="flex flex-col gap-15 text-gray-100">
                  <p className="text-[28px] font-extrabold font-expanded leading-loose">
                    ~ 80 000 ₽
                  </p>
                  <p className="text-xl font-light font-text leading-relaxed">
                    Средняя зарплата одного специалиста в месяц
                  </p>
                  <div className="w-15">
                    <svg
                      width="25"
                      height="100%"
                      viewBox="0 0 31 183"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 15C16.5 14.4477 16.0523 14 15.5 14C14.9477 14 14.5 14.4477 14.5 15H16.5ZM14.7929 168.707C15.1834 169.098 15.8166 169.098 16.2071 168.707L22.5711 162.343C22.9616 161.953 22.9616 161.319 22.5711 160.929C22.1805 160.538 21.5474 160.538 21.1569 160.929L15.5 166.586L9.84315 160.929C9.45262 160.538 8.81946 160.538 8.42893 160.929C8.03841 161.319 8.03841 161.953 8.42893 162.343L14.7929 168.707ZM14.5 15V168H16.5V15H14.5Z"
                        fill="#F1F1F1"
                      />
                    </svg>
                  </div>
                  <p className="text-xl font-light font-text leading-relaxed">
                    Мы предоставим штат сотрудников за сравнимую сумму на 2
                    месяца
                  </p>
                </div>
              </ContentCard>

              <ContentCard className="bg-gray-400 rounded-[15px]">
                <div className="flex flex-col gap-15 text-gray-100">
                  <p className="text-[28px] font-extrabold font-expanded leading-loose line-through">
                    НАЛОГИ
                  </p>
                  <p className="text-xl font-light font-text leading-relaxed">
                    Вы не платите налоги за внештатных сотрудников
                  </p>
                </div>
              </ContentCard>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;

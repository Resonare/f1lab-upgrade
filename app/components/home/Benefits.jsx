import Section from "../../layout/Section";
import SectionTitle from "../SectionTitle";
import CaseCard from "../cards/CaseCard";
import BackgroundGrid from "../BackgroundGrid";

const Hero = () => {
  return (
    <div>
      <div className="absolute h-[606px] w-full z-[-1] flex justify-end items-end">
        <BackgroundGrid
          inverseColor={true}
          customLinesColor="border-gray-250"
          customBgColor="bg-f1-light"
        />
      </div>

      <Section className="py-60">
        <div className="col-start-1 col-end-5 flex items-stretch [&>div>div]:h-full">
          <div className="flex flex-col justify-between basis-4/12">
            <SectionTitle className="md:pb-60">
              Передать задачи
              <br />
              <span className="text-gray-300">
                по обслуживанию и модернизации IT инфраструктуры
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

          <div className="flex flex-col basis-4/12 justify-between">
            <CaseCard
              className="border-l border-y border-gray-250"
              customBgColor="bg-f1-light"
              hoverDisabled={true}
            >
              <div className="flex flex-col gap-15">
                <p className="text-[28px] font-extrabold font-expanded leading-loose">
                  6 месяцев
                </p>
                <p className="text-xl font-light font-text leading-relaxed">
                  До 6 месяцев может длиться поиск сотрудников
                </p>
                <div className="w-15">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 30 295"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15H16ZM14.2929 280.707C14.6834 281.098 15.3166 281.098 15.7071 280.707L22.0711 274.343C22.4616 273.953 22.4616 273.319 22.0711 272.929C21.6805 272.538 21.0474 272.538 20.6569 272.929L15 278.586L9.34315 272.929C8.95262 272.538 8.31946 272.538 7.92893 272.929C7.53841 273.319 7.53841 273.953 7.92893 274.343L14.2929 280.707ZM14 15L14 280H16V15H14Z"
                      fill="#22282E"
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
            </CaseCard>
          </div>

          <div className="flex flex-col basis-4/12 justify-between">
            <CaseCard
              className="border-x border-t border-gray-250"
              customBgColor="bg-f1-light"
              hoverDisabled={true}
            >
              <div className="flex flex-col gap-15">
                <p className="text-[28px] font-extrabold font-expanded leading-loose">
                  ~ 80 000 ₽
                </p>
                <p className="text-xl font-light font-text leading-relaxed">
                  Средняя зарплата одного специалиста в месяц
                </p>
                <div className="w-15">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 30 183"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15H16ZM14.2929 168.707C14.6834 169.098 15.3166 169.098 15.7071 168.707L22.0711 162.343C22.4616 161.953 22.4616 161.319 22.0711 160.929C21.6805 160.538 21.0474 160.538 20.6569 160.929L15 166.586L9.34315 160.929C8.95262 160.538 8.31946 160.538 7.92893 160.929C7.53841 161.319 7.53841 161.953 7.92893 162.343L14.2929 168.707ZM14 15V168H16V15H14Z"
                      fill="#22282E"
                    />
                  </svg>
                </div>
                <p className="text-xl font-light font-text leading-relaxed">
                  Мы предоставим штат сотрудников за сравнимую сумму на 2 месяца
                </p>
              </div>
            </CaseCard>

            <CaseCard
              className="border border-gray-250"
              customBgColor="bg-f1-light"
              hoverDisabled={true}
            >
              <div className="flex flex-col gap-15">
                <p className="text-[28px] font-extrabold font-expanded leading-loose line-through">
                  НАЛОГИ
                </p>
                <p className="text-xl font-light font-text leading-relaxed">
                  Вы не платите налоги за внештатных сотрудников
                </p>
              </div>
            </CaseCard>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;

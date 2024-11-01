import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import PocketCard from "../cards/PocketCard";
import SectionTitle from "../SectionTitle";
import Tag from "../misc/Tag";
import PocketColumn from "../misc/PocketColumn";

const Pockets = () => {
  const { showCallMeBackModal } = useModalStore();
  const firstPocketTags = [
    <Tag key={0} className="bg-f1-light">
      IT-Аудит
    </Tag>,
    <Tag key={1} className="">
      Техподдержка
    </Tag>,
  ];

  return (
    <Section id="">
      <SectionTitle
        row="row-start-1"
        col="col-start-1 max-lg:col-end-5"
        className="md:pb-60 max-sm:pb-30"
      >
        Решения под ключ с пакетами услуг
      </SectionTitle>

      <PocketCard
        row="lg:row-start-1 row-start-2"
        col="lg:col-start-2 col-start-1 col-end-5"
        subTitle="IT-Аудит и Поддержка"
        whenTitle="Когда нужно понять что не так с IT-инфраструктурой и исправить это"
        name="Рефлексия и рост"
        description="Предназначен для компаний, которые хотят оценить текущее состояние своей IT-инфраструктуры, выявить уязвимости и получить рекомендации по улучшению. Включает базовую поддержку для обеспечения стабильной работы IT-систем."
        price="7 200 ₽"
        tags={firstPocketTags}
        onCallMeBackModalOpen={showCallMeBackModal}
      >
        <PocketColumn title="Разъясним">
          Неясность состояния IT-инфраструктуры
        </PocketColumn>
        <PocketColumn title="Выявим">
          Наличие скрытых уязвимостей и рисков
        </PocketColumn>
        <PocketColumn title="Решим">
          Проблемы с надежностью и производительностью IT-систем
        </PocketColumn>
        <PocketColumn title="Уменьшим">
          Высокие затраты на неэффективное обслуживание
        </PocketColumn>
      </PocketCard>

      <div className="h-120 lg:row-start-2 row-start-3 col-start-1 col-end-5"></div>

      <PocketCard
        row="lg:row-start-3 row-start-4"
        col="col-start-1 lg:col-end-4 col-end-5"
        subTitle="Миграция в облако"
        whenTitle="Когда нужна высокая производительность, простая масштабируемость и безопасность"
        name="Облачная Инфраструктура и Безопасность"
        namesArray={["Облачная", "инфраструктура", "и безопасность"]}
        description="Подходит для компаний, планирующих миграцию в облако и нуждающихся в комплексной защите данных. Включает услуги по развертыванию и мониторингу облачной инфраструктуры, а также меры по защите от киберугроз."
        price="7 200 ₽"
        tags={firstPocketTags}
        onCallMeBackModalOpen={showCallMeBackModal}
      >
        <PocketColumn title="Решим">
          Все сложности миграции данных в облако
        </PocketColumn>
        <PocketColumn title="Обеспечим">
          Безопасность и контроль над данными в облаке
        </PocketColumn>
        <PocketColumn title="Возьмем на себя">
          Мониторинг и управление облачной инфраструктурой
        </PocketColumn>
      </PocketCard>
    </Section>
  );
};

export default Pockets;

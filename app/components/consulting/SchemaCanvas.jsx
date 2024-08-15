import Icon from "../schemaConnectionBlocks/Icon";
import RightLeft from "../schemaConnectionBlocks/RightLeft";
import Empty from "../schemaConnectionBlocks/Empty";
import TopBottom from "../schemaConnectionBlocks/TopBottom";
import RightBottom from "../schemaConnectionBlocks/RightBottom";
import LeftRightBottom from "../schemaConnectionBlocks/LeftRightBottom";
import TopRight from "../schemaConnectionBlocks/TopRight";
import TopRightLeft from "../schemaConnectionBlocks/TopRightLeft";
import BottomRightLeft from "../schemaConnectionBlocks/BottomRightLeft";
import BottomLeft from "../schemaConnectionBlocks/BottomLeft";
import TopBottomLeft from "../schemaConnectionBlocks/TopBottomLeft";

const SchemaCanvas = () => {
  return (
    <div className="grid grid-rows-9 grid-cols-9 p-10 h-full">
      {/* ROW-1 */}
      <Icon name="internet-server-network" />
      <RightLeft />
      <RightLeft />
      <Icon name="firewall" />
      <Empty />
      <RightBottom fix />
      <RightLeft />
      <RightLeft />
      <Icon name="active-directory" />
      {/* ROW-2 */}
      <Empty />
      <Empty />
      <Empty />
      <TopBottom />
      <Empty />
      <TopBottom />
      <Empty /> <Empty /> <Empty />
      {/* ROW-3 */}
      <Icon name="wi-fi" />
      <RightLeft />
      <RightLeft />
      <Icon name="network-equipment" />
      <RightLeft />
      <Icon name="database-server" />
      <LeftRightBottom fix />
      <Icon name="local-backup-storage" />
      <Empty />
      {/* ROW-4 */}
      <TopRight fix />
      <BottomRightLeft />
      <RightLeft fix />
      <TopRightLeft fix />
      <BottomLeft />
      <TopBottom />
      <TopBottom fix />
      <Empty /> <Empty />
      {/* ROW-5 */}
      <Empty />
      <Icon name="antivirus" />
      <Empty /> <Empty />
      <Icon name="infrastructure-monitoring" />
      <TopBottomLeft fix />
      <TopBottom fix />
      <Empty /> <Empty />
      {/* ROW-6 */}
      <RightBottom fix />
      <TopRightLeft />
      <RightLeft />
      <BottomLeft fix />
      <Empty />
      <TopBottom />
      <TopRight />
      <Icon name="1c" />
      <Empty />
      {/* ROW-7 */}
      <TopBottom fix />
      <Empty /> <Empty />
      <TopBottom fix />
      <Empty />
      <TopBottom />
      <Empty /> <Empty /> <Empty />
      {/* ROW-8 */}
      <TopBottom fix />
      <Empty /> <Empty />
      <Icon name="desktop" />
      <Empty />
      <TopBottom />
      <Empty /> <Empty /> <Empty />
      {/* ROW-9 */}
      <Icon name="laptop" />
      <Empty /> <Empty /> <Empty /> <Empty />
      <TopRight fix />
      <RightLeft />
      <RightLeft />
      <Icon name="databases" />
    </div>
  );
};

export default SchemaCanvas;

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
    <div className="grid grid-rows-8 grid-cols-9 p-5">
      {/* ROW-1 */}
      <Icon name="internet-server-network" />
      <RightLeft colSpan="col-span-2" />
      <Icon name="firewall" />
      <Empty />
      <RightBottom />
      <RightLeft down colSpan="col-span-2" />
      <Icon name="active-directory" />
      {/* ROW-2 */}
      <Empty colSpan="col-span-3" />
      <TopBottom />
      <Empty />
      <TopBottom right />
      <Empty colSpan="col-span-3" />
      {/* ROW-3 */}
      <Icon name="wi-fi" />
      <RightLeft down colSpan="col-span-2" />
      <Icon name="network-equipment" />
      <RightLeft />
      <Icon name="database-server" />
      <LeftRightBottom />
      <Icon name="local-backup-storage" />
      <Empty />
      {/* ROW-4 */}
      <TopRight />
      <BottomRightLeft fix />
      <RightLeft />
      <TopRightLeft fixRight />
      <BottomLeft />
      <TopBottom right />
      <TopBottom />
      <Empty colSpan="col-span-2" />
      {/* ROW-5 */}
      <Empty />
      <Icon name="antivirus" />
      <Empty /> <Empty />
      <Icon name="infrastructure-monitoring" />
      <TopBottomLeft />
      <TopBottom />
      <Empty colSpan="col-span-2" />
      {/* ROW-6 */}
      <RightBottom fix />
      <TopRightLeft />
      <RightLeft />
      <BottomLeft fix />
      <Empty />
      <TopBottom right />
      <TopRight fix />
      <Icon name="1c" />
      <Empty />
      {/* ROW-7 */}
      <TopBottom />
      <Empty colSpan="col-span-2" />
      <Icon name="desktop" />
      <Empty />
      <TopBottom right />
      <Empty colSpan="col-span-3" />
      {/* ROW-8 */}
      <Icon name="laptop" />
      <Empty colSpan="col-span-4" />
      <TopRight />
      <RightLeft colSpan="col-span-2" />
      <Icon name="databases" />
    </div>
  );
};

export default SchemaCanvas;

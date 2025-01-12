import { GetBendy } from "./reusableComponents/GetBendy";
import { GetStrong } from "./reusableComponents/GetStrong";
import { CircleGetVertical } from "./reusableComponents/CircleGetVertical";

export const MiddleSectionGet = () => {
  return (
    <div className="flex flex-col items-center">
      <GetStrong />
      <GetBendy />
      <CircleGetVertical />
    </div>
  );
};

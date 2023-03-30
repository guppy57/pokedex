import IData from "./IData";

type IResponse = {
  statusCode: number;
  message: string;
  data?: IData;
};

export default IResponse;
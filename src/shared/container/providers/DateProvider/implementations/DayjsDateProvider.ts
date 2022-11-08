import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
    dateNow(): Date {
        return dayjs().toDate();
    }
}

export { DayjsDateProvider };